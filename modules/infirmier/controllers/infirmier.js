

//Infirmier

function infirmier(){

  var consultation;
  var patient_cons;

  var ComboActe = function(){

    $(".acte-select").select2({
    tags: true,
    tokenSeparators: [','],
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
      data_profess = response;
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
        }

        $(".acte-select").html(rows);
      }
      
    });
  }

  ComboActe();
  $(".soins_save").click(function(){
    $(".soins-table").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
  });
  $(".soins-table").on('click','.delete-soins',function(){
    $(this).parent().parent().remove();
  });


  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultations/etape/1/rechercher",
      "method": "GET",
      type:'POST',
      headers: {
        "x-auth-token": config["auth_token"],
      },
      success : function(code_html, statut){
        //alert(code_html[0].proff_libelle);
      },
      error : function(resultat, statut, erreur){
        $(".row-in").html("");

      },
      complete : function(resultat, statut){
      } 
    }





    $.ajax(settings).done(function (response) {
      //consultation = response;

      if (response.length>0) {
        var rows ='' ;
        consultation = response;
      $('.inf_badge').html(response.length);

        for (var i = 0; i < response.length; i++) {
          rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-target=".bs-example-modal-lg" data-id="'+response[i].id+':'+i+'" >';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block ">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'" | '+response[i].patient.pat_contact+'</p>';
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div class="row text-center m-t-20">';
          
          rows += '</div>';
          rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".row-in").html(rows);


      }
      
    });
  }

  init();
  $(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();

    var id = $(this).data('id').split(":");
    patient_cons = consultation[id[1]];


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

    $(".patient-info").html(rows);



    var moit_inf = ""; 
    for (var i = patient_cons.motifs.length - 1; i >= 0; i--) {
      moit_inf +=  '<tr><td>'+(patient_cons.motifs.length-i)+"</td><td>"+patient_cons.motifs[i].motif_libelle+"</td><td></td>";
    }
    $(".motif_inf-tb tbody").html(moit_inf);

    $(".acte-med-select").select2({
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

    $(".add-motif_inf_cons").on("click", function(){
      if($(".acte-med-select").val()!=null){
        $(".motif_inf-tb tbody").append("<tr data-id='"+$(".acte-med-select").val()+"'><td></td><td>"+$(".acte-med-select option:selected").text()+"</td><td><i class=\"mdi mdi-delete motif-med-delete\"></i></td></tr>");
      }
    });

    $(".motif_inf-tb").on("click",".motif-med-delete", function(){
      $(this).parent().parent().remove();
    });
  });


  $(".infrimier_save").click(function()
  {
    var tension= $("input[name='tension']").val();
    var temp= $("input[name='temperature']").val();
    var poids= $("input[name='poids']").val();

     // Motif saved
     if ($('.soins-table tr').length>0){
    var motif_id = "";
    $('.motif_inf-tb tbody tr').each(function() {
      if (typeof $(this).data("id")!=="undefined"){
        motif_id += ","+$(this).data("id");
      }

    });
    motif_id = motif_id.substr(1);
      alert(motif_id);

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

    $('.soins-table tr').each(function() {
    // Add Soins
    var acte_id = $(this).find("td").eq(0).data("id");
    var comment = $(this).find("td").eq(1).html();
    if (typeof acte_id !== "undefined") {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": config["base_url"]+"/consultation/"+patient_cons.id+"/acte/"+acte_id+"/soins/creer?soins_commentaire="+comment,
        "method": "POST",
        data:{
          "soins_commentaire":comment
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

    // Add Soins
    
  });
  }
  // Modif consult


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/patient/"+patient_cons.patient.id+"/infirmier/"+patient_cons.infirmier.id+"/specialite/"+patient_cons.specialite.id+"/medecin/"+patient_cons.medecin.id+"/etape/"+2+"/consultations/modifier/"+patient_cons.id+"?cons_poids="+poids+"&cons_temperature="+temp+"&cons_temsion_alt="+tension,
    "method": "PATCH",
    data:{
      "cons_poids":poids,
      "cons_temperature":temp,
      "cons_temsion_alt":tension
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
      init();
      //window.location = config["ui_url"]+'?page=infirmier';
      
    });
  // Modif consult
});




}

infirmier();


   