$(document).ready(function() {


  $(".type-visite-select").select2({
    dropdownParent: $("#myModal")
  });

  $(".type-visite-select").select2({
    dropdownParent: $("#myModal")
  });



// Liste des visitse annuelle
function afficherVisiteAnnuelle(){

	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/annuelle",
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
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<i id="remove-item" class="ion-trash-a"></i>';
          rows = rows +' | <i data-toggle="modal" data-target=".edit-modal-lg" class="edit-item ion-edit"></i></td>';
          rows = rows +"</tr>";         
        }

        $(".table_visite_liste tbody").html(rows);
      }
  });

}


// Modification d'une visite annuelle
function modifierVisiteAnnuelle(){
	
}


// Ajout d'une visite annuelle
function ajouterVisiteAnnuelle(){

   var optionsMtle = {

    url: function(phrase) {
      return config["base_url"]+"/patientsSearchMtle";
    },

    getValue: function(element) {
      return element.pat_nom+" - "+element.pat_matricule;
    },

    ajaxSettings: {
      async: true,
      crossDomain: true,
      dataType: "json",
      method: "GET",
      data: {
        dataType: "json"
      },
      headers: {
        "x-auth-token": config["auth_token"],
      }
    },

    preparePostData: function(data) {
      data.phrase = $("#template-custom").val();
      return data;
    },

    requestDelay: 400
  };

  $("#template-custom").easyAutocomplete(optionsMtle);

  // Recherche du patient

  $(".patient-search").click(function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/patients/matricule/"+$('#template-custom').val().split(' - ')[1],
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
      data_profess = response;
      if (response.length>0) {
        var rows = "";
        rows += "<input id='patient_id' name='id' type='text' hidden='true' value='"+response[0].id+"'>";
        rows += "<input id='etape' name='id' type='text' hidden='true' value='1'>";
        rows += "<p><strong>Matricule : </strong>"+response[0].pat_matricule+"</p>";
        rows += "<p><strong>Nom : </strong>"+response[0].pat_nom+"</p>";
        rows += "<p><strong>Prénoms : </strong>"+response[0].pat_prenoms+"</p>";

        date = response[0].pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
        now = new Date();
        age = now.getFullYear() - eval(date);
        if (age>1) {
          age = age+" ans";
        }else
        {
          age = age+" an";
        }
        rows += "<p><strong>Age : </strong>"+age+"</p>";
        rows += "<p><strong>Groupe Sanguin : </strong>"+response[0].pat_grp_sanguin+"</p>";
        $("#patient-info").html(rows);

        $("#consul-contain").show();
      }
      
    });
  });



  $(".exam-visite-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/examens/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

    $(".medecin-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/praticien/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

    $(".infirmier-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/praticien/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

  i =0;
  $(".btn-add-exeam-ann-visit").click(function(){

    $(".exam_visite_ann_tb").append(
      "<tr data-id='"+$(".exam-visite-select").find(":selected").val()+"'><td></td><td>"+$(".exam-visite-select").find(":selected").html()+"</td><td><i class='mdi mdi-delete exam-delete'></i></tr>"
      );
  });

  $(".exam_visite_tb").on('click','.exam-delete',function(){
    $(this).parent().parent().remove();
  });

  /*Enregistrment du Patient Autre*/
  $(".add_ann_submit").click(function(){

    var motif =$(".motif-visite-select").find(":selected").val();
    var infirmier = $(".infirmier-select").find(":selected").val();
    var medecin = $(".medecin-select").find(":selected").val();
    var daterdv = $("#ambauche_add").find("input[name='daterdv']").val();
    // var photo = $("#ambauche_add").find("input[name='photo']").val();
    var heurerdv = $("#ambauche_add").find("input[name='heurerdv']").val();
    var date_naiss = $("#ambauche_add").find("input[name='date_naiss']").val();
    var examens = [];
    $(".exam_visite_ann_tb tbody tr").each(function(){
      examens.push($(this).data('id'));
    });


      // insertion de la visite
                
    var url = "/patient/"+$("#patient_id").val()+"/infirm/"+infirmier+"/medecin/"+medecin+"/etape/"+1+"/visites/creer";
    url += "?vstMotif="+motif+"&";
    url += "vstDateRdv="+daterdv+"&";
    url += "vstHeureRdv="+heurerdv+"&";
    url += "vstType="+motif;
     var settingsVisite = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+url,
      "method": "POST",
      data:{
        "vstMotif":motif,
        "vstDateRdv":daterdv,
        "vstHeureRdv":heurerdv,
        "vstType":motif
      },
      headers: {
        "x-auth-token": config["auth_token"],
      },
      success : function(code_html, statut){
            //alert(code_html[0].proff_libelle);
            alertify.success('Enregistrement terminé');
          },
          error : function(resultat, statut, erreur){
          },
          complete : function(resultat, statut){
            // Insertion resultat Examens
          for (var i = 0; i < examens.length; i++) {
            

              var settings = {
                "async": true,
                "crossDomain": true,
                "url": config["base_url"]+"/visite/"+resultat.responseJSON.id+"/examen/"+examens[i]+"/resultat_examens/creer",
                "method": "POST",
                data:{
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
                afficherVisiteAmbauche();
              } 
            }

            $.ajax(settings).done(function (response) {
              
            });
          }
          }
    }
    $.ajax(settingsVisite).done(function(data){
    //  alertify.success('Enregistrement terminé');

    });
  });
	
}

// Liste des visitse d'ambauche
function afficherVisiteAmbauche(){

	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/visites/afficher/ambauche",
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
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<i id="remove-item" class="ion-trash-a"></i>';
          rows = rows +' | <i data-toggle="modal" data-target=".edit-modal-lg" class="edit-item ion-edit"></i></td>';
          rows = rows +"</tr>";         
        }

        $(".table_visite_liste tbody").html(rows);
      }
	});
}

