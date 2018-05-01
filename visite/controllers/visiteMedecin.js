var visite;




  function actionModif(element){
  visite_id = element.split(":")[1];
    visiteur = visite[visite_id];

    rows = "<input id='patient_id' name='id' type='text' hidden='true' value='"+visiteur.id+"'>";
    rows += "<input id='etape' name='id' type='text' hidden='true' value='1'>";
    rows += "<p><strong>Matricule : </strong>"+visiteur.patient.pat_matricule+"</p>";
    rows += "<p><strong>Nom : </strong>"+visiteur.patient.pat_nom+"</p>";
    rows += "<p><strong>Prénoms : </strong>"+visiteur.patient.pat_prenoms+"</p>";

    date = visiteur.patient.pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
    now = new Date();
    age = now.getFullYear() - eval(date);
    if (age>1) {
      age = age+" ans";
    }else
    {
      age = age+" an";
    }
    rows += "<p><strong>Age : </strong>"+age+"</p>";
    rows += "<p><strong>Groupe Sanguin : </strong>"+visiteur.patient.pat_grp_sanguin+"</p>";
    $(".patient-info").html(rows);
  


  for (var i = 0; i < visiteur.resultat_examens.length; i++) {
    ligne = "";
        ligne +='<tr data-id="'+i+'"> ';
        //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
        ligne +='<td>'+visiteur.resultat_examens[i].examen.exam_libelle+'</td>';
        ligne +='<td> <label class="custom-control custom-checkbox">';
        if (visiteur.resultat_examens[i].res_etat) {

          ligne +='<input type="checkbox" class="custom-control-input fait" checked="checked" disabled="disabled">';
        }else{
          ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled">';

        }
        ligne +='<span class="custom-control-indicator"></span></label></td>';
        // date = visiteur.resultat_examens[i].res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
        // ligne +='<td>'+date+'</td>';
        
        if (typeof visiteur.resultat_examens[i].res_date_fait != "undefined") {
          date = visiteur.resultat_examens[i].res_date_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
          ligne +='<td>'+date+'</td>';          
        }else {
          ligne +='<td></td>';
        }

        if(typeof visiteur.resultat_examens[i].res_observation != "undefined"){
          ligne +='<td>'+visiteur.resultat_examens[i].res_observation+'</td>';
        }else{
          ligne +='<td></td>';
        }

        ligne +='<td>'+visiteur.resultat_examens[i].res_commentaire+'</td>';
        ligne +='<td data-id="'+visiteur.resultat_examens[i].id+'"> <i class="mdi mdi-pencil res-exam-modif" data-toggle="modal" data-target=".bs-examen-modal-lg"></i> </td>';

        ligne +='</tr>';
        $(".examens-resl-tb").append(ligne);
      }
 



  $(".res-exam-modif").click(function(){
        // alert(eval($(this).parent('td').parent('tr').data('id')));
        $(".data_id").val($(this).parent('td').parent('tr').data('id'));
        var result = visiteur.resultat_examens[eval($(this).parent('td').parent('tr').data('id'))];

        $(".examen_nom").html(result.examen.exam_libelle);
        if (result.res_etat) {
          $("#etatExam").bootstrapToggle('on');
        }else{
          $("#etatExam").bootstrapToggle('off');
        }

        $(".examen_date_prescrit").html(result.res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1'));
        
        if(typeof result.res_date_fait!="undefined"){
          $(".examen_date_fait").val(result.res_date_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3'));
        }else {
          $(".examen_date_fait").val("");
        }
        
        if(typeof result.res_observation!="undefined"){
          $(".examen_resultat").html(result.res_observation);
        }else{
          $(".examen_resultat").html("");
        }

        $(".examen_comentaire").val(result.res_commentaire);

      });

      $(".modif_exam_submit").click(function(){
        var id = $(".data_id").val();
        var date = $(".examen_date_fait").val();
        var resultat = $(".examen_resultat").val();
        var comment = $(".examen_comentaire").val();
        var etat = 0;
        if ($("#etatExam").is(":checked")){
          etat  = 1;
        }else {
          etat = 0;
        }

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+visiteur.id+"/examen/"+visiteur.resultat_examens[id].examen.id+"/resultat_examens/"+visiteur.resultat_examens[id].id+"?resEtat="+etat+"&resObservation="+resultat+"&resCommentaire="+comment+"&resDateFait="+date,
          "method":"Patch",
          data:{
            "resEtat":etat,
            "resObservation":resultat,
            "resCommentaire":comment,
            "resDateFait":date
          },
          headers: {
          "x-auth-token": config["auth_token"],
        },
          success : function(code_html, statut){
          //alert(code_html[0].proff_libelle);
          },
          error : function(resultat, statut, erreur){
          },
          complete : function(resultat, statut){
          } 
        }

        $.ajax(settings).done(function (response) {              
        });
      });
}

// Liste des visitse annuelle
function affichierVisiteMedecinAnnuelle(){
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/annuelle/2",
      "method": "GET",
      type:'POST',
      headers: {
        "x-auth-token": config["auth_token"],
      },
      success : function(code_html, statut){
        //alert(code_html[0].proff_libelle);
      },
      error : function(resultat, statut, erreur){
      },
      complete : function(resultat, statut){
      } 
    }
	$.ajax(settings).done(function (response) {

     if (response.length>0) {
      var rows ='' ;
        visite = response;
      $('.inf_badge').html(response.length);

        for (var i = 0; i < response.length; i++) {
          rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-target=".bs-example-modal-lg" data-id="'+response[i].id+':'+i+'" >';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block ">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'" | '+response[i].patient.pat_contact+'</p>';
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div class="row text-center m-t-20">';
          
          rows += '</div>';
          rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".row-in").html(rows);


      }
	});

  $(".row-in").on('click',".avatar-patient", function(){
    visite_id = $(this).data("id").split(":")[1];
    visiteur = visite[visite_id];

    rows = "<input id='patient_id' name='id' type='text' hidden='true' value='"+visiteur.id+"'>";
    rows += "<input id='etape' name='id' type='text' hidden='true' value='1'>";
    rows += "<p><strong>Matricule : </strong>"+visiteur.patient.pat_matricule+"</p>";
    rows += "<p><strong>Nom : </strong>"+visiteur.patient.pat_nom+"</p>";
    rows += "<p><strong>Prénoms : </strong>"+visiteur.patient.pat_prenoms+"</p>";

    date = visiteur.patient.pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
    now = new Date();
    age = now.getFullYear() - eval(date);
    if (age>1) {
      age = age+" ans";
    }else
    {
      age = age+" an";
    }
    rows += "<p><strong>Age : </strong>"+age+"</p>";
    rows += "<p><strong>Groupe Sanguin : </strong>"+visiteur.patient.pat_grp_sanguin+"</p>";
    $(".patient-info").html(rows);
  });
}
// Modification d'une visite annuelle
function modifierVisiteMedecinAnnuelle(){

  $(".row-in").on('click',".avatar-patient", function(){
    actionModif($(this).data("id"));
 });

  

}


