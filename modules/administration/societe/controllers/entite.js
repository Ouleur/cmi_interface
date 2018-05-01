
 //Entité
 function entite(){

   var RecInit = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/entites/afficher",
      "method": "GET",
      type:'POST',
      headers: {
        "x-auth-token": config["auth_token"],
      },
      success : function(code_html, statut){
        //alert(code_html[0].proff_libelle);
      },
      error : function(resultat, statut, erreur){
        var rows = "<option selected>Selection de la societé</option>";
        $(".recu-select").html(rows);
      },
      complete : function(resultat, statut){
      } 
    }

    $.ajax(settings).done(function (response) {
      data_profess = response;
      var rows = "<option value='init' selected>Selection de la societé</option>";
      if (response.length>0) {

        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].enti_libelle+"</option>";
        }

      }
      
      $(".parent-select").html(rows);
    });
  }
  RecInit();

  var ComboInit = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/societes/afficher",
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
        var rows = "<option selected>Selection de la societé</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].socie_libelle+"</option>";
        }

        $(".societe-select").html(rows);
      }
      
    });
  }

  ComboInit();

  
  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/entites/afficher",
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
          rows = rows +"<td>"+response[i].enti_code+"</td>";
          rows = rows +"<td>"+response[i].enti_libelle+"</td>";
          if (response[i].societe) {
            rows = rows +"<td data-id=\""+response[i].societe.id+"\">"+response[i].societe.socie_libelle+"</td>";
          }else{
            rows = rows +"<td ></td>";
          }
          
          if (response[i].parent) {

            rows = rows +"<td data-id=\""+response[i].parent.id+"\">"+response[i].parent.enti_libelle+"</td>";
          }else{
            rows = rows +"<td ></td>";
          }

          //rows = rows +"<td data-id=\""+response[i].type_examen.id+"\">"+response[i].type_examen.t_exam_libelle+"</td>";
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
    var s_id = $('.societe-select').find(":selected").val();
    var p_id = $('.parent-select').find(":selected").val();

    var settings = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/societe/"+s_id+"/parent/"+p_id+"/entites/creer?"+"entiCode="+code+"&entiLibelle="+libelle,
      "method": "POST",
      data:{"entiCode":code, "entiLibelle":libelle},
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
        "url": config["base_url"]+"/entites/supprimer/"+id,
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
    var id = $(".edit-modal-lg").find(".e_type").val();
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
 //Entité

 entite();