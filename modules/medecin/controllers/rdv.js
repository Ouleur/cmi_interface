

// Rendez-vous
function rdv(){

  var consultation;
  var patient_cons;
  var pathologie_rows;
  var medicament_rows;
  var examens_rows;
  var rows_select_id;

  $(".rdv_act").hide();
  $(".comment_acte").attr("readonly", true);

  $(".date_rdv").attr("readonly",true);
  $("#rdv_obj").attr("readonly",true);
  $("#commentaire").attr("readonly",true);

  $('#examen').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#acte').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#pre-selected-options').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  $('#select-exam').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultations/etape/4/rechercher",
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
          rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'</p><p class="text-muted m-b-5 mail">'+response[i].patient.pat_contact+'</p>';
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
          //rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".row-in").html(rows);
      }
      
    });
  }

  init();

  var examenTab = function(){
    patient_cons = consultation[rows_select_id[1]];
    
    $("#loader").hide();
    // $(".examens-resl-tb tbody").hide();

    if($(".examens-resl-tb").length>0)
    {
        $(".examens-resl-tb tbody").html("");

    }
    for (var i = 0; i < patient_cons.resultat_examens.length; i++) {
      
      ligne = "";
        ligne +='<tr> ';
        //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
        ligne +='<td>'+patient_cons.resultat_examens[i].examen.exam_libelle+'</td>';
        date = patient_cons.resultat_examens[i].res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');

        ligne +='<td>'+date+'</td>';
        ligne +='<td>'+patient_cons.resultat_examens[i].res_commentaire+'</td>';
        // ligne +='<td> <label class="custom-control custom-checkbox">';
        // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
        // ligne +='<span class="custom-control-indicator"></span></label></td>';
        ligne +='<td data-id="'+patient_cons.resultat_examens[i].id+'"> <i class="mdi mdi-delete res-exam-save-delete"></i> </td>';

        ligne +='</tr>';
        $(".examens-resl-tb").append(ligne);
    }
    $(".examens-resl-tb").on('click','.res-exam-save-delete',function(){
        var id = $(this).parent("td").data('id');
          var c_obj = $(this).parents("tr");
        swal({
        title: 'Etre vous sûre?',
        text: "Vous ne serez pas capable de revenir en arrière!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Non, je décline',
        confirmButtonText: 'Oui, je suis sûre!'
      }).then(function () {
        swal(
          'Suppression!',
          'L\'examen a été bien supprimé.',
          'success'
        )

          
          var settings = {
                "async": true,
                dataType: 'json',
                "crossDomain": true,
                "url": config["base_url"]+"/resultat_examens/supprimer/"+id,
                "method": "DELETE",
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
          $.ajax(settings).done(function(data){
              c_obj.remove();
              init();
              // patient_cons.resultat_examens.remove(id);
              alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});
              
          });

          })

      });
  }

  var ComboPatho = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/pathologies/afficher",
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
      data_profess = response;
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].patho_libelle+"</option>";
        }
        pathologie_rows = rows;

        $(".patho-custom").html(rows);
      }
      
    });


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
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });



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
        var rows = "";
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


    rows_select_id = $(this).data('id').split(":");
    patient_cons = consultation[rows_select_id[1]];

    $('.btn_update_dossier').click(function(){

        var settings = {
                "async": true,
                "crossDomain": true,
                "url": config["base_url"]+"/etape/"+2+"/consultations/modifier/"+patient_cons.id,
                "method": "Patch",
                data:{
                  // "soins_commentaire":comment
                },
                headers: {
                  "x-auth-token": config["auth_token"],
                },
                success : function(code_html, statut){
                //alert(code_html[0].proff_libelle);
                window.location = config["ui_url"]+'?page=medecin';
                },
                error : function(resultat, statut, erreur){
                },
                complete : function(resultat, statut){
                } 
              }

            $.ajax(settings).done(function (response) { 

            });
    });


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
  
  
     // Ordonnance table
     if(patient_cons.ordonnances.length>0 && $(".ordonnances-tb tbody tr").length!=patient_cons.ordonnances.length){
      $(".ordonnances-tb tbody").html("");
      for (var i = 0; i < patient_cons.ordonnances.length; i++) {
        
        ligne = "";
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          ligne +='<td> <label class="custom-control custom-checkbox">';
          if (patient_cons.ordonnances[i].ordo_servir) {
          ligne +='<input type="checkbox" class="custom-control-input servir" disabled="disabled" checked="checked">';
          }else{
            ligne +='<input type="checkbox" class="custom-control-input servir" disabled="disabled">';

          }
            ligne +='<span class="custom-control-indicator"></span></label></td>';

          if (typeof patient_cons.ordonnances[i].medic_remplacement != 'undefined') {
            ligne +='<td>'+patient_cons.ordonnances[i].medic_remplacement.medic_libelle+'</td>';
          }else{
            ligne +='<td></td>';

          }
          ligne +='<td data-id="'+patient_cons.ordonnances[i].id+'"> <i class="mdi mdi-delete ordo-ave-delete"></i> </td>';

          ligne +='</tr>';
          $(".ordonnances-tb").append(ligne);
      }
      $(".ordonnances-tb").on('click','.ordo-ave-delete',function(){
          var id = $(this).parent("td").data('id');
            var c_obj = $(this).parents("tr");
          swal({
          title: 'Etre vous sûre?',
          text: "Vous ne serez pas capable de revenir en arrière!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Non, je décline',
          confirmButtonText: 'Oui, je suis sûre!'
        }).then(function () {
          swal(
            'Suppression!',
            'La ligne a été supprimer',
            'success'
          )

            
            var settings = {
                  "async": true,
                  dataType: 'json',
                  "crossDomain": true,
                  "url": config["base_url"]+"/ordonnances/supprimer/"+id,
                  "method": "DELETE",
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
            $.ajax(settings).done(function(data){
                c_obj.remove();
                init();
                alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});
                
            });

            })

        });
     }

   // Fin Ordonnance table
   // Diagnostique table
   var act_inf = ""; 
    for (var i = patient_cons.soins.length - 1; i >= 0; i--) {
      act_inf +=  '<tr data-toggle="popover"  data-placement="top" data-trigger="hover" title="Commentaire" data-content="'+patient_cons.soins[i].soins_commentaire+'"><td>'+(patient_cons.soins.length-i)+"</td><td>"+patient_cons.soins[i].acte[0].acte_libelle+"</td>";
    }
    $(".acte_infirmier_tb tbody").html(act_inf);
    $('[data-toggle="popover"]').popover();

    var moit_inf = ""; 
    for (var i = patient_cons.motifs.length - 1; i >= 0; i--) {
      moit_inf +=  '<tr><td>'+(patient_cons.motifs.length-i)+"</td><td>"+patient_cons.motifs[i].motif_libelle+"</td><td></td>";
    }
    $(".motif_inf-tb tbody").html(moit_inf);
    if(patient_cons.diagnostiques.length>0 && $(".diagnostique_tb tbody tr").length!=patient_cons.diagnostiques.length){
      for (var i = 0; i < patient_cons.diagnostiques.length; i++) {
        
        ligne = "";
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.diagnostiques[i].pathologie.patho_libelle+'</td>';
          ligne +='<td>'+patient_cons.diagnostiques[i].cause.cause_libelle+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          ligne +='<td data-id="'+patient_cons.diagnostiques[i].id+'"> <i class="mdi mdi-delete patho-save-delete"></i> </td>';

          ligne +='</tr>';
          $(".diagnostique_tb").append(ligne);
      }
      $(".diagnostique_tb").on('click','.patho-save-delete',function(){
          var id = $(this).parent("td").data('id');
            var c_obj = $(this).parents("tr");
          swal({
          title: 'Etre vous sûre?',
          text: "Vous ne serez pas capable de revenir en arrière!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Non, je décline',
          confirmButtonText: 'Oui, je suis sûre!'
        }).then(function () {
          swal(
            'Suppression!',
            'La ligne a été supprimer',
            'success'
          )

            
            var settings = {
                  "async": true,
                  dataType: 'json',
                  "crossDomain": true,
                  "url": config["base_url"]+"/diagnostiques/supprimer/"+id,
                  "method": "DELETE",
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
            $.ajax(settings).done(function(data){
                c_obj.remove();
                init();
                // patient_cons.diagnostiques.remove(id);
                alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});
                
            });

            })

        });
     }
   // Fin Diahnostique table

   // Examens table
    if(patient_cons.resultat_examens.length>0 && $(".examens-resl-tb tbody tr").length!=patient_cons.resultat_examens.length){
      examenTab();
     }else{
      $("#loader").hide();
     }
     // Fin Examens table

  //Actes
    if(patient_cons.soins.length>0 && $(".acte_liste p").length!=patient_cons.soins[0].acte.length){
      // alert(patient_cons.soins[0].acte[0].acte_libelle);
      var ligne = "";
      for (var i = 0; i < patient_cons.soins[0].acte.length; i++) {
        ligne += "<p><h3>"+patient_cons.soins[0].acte[i].acte_libelle+"</h3></p>";
      }
      $(".acte_liste").html(ligne);
      $("#comment_acte").val(patient_cons.soins[0].soins_commentaire)
    }

    $(".acte_liste").dblclick(function(){
      $(".comment_acte").attr("readonly", false);
      $(".rdv_act").show();
      $(".acte_liste").hide();      
    });
  // Fin Actes

  // Rendez-vous

    if(typeof patient_cons.cons_rdv_date != "undefined"){
      
      date = patient_cons.cons_rdv_date.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3');
      // alert(date);
      $(".date_rdv").val(date);
      $("#rdv_obj").val(patient_cons.cons_rdv_objet);
      $("#commentaire").val(patient_cons.cons_rdv_commentaire);

     
    }
     $(".date_rdv").dblclick(function(){
        $(".date_rdv").attr("readonly", false);
        $("#rdv_obj").attr("readonly", false);
        $("#commentaire").attr("readonly", false);    
    });

  // Fin Rendez-vous
  });