// Liste des visitse d'ambauche
function affichierVisiteMedecinAmbauche(){
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/ambauche/2",
      "method": "GET",
      type:'POST',
      headers: {
        "x-auth-token": config["auth_token"],
      },
      success : function(code_html, statut){
        //alert(code_html[0].proff_libelle);
      },
      error : function(resultat, statut, erreur){
      },
      complete : function(resultat, statut){
      } 
    }
  $.ajax(settings).done(function (response) {
    visite = response;
      //alert(response);
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].patient.pat_nom+"</td>";
          rows = rows +"<td>"+response[i].patient.pat_prenoms+"</td>";
          // alert(response[i].arrets[0].arret_debut);
            dateNaiss = response[i].patient.pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');
            
            rows = rows +"<td>"+dateNaiss+"</td>";

            dateRdv = response[i].vst_date_rdv.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');
            rows = rows +"<td>"+dateRdv+"</td>";

            heureRdv = response[i].vst_heure_rdv.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$5:$6:$7');
            rows = rows +"<td>"+heureRdv+"</td>";
    
          rows = rows +"<td>"+response[i].infirmier.prat_prenoms+" "+response[i].infirmier.prat_nom+"</td>";
          rows = rows +"<td>"+response[i].medecin.prat_prenoms+" "+response[i].medecin.prat_nom+"</td>";
          rows = rows +"<td>"+response[i].patient.pat_contact+"</td>";
          rows = rows +'<td data-id="'+response[i].id+':'+i+'">';
          rows = rows +'<i id="remove-item" class="ion-trash-a"></i>';
          rows = rows +' | <i data-toggle="modal" data-target=".bs-example-modal-lg" class="edit-item ion-edit"></i></td>';
          rows = rows +"</tr>";         
        }

        $(".table_visite_liste tbody").html(rows);
      }
  });
}

// Modification d'une visite d'ambauche
function modifierVisiteMedecinAmbauche(){
	$("body").on("click",".edit-item",function(){
    actionModif($(this).parent("td").data("id"));
 });
}

var page = window.location.search.substring(1).split('&')[0].split('page=')[1];


  switch(page){
    case "annuelleMed":
      affichierVisiteMedecinAnnuelle();
      modifierVisiteMedecinAnnuelle();
    break;

    case "ambaucheMed":
      affichierVisiteMedecinAmbauche();
      modifierVisiteMedecinAmbauche();
    break;
  }