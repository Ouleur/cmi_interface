$(document).ready(function(){
var data_user;

function addUtilisateur(){
  $(".add_user").click(function(){

        var nom = $("#prof_add").find("input[name='nom']").val();
        var prenoms = $("#prof_add").find("input[name='prenoms']").val();
        var mail = $("#prof_add").find("input[name='mail']").val();
        var password = $("#prof_add").find("input[name='password']").val();
        var pass_confirm = $("#prof_add").find("input[name='pass_confirm']").val();
        var partner = $("#prof_add").find("select[name='partner']").find(":selected").val();
        // var password = $("#profil_edit").find("input[name='password']").val();
        // var pass_confirm = $("#profil_edit").find("input[name='pass_confirm']").val();

        url = (typeof partner=='undefined') ? "/users" : "/partner/"+partner+"/users";

        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+url+"?lastname="+nom+"&firstname="+prenoms+"&email="+mail+"&plainPassword="+password,
          "method": "POST",
          data:{"lastname":nom, "firstname":prenoms, "email":mail,"plainPassword":password},
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

        if(password==pass_confirm){
        $.ajax(settings).done(function(data){
            /*$("#prof_add").find("input[name='code']").val('');
            $("#prof_add").find("input[name='libelle']").val('');
            
            init();*/
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminer');
        });
    }else{
        alert('You are missing code or libelle.')
    }
});
}


function afficherUtilisateur(){
	    var init = function(){

      $(".e_partner-select").select2({
      placeholder: 'Selectionnez un médecin',
      dropdownParent: $("#profil_edit"),
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

      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/user/afficher",
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
      data_user = response;
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+i+"</td>";
          rows = rows +"<td>"+response[i].firstname+"</td>";
          rows = rows +"<td>"+response[i].lastname+"</td>";
          rows += (typeof response[i].email=='undefined') ? "<td></td>" : "<td>"+response[i].email+"</td>";
          rows += (typeof response[i].praticen=='undefined') ? "<td data-id=''></td>" : "<td data-id='"+response[i].praticen.id+"'>"+response[i].praticen.prat_prenoms+" "+response[i].praticen.prat_nom+"</td>";
          rows = rows +'<td data-id="'+response[i].id+':'+i+'">';
          rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +'|<button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
          rows = rows +"</tr>";         
        }

        $("tbody").html(rows);
      }
      
    });
  }

  init();


    $(".add_submit").click(function(){

        var code = $("#prof_add").find("input[name='code']").val();
        var libelle = $("#prof_add").find("input[name='libelle']").val();

        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+"/natureaccidents/creer?"+"naCode="+code+"&naLibelle="+libelle,
          "method": "POST",
          data:{"naCode":code, "naLibelle":libelle},
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
            $("#prof_add").find("input[name='code']").val('');
            $("#prof_add").find("input[name='libelle']").val('');
            
            init();
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminer');
        });
    }else{
        alert('You are missing code or libelle.')
    }
    });
}

function supprimerUtilisateur(){

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
    'Deleted!',
    'Your file has been deleted.',
    'success'
  )

    
    var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+"/natureaccidents/supprimer/"+id,
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
}

function modifierUtilisateur(){
	/* Updated new Item */
/* Edit Item */
$("body").on("click",".edit-item",function(){

    var id = $(this).parent("td").data('id').split(":");
    var nom = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var prenoms = $(this).parent("td").prev("td").prev("td").prev("td").text();
    var mail = $(this).parent("td").prev("td").prev("td").text();
    var partner = $(this).parent("td").prev("td").data("id");

    alert(partner)
    $(".edit-modal-lg").find("input[name='e_nom']").val(nom);
    $(".edit-modal-lg").find("input[name='e_prenoms']").val(prenoms);
    $(".edit-modal-lg").find("input[name='e_mail']").val(mail);
    $(".edit-modal-lg").find(".edit-id").val(id[0]);
    $(".edit-modal-lg").find("select[name='e_partner']").val(partner);

    droit = "";
    for (var i = 0; i < modules.length; i++) {
      
      droit += '<div class="col-sm-6 '+modules[i].nom+'">';
      droit += '<div class="row">';
      droit += '<div class="col-lg-6">';
      droit +=  modules[i].titre;
      droit += '</div>';
      droit += '<div class="col-lg-3">';
      droit += '<label class="custom-control custom-checkbox"><input class="custom-control-input '+modules[i].nom+'" type="checkbox" data-name="'+modules[i].nom+'"><span class="custom-control-indicator"></span></label>';
      droit += '</div>';
      droit += '</div>';
      droit += '</div>';
    }

    $(".droit_module").html(droit);

    //Cochons les modules dont l4utilisateur a droit
    for (var i = 0; i < data_user[id[1]].droit_acces.length; i++) {
      $("input."+data_user[id[1]].droit_acces[i].da_fonctionalite+":checkbox").attr('checked', true);
    }


$(".edit_submit").click(function(e){
        // alert(modules[0].nom);
    // var password = $("#profil_edit").find("input[name='e_password']").val();
    // var pass_confirm = $("#profil_edit").find("input[name='e_pass_confirm']").val();

    var id = $("#profil_edit").find(".edit-id").val();
    $.ajax({
      "async":true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+"/droitAccess/supprimer/user/"+id,
      "method":"DELETE",
      headers:{
        "x-auth-token":config["auth_token"],
      },
      success:function(code_html,statut){

      },
      error:function(resultat,statut,erreur){

      },
      complete:function(resultat,statut){

      }
    }).done(function(data){

    });


    for (var i = 0; i <modules.length; i++) {
      if ($(".droit_module input."+modules[i].nom).is(':checked')) {
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/user/"+id+"/droitAccess/creer?daFonctionalite="+$(".droit_module input."+modules[i].nom).data("name"),
            "method": "POST",
            data:{"daFonctionalite":$(".droit_module input."+modules[i].nom).data("name")},
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
            
           
        });
      }
    }

        var id = $("#profil_edit").find(".edit-id").val();
        var nom = $("#profil_edit").find("input[name='e_nom']").val();
        var prenoms = $("#profil_edit").find("input[name='e_prenoms']").val();
        var mail = $("#profil_edit").find("input[name='e_mail']").val();
        var partner = $("#profil_edit").find("select[name='e_partner']").find(":selected").val();
        // var password = $("#profil_edit").find("input[name='password']").val();
        // var pass_confirm = $("#profil_edit").find("input[name='pass_confirm']").val();

        url = (typeof partner=='undefined') ? "/users" : "/partner/"+partner+"/users";

        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+url+"/"+id+"?lastname="+nom+"&firstname="+prenoms+"&email="+mail,
          "method": "PATCH",
          data:{"lastname":nom, "firstname":prenoms,"email":mail},
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

        // if(password==pass_confirm){
        $.ajax(settings).done(function(data){
            /*$("#prof_add").find("input[name='code']").val('');
            $("#prof_add").find("input[name='libelle']").val('');
            
            init();*/
            //$("#alertify-success-callback").click();
            alertify.success('Modification terminée .');
        });
    // }else{
    //     alert('You are missing code or libelle.')
    // }

});
});
}

 var page = window.location.search.substring(1).split('&')[0].split('page=')[1];


  switch(page){
    case "utilisateur":
      addUtilisateur();
      afficherUtilisateur();
      modifierUtilisateur();
    break;
    }


});