
$(document).ready(function(){
/*
* Utilisons $.ajax pour créer une instance de XmlHttpRequest
*/
var data_profess = [];
var data_societe = [];
var data_typ_exam = [];


 var page = window.location.search.substring(1).split('page=')[1];

 switch(page){
  case "professions":
    professions();
      $(".page-title").html("Profession");
    break;
  case "Societe":
    societe();
      $(".page-title").html("Société");
    break;
  case "Type_examen":
    type_examen();
      $(".page-title").html("Type d'examen");
    break;
  case "Examen":
    examen();
      $(".page-title").html("Examen");
    break;

  case "Type_patient":
    type_patient();
      $(".page-title").html("Type de patient");
    break;

  case "Lieu_travail":
    lieu_travail();
      $(".page-title").html("Lieu de travail");
    break;

  case "Type_contrat":
    type_contrat();
      $(".page-title").html("Type de contrat");
    break;

  case "Categorie":
    categorie();
      $(".page-title").html("Catégorie");
    break;

  case "Assurance":
    assurance();
      $(".page-title").html("Assurance");
    break;

  case "Specialite":
    specialite();
      $(".page-title").html("Spécialité");
    break;

  case "Acte":
    acte();
      $(".page-title").html("Acte");
    break;

  case "motif":
    motif();
      $(".page-title").html("Motif");
    break;

  case "Type_praticien":
    type_praticien();
      $(".page-title").html("Type de praticien");
    break;

  case "Etape":
    etape();
      $(".page-title").html("Etape");
    break;

  case "Famille_Medicament":
    famille_medicament();
      $(".page-title").html("Famille de médicament");
    break;

  case "Forme_Medicament":
    forme_medicament();
      $(".page-title").html("Forme de médicament");
    break;

  case "Cause":
    cause();
      $(".page-title").html("Cause");
    break;

  case "Famille_Pathologie":
    famille_pathologie();
      $(".page-title").html("Famille de pathologie");
    break;


  // Accident de travail
  case "activite":
    activite();
      $(".page-title").html("Activité");
    break;

  case "equipe":
    equipe();
      $(".page-title").html("Equipe");
    break;

  case "natureLesion":
    natureLesion();
      $(".page-title").html("Nature de lésion");
    break;

  case "secteur":
    secteur();
      $(".page-title").html("Secteur");
    break;

  case "agentMateriel":
    agentMateriel();
      $(".page-title").html("Agent materiel");
    break;

  case "siegeLesion":
    siegeLesion();
      $(".page-title").html("Siège de lésion");
    break;

  case "natureAccident":
    natureAccident();
      $(".page-title").html("Nature Accident");
    break;
 }

<<<<<<< HEAD
<<<<<<< HEAD






 //Assurance 
function assurance(){
=======
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
//natureAccident
 function natureAccident(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/natureaccidents/afficher",
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
          rows = rows +"<td>"+response[i].na_code+"</td>";
          rows = rows +"<td>"+response[i].na_libelle+"</td>";
          rows = rows +"<td>"+response[i].na_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].na_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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


/* Edit Item */
$("body").on("click",".edit-item",function(){

    var id = $(this).parent("td").data('id');
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/natureaccidents/modifier/"+id+"?"+"naCode="+e_code+"&naLibelle="+e_libelle,
            "method": "PUT",
            data:{"naCode":e_code, "naLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //natureAccident


//siegeLesion
 function siegeLesion(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/siegelesions/afficher",
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
          rows = rows +"<td>"+response[i].sl_code+"</td>";
          rows = rows +"<td>"+response[i].sl_libelle+"</td>";
          rows = rows +"<td>"+response[i].sl_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].sl_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/siegelesions/creer?"+"slCode="+code+"&slLibelle="+libelle,
          "method": "POST",
          data:{"slCode":code, "slLibelle":libelle},
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
          "url": config["base_url"]+"/siegelesions/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/siegelesions/modifier/"+id+"?"+"slCode="+e_code+"&slLibelle="+e_libelle,
            "method": "PUT",
            data:{"slCode":e_code, "slLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //siegeLesion

 //agentMateriel
 function agentMateriel(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/agentmateriels/afficher",
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
          rows = rows +"<td>"+response[i].am_code+"</td>";
          rows = rows +"<td>"+response[i].am_libelle+"</td>";
          rows = rows +"<td>"+response[i].am_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].am_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/agentmateriels/creer?"+"amCode="+code+"&amLibelle="+libelle,
          "method": "POST",
          data:{"amCode":code, "amLibelle":libelle},
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
          "url": config["base_url"]+"/agentmateriels/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/agentmateriels/modifier/"+id+"?"+"amCode="+e_code+"&amLibelle="+e_libelle,
            "method": "PUT",
            data:{"amCode":e_code, "amLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //agentMateriel

  //Secteur
 function secteur(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/secteurs/afficher",
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
          rows = rows +"<td>"+response[i].sec_code+"</td>";
          rows = rows +"<td>"+response[i].sec_libelle+"</td>";
          rows = rows +"<td>"+response[i].sec_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].sec_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/secteurs/creer?"+"secCode="+code+"&secLibelle="+libelle,
          "method": "POST",
          data:{"secCode":code, "secLibelle":libelle},
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
          "url": config["base_url"]+"/secteurs/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/secteurs/modifier/"+id+"?"+"secCode="+e_code+"&secLibelle="+e_libelle,
            "method": "PUT",
            data:{"secCode":e_code, "secLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //Secteur

 //Nature Lesion
 function natureLesion(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/naturelesions/afficher",
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
          rows = rows +"<td>"+response[i].nl_code+"</td>";
          rows = rows +"<td>"+response[i].nl_libelle+"</td>";
          rows = rows +"<td>"+response[i].nl_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].nl_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/naturelesions/creer?"+"nlCode="+code+"&nlLibelle="+libelle,
          "method": "POST",
          data:{"nlCode":code, "nlLibelle":libelle},
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
          "url": config["base_url"]+"/naturelesions/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/naturelesions/modifier/"+id+"?"+"nlCode="+e_code+"&nlLibelle="+e_libelle,
            "method": "PUT",
            data:{"nlCode":e_code, "nlLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //Nature Lesion


 //Equipe
 function equipe(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/equipes/afficher",
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
          rows = rows +"<td>"+response[i].eq_code+"</td>";
          rows = rows +"<td>"+response[i].eq_libelle+"</td>";
          rows = rows +"<td>"+response[i].eq_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].eq_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/equipes/creer?"+"eqCode="+code+"&eqLibelle="+libelle,
          "method": "POST",
          data:{"eqCode":code, "eqLibelle":libelle},
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
          "url": config["base_url"]+"/equipes/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/equipes/modifier/"+id+"?"+"eqCode="+e_code+"&eqLibelle="+e_libelle,
            "method": "PUT",
            data:{"eqCode":e_code, "eqLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //Equipe

 //Activite
 function activite(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/activites/afficher",
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
          rows = rows +"<td>"+response[i].act_code+"</td>";
          rows = rows +"<td>"+response[i].act_libelle+"</td>";
          rows = rows +"<td>"+response[i].act_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].act_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/activites/creer?"+"actCode="+code+"&actLibelle="+libelle,
          "method": "POST",
          data:{"actCode":code, "actLibelle":libelle},
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
          "url": config["base_url"]+"/activites/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/activites/modifier/"+id+"?"+"actCode="+e_code+"&actLibelle="+e_libelle,
            "method": "PUT",
            data:{"actCode":e_code, "actLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

 }
 //Activite

// Famille pathologie

  function famille_pathologie(){
  
    var init = function(){
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
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].fam_patho_code+"</td>";
          rows = rows +"<td>"+response[i].fam_patho_libelle+"</td>";
          rows = rows +"<td>"+response[i].fam_patho_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].fam_patho_date_modif+"</td>";
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

        var code = $("#prof_add").find("input[name='code']").val();
        var libelle = $("#prof_add").find("input[name='libelle']").val();

        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+"/familles_pathologies/creer?"+"fam_patho_code="+code+"&fam_patho_libelle="+libelle,
          "method": "POST",
          data:{"fam_patho_Code":code, "fam_patho_libelle":libelle},
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
          "url": config["base_url"]+"/familles_pathologies/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/familles_pathologies/modifier/"+id+"?"+"fam_patho_code="+e_code+"&fam_patho_libelle="+e_libelle,
            "method": "PUT",
            data:{"fam_patho_code":e_code, "fam_patho_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

// Famille pathologie

// Cause
  
 function cause(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/causes/afficher",
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
          rows = rows +"<td>"+response[i].cause_code+"</td>";
          rows = rows +"<td>"+response[i].cause_libelle+"</td>";
          rows = rows +"<td>"+response[i].cause_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].cause_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/causes/creer?"+"cause_code="+code+"&cause_libelle="+libelle,
          "method": "POST",
          data:{"cause_Code":code, "cause_libelle":libelle},
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
          "url": config["base_url"]+"/causes/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/causes/modifier/"+id+"?"+"cause_code="+e_code+"&cause_libelle="+e_libelle,
            "method": "PUT",
            data:{"cause_code":e_code, "cause_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}


// Cause 

//Forme medicament


 function forme_medicament(){
  
    var init = function(){
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
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].form_medic_code+"</td>";
          rows = rows +"<td>"+response[i].form_medic_libelle+"</td>";
          rows = rows +"<td>"+response[i].form_medic_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].form_medic_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/formes_medicaments/creer?"+"form_medic_code="+code+"&form_medic_libelle="+libelle,
          "method": "POST",
          data:{"form_medic_Code":code, "form_medic_libelle":libelle},
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
          "url": config["base_url"]+"/formes_medicaments/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/formes_medicaments/modifier/"+id+"?"+"form_medic_code="+e_code+"&form_medic_libelle="+e_libelle,
            "method": "PUT",
            data:{"form_medic_code":e_code, "form_medic_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

//Forme medicament

 // Famille medicament

 function famille_medicament(){
  
    var init = function(){
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
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].fam_medic_code+"</td>";
          rows = rows +"<td>"+response[i].fam_medic_libelle+"</td>";
          rows = rows +"<td>"+response[i].fam_medic_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].fam_medic_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/familles_medicaments/creer?"+"fam_medic_code="+code+"&fam_medic_libelle="+libelle,
          "method": "POST",
          data:{"fam_medic_Code":code, "fam_medic_libelle":libelle},
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
          "url": config["base_url"]+"/familles_medicaments/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/familles_medicaments/modifier/"+id+"?"+"fam_medic_code="+e_code+"&fam_medic_libelle="+e_libelle,
            "method": "PUT",
            data:{"fam_medic_code":e_code, "fam_medic_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
 // Famille medicament
 
 // Etape
 function etape(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/etapes/afficher",
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
          rows = rows +"<td>"+response[i].etp_code+"</td>";
          rows = rows +"<td>"+response[i].etp_libelle+"</td>";
          rows = rows +"<td>"+response[i].etp_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].etp_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/etapes/creer?"+"etp_code="+code+"&etp_libelle="+libelle,
          "method": "POST",
          data:{"etp_Code":code, "etp_libelle":libelle},
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
          "url": config["base_url"]+"/etapes/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/etapes/modifier/"+id+"?"+"etp_code="+e_code+"&etp_libelle="+e_libelle,
            "method": "PUT",
            data:{"etp_code":e_code, "etp_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
 // Etape


//Type praticien
function type_praticien(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/type_praticiens/afficher",
      "method": "GET",
      type:'POST',
      "headers": {
        "cache-control": "no-cache",
        "X-Auth-Token": config["auth_token"],
      headers: {
            "x-auth-token": config["auth_token"],
          },},
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
          rows = rows +"<td>"+response[i].t_prt_code+"</td>";
          rows = rows +"<td>"+response[i].t_prt_libelle+"</td>";
          rows = rows +"<td>"+response[i].t_prt_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].t_prt_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/type_praticiens/creer?"+"t_prt_code="+code+"&t_prt_libelle="+libelle,
          "method": "POST",
          data:{"t_prt_Code":code, "t_prt_libelle":libelle},
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
          "url": config["base_url"]+"/type_praticiens/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/type_praticiens/modifier/"+id+"?"+"t_prt_code="+e_code+"&t_prt_libelle="+e_libelle,
            "method": "PUT",
            data:{"t_prt_code":e_code, "t_prt_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

//Type praticien


//Motif

function motif(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/motifs/afficher",
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
          rows = rows +"<td>"+response[i].motif_code+"</td>";
          rows = rows +"<td>"+response[i].motif_libelle+"</td>";
          rows = rows +"<td>"+response[i].motif_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].motif_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/motifs/creer?"+"motif_code="+code+"&motif_libelle="+libelle,
          "method": "POST",
          data:{"motif_Code":code, "motif_libelle":libelle},
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
          "url": config["base_url"]+"/motifs/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/motifs/modifier/"+id+"?"+"motif_code="+e_code+"&motif_libelle="+e_libelle,
            "method": "PUT",
            data:{"motif_code":e_code, "motif_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

//Motif

 // Actes

 function acte(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/actes/afficher",
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
        
        $("tbody").html("");
        for (var i = 0; i < response.length; i++) {
          var rows = '';
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].acte_code+"</td>";
          rows = rows +"<td>"+response[i].acte_libelle+"</td>";
          rows = rows +"<td>"+response[i].acte_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].acte_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +'|<button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
          rows = rows +"</tr>"; 
          $("tbody").append(rows);

        }

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
          "url": config["base_url"]+"/actes/creer?"+"acte_code="+code+"&acte_libelle="+libelle,
          "method": "POST",
          data:{"acte_Code":code, "acte_libelle":libelle},
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
          "url": config["base_url"]+"/actes/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/actes/modifier/"+id+"?"+"acte_code="+e_code+"&acte_libelle="+e_libelle,
            "method": "PUT",
            data:{"acte_code":e_code, "acte_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

 // Actes

 // Spécialité
 function specialite(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/specialites/afficher",
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
          rows = rows +"<td>"+response[i].sp_code+"</td>";
          rows = rows +"<td>"+response[i].sp_libelle+"</td>";
          rows = rows +"<td>"+response[i].sp_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].sp_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/specialites/creer?"+"sp_code="+code+"&sp_libelle="+libelle,
          "method": "POST",
          data:{"sp_Code":code, "sp_libelle":libelle},
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
          "url": config["base_url"]+"/specialites/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/specialites/modifier/"+id+"?"+"sp_code="+e_code+"&sp_libelle="+e_libelle,
            "method": "PUT",
            data:{"sp_code":e_code, "sp_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
 // Spécialité

 //Assurance 
function assurance(){
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/assurances",
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
          rows = rows +"<td>"+response[i].assure_code+"</td>";
          rows = rows +"<td>"+response[i].assure_libelle+"</td>";
          rows = rows +"<td>"+response[i].assure_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].assure_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/assurances?"+"assureCode="+code+"&assureLibelle="+libelle,
          "method": "POST",
          data:{"assureCode":code, "assureLibelle":libelle},
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
          "url": config["base_url"]+"/assurances/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/assurances/"+id+"?"+"assureCode="+e_code+"&assureLibelle="+e_libelle,
            "method": "PUT",
            data:{"assureCode":e_code, "assureLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
 //Assurance

//Categorie

function categorie(){
  
    var init = function(){
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].cate_code+"</td>";
          rows = rows +"<td>"+response[i].cate_libelle+"</td>";
          rows = rows +"<td>"+response[i].cate_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].cate_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/categories?"+"cateCode="+code+"&cateLibelle="+libelle,
          "method": "POST",
          data:{"cateCode":code, "cateLibelle":libelle},
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
          "url": config["base_url"]+"/categories/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/categories/"+id+"?"+"cateCode="+e_code+"&cateLibelle="+e_libelle,
            "method": "PUT",
            data:{"cateCode":e_code, "cateLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

//Categorie

//Type contrat
function type_contrat(){
  
    var init = function(){
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].t_contrat_code+"</td>";
          rows = rows +"<td>"+response[i].t_contrat_libelle+"</td>";
          rows = rows +"<td>"+response[i].t_contrat_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].t_contrat_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/type_contrats?"+"tContratCode="+code+"&tContratLibelle="+libelle,
          "method": "POST",
          data:{"tContratCode":code, "tContratLibelle":libelle},
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
          "url": config["base_url"]+"/type_contrats/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/type_contrats/"+id+"?"+"tContratCode="+e_code+"&tContratLibelle="+e_libelle,
            "method": "PUT",
            data:{"tContratCode":e_code, "tContratLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

//Type contrat


 //lieu_travail
function lieu_travail(){
  
    var init = function(){
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].l_trav_code+"</td>";
          rows = rows +"<td>"+response[i].l_trav_libelle+"</td>";
          rows = rows +"<td>"+response[i].l_trav_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].l_trav_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/lieu_travails?"+"lTravCode="+code+"&lTravLibelle="+libelle,
          "method": "POST",
          data:{"lTravCode":code, "lTravLibelle":libelle},
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
          "url": config["base_url"]+"/lieu_travails/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/lieu_travails/"+id+"?"+"lTravCode="+e_code+"&lTravLibelle="+e_libelle,
            "method": "PUT",
            data:{"lTravCode":e_code, "lTravLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
 //Lieu de travail


// Type_patient
function type_patient(){
  
    var init = function(){
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].t_pat_code+"</td>";
          rows = rows +"<td>"+response[i].t_pat_libelle+"</td>";
          rows = rows +"<td>"+response[i].t_pat_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].t_pat_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/type_patient?"+"tPatCode="+code+"&tPatLibelle="+libelle,
          "method": "POST",
          data:{"tPatCode":code, "tPatLibelle":libelle},
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
          "url": config["base_url"]+"/type_patient/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/type_patient/"+id+"?"+"tPatCode="+e_code+"&tPatLibelle="+e_libelle,
            "method": "PUT",
            data:{"tPatCode":e_code, "tPatLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

// Fin Type_patient

// Profession
function professions(){
  
    var init = function(){
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
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].proff_code+"</td>";
          rows = rows +"<td>"+response[i].proff_libelle+"</td>";
          rows = rows +"<td>"+response[i].proff_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].proff_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/professions?"+"proffCode="+code+"&proffLibelle="+libelle,
          "method": "POST",
          data:{"proffCode":code, "proffLibelle":libelle},
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
          "url": config["base_url"]+"/professions/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/professions/"+id+"?"+"proffCode="+e_code+"&proffLibelle="+e_libelle,
            "method": "PUT",
            data:{"proffCode":e_code, "proffLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

// Fin Profession


// Societe 
function societe(){
  
    var init = function(){
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

      data_societe = response;
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].socie_code+"</td>";
          rows = rows +"<td>"+response[i].socie_libelle+"</td>";
          rows = rows +"<td>"+response[i].socie_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].socie_date_modif+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
          "url": config["base_url"]+"/societes/creer?"+"socie_code="+code+"&socie_libelle="+libelle,
          "method": "POST",
          data:{"socie_code":code, "socie_libelle":libelle},
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
          "url": config["base_url"]+"/societes/supprimer/"+id,
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/societes/modifier/"+id+"?"+"socie_code="+e_code+"&socie_libelle="+e_libelle,
            "method": "PUT",
            data:{"socie_code":e_code, "socie_libelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}

// societe



// Type_examen
function type_examen(){
<<<<<<< HEAD
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
  
    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
<<<<<<< HEAD
<<<<<<< HEAD
      "url": config["base_url"]+"/assurances",
=======
      "url": config["base_url"]+"/type_examens",
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
      "url": config["base_url"]+"/type_examens",
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
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
<<<<<<< HEAD
<<<<<<< HEAD
      data_profess = response;
=======
      data_typ_exam = response;
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
      data_typ_exam = response;
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
<<<<<<< HEAD
<<<<<<< HEAD
          rows = rows +"<td>"+response[i].assure_code+"</td>";
          rows = rows +"<td>"+response[i].assure_libelle+"</td>";
          rows = rows +"<td>"+response[i].assure_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].assure_date_modif+"</td>";
=======
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
          rows = rows +"<td>"+response[i].t_exam_code+"</td>";
          rows = rows +"<td>"+response[i].t_exam_libelle+"</td>";
          rows = rows +"<td>"+response[i].t_exam_date_enreg+"</td>";
          rows = rows +"<td>"+response[i].t_exam_date_modif+"</td>";
<<<<<<< HEAD
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
          rows = rows +'<td data-id="'+response[i].id+'">';
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
<<<<<<< HEAD
<<<<<<< HEAD
          "url": config["base_url"]+"/assurances?"+"assureCode="+code+"&assureLibelle="+libelle,
          "method": "POST",
          data:{"assureCode":code, "assureLibelle":libelle},
=======
          "url": config["base_url"]+"/type_examens?"+"tExamCode="+code+"&tExamLibelle="+libelle,
          "method": "POST",
          data:{"tExamCode":code, "tExamLibelle":libelle},
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
          "url": config["base_url"]+"/type_examens?"+"tExamCode="+code+"&tExamLibelle="+libelle,
          "method": "POST",
          data:{"tExamCode":code, "tExamLibelle":libelle},
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
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
<<<<<<< HEAD
<<<<<<< HEAD
          "url": config["base_url"]+"/assurances/"+id,
=======
          "url": config["base_url"]+"/type_examens/"+id,
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
          "url": config["base_url"]+"/type_examens/"+id,
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
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
    var code = $(this).parent("td").prev("td").prev("td").prev("td").prev("td").text();
    var libelle = $(this).parent("td").prev("td").prev("td").prev("td").text();

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);

});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
<<<<<<< HEAD
<<<<<<< HEAD
            "url": config["base_url"]+"/assurances/"+id+"?"+"assureCode="+e_code+"&assureLibelle="+e_libelle,
            "method": "PUT",
            data:{"assureCode":e_code, "assureLibelle":e_libelle},
=======
            "url": config["base_url"]+"/type_examens/"+id+"?"+"tExamCode="+e_code+"&tExamLibelle="+e_libelle,
            "method": "PUT",
            data:{"tExamCode":e_code, "tExamLibelle":e_libelle},
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
            "url": config["base_url"]+"/type_examens/"+id+"?"+"tExamCode="+e_code+"&tExamLibelle="+e_libelle,
            "method": "PUT",
            data:{"tExamCode":e_code, "tExamLibelle":e_libelle},
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
<<<<<<< HEAD
<<<<<<< HEAD
 //Assurance

//Type contrat
=======
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
// Type examen


// Examen
function examen(){
  var type = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/type_examens",
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
      data_typ_exam = response;
      if (response.length>0) {
        var rows = '';
        rows = rows +'<option selected>Selection du genre</option>';
        for (var i = 0; i < response.length; i++) {

          
          rows = rows +'<option value="'+response[i].id+'">'+response[i].t_exam_libelle+'</option>';      
        }

        $(".custom-select").html(rows);
      }
      
    });
  }

  type();


    var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/examens/afficher",
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
      data_typ_exam = response;
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].id+"</td>";
          rows = rows +"<td>"+response[i].exam_code+"</td>";
          rows = rows +"<td>"+response[i].exam_libelle+"</td>";
          rows = rows +"<td data-id=\""+response[i].type_examen.id+"\">"+response[i].type_examen.t_exam_libelle+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
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
        var type = $('.custom-select').find(":selected").val();

        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+"/type_examen/"+type+"/examens/creer?"+"examCode="+code+"&examLibelle="+libelle,
          "method": "POST",
          data:{"examCode":code,"examLibelle":libelle},
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
            $("#prof_add").find("input[name='type']").val('');
            $("#prof_add").find("input[name='libelle']").val('');
            
            init();
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminer');
        });
    }else{
        alert('You are missing code or libelle.')
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
    'Deleted!',
    'Your file has been deleted.',
    'success'
  )

    
    var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+"/examens/supprimer/"+id,
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
    var type = $(this).parent("td").prev("td").data("id");

    $(".edit-modal-lg").find("input[name='e_code']").val(code);
    $(".edit-modal-lg").find("input[name='e_libelle']").val(libelle);
    $(".edit-modal-lg").find(".edit-id").val(id);
    $('.custom-select').val(type);


});


/* Updated new Item */
$(".edit_submit").click(function(e){

    var e_code = $(".edit-modal-lg").find("input[name='e_code']").val();

    var e_libelle = $(".edit-modal-lg").find("input[name='e_libelle']").val();
    var e_type = $('.e_type').find(":selected").val();
    var id = $(".edit-modal-lg").find(".edit-id").val();
    
    if(e_code != '' && e_libelle != ''){
        $.ajax({
            "async": true,
            dataType: 'json',
            "crossDomain": true,
            "url": config["base_url"]+"/type_examen/"+e_type+"/examens/modifier/"+id+"?"+"examCode="+e_code+"&examLibelle="+e_libelle,
            "method": "PUT",
            data:{"examCode":e_code, "examLibelle":e_libelle},
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
        alert('You are missing code or libelle.'+e_code+e_libelle);
    }

});

}
<<<<<<< HEAD
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed




});
