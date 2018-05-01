
//Medecin
function medecin(){

  var consultation;
  var patient_cons;
  var motifs_rows;
  var acte_rows;
  var pathologie_rows;
  var medicament_rows;
  var examens_rows;
  var rows_select_id;


  $('#examen').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#etatExam').bootstrapToggle({
    on: 'Fait',
    off: 'Pas Fait',
    offstyle: 'secondary'
  });


  /*$('#acte').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });*/

  //jQuery("#date-range").datepicker({format:"dd/mm/yyyy",toggleActive:!0})
    $('#arret-range').datepicker({format: 'dd/mm/yyyy'});

    $('#arret-range').on('changeDate',function() {
      var val = calcDiff();
      if (val>1) {
        $('.nbr_jr').html(val+=" jours");
      }else{
        $('.nbr_jr').html(val+=" jour");
      }
      });

    $('#date-range-edit').datepicker({format: 'dd/mm/yyyy'});

    $('#date-range-edit').on('changeDate',function() {
      var val = calcDiffedit();
      if (val>1) {
        $('.nbr_jr_edit').html(val+=" jours");
      }else{
        $('.nbr_jr_edit').html(val+=" jour");
      }
      });

    var calcDiff = function() {
      var date1 = $('#start').datepicker('getDate');
      var date2 = $('#end').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }

    var calcDiffedit = function() {
      var date1 = $('#starte').datepicker('getDate');
      var date2 = $('#ende').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }


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
      "url": config["base_url"]+"/consultations/etape/2/rechercher",
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
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+' | '+response[i].patient.pat_contact+'</p>';
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
        ligne +='<tr data-id="'+i+'"> ';
        //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
        ligne +='<td>'+patient_cons.resultat_examens[i].examen.exam_libelle+'</td>';
        ligne +='<td> <label class="custom-control custom-checkbox">';
        if (patient_cons.resultat_examens[i].res_etat) {

          ligne +='<input type="checkbox" class="custom-control-input fait" checked="checked" disabled="disabled">';
        }else{
          ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled">';

        }
        ligne +='<span class="custom-control-indicator"></span></label></td>';
        date = patient_cons.resultat_examens[i].res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
        ligne +='<td>'+date+'</td>';
        
        if (typeof patient_cons.resultat_examens[i].res_date_fait != "undefined") {
          date = patient_cons.resultat_examens[i].res_date_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
          ligne +='<td>'+date+'</td>';          
        }else {
          ligne +='<td></td>';
        }

        if(typeof patient_cons.resultat_examens[i].res_observation != "undefined"){
          ligne +='<td>'+patient_cons.resultat_examens[i].res_observation+'</td>';
        }else{
          ligne +='<td></td>';
        }

        ligne +='<td>'+patient_cons.resultat_examens[i].res_commentaire+'</td>';
        ligne +='<td data-id="'+patient_cons.resultat_examens[i].id+'"> <i class="mdi mdi-pencil res-exam-modif" data-toggle="modal" data-target=".bs-examen-modal-lg"></i> </td>';

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



      $(".res-exam-modif").click(function(){
        // alert(eval($(this).parent('td').parent('tr').data('id')));
        $(".data_id").val($(this).parent('td').parent('tr').data('id'));
        var result = patient_cons.resultat_examens[eval($(this).parent('td').parent('tr').data('id'))];

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
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/examen/"+patient_cons.resultat_examens[id].examen.id+"/resultat_examens/"+patient_cons.resultat_examens[id].id+"?resEtat="+etat+"&resObservation="+resultat+"&resCommentaire="+comment+"&resDateFait="+date,
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
      "url": config["base_url"]+"/motifs/afficher",
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
          rows = rows +"<option value="+response[i].id+">"+response[i].motif_libelle+"</option>";
        }
        motifs_rows = rows;
      }

    });

    // actes infirmier


    // Click sur un patient
    $(".add-motif_inf_med").click(function(){
      if($(".motif-med-select").val()!=null){
        alert("erreur");
        $(".motif_inf-tb tbody").append("<tr data-id='"+$(".motif-med-select").val()+"'><td></td><td>"+$(".motif-med-select option:selected").text()+"</td><td></td><td><i class=\"mdi mdi-delete motif-med-delete\"></i></td></tr>");
      }
    });

   $(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();
    // $(".motif_inf-tb tbody").html("");

    $(".acte_select").select2({
    placeholder: 'Select an item',

    ajax: {

      url: config["base_url"]+'/acte/selection',

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


    rows_select_id = $(this).data('id').split(":");
    patient_cons = consultation[rows_select_id[1]];

    var act_inf = ""; 
    for (var i = patient_cons.soins.length - 1; i >= 0; i--) {
      act_inf +=  '<tr data-toggle="popover"  data-placement="top" data-trigger="hover" title="Commentaire" data-content="'+patient_cons.soins[i].soins_commentaire+'"><td>'+(patient_cons.soins.length-i)+"</td><td>"+patient_cons.soins[i].acte[0].acte_libelle+"</td><td>"+patient_cons.soins[i].soins_commentaire+"</td><td></td></tr>";
    }
    $(".acte_infirmier_tb tbody").html(act_inf);
    $('[data-toggle="popover"]').popover();

    var moit_inf = ""; 
    for (var i = patient_cons.motifs.length - 1; i >= 0; i--) {
      moit_inf +=  '<tr><td>'+(patient_cons.motifs.length-i)+"</td><td>"+patient_cons.motifs[i].motif_libelle+"</td><td></td>";
    }
    $(".motif_inf-tb tbody").html(moit_inf);


    $(".motif-med-select").select2({
    tags: true,
    tokenSeparators: [','],
    placeholder: 'Select an item',

    ajax: {

      url: config["base_url"]+'/motifs/selection',

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



    $(".motif_inf-tb").on("click",".motif-med-delete", function(){
      $(this).parent().parent().remove();
    });



    $(".add-acte").on("click", function(){
      if($(".acte_select").val()!=null){
        $(".acte_infirmier_tb tbody").append("<tr data-id='"+$(".acte_select").val()+"'><td></td><td>"+$(".acte_select option:selected").text()+"</td><td>"+$("#comment_acte").val()+"</td><td><i class=\"mdi mdi-delete motif-med-delete\"></i></td><td></td></tr>");
      }
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
     $(".ordonnances-tb tbody").html("");
     if(patient_cons.ordonnances.length>0 && $(".ordonnances-tb tbody tr").length!=patient_cons.ordonnances.length){
      for (var i = 0; i < patient_cons.ordonnances.length; i++) {
        
        ligne = "";
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
          if (typeof patient_cons.ordonnances[i].medic_remplacement != "undefined") {
            ligne +='<td>'+patient_cons.ordonnances[i].medic_remplacement.medic_libelle+'</td>';
          }else{
            ligne +='<td></td>';
          }
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';

          ligne +='<td> <label class="custom-control custom-checkbox">';
          if (patient_cons.ordonnances[i].ordo_servir) {

            ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled" checked="checked">';
          }else{
            ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled">';

          }
          ligne +='<span class="custom-control-indicator"></span></label></td>';

          ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          
          ligne +='<td data-id="'+patient_cons.ordonnances[i].id+'">';
          // if(patient_cons.etape.libelle=="Modification"){
          //   ligne += '<i class="mdi mdi-delete ordo-ave-delete"></i>';
          // }
          ligne += ' </td>';

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
   // Diahnostique table
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
     }
   // Fin Soins table

   // RDV Table
   if(typeof patient_cons.cons_rdv_date != "undefined" ){
      date = patient_cons.cons_rdv_date.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3');

      $(".rdv_medecin_tb tbody").html("<tr><td>"+date+"</td><td>"+patient_cons.cons_rdv_objet+"</td><td>"+patient_cons.cons_rdv_objet+"</td></tr>");
      // $(".date_rdv").val(date);
      // $("#rdv_obj").val(patient_cons.cons_rdv_objet);
      // $("#commentaire").val(patient_cons.cons_rdv_objet);

     //alert(date);
   }
    // Fin RDV Table 

  if (typeof patient_cons.arrets[0].arret_debut!= "undefined" && typeof patient_cons.arrets[0].arret_debut!= "undefined") {
    //alert(patient_cons.arrets[0].arret_debut);
    date_debut = patient_cons.arrets[0].arret_debut.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');

    // $(".consultation_info").find("input[name='start']").val(date);
    date_fin = patient_cons.arrets[0].arret_fin.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');

    // $(".consultation_info").find("input[name='end']").val(date);
    $(".arret_medecin_tb tbody").html("<tr><td>"+date_debut+"</td><td>"+date_fin+"</td></tr>");

  }
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
      ligne +='<td></td>';
      ligne +='<td> <input class="form-control" type="number" id="example-number-input"></td>';
      ligne +='<td></td>';
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

    now = new Date();
    $(".add-resultat").click(function(){
      ligne = "";
      ligne += '<tr>';
      ligne += '<td scope="row">';
      ligne += '<select class="custom-select exam-custom"></select>';
      ligne += '</td>';
      ligne +='<td></td>';

      // ligne += '<td>';
      // ligne += '<label class="custom-control custom-checkbox">';
      // ligne += '<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups" data-parsley-mincheck="2">';
      // ligne += '<span class="custom-control-indicator"></span>';
      // ligne += '</label>';
      // ligne += '</td>';
      ligne += ' <td>';
      // ligne += '<div class="input-group">';

      // ligne+='<input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >';
      // ligne+='<span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>';
      // ligne+='</div>';

      ligne+= new Date().toLocaleDateString();
      ligne+='</td>';
      ligne +='<td></td>';
      ligne +='<td></td>';

      // ligne+='<td> <input id="resultat" type="text" class="form-control"></td>';
      ligne+='<td> <input id="comment_exam" type="text" class="form-control"></td>';
      ligne+='<td><i class="mdi mdi-delete resultat-delete"></i></td>';

      ligne+='</tr>';

      $(".examens-resl-tb").append(ligne);
      $(".exam-custom").html(examens_rows);

    });

    
    $(".examens-resl-tb").on('click','.resultat-delete',function(){
      $(this).parent().parent().remove();
    }); 




    function arret_save(){

      var date_start = $(".consultation_info").find("input[name='start']").val();
      var date_end = $(".consultation_info").find("input[name='end']").val();
      date_start = date_start.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');
      date_end = date_end.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/arrets/creer?arretDebut="+date_start+"&arretFin="+date_end,
          "method": "POST",
          data:{
            "arretDebut":date_start,
            "arretFin":date_end
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
    // Save medecin consultation
    //$(".save-med-consul").click(function(){
      
    //   // Diagnostique saving
    //$('.patho_save').click(
      function patho_save(){

        $('.diagnostique_tb tbody tr').each(function() {
          var patho_id = $(this).find("td").eq(0).data("id");
          var signe_id = $(this).find("td").eq(1).data("id");
          var id = $(this).find("td").eq(2).data("id");
          // alert(id);
          if (typeof patho_id !== "undefined" && typeof id=="undefined") {

            // Motif saved
            var motif_id = "";
            $('.motif_inf-tb tbody tr').each(function() {
              if (typeof $(this).data("id")!=="undefined"){
                motif_id += ","+$(this).data("id");
              }

            });
            motif_id = motif_id.substr(1);
              // alert(patho_id+"\n"+signe_id);
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": config["base_url"]+"/motifs/"+motif_id+"/consultations/modifier/"+patient_cons.id,
                "method": "Patch",
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

            $.ajax(settings).done(function (response) {              
            });

            // Motif saved

          // Pathologie saved
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
              init();
              
            });
          // Pathologie saved

          
          }else{
            alert("eee");
          }
        });

      }
      //);

      // Ordonnances saving
      //$(".ordo_save").click(
        function ordo_save(){
        $('.ordonnances-tb tbody tr').each(function() {

          //var patho_id = $(".ordonnances-tb tbody tr").find("td").eq(0).find("select").find(":selected").val();
          var medic_id = $(this).find("td").eq(0).find("select").find(":selected").val();
          var qte = $(this).find("td").eq(2).find("input").val();
          var dure = $(this).find("td").eq(4).find("input").val();
          var posologie = $(this).find("td").eq(5).find("input").val();
          var cons_id = $(".cons_id").val();

          // alert(medic_id);
          if (typeof medic_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+cons_id+"/medicament/"+medic_id+"/ordonnances/creer?ordo_quantite="+qte+"&ordo_dure="+dure+"&ordo_posologie="+posologie+"&ordo_servir="+0,
              "method": "POST",
              data:{
                "ordo_quantite":qte,
                "ordo_servir":0,
                "ordo_dure":dure,
                "ordo_posologie":posologie
              },
              headers: {
                "x-auth-token": config["auth_token"],
              },
              success : function(code_html, statut){
                var val = {
                  "async": true,
                  "crossDomain": true,
                  "url": config["base_url"]+"/etape/"+3+"/consultations/modifier/"+cons_id,
                  "method": "PATCH",
                  data:{},
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
                $.ajax(val).done(function (response) {
                      
                });
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
      }
      //);

      // Resultats saving
      //$(".exam_save").click(
        function exam_save(){

        $('.examens-resl-tb tbody tr').each(function() {
          var exam_id = $(this).find("td").eq(0).find(":selected").val();
          // var etat = $(this).find("td").eq(1).find("input").is(":checked");
          var date = $(this).find("td").eq(2).html().split("/");
          date = date[2]+"-"+date[1]+"-"+date[0];
          // var resultat = $(this).find("td").eq(3).find("input").val();
          var comment = $(this).find("td").eq(5).find("input").val();

          //alert(exam_id+"\n"+date);
          if (typeof exam_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/etape/"+4+"/examen/"+exam_id+"/resultat_examens/creer?resDatePrescrit="+date+"&resCommentaire="+comment,
              "method": "POST",
              data:{
                // "resEtat":etat,
                "resDatePrescrit":date,
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

        // init();
        // alertify.success('Examen enregistré avec succes.', 'Success Alert', {timeOut: 5000});
        // var nbre = consultation[rows_select_id[1]].resultat_examens.length;

        // //alert(nbre+"\n"+consultation[rows_select_id[1]].resultat_examens.length)
        // // while (consultation[rows_select_id[1]].resultat_examens.length=nbre){
          
        // $("#loader").show();
        // setTimeout(function(){
        //     //do what you need here
        //         examenTab();

        // }, 1000);
        // }

      // window.location = config["ui_url"]+'?page=medecin';


      }//);


      // Actes saving selected
      //$('.actes_save').click(
      function actes_save() {
        
        $('.acte_infirmier_tb tr').each(function(){
          var acte_ids = $(this).val();
          var commentaire = $("#comment_acte").val();
        
          //alert(acte_ids);
          if (typeof $(this).data("id") !== 'undefined') {
            // alert(acte_ids.join(',')+"\n"+commentaire);
            var acte_ids = $(this).data("id");
            var commentaire = $(this).find("td").eq(2).html();

            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/acte/"+acte_ids+"/soins/creer?soins_commentaire="+commentaire,
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

      }//);


      //RDV saving
      //$('.rdv_save').click(
      function rdv_save(){
        var date = $('.date_rdv').val();
        var obj = $('#rdv_obj').val();
        var comment = $('#commentaire').val();
        // alert(date+"\n"+obj+"\n"+comment);
        if (comment!=="") {
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
            // data_profess = response;
            // if (response.length>0) {
            //   var rows = "";
            //   for (var i = 0; i < response.length; i++) {
            //     rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
            //   }

            //   $(".acte-select").html(rows);
            // }
            
          });
        // Modif consult
        }
      }//);

      $(".save-med-consul").click(function(){
        patho_save();
        arret_save();
        actes_save();
        exam_save();
        rdv_save();
        ordo_save();

       // window.location = config["ui_url"]+'?page=medecin';
      });
  }


medecin();