//Examens combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/examens/afficher",
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
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].exam_libelle+"</option>";
        }
        examens_rows = rows;
        $("#examen").html(rows);
        
      }
      
    });

    //Acte combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/actes/afficher",
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
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
        }
        $("#acte").html(rows);
        
      }
      
    });


    //Cause combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/causes/afficher",
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
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].cause_libelle+"</option>";
        }
        $(".cause_custom").html(rows);
        
      }
      
    });
  }

  ComboPatho();

  $(".patho_add").click(function(){
    $(".diagnostique_tb").append('<tr><td data-id="'+$(".patho-custom").find(":selected").val()+'">'+$(".patho-custom").find(":selected").html()+'</td><td data-id="'+$(".cause_custom").find(":selected").val()+'">'+$(".cause_custom").find(":selected").html()+'<td><i class="mdi mdi-delete patho-delete"></i></td></tr>');

        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });
  $(".diagnostique_tb").on('click','.patho-delete',function(){
    $(this).parent().parent().remove();
  }); 



    // Ordonnances 
    $(".add-ordonnance").click(function(){
      ligne = "";
      ligne +='<tr> ';
      //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
      ligne +='<td> <select class="custom-select medi-ordo-custom"></select></td>';
      ligne +='<td> <input class="form-control" type="number" id="example-number-input"></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      // ligne +='<td> <label class="custom-control custom-checkbox">';
      // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
      // ligne +='<span class="custom-control-indicator"></span></label></td>';
      ligne +='<td> <i class="mdi mdi-delete ordo-delete"></i> </td>';

      ligne +='</tr>';
      $(".ordonnances-tb").append(ligne);
      $(".patho-ordo-custom").html(pathologie_rows);
      $(".medi-ordo-custom").html(medicament_rows);


        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });

    $(".ordonnances-tb").on('click','.ordo-delete',function(){
      $(this).parent().parent().remove();
    }); 


    $(".add-resultat").click(function(){
      ligne = "";
      ligne += '<tr>';
      ligne += '<td scope="row">';
      ligne += '<select class="custom-select exam-custom"></select>';
      ligne += '</td>';
      // ligne += '<td>';
      // ligne += '<label class="custom-control custom-checkbox">';
      // ligne += '<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups" data-parsley-mincheck="2">';
      // ligne += '<span class="custom-control-indicator"></span>';
      // ligne += '</label>';
      // ligne += '</td>';
      ligne += ' <td>';
      ligne += '<div class="input-group">';

      ligne+='<input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >';
      ligne+='<span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>';
      ligne+='</div>';
      ligne+='</td>';
      // ligne+='<td> <input id="resultat" type="text" class="form-control"></td>';
      ligne+='<td> <input id="comment_exam" type="text" class="form-control"></td>';
      ligne += ' <td></td>';
      ligne += ' <td></td>';
      ligne+='<td><i class="mdi mdi-delete resultat-delete"></i></td>';

      ligne+='</tr>';

      $(".examens-resl-tb").append(ligne);
      $(".exam-custom").html(examens_rows);

    });

    
    $(".examens-resl-tb").on('click','.resultat-delete',function(){
      $(this).parent().parent().remove();
    }); 



    // Save medecin consultation
    //$(".save-med-consul").click(function(){
      
    //   // Diagnostique saving
    $('.patho_save').click(function(){

        $('.diagnostique_tb tbody tr').each(function() {
          var patho_id = $(this).find("td").eq(0).data("id");
          var signe_id = $(this).find("td").eq(1).data("id");
          var id = $(this).find("td").eq(2).data("id");
          // alert(id);
          if (typeof patho_id !== "undefined" && typeof id=="undefined") {
            // alert(patho_id+"\n"+signe_id);
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/cause/"+signe_id+"/pathologie/"+patho_id+"/diagnostiques/creer",
              "method": "POST",
              data:{
                // "soins_commentaire":comment
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
          $(this).remove();

          $.ajax(settings).done(function (response) {
            init()
            // data_profess = response;
            // if (response.length>0) {
            //   var rows = "";
            //   for (var i = 0; i < response.length; i++) {
            //     rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
            //   }

            //   $(".acte-select").html(rows);
            // }
            
          });
          }
        });

      });

      // Ordonnances saving
      $(".ordo_save").click(function(){
        $('.ordonnances-tb tbody tr').each(function() {

          //var patho_id = $(".ordonnances-tb tbody tr").find("td").eq(0).find("select").find(":selected").val();
          var medic_id = $(this).find("td").eq(0).find("select").find(":selected").val();
          var qte = $(this).find("td").eq(1).find("input").val();
          var dure = $(this).find("td").eq(2).find("input").val();
          var posologie = $(this).find("td").eq(3).find("input").val();

          // alert(medic_id);
          if (typeof medic_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/medicament/"+medic_id+"/ordonnances/creer?ordo_quantite="+qte+"&ordo_dure="+dure+"&ordo_posologie="+posologie,
              "method": "POST",
              data:{
                "ordo_quantite":qte,
                "ordo_dure":dure,
                "ordo_posologie":posologie
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
          }
        });
      });




      // Resultats saving
      $(".exam_save").click(function(){

        $('.examens-resl-tb tbody tr').each(function() {
          var exam_id = $(this).find("td").eq(0).find(":selected").val();
          // var etat = $(this).find("td").eq(1).find("input").is(":checked");
          var date = $(this).find("td").eq(1).find("input").val();
          // var resultat = $(this).find("td").eq(3).find("input").val();
          var comment = $(this).find("td").eq(2).find("input").val();

          //alert(exam_id+"\n"+date);
          if (typeof exam_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/examen/"+exam_id+"/resultat_examens/creer?resDatePrFait="+date+"&resCommentaire="+comment,
              "method": "POST",
              data:{
                // "resEtat":etat,
                "resDateFait":date,
                // "resObservation":resultat,
                "resCommentaire":comment
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
            // alert(rows_select_id[1]);
            

          });
          $(this).remove();
          }
        });

        init();
        alertify.success('Examen enregistré avec succes.', 'Success Alert', {timeOut: 5000});
        var nbre = consultation[rows_select_id[1]].resultat_examens.length;

        //alert(nbre+"\n"+consultation[rows_select_id[1]].resultat_examens.length)
        // while (consultation[rows_select_id[1]].resultat_examens.length=nbre){
          
        $("#loader").show();
        setTimeout(function(){
            //do what you need here
                examenTab();

        }, 1000);
        // }

      });


      // Actes saving selected
      $('.actes_save').click(function() {
        var commentaire = $("#comment_acte").val();
        var acte_ids = [];
        $('#acte_to option').each(function(){acte_ids.push($(this).val());});
        // alert(acte_ids);
        if (acte_ids.length>0) {
          // alert(acte_ids.join(',')+"\n"+commentaire);

          var settings = {
            "async": true,
            "crossDomain": true,
            "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/acte/"+acte_ids.join(",")+"/soins/creer?soins_commentaire="+commentaire,
            "method": "POST",
            data:{
              "soins_commentaire":commentaire
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
        }


      });


      //RDV saving
      $('.rdv_save').click(function(){
        var date = $('.date_rdv').val();
        var obj = $('#rdv_obj').val();
        var comment = $('#commentaire').val();
        // alert(date+"\n"+obj+"\n"+comment);
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/patient/"+patient_cons.patient.id+"/infirmier/"+patient_cons.infirmier.id+"/specialite/"+patient_cons.specialite.id+"/medecin/"+patient_cons.medecin.id+"/etape/"+4+"/consultations/modifier/"+patient_cons.id+"?cons_rdvDate="+date+"&cons_rdvObjet="+obj+"&cons_rdvCommentaire="+comment,
          "method": "PATCH",
          data:{
            "cons_rdvDate":date,
            "cons_rdvObjet":obj,
            "cons_rdvCommentaire":comment
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
            $(".date_rdv").attr("readonly",true);
            $("#rdv_obj").attr("readonly",true);
            $("#commentaire").attr("readonly",true);
            
          });
        // Modif consult
      });


  }

// Fin Rendez-vous


rdv();