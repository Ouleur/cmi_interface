
// Consultation
function consultation(){

  add_motif = function(val){
        var code = "AUTO_CODE";
        var libelle = val;

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

        $.ajax(settings).done(function(data){
            $("#prof_add").find("input[name='code']").val('');
            $("#prof_add").find("input[name='libelle']").val('');
            
            init();
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminer');
        });

      return libelle;
  };

  $('.motif-select').select2({
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

  $(".motif-select").keyup(function (e)  {
    if(e.keyCode === 13) {
        alert('You pressed enter!');
        }
    });



  var optionsMtle = {

    url: function(phrase) {
      return config["base_url"]+"/patientsSearchMtle";
    },

    getValue: function(element) {
      return element.pat_nom+" - "+element.pat_matricule;
    },

    ajaxSettings: {
      async: true,
      crossDomain: true,
      dataType: "json",
      method: "GET",
      data: {
        dataType: "json"
      },
      headers: {
        "x-auth-token": config["auth_token"],
      }
    },

    preparePostData: function(data) {
      data.phrase = $("#template-custom").val();
      return data;
    },

    requestDelay: 400
  };

  var options = {

    url: function(phrase) {
      return config["base_url"]+"/patientsSearchNom";
    },

    getValue: function(element) {
      return element.pat_nom+" - "+element.pat_matricule;
    },

    ajaxSettings: {
      async: true,
      crossDomain: true,
      dataType: "json",
      method: "GET",
      data: {
        dataType: "json"
      }
    },

    preparePostData: function(data) {
      data.phrase = $("#search-nom").val();
      return data;
    },

    requestDelay: 400
  };


  $("#consul-contain").hide();
  $(".patient-search").click(function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/patients/matricule/"+($('#template-custom').val().split(' - ')[1] || $('#search-nom').val().split(' - ')[1]),
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
        var rows = "";
        rows += "<input id='patient_id' name='id' type='text' hidden='true' value='"+response[0].id+"'>";
        rows += "<input id='etape' name='id' type='text' hidden='true' value='1'>";
        rows += "<p><strong>Matricule : </strong>"+response[0].pat_matricule+"</p>";
        rows += "<p><strong>Nom : </strong>"+response[0].pat_nom+"</p>";
        rows += "<p><strong>Prénoms : </strong>"+response[0].pat_prenoms+"</p>";

        date = response[0].pat_date_naiss.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1');
        now = new Date();
        age = now.getFullYear() - eval(date);
        if (age>1) {
          age = age+" ans";
        }else
        {
          age = age+" an";
        }
        rows += "<p><strong>Age : </strong>"+age+"</p>";
        rows += "<p><strong>Groupe Sanguin : </strong>"+response[0].pat_grp_sanguin+"</p>";
        $("#patient-info").html(rows);

        $("#consul-contain").show();
      }
      
    });
  });


  $("#template-custom").easyAutocomplete(optionsMtle);
  $("#search-nom").easyAutocomplete(options);





//================================================================//
var ComboInfir = function(){

  $(".infirmer-select").select2({
      placeholder: 'Selectionnez un infirmier',
      ajax: {
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

   }
  ComboInfir();

  var ComboMed = function(){
   $(".medecin-select").select2({
      placeholder: 'Selectionnez un médecin',
      ajax: {
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
  }

  ComboMed();

  var ComboSpec = function(){
    $(".special-select").select2({
      placeholder: 'Selectionnez une spécialité',
      ajax: {
        url: config["base_url"]+'/specialite/selection',
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
  }



  ComboSpec();

  $(".save-consul").click(function(){
    var patient = $("#patient_id").val();
    var etape = $("#etape").val();


    var infirmier = $('.infirmer-select').find(":selected").val();

    var motifs =$('.motif-select').val()+"";
    
    var speci = $(".special-select").find(":selected").val();
    var medecin = $(".medecin-select").find(":selected").val();

    // alert(infirmier+" "+motifs+" "+speci+" "+medecin);

    if(patient != '' && infirmier != '' && motifs != '' && speci != '' && medecin != ''){
      $.ajax({
        "async": true,
        dataType: 'json',
        "crossDomain": true,
        "url": config["base_url"]+"/patient/"+patient+"/infirmier/"+infirmier+"/mofitifs/"+motifs.replace(',','_')+"/specialite/"+speci+"/medecin/"+medecin+"/etape/"+etape+"/consultations/creer",
        "method": "POST",
        headers: {
          "x-auth-token": config["auth_token"],
        },
        success : function(code_html, statut){
              //alert(code_html[0].proff_libelle);
            alertify.success('Consultation créer avec succes.', 'Success Alert', {timeOut: 5000});

            },
            error : function(resultat, statut, erreur){
            },
            complete : function(resultat, statut){
            } 
          }).done(function(data){
              window.location = config["ui_url"]+'?page=consulJour';
//            init(); 
          });
        }else{
          alert('Vous avez oublié certains champs importants');
        }


      });

  $(".add-motif").click(function(){

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


}


consultation();