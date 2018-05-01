//Agent

var param = window.location.search.substring(1).split('&');

var page=param[0].split('=')[1] ;

   function agent(){

    // Initialisation
    var patients;
    // Pour activer le click du bouton de l'input de type file 
    var photo ;
    $('.photo').on('input',function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onloadend = function(e) {
           $('.avatar').attr('src',reader.result)
          photo = reader.result;
          //alert(reader.result)
        }
        
        reader.readAsDataURL(file);
      });

    $(".avatar").click(function(){

    document.getElementById('photo').click();
  });
     var ComboEntite = function(){
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
        var rows = "<option value='init' selected>Selection de l'entité</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].enti_libelle+"</option>";
        }

        $(".entite-select").html(rows);
      }
      
    });
  }


  var ComboLieuT = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/lieu_travails",
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
        var rows = "<option value='init' selected>Selection du Lieu</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].l_trav_libelle+"</option>";
        }

        $(".lieu-select").html(rows);
      }
      
    });
  }


  var ComboTypContr = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/type_contrats",
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
        var rows = "<option value='init' selected>Selection du contrat</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].t_contrat_libelle+"</option>";
        }

        $(".contrat-select").html(rows);
      }
      
    });
  }

  var comboCat = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/categories",
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
        var rows = "<option value='init' selected>Selection de la catégorie</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].cate_libelle+"</option>";
        }

        $(".categorie-select").html(rows);
      }
      
    });
  }

  var ComboLProf = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/professions",
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
        var rows = "<option value='init' selected>Selection de la profession</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].proff_libelle+"</option>";
        }

        $(".prof-select").html(rows);
      }
      
    });
  }
  var ComboTyP = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/type_patient",
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
        var rows = "<option value='init' selected>Selection du type</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].t_pat_libelle+"</option>";
        }

        $(".type-select").html(rows);
      }
      
    });
  }


  ComboEntite();
  ComboLieuT();
  ComboTypContr();
  comboCat();
  ComboLProf();
  ComboTyP();


  var typ_id = 0;
  if (page=="agent") {
    typ_id = 1;
  }else if (page=="autre"){
    typ_id = 3;
  }else if (page=="ayant_droit"){
    typ_id = 2;
  }
  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/patients/typePatient/"+typ_id,
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
      patients = response;
      if (response.length>0) {
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {
        	rows += '<div class="col-lg-4" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].pat_prenoms+"  "+response[i].pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].pat_email+'</p>';

          if (typeof response[i].profession!="undefined") {
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].profession.proff_libelle+'</p>';
          }
          
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
          // rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".liste-patient").html(rows);
      }
      
    });
  }

  init();

  $(".add_submit").click(function(){

    var nom = $("#add_item").find("input[name='nom']").val();
    var prenom = $("#add_item").find("input[name='prenoms']").val();
    var mail = $("#add_item").find("input[name='mail']").val();
    var contact = $("#add_item").find("input[name='contact']").val();
    var lieu_naiss = $("#add_item").find("input[name='lieu_naiss']").val();
    var nb_enfant = $("#add_item").find("input[name='nb_enfant']").val();
    var grp_sang = $("#add_item").find("input[name='grp_sang']").val();
    var photo = $("#add_item").find("input[name='photo']").val();
    //var photo = "test de photo";
    var matricule = $("#add_item").find("input[name='matricule']").val();
    var date_naiss = $("#add_item").find("input[name='date_naiss']").val();
    var localite = $("#add_item").find("input[name='localite']").val();

    var sexe = $('.sexe-select').find(":selected").val();
    var tp_id = $('.type-select').find(":selected").val();
    var entite = $(".entite-select").find(":selected").val();
    var lieuT = $(".lieu-select").find(":selected").val();
    var typContr = $(".contrat-select").find(":selected").val();
    var cat = $(".categorie-select").find(":selected").val();
    var lProf = $(".prof-select").find(":selected").val();
    var tyP = $(".type-select").find(":selected").val();
    var civil = $(".civilite-select").find(":selected").val();
    var sit_mat = $(".sit_mat-select").find(":selected").val();





    var url = "/entite/"+entite+"/lieutravail/"+lieuT+"/profession/"+lProf+"/typecontrat/"+typContr+"/categorie/"+cat+"/type_patient/"+tyP+"/patient/creer?";

    url += "patMatricule="+matricule+"&";
    url += "patPhoto="+photo+"&";
    url += "patNom="+nom+"&";
    url += "patPrenoms="+prenom+"&";
    url += "patDateNaiss="+date_naiss+"&";
    url += "patLieuNaiss="+lieu_naiss+"&";
    url += "patCivilite="+civil+"&";
    url += "patGrpSanguin="+grp_sang+"&";
    url += "patNbreEnfant="+nb_enfant+"&";
    url += "patContact="+contact+"&";
    url += "patSitMat="+sit_mat+"&";
    url += "patEmail="+mail+"&";
    url += "patLocalite="+localite+"&";
    url += "patSexe="+sexe;

    // alert(url);


    var settings = {
      "async": true,
      dataType: 'json',
      "crossDomain": true,
      "url": config["base_url"]+""+url,
      "method": "POST",
      data:{
        "patMatricule":matricule,
        "patPhoto":photo,
        "patNom":nom,
        "patPrenoms":prenom,
        "patDateNaiss":date_naiss,
        "patLieuNaiss":lieu_naiss,
        "patCivilite":civil,
        "patGrpSanguin":grp_sang,
        "patNbreEnfant":nb_enfant,
        "patContact":contact,
        "patSitMat":sit_mat,
        "patEmail":mail,
        "patLocalite":localite,
        "patSexe":sexe
      },
      // file: file,
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
          } 
        }

        if(nom != '' && prenom != ''){
          $.ajax(settings).done(function(data){
            nom = $("#add_item").find("input[name='nom']").val("");
            prenom = $("#add_item").find("input[name='prenoms']").val("");
            mail = $("#add_item").find("input[name='mail']").val("");
            contact = $("#add_item").find("input[name='contact']").val("");
            lieu_naiss = $("#add_item").find("input[name='lieu_naiss']").val("");
            nb_enfant = $("#add_item").find("input[name='nb_enfant']").val("");
            grp_sang = $("#add_item").find("input[name='grp_sang']").val("");
            photo = $("#add_item").find("input[name='photo']").val("");
            matricule = $("#add_item").find("input[name='matricule']").val("");
            date_naiss = $("#add_item").find("input[name='date_naiss']").val("");
            localite = $("#add_item").find("input[name='localite']").val("");
            //init();
            //$("#alertify-success-callback").click();
            $('.agent_create').modal('hide');
            
          });
        }else{

          alert('Vous avez oublié le nom ou le prénom.')
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
            alertify.success('Ligne supprimée avec succes.', 'Success Alert', {timeOut: 5000});
          });
        }else{
          alert('Vous avez oublié le code or libelle.');
        }

      });

}
   //Agent

   agent()