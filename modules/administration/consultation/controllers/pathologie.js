// pathologie
function pathologie(){



 var ComboInit = function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/familles_pathologies/afficher",
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
          rows = rows +"<option value="+response[i].id+">"+response[i].fam_patho_libelle+"</option>";
        }

        $(".custom-select").html(rows);
      }
      
    });
  }

  ComboInit();

  
  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/pathologies/afficher",
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
          rows = rows +"<td>"+response[i].patho_code+"</td>";
          rows = rows +"<td>"+response[i].patho_libelle+"</td>";
          rows = rows +"<td data-id=\""+response[i].famille_pathologie.id+"\">"+response[i].famille_pathologie.fam_patho_libelle+"</td>";
          // rows = rows +"<td>"+response[i].fam_patho_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +' <button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
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
    var id = $('.custom-select').find(":selected").val();

    var settings = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/familles_pathologies/"+id+"/pathologie/creer?"+"patho_code="+code+"&patho_libelle="+libelle,
      "method": "POST",
      data:{"patho_Code":code, "patho_libelle":libelle},
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
          alert('Vous avez oublié le code or libelle.')
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
        "url": config["base_url"]+"/pathologie/supprimer/"+id,
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
          init();

        });

      })

  });


  /* Edit Item */
  $("body").on("click",".edit-item",function(){

    var id = $(this).parent("td").data('id');
    var code = $(this).parent("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").text();
    var fam_id = $(this).parent("td").prev("td").data('id');

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);
    $('.custom-select').val(fam_id);

    

  });


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
            alertify.success('Ligne enregistrée avec succes.', 'Success Alert', {timeOut: 5000});
          });
        }else{
          alert('Vous avez oublié le code or libelle.');
        }

      });

}
// 

pathologie();