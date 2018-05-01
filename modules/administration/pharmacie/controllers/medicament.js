
//Medicament
function medicament(){



 var ComboInit = function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/familles_medicaments/afficher",
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
      var rows = "<option selected>Selection de la famille</option>";
      if (response.length>0) {
        var rows = "<option selected>Selection de la famille</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].fam_medic_libelle+"</option>";
        }

        $(".famille-select").html(rows);
      }
      
    });

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/formes_medicaments/afficher",
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
      var rows = "<option selected>Selection de la famille</option>";
      if (response.length>0) {
        var rows = "<option selected>Selection de la famille</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].form_medic_libelle+"</option>";
        }

        $(".forme-select").html(rows);
      }
      
    });
  }

  ComboInit();

  
  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].medic_code+"</td>";
          rows = rows +"<td>"+response[i].medic_libelle+"</td>";
          rows = rows +"<td>"+response[i].medic_nb_dispo+"</td>";
          rows = rows +"<td>"+response[i].medic_nb_seuil+"</td>";
          rows = rows +"<td data-id=\""+response[i].famille_medicament.id+"\">"+response[i].famille_medicament.fam_medic_libelle+"</td>";
          rows = rows +"<td data-id=\""+response[i].forme_medicament.id+"\">"+response[i].forme_medicament.form_medic_libelle+"</td>";
          // rows = rows +"<td>"+response[i].fam_patho_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +'<button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
          rows = rows +"</tr>";         
        }

        $("tbody").html(rows);
      }
      
    });
  }

  init();


  $(".add_submit").click(function(){

    var code = $("#add_item").find("input[name='code']").val();
    var libelle = $("#add_item").find("input[name='libelle']").val();
    var qte = $("#add_item").find("input[name='qte']").val();
    var seuil = $("#add_item").find("input[name='seuil']").val();
    var fa_id = $('.famille-select').find(":selected").val();
    var fo_id = $('.forme-select').find(":selected").val();
    var settings = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/famille_medicament/"+fa_id+"/forme_medicament/"+fo_id+"/medicaments/creer?"+"medic_code="+code+"&medic_libelle="+libelle+"&medic_nb_dispo="+qte+"&medic_nb_seuil="+seuil,
      "method": "POST",
      data:{"medic_Code":code, "medic_libelle":libelle,"medic_nb_dispo":qte,"medic_nb_seuil":seuil},
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

        if(code != '' && libelle != ''){
          $.ajax(settings).done(function(data){
            $("#add_item").find("input[name='code']").val('');
            $("#add_item").find("input[name='libelle']").val('');
            
            init();
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminé');
          });
        }else{
          alert('Vous avez oublié le code ou libelle.')
        }
      });



  /* Remove Item */
  $("body").on("click","#remove-item",function(){
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
        "url": config["base_url"]+"/medicaments/supprimer/"+id,
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
          alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});

        });

      })

  });


  /* Edit Item */
  $("body").on("click",".edit-item",function(){

    var id = $(this).parent("td").data('id');
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").prev("td").text();
    var qte = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var seuil = $(this).parent("td").prev("td").prev("td").prev("td").text();
    var fam_id = $(this).parent("td").prev("td").prev("td").data('id');
    var form_id = $(this).parent("td").prev("td").data('id');

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find("input[name='e_qte']").val(qte);
    $(".edit-modal-lg").find("input[name='e_seuil']").val(seuil);
    $(".edit-modal-lg").find(".edit-id").val(id);
    $('.famille-select').val(fam_id);
    $('.forme-select').val(form_id);

    

  });


  /* Updated new Item */
  $(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();
    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var e_qte = $(".edit-modal-lg").find("input[name='e_qte']").val();
    var e_seuil = $(".edit-modal-lg").find("input[name='e_seuil']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    var fa_id = $('.famille-select').find(":selected").val();
    var fo_id = $('.forme-select').find(":selected").val();
    
    if(e_code != '' && e_libelle != ''){
      $.ajax({
        "async": true,
        dataType: 'json',
        "crossDomain": true,
        "url": config["base_url"]+"/famille_medicament/"+fa_id+"/forme_medicament/"+fo_id+"/medicaments/modifier/"+id+"?"+"medic_code="+e_code+"&medic_libelle="+e_libelle+"&medic_nb_dispo="+e_qte+"&medic_nb_seuil="+e_seuil,
        "method": "PUT",
        data:{"medic_code":e_code, "medic_libelle":e_libelle, "medic_nb_dispo":e_qte, "medic_nb_seuil":e_seuil},
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
            alertify.success('Ligne enregistrée avec succes.', 'Success Alert', {timeOut: 5000});
          });
        }else{
          alert('Vous avez oublié le code or libelle.');
        }

      });

}

//Medicament


medicament();