
//Praticient
function praticien(){



 var ComboInit = function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/type_praticiens/afficher",
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
          rows = rows +"<option value="+response[i].id+">"+response[i].t_prt_libelle+"</option>";
        }

        $(".type-select").html(rows);
      }
      
    });
  }

  ComboInit();


  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/praticiens/afficher",
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
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {
        	rows += '<div class="col-lg-4" data-toggle="modal" data-id="'+response[i].id+'" data-target=".bs-example-modal-lg">';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].prat_prenoms+"  "+response[i].prat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].prat_email+'</p>';
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].type_praticien.t_prt_libelle+'</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div class="row text-center m-t-20">';
          rows += '<div class="col-6">';
          rows += '<h5 class="mb-0">9652</h5>';
          rows += ' <p class="text-muted font-14">Patient</p>';
          rows += '$</div>';
          rows += '<div class="col-6">';
          rows += '<h5 class="mb-0">7451</h5>';
          rows += '<p class="text-muted font-14">Activated</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".liste-praticiens").html(rows);
      }
      
    });
  }

  init();

  $(".add_submit").click(function(){

    var nom = $("#add_item").find("input[name='nom']").val();
    var prenom = $("#add_item").find("input[name='prenoms']").val();
    var mail = $("#add_item").find("input[name='mail']").val();
    var contact = $("#add_item").find("input[name='contact']").val();
    var sexe = $('.sexe-select').find(":selected").val();
    var tp_id = $('.type-select').find(":selected").val();

    var settings = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/type_praticien/"+tp_id+"/praticiens/creer?"+"pratNom="+nom+"&pratSexe="+sexe+"&pratPrenoms="+prenom+"&pratContact="+contact+"&pratEmail="+mail,
      "method": "POST",
      data:{"pratNom":nom,"pratSexe":sexe,"pratPrenoms":prenom,"pratContact":contact,"pratEmail":mail},
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

        if(nom != '' && prenom != ''){
          $.ajax(settings).done(function(data){
            $("#add_item").find("input[name='nom']").val("");
            $("#add_item").find("input[name='prenoms']").val("");
            $("#add_item").find("input[name='mail']").val("");
            $("#add_item").find("input[name='contact']").val("");
            init();
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminé');
          });
        }else{
          alert('Vous avez oublié le nom ou prénom.')
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
            alertify.success('Ligne enregistré avec succes.', 'Success Alert', {timeOut: 5000});
          });
        }else{
          alert('Vous avez oublié le code or libelle.');
        }

      });

}
//Praticient


praticien();