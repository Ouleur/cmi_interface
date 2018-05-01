   // Historique des Consultations
  function Hconsultation()
  {
    var consultation;
      var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultations/afficher",
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +'<tr>';
          rows = rows +'<td>'+response[i].patient.pat_matricule+'</td>';
          rows = rows +'<td>'+response[i].patient.pat_nom+' '+response[i].patient.pat_prenoms+'</td>';
          rows = rows +'<td></td>';
          date = response[i].patient.pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
          now = new Date();
          age = now.getFullYear() - eval(date);
          rows = rows +'<td>'+age+'</td>';
          rows = rows +'<td>'+response[i].etape.etp_libelle+'</td>';
          rows = rows +'<td>'+response[i].medecin.prat_nom+" "+response[i].medecin.prat_prenoms+'</td>';
          rows = rows +'<td>'+response[i].specialite.sp_libelle+'</td>';
          rows = rows +'<td data-id="'+response[i].id+':'+i+'">';
          // rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +'<button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
          rows = rows +'</tr> ';
        }

        $("#consultation_tab tbody").html(rows);
      }
      
    });
  }

  init();

      // Click sur un patient

   //$(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();
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
        date = patient_cons.resultat_examens[i].res_date_pr_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');

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



  $("body").on("click",".edit-item",function(){
    rows_select_id = $(this).parent("td").data('id').split(":");
    //alert(rows_select_id[1])
    patient_cons = consultation[rows_select_id[1]];


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

    rows1 = "<div class='col-md-6 constante'>";
    rows1 += "<div class='row '>";
    rows1 += "<div class='col-md-4'><strong>Température:</strong> "+patient_cons.cons_temperature+" °C</div>";
    rows1 += "<div class='col-md-4'><strong>Tension:</strong> "+patient_cons.cons_temsion_alt+"</div>";
    rows1 += "<div class='col-md-4'><strong>Poids:</strong> "+patient_cons.cons_poids+" Kg</div>";
    rows1 += "</div> ";
    rows1 += "</div> ";

    rows += "<input type='text' class='cons_id' value='"+patient_cons.id+"' readonly='true' hidden>";

    $(".patient_info").html(rows);
    $(".patient_info").parent('div').append(rows1);
  
  
     // Ordonnance table

     if(patient_cons.ordonnances.length>0 && $(".ordonnances-tb tbody tr").length!=patient_cons.ordonnances.length){
      ligne = "";
      for (var i = 0; i < patient_cons.ordonnances.length; i++) {
        
        
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          // ligne +='<td data-id="'+patient_cons.ordonnances[i].id+'"> <i class="mdi mdi-delete ordo-ave-delete"></i> </td>';

          ligne +='</tr>';
          
      }
      $(".ordonnances-tb tbody").html(ligne);
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
          // ligne +='<td data-id="'+patient_cons.diagnostiques[i].id+'"> <i class="mdi mdi-delete patho-save-delete"></i> </td>';

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

    // $(".acte_liste").dblclick(function(){
    //   $(".comment_acte").attr("readonly", false);
    //   $(".rdv_act").show();
    //   $(".acte_liste").hide();      
    // });
  // Fin Actes

  // Rendez-vous

    if(typeof patient_cons.cons_rdv_date != "undefined"){
      
      date = patient_cons.cons_rdv_date.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3');
      // alert(date);
      $(".date_rdv").val(date);
      $("#rdv_obj").val(patient_cons.cons_rdv_objet);
      $("#commentaire").val(patient_cons.cons_rdv_commentaire);

     
    }
    //  $(".date_rdv").dblclick(function(){
    //     $(".date_rdv").attr("readonly", false);
    //     $("#rdv_obj").attr("readonly", false);
    //     $("#commentaire").attr("readonly", false);    
    // });

  // Fin Rendez-vous
  });

  }

  //  Historique des Consultations


Hconsultation()