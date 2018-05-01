

  function pharmacien(){

    var consultation;
    var medicaments_row;
    var init = function(){
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": config["base_url"]+"/consultations/etape/3/rechercher",
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
      consultation = response;
      if (response.length>0) {
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {

          if (response[i].ordonnances.length>0) {
            rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
              rows += '<div class="card m-b-20">';
                rows += '<div class="card-block">';
                  rows += '<div class="media">';
                    rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
                    rows += '<div class="media-body">';
                      rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
                      rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'</p>';
                      rows += '<p>'+response[i].patient.pat_contact+'</p>';
                      rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
                    rows += '</div>';
                  rows += '</div>';
                  rows += '<div class="row text-center m-t-20">';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_temperature+' °C</h5>';
                      rows += ' <p class="text-muted font-14">Température</p>';
                    rows += '</div>';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_temsion_alt+'</h5>';
                      rows += '<p class="text-muted font-14">Tension</p>';
                    rows += '</div>';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_poids+' Kg</h5>';
                      rows += '<p class="text-muted font-14">Poids</p>';
                    rows += '</div>';
                  rows += '</div>';
                rows += '</div>';
              rows += '</div>';     
            rows += '</div>';     
          }
        }

        $(".row-in").html(rows);
      }
      
    });
  }

  init();

  var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
      "method": "GET",
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
        var rows = "<option value='non'></option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });


  // Click sur un patient

   $(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();

    var id = $(this).data('id').split(":");
    patient_cons = consultation[id[1]];


    var rows = "<p><strong>Matricule:</strong> "+patient_cons.patient.pat_matricule+"</p>";
    rows += "<p><strong>Nom:</strong> "+patient_cons.patient.pat_prenoms+"</p>";
    rows += "<p><strong>Prénoms:</strong> "+patient_cons.patient.pat_nom+"</p>";
    date = patient_cons.patient.pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
    now = new Date();
    age = now.getFullYear() - eval(date);
     if (age>1) {
      age = age+" ans";
    }else
    {
      age = age+" an";
    }
    rows += "<p><strong>Age:</strong> "+age+"</p>";
    rows += "<p><strong>Groupe Sanguin:</strong> "+patient_cons.patient.pat_grp_sanguin+"</p>";
    rows += "<input type='text' class='cons_id' value='"+patient_cons.id+"' hidden>";

    $(".patient_info").html(rows);

    $('.ordonnances-tb tbody').html("");

    for (var i = 0; i < patient_cons.ordonnances.length; i++) {

      ligne = "";
      ligne +='<tr data-id="'+patient_cons.ordonnances[i].id+'"> ';
      //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
      ligne +='<td data-id="'+patient_cons.ordonnances[i].medicament.id+'">'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
      ligne +='<td> <label class="custom-control custom-checkbox">';
      if (patient_cons.ordonnances[i].ordo_servir) {

        ligne +='<input type="checkbox" class="custom-control-input servir" checked="checked">';
      }else{
        ligne +='<input type="checkbox" class="custom-control-input servir" >';

      }
      ligne +='<span class="custom-control-indicator"></span></label></td>';
      
      ligne +='<td> <select class="custom-select medi-ordo-custom">'+medicament_rows+'</select></td>';
      ligne +='<td> <textarea style="width:80%;height: 37px;"> </textarea></td>';

      ligne +='</tr>';

      $('.ordonnances-tb').append(ligne);

      
    }
    // for (var i = 0; i < patient_cons.ordonnances.length; i++) {
    //     // alert(patient_cons.ordonnances[i].ordo_servir)
    //     if (patient_cons.ordonnances[i].ordo_servir) {
    //       $(".ordonnances-tb tbody").find("tr").eq(i).find("td").eq(4).find("input").prop("checked", true);
    //     }
    //   }

  });

   $(".pharm_save").click(function (){
      $(".ordonnances-tb tbody tr").each(function(){
        var ordo_id = $(this).data().id;
        var medoc_id = $(this).find("td").eq(0).data().id;
        var remplacement = $(this).find("td").eq(5).find("select").find(":selected").val();
        var motif = $(this).find("td").eq(6).find("textarea").val();
        var etat = $(this).find("td").eq(4).find("input").is(":checked");

        if (etat) {
          etat = 1;
        }else{
          etat = 0;
        }



        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/medicamentremp/"+remplacement+"/ordonnances/modifier/"+ordo_id+"?"+"ordo_motif_remplacement="+motif+"&ordo_servir="+etat,
          "method": "PUT",
          data: { "ordo_motif_remplacement":motif,"ordo_servir":etat },
          
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
           var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/etape/"+4,
          "method": "PATCH",
          data: { },
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
          
          window.location = config["ui_url"]+'?page=Pharmacien';
        });
          
        });


      });

   });
}


pharmacien();