// Modification d'une visite d'ambauche
function modifierVisiteAmbauche(){

    /* Updated new Item */
$(".edit_submit").click(function(e){

  var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();
  var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
  var id = $(".edit-modal-lg").find(".edit-id").val();
  var fam_id = $('.custom-select').find(":selected").val();

  if(e_code != '' && e_libelle != ''){
    $.ajax({
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/famille_pathologie/"+fam_id+"/pathologie/modifier/"+id+"?"+"patho_code="+e_code+"&patho_libelle="+e_libelle,
      "method": "PUT",
      data:{"patho_code":e_code, "patho_libelle":e_libelle},
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
          }).done(function(data){

            init(); 
            alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});
          });
        }else{
          alert('Vous avez oublié le code or libelle.');
        }

      });

}

// Ajout d'une visite d'ambauche
function ajouterVisiteAmbauche(){
    
    $(".exam-visite-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/examens/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

    $(".medecin-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/praticien/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

    $(".infirmier-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#myModal"),
      ajax: {
        "async": true,
        "crossDomain": true,
        url: config["base_url"]+'/praticien/selection',
        dataType: 'json',
        headers: {
          "x-auth-token": config["auth_token"],
        },
        delay: 250,
        processResults: function (data) {
          return {
            results: data
          };
        },
        cache: true
      }
    });

  i =0;
  $(".btn-add-exeam-visit").click(function(){

    $(".exam_visite_tb").append(
      "<tr data-id='"+$(".exam-visite-select").find(":selected").val()+"'><td></td><td>"+$(".exam-visite-select").find(":selected").html()+"</td><td><i class='mdi mdi-delete exam-delete'></i></tr>"
      );
  });

  $(".exam_visite_tb").on('click','.exam-delete',function(){
    $(this).parent().parent().remove();
  });

  /*Enregistrment du Patient Autre*/
    $(".add_submit").click(function(){

      var motif =$(".motif-visite-select").find(":selected").val();
      var entreprise = $("#ambauche_add").find("input[name='entVisite']").val();
      var infirmier = $(".infirmier-select").find(":selected").val();
      var medecin = $(".medecin-select").find(":selected").val();
      var daterdv = $("#ambauche_add").find("input[name='daterdv']").val();
      // var photo = $("#ambauche_add").find("input[name='photo']").val();
      var heurerdv = $("#ambauche_add").find("input[name='heurerdv']").val();
      var date_naiss = $("#ambauche_add").find("input[name='date_naiss']").val();
      var examens = [];
      $(".exam_visite_tb tbody tr").each(function(){
        examens.push($(this).data('id'));
      });

      var nom = $("#ambauche_add").find("input[name='nom']").val();
      var prenom = $("#ambauche_add").find("input[name='prenoms']").val();
      var mail = $("#ambauche_add").find("input[name='mail']").val();
      var contact = $("#ambauche_add").find("input[name='contact']").val();
      var lieu_naiss = $("#ambauche_add").find("input[name='lieu_naiss']").val();
      // var photo = $("#ambauche_add").find("input[name='photo']").val();
      var photo = "test de photo";
      var date_naiss = $("#ambauche_add").find("input[name='date_naiss']").val();
      var sexe = $('.sexe-select').find(":selected").val();
      var sit_mat = $(".sit_mat-select").find(":selected").val();


      var url = "/type_patient/"+3+"/patient/creer?";

      url += "patNom="+nom+"&";
      url += "patPrenoms="+prenom+"&";
      url += "patDateNaiss="+date_naiss+"&";
      url += "patLieuNaiss="+lieu_naiss+"&";
      url += "patContact="+contact+"&";
      url += "patSitMat="+sit_mat+"&";
      url += "patEmail="+mail+"&";
      url += "patSexe="+sexe;
      url += "vstType="+motif;


      // alert(url);
     

      var settings = {
        "async": true,
        dataType: 'json',
        "crossDomain": true,
        "url": config["base_url"]+""+url,
        "method": "POST",
        data:{
          "patNom":nom,
          "patPrenoms":prenom,
          "patDateNaiss":date_naiss,
          "patLieuNaiss":lieu_naiss,
          // "patCivilite":civil,
          "patContact":contact,
          "patSitMat":sit_mat,
          "patEmail":mail,
          "patSexe":sexe,
          "vstType":motif

        },
        headers: {
          "x-auth-token": config["auth_token"],
        },
        success : function(code_html, statut){
              //alert(code_html[0].proff_libelle);

              alertify.success('Enregistrement terminé');
            },
            error : function(resultat, statut, erreur){
            },
            complete : function(resultat, statut){

              // insertion de la visite
                
                var url = "/patient/"+resultat.responseJSON.id+"/infirm/"+infirmier+"/medecin/"+medecin+"/etape/"+1+"/visites/creer";
                url += "?vstMotif="+motif+"&";
                url += "vstDateRdv="+daterdv+"&";
                url += "vstHeureRdv="+heurerdv;
                 var settingsVisite = {
                  "async": true,
                  dataType: 'json',
                  "crossDomain": true,
                  "url": config["base_url"]+url,
                  "method": "POST",
                  data:{
                    "vstMotif":motif,
                    "vstDateRdv":daterdv,
                    "vstHeureRdv":heurerdv
                  },
                  headers: {
                    "x-auth-token": config["auth_token"],
                  },
                  success : function(code_html, statut){
                        //alert(code_html[0].proff_libelle);
                        alertify.success('Enregistrement terminé');
                      },
                      error : function(resultat, statut, erreur){
                      },
                      complete : function(resultat, statut){
                        // Insertion resultat Examens
                      for (var i = 0; i < examens.length; i++) {
                        

                          var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": config["base_url"]+"/visite/"+resultat.responseJSON.id+"/examen/"+examens[i]+"/resultat_examens/creer",
                            "method": "POST",
                            data:{
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
                            afficherVisiteAmbauche();
                          } 
                        }

                        $.ajax(settings).done(function (response) {
                          
                        });
                      }
                      }
                }
                $.ajax(settingsVisite).done(function(data){
                //  alertify.success('Enregistrement terminé');

                });
            } 
        }

        if(nom != '' && prenom != ''){
          $.ajax(settings).done(function(data){
            nom = $("#ambauche_add").find("input[name='nom']").val("");
            prenom = $("#ambauche_add").find("input[name='prenoms']").val("");
            mail = $("#ambauche_add").find("input[name='mail']").val("");
            contact = $("#ambauche_add").find("input[name='contact']").val("");
            lieu_naiss = $("#ambauche_add").find("input[name='lieu_naiss']").val("");
            matricule = $("#ambauche_add").find("input[name='matricule']").val("");
            date_naiss = $("#ambauche_add").find("input[name='date_naiss']").val("");
            //init();
            //$("#alertify-success-callback").click();
            $('.agent_create').modal('hide');
            
          });
        }else{

          alert('Vous avez oublié le nom ou le prénom.')
        }
      });
}

  var page = window.location.search.substring(1).split('&')[0].split('page=')[1];


  switch(page){
    case "annuelleAcc":
      afficherVisiteAnnuelle();
      ajouterVisiteAnnuelle();

    break;

    case "ambaucheAcc":
      afficherVisiteAmbauche();
      ajouterVisiteAmbauche();
    break;
  }
});