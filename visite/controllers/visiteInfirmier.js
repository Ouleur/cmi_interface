var visite;
// Liste des visitse annuelle
function afficherInfVisiteAnnuelle(){
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/annuelle/1",
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
}

// Modification d'une visite annuelle
function modifierInfVisiteAnnuelle(){
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


  $(".infrimier_visite_save").click(function(){
    var tension = $("#ambauche_add").find("input[name='bras_g']").val()+"/"+$("#ambauche_add").find("input[name='bras_d']").val();
    var poids = $("#ambauche_add").find("input[name='poids']").val();
    var taille = $("#ambauche_add").find("input[name='taille']").val();
    var pouls = $("#ambauche_add").find("input[name='pouls']").val();
    var temperature = $("#ambauche_add").find("input[name='temperature']").val();
    var ophtamologie = $("#ambauche_add").find("input[name='oeuil_g']").val()+"/"+$("#ambauche_add").find("input[name='oeuil_d']").val();
  
    var url = "/patient/"+visiteur.patient.id+"/infirm/"+visiteur.infirmier.id+"/medecin/"+visiteur.medecin.id+"/etape/"+2+"/visites/"+visiteur.id+"/InfPart/modifier";
    url += "?vstTension="+tension+"&";
    url += "vstPoids="+poids+"&";
    url += "vstTaille="+taille+"&";
    url += "vstTemperature="+temperature+"&";
    url += "vstPouls="+pouls+"&";
    url += "vstOphtamologie="+ophtamologie;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+url,
      "method": "PATCH",
      type:'POST',
      data:{
        "vstTension":tension,
        "vstPoids":poids,
        "vstTaille":taille,
        "vstTemperature":temperature,
        "vstPouls":pouls,
        "vstOphtamologie":ophtamologie
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

// Liste des visitse d'ambauche
function afficherInfVisiteAmbauche(){
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/ambauche/1",
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
function modifierInfVisiteAmbaucheAdd(){
	$("body").on("click",".edit-item",function(){
    alert("test");
    visite_id = $(this).parent("td").data('id').split(":")[1];
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


  $(".infrimier_visite_save").click(function(){
    var tension = $("#ambauche_add").find("input[name='bras_g']").val()+"/"+$("#ambauche_add").find("input[name='bras_d']").val();
    var poids = $("#ambauche_add").find("input[name='poids']").val();
    var taille = $("#ambauche_add").find("input[name='taille']").val();
    var pouls = $("#ambauche_add").find("input[name='pouls']").val();
    var temperature = $("#ambauche_add").find("input[name='temperature']").val();
    var ophtamologie = $("#ambauche_add").find("input[name='oeuil_g']").val()+"/"+$("#ambauche_add").find("input[name='oeuil_d']").val();
  
    var url = "/patient/"+visiteur.patient.id+"/infirm/"+visiteur.infirmier.id+"/medecin/"+visiteur.medecin.id+"/etape/"+2+"/visites/"+visiteur.id+"/InfPart/modifier";
    url += "?vstTension="+tension+"&";
    url += "vstPoids="+poids+"&";
    url += "vstTaille="+taille+"&";
    url += "vstTemperature="+temperature+"&";
    url += "vstPouls="+pouls+"&";
    url += "vstOphtamologie="+ophtamologie;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+url,
      "method": "PATCH",
      type:'POST',
      data:{
        "vstTension":tension,
        "vstPoids":poids,
        "vstTaille":taille,
        "vstTemperature":temperature,
        "vstPouls":pouls,
        "vstOphtamologie":ophtamologie
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






var page = window.location.search.substring(1).split('&')[0].split('page=')[1];


  switch(page){
    case "annuelleInf":
      afficherInfVisiteAnnuelle();
      modifierInfVisiteAnnuelle();
    break;

    case "ambaucheInf":
      afficherInfVisiteAmbauche();
      modifierInfVisiteAmbaucheAdd();
    break;
  }