$(document).ready(function(){



	var page = window.location.search.substring(1).split('page=')[1];


	switch(page){
    case "pathologie":
    $(".page-title").html("Pathologie");
    pathologie();
    break;

    case "medicament":
    medicament();
    $(".page-title").html("Medicament");
    break;

    case "praticien":
    praticien();
      $(".page-title").html("Praticien");
    break;

    case "entite":
      entite();
      $(".page-title").html("Entité");
    break;

    case "agent":
    agent();
      $(".page-title").html("Agent");

    break;

    case "autre":
    agent();
      $(".page-title").html("Autre Patient");

    break;

    case "ayant_droit":
    agent();
      $(".page-title").html("Patient ayant droit");

    break;

    case "consultation":
    consultation();
      $(".page-title").html("Consultation");
    break;

    case "infirmier":
    infirmier();
      $(".page-title").html("Infirmier");
    break;

    case "medecin":
    medecin();
      $(".page-title").html("Medecin");
    break;

    case "Pharmacien":
    pharmacien();
      $(".page-title").html("Pharmacien");
    break;

    case "consulJour":
    consulJour();
      $(".page-title").html("Consultation du jour");
      break;

    case "Hconsultation":
    Hconsultation();
      $(".page-title").html("Historique des consultations");
      break;

    case "rdv":
      rdv();
      $(".page-title").html("Rendez-vous");
      break;


    case "accidentTravail":
      accidentTravail();
      $(".page-title").html("Accident de travail");
      break;

    
  }

<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
  // Accident
  function accidentTravail()
  {
    var accident;
    var data_agent;
    
    //jQuery("#date-range").datepicker({format:"dd/mm/yyyy",toggleActive:!0})
    $('#arret-range').datepicker({format: 'dd/mm/yyyy'});

    $('#arret-range').on('changeDate',function() {
      var val = calcDiff();
      if (val>1) {
        $('.nbr_jr').html(val+=" jours");
      }else{
        $('.nbr_jr').html(val+=" jour");
      }
      });

    $('#date-range-edit').datepicker({format: 'dd/mm/yyyy'});

    $('#date-range-edit').on('changeDate',function() {
      var val = calcDiffedit();
      if (val>1) {
        $('.nbr_jr_edit').html(val+=" jours");
      }else{
        $('.nbr_jr_edit').html(val+=" jour");
      }
      });


    var diff = 0;

    var calcDiff = function() {
      var date1 = $('#start').datepicker('getDate');
      var date2 = $('#end').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }

    var calcDiffedit = function() {
      var date1 = $('#starte').datepicker('getDate');
      var date2 = $('#ende').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }



      var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/accident/afficher",
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
      accident = response;
      //alert(response);
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].patient.pat_prenoms+" "+response[i].patient.pat_nom+"</td>";
          rows = rows +"<td>"+response[i].at_reference+"</td>";
          rows = rows +"<td>"+response[i].at_circonstance+"</td>";
          // alert(response[i].arrets[0].arret_debut);
          if (typeof response[i].arrets[0].arret_debut != "undefined") {
            dateD = response[i].arrets[0].arret_debut.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');
            dateF = response[i].arrets[0].arret_fin.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');
            //alert(dateF+"\n"+new Date(dateF).getTime() +"\n"+new Date(dateD).getTime());
            jour =   Math.floor((new Date(response[i].arrets[0].arret_fin).getTime() - new Date(response[i].arrets[0].arret_debut).getTime()) / 86400000); 
            if (jour>1) {
              jour += " Jrs";
            }else {
              jour += " Jr";

            }
            rows = rows +"<td><span data-toggle=\"popover\" data-placement=\"top\" data-trigger=\"hover\" title=\"Arret de travail\" data-content=\"Du "+dateD+" au "+dateF+"\">"+jour+"</span></td>";
          }else{
            rows = rows +"<td></td>";
          }
          rows = rows +"<td>"+response[i].nature_lesion.nl_libelle+"</td>";
          rows = rows +"<td>"+response[i].agent_materiel.am_libelle+"</td>";
          rows = rows +"<td>"+response[i].equipe.eq_libelle+"</td>";
          rows = rows +"<td>"+response[i].activite.act_libelle+"</td>";
          rows = rows +"<td>"+response[i].nature_accident.na_libelle+"</td>";
          rows = rows +"<td></td>";
          rows = rows +"<td>"+response[i].siege_lesion.sl_libelle+"</td>";
          rows = rows +"<td>"+response[i].secteur.sec_libelle+"</td>";
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<i id="remove-item" class="ion-trash-a"></i>';
          rows = rows +' | <i data-toggle="modal" data-target=".edit-modal-lg" class="edit-item ion-edit"></i></td>';
          rows = rows +"</tr>";         
        }

        $(".table_accident_liste tbody").html(rows);
      }
    $('[data-toggle="popover"]').popover();
      
    });
  }

  init();


  //============================ Chargement des données dépendantes ============================
  var ComboAge = function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/patients",
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
      data_agent = response;
      if (response.length>0) {
        var rows = "<option value='init' selected>Selection Agent</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option data-id='"+i+"' value="+response[i].id+">"+response[i].pat_prenoms+" "+response[i].pat_nom+"</option>";
        }

        $(".agent-select").html(rows);
        $(".e_agent-select").html(rows);
      }
      
    });


  }
  ComboAge();




  $(".agent-select").change(function(){
    id = $(this).find(":selected").data("id");

    $(".mtle").html(data_agent[id].pat_matricule);
    $(".sexe").html(data_agent[id].pat_sexe);
    $(".fonction").html(data_agent[id].profession.proff_libelle);
    $(".dpt").html(data_agent[id].entite.enti_libelle);
    $(".cat").html(data_agent[id].categorie.cate_libelle);
  });

  tem= 0;
  $(".add_temoin").click(function(){
    $(".tab_temoin tbody").append("<tr><td>"+tem+"</td><td>"+$(".reference").val()+"</td><td>"+$(".matricule").val()+"</td><td><i class='mdi mdi-delete res-exam-save-delete'></i></td></tr>");
    tem +=1;
  });



  var ComboNatureLesion = function(){
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
        var rows = "<option value='init' selected>Selection Nature</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].nl_libelle+"</option>";
        }

        $(".nl-select").html(rows);
        $(".e_nl-select").html(rows);
      }
      
    });
  }
  ComboNatureLesion();

  var ComboAgentMateriel = function(){
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
        var rows = "<option value='init' selected>Selection Agent Materiel</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].am_libelle+"</option>";
        }

        $(".am-select").html(rows);
        $(".e_am-select").html(rows);
      }
      
    });
  }
  ComboAgentMateriel();

  var ComboEquipe = function(){
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
        var rows = "<option value='init' selected>Selection Equipe</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].eq_libelle+"</option>";
        }

        $(".equipe-select").html(rows);
        $(".e_equipe-select").html(rows);
      }
      
    });
  }
  ComboEquipe();


  var ComboActivite = function(){
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
        var rows = "<option value='init' selected>Selection Activité</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].act_libelle+"</option>";
        }

        $(".activ-select").html(rows);
        $(".e_activ-select").html(rows);
      }
      
    });
  }
  ComboActivite();


  var ComboNatureAccident = function(){
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
        var rows = "<option value='init' selected>Selection Nature</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].na_libelle+"</option>";
        }

        $(".na-select").html(rows);
        $(".e_na-select").html(rows);
      }
      
    });
  }
  ComboNatureAccident();

  var ComboSiegeLesion = function(){
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
        var rows = "<option value='init' selected>Selection Siège</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].sl_libelle+"</option>";
        }

        $(".sl-select").html(rows);
        $(".e_sl-select").html(rows);
      }
      
    });
  }
  ComboSiegeLesion();

  var ComboSiegeLesion = function(){
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
        var rows = "<option value='init' selected>Selection Siège</option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].sec_libelle+"</option>";
        }

        $(".secteur-select").html(rows);
        $(".e_secteur-select").html(rows);
      }
      
    });
  }
  ComboSiegeLesion();

  //============================ fin Chargement des données dépendantes ============================

    $(".add_submit").click(function(){

        var reference = $("#accident_add").find("input[name='reference']").val();
        var circonstance = $("#accident_add").find("textarea[name='circonstance']").val();
        var date_start = $("#accident_add").find("input[name='start']").val();
        var date_end = $("#accident_add").find("input[name='end']").val();
        date_start = date_start.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');
        date_end = date_end.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');


        var agent = $(".agent-select").find(":selected").val();
        var nl = $(".nl-select").find(":selected").val();
        var am = $(".am-select").find(":selected").val();
        var equipe = $(".equipe-select").find(":selected").val();
        var activ = $(".activ-select").find(":selected").val();
        var na = $(".na-select").find(":selected").val();
        var sl = $(".sl-select").find(":selected").val();
        var secteur = $(".secteur-select").find(":selected").val();

        var lieu_accident = $("#accident_add").find("input[name='lieu_accident']").val();
        var nature_travail = $(".nature_travail").val();

        var url = "/agent/"+agent+"/equipe/"+equipe+"/natureLesion/"+nl+"/siegeLesion/"+sl+"/agentMateriel/"+am+"/secteur/"+secteur+"/natureAccident/"+na+"/activite/"+activ+"/accident/creer";
        url+= "?atCirconstance="+circonstance+"&atReference="+reference+"&lieu_accident="+lieu_accident+"&nature_travail_accident="+nature_travail;
        //alert(reference+"\n"+circonstance+"\n"+date_start+"\n"+date_end+"\n"+url);
        var temoins = [];
        $(".tab_temoin tbody tr").each(function(){
              // var nom = $(this).find("td").eq(1);
              // var matricule = $(this).find("td").eq(2);
              temoins.push({"nom":$(this).find("td").eq(1),"matricule":$(this).find("td").eq(2)});
            });
        var settings = {
          "async": true,
          dataType: 'json',
          "crossDomain": true,
          "url": config["base_url"]+url,
          "method": "POST",
          data:{"atCirconstance":circonstance, "atReference":reference,"lieu_accident":lieu_accident,"nature_travail_accident":nature_travail},
          headers: {
            "x-auth-token": config["auth_token"],
          },
          success : function(code_html, statut){
            
            // init();

            // $(".tab_temoin tbody tr").each(function(){
            //   alert($(this).find('td').eq(0).html())
            // });
              

          },
          error : function(resultat, statut, erreur){
          },
          complete : function(resultat, statut){

            // var props=""
            // for (prop in resultat){ props+= prop +  " => " +resultat[prop] + "\n"; }
            // alert (props)
            if (typeof resultat.responseJSON.id!="undefined") {

            var settings = {
                "async": true,
                dataType: 'json',
                "crossDomain": true,
                "url": config["base_url"]+"/accident/"+resultat.responseJSON.id+"/arrets/creer?arretDebut="+date_start+"&arretFin="+date_end,
                "method": "POST",
                data:{"arretDebut":date_start, "arretFin":date_end},
                headers: {
                  "x-auth-token": config["auth_token"],
                },
                success : function(code_html, statut){
                  //alert(code_html[0].proff_libelle);

                },
                error : function(resultat, statut, erreur){
                },
                complete : function(resultatA, statut){
                  $(".tab_temoin tbody tr").each(function(){
                    var nom = $(this).find('td').eq(1).html()
                    var matricule=$(this).find('td').eq(2).html()
                  
                    var settings = {
                      "async": true,
                      dataType: 'json',
                      "crossDomain": true,
                      "url": config["base_url"]+"/consultation/"+resultat.responseJSON.id+"/temoins/creer?temNom="+nom+"&temMatricule="+matricule,
                      "method": "POST",
                      data:{"temNom":nom, "temMatricule":matricule},
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
                         
                    });
                  });
                } 
              }

              if(date_start != '' && date_end != '' && diff>0){
                $.ajax(settings).done(function(data){
                  var reference = $("#accident_add").find("input[name='reference']").val("");
                  var circonstance = $("#accident_add").find("input[name='circonstance']").val("");
                  var date_start = $("#accident_add").find("input[name='start']").val("");
                  var date_end = $("#accident_add").find("input[name='end']").val("");
                  // init();
                  init();
                });
              }else{
                alert('Erreur de date.')
              }
            }


          } 
        }

        if(reference != '' && circonstance != '' && diff>0){
        $.ajax(settings).done(function(data){
                        
            //$("#alertify-success-callback").click();
            alertify.success('Enregistrement terminé');
            

        });
          /*setTimeout(function(){
            //do what you need here        
            var settings = {
                "async": true,
                dataType: 'json',
                "crossDomain": true,
                "url": config["base_url"]+"/accident/"+accident[accident.length-1].id+"/arrets/creer?arretDebut="+date_start+"&arretFin="+date_end,
                "method": "POST",
                data:{"arretDebut":date_start, "arretFin":date_end},
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

              if(date_start != '' && date_end != '' && diff>0){
                $.ajax(settings).done(function(data){
                  var reference = $("#accident_add").find("input[name='reference']").val("");
            var circonstance = $("#accident_add").find("input[name='circonstance']").val("");
            var date_start = $("#accident_add").find("input[name='start']").val("");
            var date_end = $("#accident_add").find("input[name='end']").val("");
                });
              }else{
                alert('Erreur de date.')
              }
            }, 3000);

            init();*/            
        }else{
            alert('Erreur sur la reference ou circonstance ou l\'arrêt.');
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
          "url": config["base_url"]+"/accident/supprimer/"+id,
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
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": config["base_url"]+"/accident/rechercher/"+id,
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
      

      $("#accident_edit").find("input[name='id']").val(response.id);
      $("#accident_edit").find("input[name='e_reference']").val(response.at_reference);
      $("#accident_edit").find("input[name='e_circonstance']").val(response.at_circonstance);
      debut = response.arrets[0].arret_debut.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');
      fin = response.arrets[0].arret_fin.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');

      $("#accident_edit").find("input[name='start']").val(debut);
      $("#accident_edit").find("input[name='end']").val(fin);
      $("#accident_edit").find("input[name='start']").data().id =  response.arrets[0].id;

      $(".e_agent-select").val(response.patient.id);
      $(".e_nl-select").val(response.nature_lesion.id);
      $(".e_am-select").val(response.agent_materiel.id);
      $(".e_equipe-select").val(response.equipe.id);
      $(".e_activ-select").val(response.activite.id);
      $(".e_na-select").val(response.nature_accident.id);
      $(".e_sl-select").val(response.siege_lesion.id);
      $(".e_secteur-select").val(response.secteur.id);
    });
});


/* Updated new Item */
    $(".edit_submit").click(function(e){
      var id = $("#accident_edit").find("input[name='id']").val();

      var reference = $("#accident_edit").find("input[name='e_reference']").val();
      var circonstance = $("#accident_edit").find("input[name='e_circonstance']").val();
      var date_start = $("#accident_edit").find("input[name='start']").val();
      var date_end = $("#accident_edit").find("input[name='end']").val();
      date_start = date_start.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');
      date_end = date_end.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');
      var agent = $(".e_agent-select").find(":selected").val();
      var nl = $(".e_nl-select").find(":selected").val();
      var am = $(".e_am-select").find(":selected").val();
      var equipe = $(".e_equipe-select").find(":selected").val();
      var activ = $(".e_activ-select").find(":selected").val();
      var na = $(".e_na-select").find(":selected").val();
      var sl = $(".e_sl-select").find(":selected").val();
      var secteur = $(".e_secteur-select").find(":selected").val();

      var url = "/agent/"+agent+"/equipe/"+equipe+"/natureLesion/"+nl+"/siegeLesion/"+sl+"/agentMateriel/"+am+"/secteur/"+secteur+"/natureAccident/"+na+"/activite/"+activ+"/accident/"+id+"/modifier";
      url+= "?atCirconstance="+circonstance+"&atReference="+reference;
      //alert(reference+"\n"+circonstance+"\n"+date_start+"\n"+date_end+"\n"+url);

            var settings = {
              "async": true,
              dataType: 'json',
              "crossDomain": true,
              "url": config["base_url"]+url,
              "method": "PATCH",
              data:{"atCirconstance":circonstance, "atReference":reference},
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

            if(reference != '' && circonstance != ''){
            $.ajax(settings).done(function(data){
                var reference = $("#accident_edit").find("input[name='reference']").val("");
                var circonstance = $("#accident_edit").find("input[name='circonstance']").val("");
                var date_start = $("#accident_edit").find("input[name='start']").val("");
                var date_end = $("#accident_edit").find("input[name='end']").val("");

                
                
                //$("#alertify-success-callback").click();
                alertify.success('Enregistrement terminé');
            });

            setTimeout(function(){
            //do what you need here        
                  
            var settings = {
                "async": true,
                dataType: 'json',
                "crossDomain": true,
                "url": config["base_url"]+"/accident/"+id+"/arrets/modifier/"+$("#accident_edit").find("input[name='start']").data().id+"?arretDebut="+date_start+"&arretFin="+date_end,
                "method": "PATCH",
                data:{"arretDebut":date_start, "arretFin":date_end},
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

              if(date_start != '' && date_end != '' && diff>0){
                $.ajax(settings).done(function(data){
                  var reference = $("#accident_edit").find("input[name='reference']").val("");
                  var circonstance = $("#accident_edit").find("input[name='circonstance']").val("");
                  var date_start = $("#accident_edit").find("input[name='start']").val("");
                  var date_end = $("#accident_edit").find("input[name='end']").val("");
                init();

                });
              }else{
                alert('Erreur de date.'+ date_start+ ' '+ date_end + ' '+diff)
              }
            }, 2000);
                 
        }else{
            alert('Vous avez oublié la référence ou la circonstance.')
        }

    });
  }
  // Accident
  
  // Consultation jour
  function consulJour()
  {
      var init = function(){
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultationsJour",
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
      $(".acc_badge").html(response.length);
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
          rows = rows +'<td data-id="'+response[i].id+'">';
          rows = rows +'<button type="button" id="remove-item" class="btn-sm btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button>';
          rows = rows +'|<button type="button" data-toggle="modal" data-target=".edit-modal-lg" class="edit-item btn-sm btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>';
          rows = rows +'</tr> ';
        }

        $("#consultation_tab tbody").html(rows);
      }
      
    });
  }

  init();
  }

  //  Consultation jour

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

  function pharmacien(){

    var consultation;
    var medicaments_row;
    var init = function(){
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": config["base_url"]+"/consultations/etape/3/rechercher",
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
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {

          if (response[i].ordonnances.length>0) {
            rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
              rows += '<div class="card m-b-20">';
                rows += '<div class="card-block">';
                  rows += '<div class="media">';
                    rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
                    rows += '<div class="media-body">';
                      rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
                      rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'</p>';
                      rows += '<p>'+response[i].patient.pat_contact+'</p>';
                      rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
                    rows += '</div>';
                  rows += '</div>';
                  rows += '<div class="row text-center m-t-20">';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_temperature+' °C</h5>';
                      rows += ' <p class="text-muted font-14">Température</p>';
                    rows += '</div>';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_temsion_alt+'</h5>';
                      rows += '<p class="text-muted font-14">Tension</p>';
                    rows += '</div>';
                    rows += '<div class="col-4">';
                      rows += '<h5 class="mb-0">'+response[i].cons_poids+' Kg</h5>';
                      rows += '<p class="text-muted font-14">Poids</p>';
                    rows += '</div>';
                  rows += '</div>';
                rows += '</div>';
              rows += '</div>';     
            rows += '</div>';     
          }
        }

        $(".row-in").html(rows);
      }
      
    });
  }

  init();

  var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
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
      if (response.length>0) {
        var rows = "<option value='non'></option>";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });


  // Click sur un patient

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
    rows += "<input type='text' class='cons_id' value='"+patient_cons.id+"' hidden>";

    $(".patient_info").html(rows);

    $('.ordonnances-tb tbody').html("");

    for (var i = 0; i < patient_cons.ordonnances.length; i++) {

      ligne = "";
      ligne +='<tr data-id="'+patient_cons.ordonnances[i].id+'"> ';
      //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
      ligne +='<td data-id="'+patient_cons.ordonnances[i].medicament.id+'">'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
      ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
      ligne +='<td> <label class="custom-control custom-checkbox">';
      if (patient_cons.ordonnances[i].ordo_servir) {

        ligne +='<input type="checkbox" class="custom-control-input servir" checked="checked">';
      }else{
        ligne +='<input type="checkbox" class="custom-control-input servir" >';

      }
      ligne +='<span class="custom-control-indicator"></span></label></td>';
      
      ligne +='<td> <select class="custom-select medi-ordo-custom">'+medicament_rows+'</select></td>';
      ligne +='<td> <textarea style="width:80%;height: 37px;"> </textarea></td>';

      ligne +='</tr>';

      $('.ordonnances-tb').append(ligne);

      
    }
    // for (var i = 0; i < patient_cons.ordonnances.length; i++) {
    //     // alert(patient_cons.ordonnances[i].ordo_servir)
    //     if (patient_cons.ordonnances[i].ordo_servir) {
    //       $(".ordonnances-tb tbody").find("tr").eq(i).find("td").eq(4).find("input").prop("checked", true);
    //     }
    //   }

  });

   $(".pharm_save").click(function (){
      $(".ordonnances-tb tbody tr").each(function(){
        var ordo_id = $(this).data().id;
        var medoc_id = $(this).find("td").eq(0).data().id;
        var remplacement = $(this).find("td").eq(5).find("select").find(":selected").val();
        var motif = $(this).find("td").eq(6).find("textarea").val();
        var etat = $(this).find("td").eq(4).find("input").is(":checked");

        if (etat) {
          etat = 1;
        }else{
          etat = 0;
        }



        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/medicamentremp/"+remplacement+"/ordonnances/modifier/"+ordo_id+"?"+"ordo_motif_remplacement="+motif+"&ordo_servir="+etat,
          "method": "PUT",
          data: { "ordo_motif_remplacement":motif,"ordo_servir":etat },
          
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
           var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/etape/"+4,
          "method": "PATCH",
          data: { },
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
          
          window.location = config["ui_url"]+'?page=Pharmacien';
        });
          
        });


      });

   });
}


// Rendez-vous
function rdv(){

  var consultation;
  var patient_cons;
  var pathologie_rows;
  var medicament_rows;
  var examens_rows;
  var rows_select_id;

  $(".rdv_act").hide();
  $(".comment_acte").attr("readonly", true);

  $(".date_rdv").attr("readonly",true);
  $("#rdv_obj").attr("readonly",true);
  $("#commentaire").attr("readonly",true);

  $('#examen').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#acte').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#pre-selected-options').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  $('#select-exam').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultations/etape/4/rechercher",
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
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {
          rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+'</p><p class="text-muted m-b-5 mail">'+response[i].patient.pat_contact+'</p>';
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div class="row text-center m-t-20">';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_temperature+' °C</h5>';
          rows += ' <p class="text-muted font-14">Température</p>';
          rows += '</div>';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_temsion_alt+'</h5>';
          rows += '<p class="text-muted font-14">Tension</p>';
          rows += '</div>';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_poids+' Kg</h5>';
          rows += '<p class="text-muted font-14">Poids</p>';
          rows += '</div>';
          rows += '</div>';
          //rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".row-in").html(rows);
      }
      
    });
  }

  init();

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
        date = patient_cons.resultat_examens[i].res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');

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

  var ComboPatho = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/pathologies/afficher",
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
          rows = rows +"<option value="+response[i].id+">"+response[i].patho_libelle+"</option>";
        }
        pathologie_rows = rows;

        $(".patho-custom").html(rows);
      }
      
    });


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });



    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });


    // Click sur un patient

   $(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();


    rows_select_id = $(this).data('id').split(":");
    patient_cons = consultation[rows_select_id[1]];

    $('.btn_update_dossier').click(function(){

        var settings = {
                "async": true,
                "crossDomain": true,
                "url": config["base_url"]+"/etape/"+2+"/consultations/modifier/"+patient_cons.id,
                "method": "Patch",
                data:{
                  // "soins_commentaire":comment
                },
                headers: {
                  "x-auth-token": config["auth_token"],
                },
                success : function(code_html, statut){
                //alert(code_html[0].proff_libelle);
                window.location = config["ui_url"]+'?page=medecin';
                },
                error : function(resultat, statut, erreur){
                },
                complete : function(resultat, statut){
                } 
              }

            $.ajax(settings).done(function (response) { 

            });
    });


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
    rows += "<input type='text' class='cons_id' value='"+patient_cons.id+"' hidden>";

    $(".patient_info").html(rows);
  
  
     // Ordonnance table
     if(patient_cons.ordonnances.length>0 && $(".ordonnances-tb tbody tr").length!=patient_cons.ordonnances.length){
      $(".ordonnances-tb tbody").html("");
      for (var i = 0; i < patient_cons.ordonnances.length; i++) {
        
        ligne = "";
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          ligne +='<td> <label class="custom-control custom-checkbox">';
          if (patient_cons.ordonnances[i].ordo_servir) {
          ligne +='<input type="checkbox" class="custom-control-input servir" disabled="disabled" checked="checked">';
          }else{
            ligne +='<input type="checkbox" class="custom-control-input servir" disabled="disabled">';

          }
            ligne +='<span class="custom-control-indicator"></span></label></td>';

          if (typeof patient_cons.ordonnances[i].medic_remplacement != 'undefined') {
            ligne +='<td>'+patient_cons.ordonnances[i].medic_remplacement.medic_libelle+'</td>';
          }else{
            ligne +='<td></td>';

          }
          ligne +='<td data-id="'+patient_cons.ordonnances[i].id+'"> <i class="mdi mdi-delete ordo-ave-delete"></i> </td>';

          ligne +='</tr>';
          $(".ordonnances-tb").append(ligne);
      }
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
   // Diagnostique table
   var act_inf = ""; 
    for (var i = patient_cons.soins.length - 1; i >= 0; i--) {
      act_inf +=  '<tr data-toggle="popover"  data-placement="top" data-trigger="hover" title="Commentaire" data-content="'+patient_cons.soins[i].soins_commentaire+'"><td>'+(patient_cons.soins.length-i)+"</td><td>"+patient_cons.soins[i].acte[0].acte_libelle+"</td>";
    }
    $(".acte_infirmier_tb tbody").html(act_inf);
    $('[data-toggle="popover"]').popover();

    var moit_inf = ""; 
    for (var i = patient_cons.motifs.length - 1; i >= 0; i--) {
      moit_inf +=  '<tr><td>'+(patient_cons.motifs.length-i)+"</td><td>"+patient_cons.motifs[i].motif_libelle+"</td><td></td>";
    }
    $(".motif_inf-tb tbody").html(moit_inf);
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
          ligne +='<td data-id="'+patient_cons.diagnostiques[i].id+'"> <i class="mdi mdi-delete patho-save-delete"></i> </td>';

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
     }else{
      $("#loader").hide();
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

    $(".acte_liste").dblclick(function(){
      $(".comment_acte").attr("readonly", false);
      $(".rdv_act").show();
      $(".acte_liste").hide();      
    });
  // Fin Actes

  // Rendez-vous

    if(typeof patient_cons.cons_rdv_date != "undefined"){
      
      date = patient_cons.cons_rdv_date.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3');
      // alert(date);
      $(".date_rdv").val(date);
      $("#rdv_obj").val(patient_cons.cons_rdv_objet);
      $("#commentaire").val(patient_cons.cons_rdv_commentaire);

     
    }
     $(".date_rdv").dblclick(function(){
        $(".date_rdv").attr("readonly", false);
        $("#rdv_obj").attr("readonly", false);
        $("#commentaire").attr("readonly", false);    
    });

  // Fin Rendez-vous
  });



//Examens combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/examens/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].exam_libelle+"</option>";
        }
        examens_rows = rows;
        $("#examen").html(rows);
        
      }
      
    });

    //Acte combo
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
        }
        $("#acte").html(rows);
        
      }
      
    });


    //Cause combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/causes/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].cause_libelle+"</option>";
        }
        $(".cause_custom").html(rows);
        
      }
      
    });
  }

  ComboPatho();

  $(".patho_add").click(function(){
    $(".diagnostique_tb").append('<tr><td data-id="'+$(".patho-custom").find(":selected").val()+'">'+$(".patho-custom").find(":selected").html()+'</td><td data-id="'+$(".cause_custom").find(":selected").val()+'">'+$(".cause_custom").find(":selected").html()+'<td><i class="mdi mdi-delete patho-delete"></i></td></tr>');

        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });
  $(".diagnostique_tb").on('click','.patho-delete',function(){
    $(this).parent().parent().remove();
  }); 



    // Ordonnances 
    $(".add-ordonnance").click(function(){
      ligne = "";
      ligne +='<tr> ';
      //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
      ligne +='<td> <select class="custom-select medi-ordo-custom"></select></td>';
      ligne +='<td> <input class="form-control" type="number" id="example-number-input"></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      // ligne +='<td> <label class="custom-control custom-checkbox">';
      // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
      // ligne +='<span class="custom-control-indicator"></span></label></td>';
      ligne +='<td> <i class="mdi mdi-delete ordo-delete"></i> </td>';

      ligne +='</tr>';
      $(".ordonnances-tb").append(ligne);
      $(".patho-ordo-custom").html(pathologie_rows);
      $(".medi-ordo-custom").html(medicament_rows);


        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });

    $(".ordonnances-tb").on('click','.ordo-delete',function(){
      $(this).parent().parent().remove();
    }); 


    $(".add-resultat").click(function(){
      ligne = "";
      ligne += '<tr>';
      ligne += '<td scope="row">';
      ligne += '<select class="custom-select exam-custom"></select>';
      ligne += '</td>';
      // ligne += '<td>';
      // ligne += '<label class="custom-control custom-checkbox">';
      // ligne += '<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups" data-parsley-mincheck="2">';
      // ligne += '<span class="custom-control-indicator"></span>';
      // ligne += '</label>';
      // ligne += '</td>';
      ligne += ' <td>';
      ligne += '<div class="input-group">';

      ligne+='<input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >';
      ligne+='<span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>';
      ligne+='</div>';
      ligne+='</td>';
      // ligne+='<td> <input id="resultat" type="text" class="form-control"></td>';
      ligne+='<td> <input id="comment_exam" type="text" class="form-control"></td>';
      ligne += ' <td></td>';
      ligne += ' <td></td>';
      ligne+='<td><i class="mdi mdi-delete resultat-delete"></i></td>';

      ligne+='</tr>';

      $(".examens-resl-tb").append(ligne);
      $(".exam-custom").html(examens_rows);

    });

    
    $(".examens-resl-tb").on('click','.resultat-delete',function(){
      $(this).parent().parent().remove();
    }); 



    // Save medecin consultation
    //$(".save-med-consul").click(function(){
      
    //   // Diagnostique saving
    $('.patho_save').click(function(){

        $('.diagnostique_tb tbody tr').each(function() {
          var patho_id = $(this).find("td").eq(0).data("id");
          var signe_id = $(this).find("td").eq(1).data("id");
          var id = $(this).find("td").eq(2).data("id");
          // alert(id);
          if (typeof patho_id !== "undefined" && typeof id=="undefined") {
            // alert(patho_id+"\n"+signe_id);
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/cause/"+signe_id+"/pathologie/"+patho_id+"/diagnostiques/creer",
              "method": "POST",
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
          $(this).remove();

          $.ajax(settings).done(function (response) {
            init()
            // data_profess = response;
            // if (response.length>0) {
            //   var rows = "";
            //   for (var i = 0; i < response.length; i++) {
            //     rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
            //   }

            //   $(".acte-select").html(rows);
            // }
            
          });
          }
        });

      });

      // Ordonnances saving
      $(".ordo_save").click(function(){
        $('.ordonnances-tb tbody tr').each(function() {

          //var patho_id = $(".ordonnances-tb tbody tr").find("td").eq(0).find("select").find(":selected").val();
          var medic_id = $(this).find("td").eq(0).find("select").find(":selected").val();
          var qte = $(this).find("td").eq(1).find("input").val();
          var dure = $(this).find("td").eq(2).find("input").val();
          var posologie = $(this).find("td").eq(3).find("input").val();

          // alert(medic_id);
          if (typeof medic_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/medicament/"+medic_id+"/ordonnances/creer?ordo_quantite="+qte+"&ordo_dure="+dure+"&ordo_posologie="+posologie,
              "method": "POST",
              data:{
                "ordo_quantite":qte,
                "ordo_dure":dure,
                "ordo_posologie":posologie
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
        });
      });




      // Resultats saving
      $(".exam_save").click(function(){

        $('.examens-resl-tb tbody tr').each(function() {
          var exam_id = $(this).find("td").eq(0).find(":selected").val();
          // var etat = $(this).find("td").eq(1).find("input").is(":checked");
          var date = $(this).find("td").eq(1).find("input").val();
          // var resultat = $(this).find("td").eq(3).find("input").val();
          var comment = $(this).find("td").eq(2).find("input").val();

          //alert(exam_id+"\n"+date);
          if (typeof exam_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/examen/"+exam_id+"/resultat_examens/creer?resDatePrFait="+date+"&resCommentaire="+comment,
              "method": "POST",
              data:{
                // "resEtat":etat,
                "resDateFait":date,
                // "resObservation":resultat,
                "resCommentaire":comment
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
            // alert(rows_select_id[1]);
            

          });
          $(this).remove();
          }
        });

        init();
        alertify.success('Examen enregistré avec succes.', 'Success Alert', {timeOut: 5000});
        var nbre = consultation[rows_select_id[1]].resultat_examens.length;

        //alert(nbre+"\n"+consultation[rows_select_id[1]].resultat_examens.length)
        // while (consultation[rows_select_id[1]].resultat_examens.length=nbre){
          
        $("#loader").show();
        setTimeout(function(){
            //do what you need here
                examenTab();

        }, 1000);
        // }

      });


      // Actes saving selected
      $('.actes_save').click(function() {
        var commentaire = $("#comment_acte").val();
        var acte_ids = [];
        $('#acte_to option').each(function(){acte_ids.push($(this).val());});
        // alert(acte_ids);
        if (acte_ids.length>0) {
          // alert(acte_ids.join(',')+"\n"+commentaire);

          var settings = {
            "async": true,
            "crossDomain": true,
            "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/acte/"+acte_ids.join(",")+"/soins/creer?soins_commentaire="+commentaire,
            "method": "POST",
            data:{
              "soins_commentaire":commentaire
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


      });


      //RDV saving
      $('.rdv_save').click(function(){
        var date = $('.date_rdv').val();
        var obj = $('#rdv_obj').val();
        var comment = $('#commentaire').val();
        // alert(date+"\n"+obj+"\n"+comment);
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/patient/"+patient_cons.patient.id+"/infirmier/"+patient_cons.infirmier.id+"/specialite/"+patient_cons.specialite.id+"/medecin/"+patient_cons.medecin.id+"/etape/"+4+"/consultations/modifier/"+patient_cons.id+"?cons_rdvDate="+date+"&cons_rdvObjet="+obj+"&cons_rdvCommentaire="+comment,
          "method": "PATCH",
          data:{
            "cons_rdvDate":date,
            "cons_rdvObjet":obj,
            "cons_rdvCommentaire":comment
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
            $(".date_rdv").attr("readonly",true);
            $("#rdv_obj").attr("readonly",true);
            $("#commentaire").attr("readonly",true);
            
          });
        // Modif consult
      });


  }

// Fin Rendez-vous

//Medecin
function medecin(){

  var consultation;
  var patient_cons;
  var motifs_rows;
  var acte_rows;
  var pathologie_rows;
  var medicament_rows;
  var examens_rows;
  var rows_select_id;


  $('#examen').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });


  $('#etatExam').bootstrapToggle({
    on: 'Fait',
    off: 'Pas Fait',
    offstyle: 'secondary'
  });


  /*$('#acte').multiselect({
    search: {
      left: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
      right: '<input type="text" name="q" class="form-control" placeholder="Search..." />',
    },
    fireSearch: function(value) {
      return value.length > 3;
    }
  });*/

  //jQuery("#date-range").datepicker({format:"dd/mm/yyyy",toggleActive:!0})
    $('#arret-range').datepicker({format: 'dd/mm/yyyy'});

    $('#arret-range').on('changeDate',function() {
      var val = calcDiff();
      if (val>1) {
        $('.nbr_jr').html(val+=" jours");
      }else{
        $('.nbr_jr').html(val+=" jour");
      }
      });

    $('#date-range-edit').datepicker({format: 'dd/mm/yyyy'});

    $('#date-range-edit').on('changeDate',function() {
      var val = calcDiffedit();
      if (val>1) {
        $('.nbr_jr_edit').html(val+=" jours");
      }else{
        $('.nbr_jr_edit').html(val+=" jour");
      }
      });

    var calcDiff = function() {
      var date1 = $('#start').datepicker('getDate');
      var date2 = $('#end').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }

    var calcDiffedit = function() {
      var date1 = $('#starte').datepicker('getDate');
      var date2 = $('#ende').datepicker('getDate');
      if (date1 && date2) {
        diff = Math.floor((date2.getTime() - date1.getTime()) / 86400000); 
      }
      
      return diff;
    }


  $('#pre-selected-options').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  $('#select-exam').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"12\"'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='try \"4\"'>",
  // selectableHeader: "<div class='custom-header'>Liste des actes</div>",
  // selectionHeader: "<div class='custom-header'>Actes sélectionés</div>",
});

  var init = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultations/etape/2/rechercher",
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
        var rows ='' ;
        for (var i = 0; i < response.length; i++) {
          rows += '<div class="col-lg-4 avatar-patient" data-toggle="modal" data-id="'+response[i].id+':'+i+'" data-target=".bs-example-modal-lg">';
          rows += '<div class="card m-b-20">';
          rows += '<div class="card-block">';
          rows += '<div class="media">';
          rows += '<img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image">';
          rows += '<div class="media-body">';
          rows += '<h5 class="m-t-10 font-18 mb-1 nom">'+response[i].patient.pat_prenoms+"  "+response[i].patient.pat_nom+'</h5>';
          rows += '<p class="text-muted m-b-5 mail">'+response[i].patient.pat_email+' | '+response[i].patient.pat_contact+'</p>';
          rows += '<p class="text-muted font-14 font-500 font-secondary fonction">'+response[i].patient.profession.proff_libelle+'</p>';
          rows += '</div>';
          rows += '</div>';
          rows += '<div class="row text-center m-t-20">';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_temperature+' °C</h5>';
          rows += ' <p class="text-muted font-14">Température</p>';
          rows += '</div>';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_temsion_alt+'</h5>';
          rows += '<p class="text-muted font-14">Tension</p>';
          rows += '</div>';
          rows += '<div class="col-4">';
          rows += '<h5 class="mb-0">'+response[i].cons_poids+' Kg</h5>';
          rows += '<p class="text-muted font-14">Poids</p>';
          rows += '</div>';
          rows += '</div>';
          //rows += '<div id="sparkline1" class="text-center"></div>';
          rows += '</div>';
          rows += '</div>';
          rows += '</div>';        
        }

        $(".row-in").html(rows);
      }
      
    });
  }

  init();

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
        ligne +='<tr data-id="'+i+'"> ';
        //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
        ligne +='<td>'+patient_cons.resultat_examens[i].examen.exam_libelle+'</td>';
        ligne +='<td> <label class="custom-control custom-checkbox">';
        if (patient_cons.resultat_examens[i].res_etat) {

          ligne +='<input type="checkbox" class="custom-control-input fait" checked="checked" disabled="disabled">';
        }else{
          ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled">';

        }
        ligne +='<span class="custom-control-indicator"></span></label></td>';
        date = patient_cons.resultat_examens[i].res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
        ligne +='<td>'+date+'</td>';
        
        if (typeof patient_cons.resultat_examens[i].res_date_fait != "undefined") {
          date = patient_cons.resultat_examens[i].res_date_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3-$2-$1');
          ligne +='<td>'+date+'</td>';          
        }else {
          ligne +='<td></td>';
        }

        if(typeof patient_cons.resultat_examens[i].res_observation != "undefined"){
          ligne +='<td>'+patient_cons.resultat_examens[i].res_observation+'</td>';
        }else{
          ligne +='<td></td>';
        }

        ligne +='<td>'+patient_cons.resultat_examens[i].res_commentaire+'</td>';
        ligne +='<td data-id="'+patient_cons.resultat_examens[i].id+'"> <i class="mdi mdi-pencil res-exam-modif" data-toggle="modal" data-target=".bs-examen-modal-lg"></i> </td>';

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



      $(".res-exam-modif").click(function(){
        // alert(eval($(this).parent('td').parent('tr').data('id')));
        $(".data_id").val($(this).parent('td').parent('tr').data('id'));
        var result = patient_cons.resultat_examens[eval($(this).parent('td').parent('tr').data('id'))];

        $(".examen_nom").html(result.examen.exam_libelle);
        if (result.res_etat) {
          $("#etatExam").bootstrapToggle('on');
        }else{
          $("#etatExam").bootstrapToggle('off');
        }

        $(".examen_date_prescrit").html(result.res_date_prescrit.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1'));
        
        if(typeof result.res_date_fait!="undefined"){
          $(".examen_date_fait").val(result.res_date_fait.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3'));
        }else {
          $(".examen_date_fait").val("");
        }
        
        if(typeof result.res_observation!="undefined"){
          $(".examen_resultat").html(result.res_observation);
        }else{
          $(".examen_resultat").html("");
        }

        $(".examen_comentaire").val(result.res_commentaire);

      });

      $(".modif_exam_submit").click(function(){
        var id = $(".data_id").val();
        var date = $(".examen_date_fait").val();
        var resultat = $(".examen_resultat").val();
        var comment = $(".examen_comentaire").val();
        var etat = 0;
        if ($("#etatExam").is(":checked")){
          etat  = 1;
        }else {
          etat = 0;
        }

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/examen/"+patient_cons.resultat_examens[id].examen.id+"/resultat_examens/"+patient_cons.resultat_examens[id].id+"?resEtat="+etat+"&resObservation="+resultat+"&resCommentaire="+comment+"&resDateFait="+date,
          "method":"Patch",
          data:{
            "resEtat":etat,
            "resObservation":resultat,
            "resCommentaire":comment,
            "resDateFait":date
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
      });
  }

  var ComboPatho = function(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/pathologies/afficher",
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
          rows = rows +"<option value="+response[i].id+">"+response[i].patho_libelle+"</option>";
        }
        pathologie_rows = rows;

        $(".patho-custom").html(rows);
      }
      
    });


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/medicaments/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].medic_libelle+"</option>";
        }
        medicament_rows = rows;
      }
      
    });


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/motifs/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].motif_libelle+"</option>";
        }
        motifs_rows = rows;
      }

    });

    // actes infirmier


    // Click sur un patient
    $(".add-motif_inf_med").click(function(){
      if($(".motif-med-select").val()!=null){
        alert("erreur");
        $(".motif_inf-tb tbody").append("<tr data-id='"+$(".motif-med-select").val()+"'><td></td><td>"+$(".motif-med-select option:selected").text()+"</td><td></td><td><i class=\"mdi mdi-delete motif-med-delete\"></i></td></tr>");
      }
    });

   $(".row-in").on('click',".avatar-patient", function(){
    //your code
    //alert();
    // $(".motif_inf-tb tbody").html("");

    $(".acte_select").select2({
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


    rows_select_id = $(this).data('id').split(":");
    patient_cons = consultation[rows_select_id[1]];

    var act_inf = ""; 
    for (var i = patient_cons.soins.length - 1; i >= 0; i--) {
      act_inf +=  '<tr data-toggle="popover"  data-placement="top" data-trigger="hover" title="Commentaire" data-content="'+patient_cons.soins[i].soins_commentaire+'"><td>'+(patient_cons.soins.length-i)+"</td><td>"+patient_cons.soins[i].acte[0].acte_libelle+"</td><td>"+patient_cons.soins[i].soins_commentaire+"</td><td></td></tr>";
    }
    $(".acte_infirmier_tb tbody").html(act_inf);
    $('[data-toggle="popover"]').popover();

    var moit_inf = ""; 
    for (var i = patient_cons.motifs.length - 1; i >= 0; i--) {
      moit_inf +=  '<tr><td>'+(patient_cons.motifs.length-i)+"</td><td>"+patient_cons.motifs[i].motif_libelle+"</td><td></td>";
    }
    $(".motif_inf-tb tbody").html(moit_inf);


    $(".motif-med-select").select2({
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



    $(".motif_inf-tb").on("click",".motif-med-delete", function(){
      $(this).parent().parent().remove();
    });



    $(".add-acte").on("click", function(){
      if($(".acte_select").val()!=null){
        $(".acte_infirmier_tb tbody").append("<tr data-id='"+$(".acte_select").val()+"'><td></td><td>"+$(".acte_select option:selected").text()+"</td><td>"+$("#comment_acte").val()+"</td><td><i class=\"mdi mdi-delete motif-med-delete\"></i></td><td></td></tr>");
      }
    });

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
    rows += "<input type='text' class='cons_id' value='"+patient_cons.id+"' hidden>";

    $(".patient_info").html(rows);
  
  
     // Ordonnance table
     $(".ordonnances-tb tbody").html("");
     if(patient_cons.ordonnances.length>0 && $(".ordonnances-tb tbody tr").length!=patient_cons.ordonnances.length){
      for (var i = 0; i < patient_cons.ordonnances.length; i++) {
        
        ligne = "";
          ligne +='<tr> ';
          //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
          ligne +='<td>'+patient_cons.ordonnances[i].medicament.medic_libelle+'</td>';
          if (typeof patient_cons.ordonnances[i].medic_remplacement != "undefined") {
            ligne +='<td>'+patient_cons.ordonnances[i].medic_remplacement.medic_libelle+'</td>';
          }else{
            ligne +='<td></td>';
          }
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_quantite+'</td>';

          ligne +='<td> <label class="custom-control custom-checkbox">';
          if (patient_cons.ordonnances[i].ordo_servir) {

            ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled" checked="checked">';
          }else{
            ligne +='<input type="checkbox" class="custom-control-input fait" disabled="disabled">';

          }
          ligne +='<span class="custom-control-indicator"></span></label></td>';

          ligne +='<td>'+patient_cons.ordonnances[i].ordo_dure+' Jour(s)</td>';
          ligne +='<td>'+patient_cons.ordonnances[i].ordo_posologie+'</td>';
          // ligne +='<td> <label class="custom-control custom-checkbox">';
          // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
          // ligne +='<span class="custom-control-indicator"></span></label></td>';
          
          ligne +='<td data-id="'+patient_cons.ordonnances[i].id+'">';
          // if(patient_cons.etape.libelle=="Modification"){
          //   ligne += '<i class="mdi mdi-delete ordo-ave-delete"></i>';
          // }
          ligne += ' </td>';

          ligne +='</tr>';
          $(".ordonnances-tb").append(ligne);
      }
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
          ligne +='<td data-id="'+patient_cons.diagnostiques[i].id+'"> <i class="mdi mdi-delete patho-save-delete"></i> </td>';

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
   // Fin Soins table

   // RDV Table
   if(typeof patient_cons.cons_rdv_date != "undefined" ){
      date = patient_cons.cons_rdv_date.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$1-$2-$3');

      $(".rdv_medecin_tb tbody").html("<tr><td>"+date+"</td><td>"+patient_cons.cons_rdv_objet+"</td><td>"+patient_cons.cons_rdv_objet+"</td></tr>");
      // $(".date_rdv").val(date);
      // $("#rdv_obj").val(patient_cons.cons_rdv_objet);
      // $("#commentaire").val(patient_cons.cons_rdv_objet);

     //alert(date);
   }
    // Fin RDV Table 

  if (typeof patient_cons.arrets[0].arret_debut!= "undefined" && typeof patient_cons.arrets[0].arret_debut!= "undefined") {
    //alert(patient_cons.arrets[0].arret_debut);
    date_debut = patient_cons.arrets[0].arret_debut.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');

    // $(".consultation_info").find("input[name='start']").val(date);
    date_fin = patient_cons.arrets[0].arret_fin.replace(/^(\d{4})-(\d{2})-(\d{2})([\s\S]*?)(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/, '$3/$2/$1');

    // $(".consultation_info").find("input[name='end']").val(date);
    $(".arret_medecin_tb tbody").html("<tr><td>"+date_debut+"</td><td>"+date_fin+"</td></tr>");

  }
  });



//Examens combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/examens/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].exam_libelle+"</option>";
        }
        examens_rows = rows;
        $("#examen").html(rows);
        
      }
      
    });

    //Acte combo
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
        }
        $("#acte").html(rows);
        
      }
      
    });


    //Cause combo
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/causes/afficher",
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
      if (response.length>0) {
        var rows = "";
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<option value="+response[i].id+">"+response[i].cause_libelle+"</option>";
        }
        $(".cause_custom").html(rows);
        
      }
      
    });
  }

  ComboPatho();

  $(".patho_add").click(function(){
    $(".diagnostique_tb").append('<tr><td data-id="'+$(".patho-custom").find(":selected").val()+'">'+$(".patho-custom").find(":selected").html()+'</td><td data-id="'+$(".cause_custom").find(":selected").val()+'">'+$(".cause_custom").find(":selected").html()+'<td><i class="mdi mdi-delete patho-delete"></i></td></tr>');

        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });
  $(".diagnostique_tb").on('click','.patho-delete',function(){
    $(this).parent().parent().remove();
  }); 





    // Ordonnances 
    $(".add-ordonnance").click(function(){
      ligne = "";
      ligne +='<tr> ';
      //ligne +='<td scope="row"> <select class="custom-select patho-ordo-custom"> </select> </td>';
      ligne +='<td> <select class="custom-select medi-ordo-custom"></select></td>';
      ligne +='<td></td>';
      ligne +='<td> <input class="form-control" type="number" id="example-number-input"></td>';
      ligne +='<td></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      ligne +='<td> <input parsley-type="url" type="text" class="signe form-control"></td>';
      // ligne +='<td> <label class="custom-control custom-checkbox">';
      // ligne +='<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups"data-parsley-mincheck="2">';
      // ligne +='<span class="custom-control-indicator"></span></label></td>';
      ligne +='<td> <i class="mdi mdi-delete ordo-delete"></i> </td>';

      ligne +='</tr>';
      $(".ordonnances-tb").append(ligne);
      $(".patho-ordo-custom").html(pathologie_rows);
      $(".medi-ordo-custom").html(medicament_rows);


        //$(".diagnostique_tb").append('<tr><td data-id="'+$(".acte-select").find(":selected").val()+'">'+$(".acte-select").find(":selected").html()+'</td><td width="50">'+$(".soins_comm").val()+'</td><td><button type="button" class="delete-soins btn btn-danger waves-effect waves-light"><i class="mdi mdi-delete"></i></button></td></tr>');
      });

    $(".ordonnances-tb").on('click','.ordo-delete',function(){
      $(this).parent().parent().remove();
    }); 

    now = new Date();
    $(".add-resultat").click(function(){
      ligne = "";
      ligne += '<tr>';
      ligne += '<td scope="row">';
      ligne += '<select class="custom-select exam-custom"></select>';
      ligne += '</td>';
      ligne +='<td></td>';

      // ligne += '<td>';
      // ligne += '<label class="custom-control custom-checkbox">';
      // ligne += '<input type="checkbox" class="custom-control-input" data-parsley-multiple="groups" data-parsley-mincheck="2">';
      // ligne += '<span class="custom-control-indicator"></span>';
      // ligne += '</label>';
      // ligne += '</td>';
      ligne += ' <td>';
      // ligne += '<div class="input-group">';

      // ligne+='<input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >';
      // ligne+='<span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>';
      // ligne+='</div>';

      ligne+= new Date().toLocaleDateString();
      ligne+='</td>';
      ligne +='<td></td>';
      ligne +='<td></td>';

      // ligne+='<td> <input id="resultat" type="text" class="form-control"></td>';
      ligne+='<td> <input id="comment_exam" type="text" class="form-control"></td>';
      ligne+='<td><i class="mdi mdi-delete resultat-delete"></i></td>';

      ligne+='</tr>';

      $(".examens-resl-tb").append(ligne);
      $(".exam-custom").html(examens_rows);

    });

    
    $(".examens-resl-tb").on('click','.resultat-delete',function(){
      $(this).parent().parent().remove();
    }); 




    function arret_save(){

      var date_start = $(".consultation_info").find("input[name='start']").val();
      var date_end = $(".consultation_info").find("input[name='end']").val();
      date_start = date_start.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');
      date_end = date_end.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1');

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/consultation/"+patient_cons.id+"/arrets/creer?arretDebut="+date_start+"&arretFin="+date_end,
          "method": "POST",
          data:{
            "arretDebut":date_start,
            "arretFin":date_end
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
    // Save medecin consultation
    //$(".save-med-consul").click(function(){
      
    //   // Diagnostique saving
    //$('.patho_save').click(
      function patho_save(){

        $('.diagnostique_tb tbody tr').each(function() {
          var patho_id = $(this).find("td").eq(0).data("id");
          var signe_id = $(this).find("td").eq(1).data("id");
          var id = $(this).find("td").eq(2).data("id");
          // alert(id);
          if (typeof patho_id !== "undefined" && typeof id=="undefined") {

            // Motif saved
            var motif_id = "";
            $('.motif_inf-tb tbody tr').each(function() {
              if (typeof $(this).data("id")!=="undefined"){
                motif_id += ","+$(this).data("id");
              }

            });
            motif_id = motif_id.substr(1);
              // alert(patho_id+"\n"+signe_id);
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

            // Motif saved

          // Pathologie saved
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/cause/"+signe_id+"/pathologie/"+patho_id+"/diagnostiques/creer",
              "method": "POST",
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
            $(this).remove();

            $.ajax(settings).done(function (response) {
              init();
              
            });
          // Pathologie saved

          
          }else{
            alert("eee");
          }
        });

      }
      //);

      // Ordonnances saving
      //$(".ordo_save").click(
        function ordo_save(){
        $('.ordonnances-tb tbody tr').each(function() {

          //var patho_id = $(".ordonnances-tb tbody tr").find("td").eq(0).find("select").find(":selected").val();
          var medic_id = $(this).find("td").eq(0).find("select").find(":selected").val();
          var qte = $(this).find("td").eq(2).find("input").val();
          var dure = $(this).find("td").eq(4).find("input").val();
          var posologie = $(this).find("td").eq(5).find("input").val();
          var cons_id = $(".cons_id").val();

          // alert(medic_id);
          if (typeof medic_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+cons_id+"/medicament/"+medic_id+"/ordonnances/creer?ordo_quantite="+qte+"&ordo_dure="+dure+"&ordo_posologie="+posologie+"&ordo_servir="+0,
              "method": "POST",
              data:{
                "ordo_quantite":qte,
                "ordo_servir":0,
                "ordo_dure":dure,
                "ordo_posologie":posologie
              },
              headers: {
                "x-auth-token": config["auth_token"],
              },
              success : function(code_html, statut){
                var val = {
                  "async": true,
                  "crossDomain": true,
                  "url": config["base_url"]+"/etape/"+3+"/consultations/modifier/"+cons_id,
                  "method": "PATCH",
                  data:{},
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
                $.ajax(val).done(function (response) {
                      
                });
            },
            error : function(resultat, statut, erreur){
            },
            complete : function(resultat, statut){
            } 
          }

          $.ajax(settings).done(function (response) {

          });
          }
        });
      }
      //);

      // Resultats saving
      //$(".exam_save").click(
        function exam_save(){

        $('.examens-resl-tb tbody tr').each(function() {
          var exam_id = $(this).find("td").eq(0).find(":selected").val();
          // var etat = $(this).find("td").eq(1).find("input").is(":checked");
          var date = $(this).find("td").eq(2).html().split("/");
          date = date[2]+"-"+date[1]+"-"+date[0];
          // var resultat = $(this).find("td").eq(3).find("input").val();
          var comment = $(this).find("td").eq(5).find("input").val();

          //alert(exam_id+"\n"+date);
          if (typeof exam_id !== "undefined") {
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/etape/"+4+"/examen/"+exam_id+"/resultat_examens/creer?resDatePrescrit="+date+"&resCommentaire="+comment,
              "method": "POST",
              data:{
                // "resEtat":etat,
                "resDatePrescrit":date,
                // "resObservation":resultat,
                "resCommentaire":comment
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
            // alert(rows_select_id[1]);
            

          });
          $(this).remove();
          }
        });

        // init();
        // alertify.success('Examen enregistré avec succes.', 'Success Alert', {timeOut: 5000});
        // var nbre = consultation[rows_select_id[1]].resultat_examens.length;

        // //alert(nbre+"\n"+consultation[rows_select_id[1]].resultat_examens.length)
        // // while (consultation[rows_select_id[1]].resultat_examens.length=nbre){
          
        // $("#loader").show();
        // setTimeout(function(){
        //     //do what you need here
        //         examenTab();

        // }, 1000);
        // }

      // window.location = config["ui_url"]+'?page=medecin';


      }//);


      // Actes saving selected
      //$('.actes_save').click(
      function actes_save() {
        
        $('.acte_infirmier_tb tr').each(function(){
          var acte_ids = $(this).val();
          var commentaire = $("#comment_acte").val();
        
          //alert(acte_ids);
          if (typeof $(this).data("id") !== 'undefined') {
            // alert(acte_ids.join(',')+"\n"+commentaire);
            var acte_ids = $(this).data("id");
            var commentaire = $(this).find("td").eq(2).html();

            var settings = {
              "async": true,
              "crossDomain": true,
              "url": config["base_url"]+"/consultation/"+$(".cons_id").val()+"/acte/"+acte_ids+"/soins/creer?soins_commentaire="+commentaire,
              "method": "POST",
              data:{
                "soins_commentaire":commentaire
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
        });

      }//);


      //RDV saving
      //$('.rdv_save').click(
      function rdv_save(){
        var date = $('.date_rdv').val();
        var obj = $('#rdv_obj').val();
        var comment = $('#commentaire').val();
        // alert(date+"\n"+obj+"\n"+comment);
        if (comment!=="") {
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": config["base_url"]+"/patient/"+patient_cons.patient.id+"/infirmier/"+patient_cons.infirmier.id+"/specialite/"+patient_cons.specialite.id+"/medecin/"+patient_cons.medecin.id+"/etape/"+4+"/consultations/modifier/"+patient_cons.id+"?cons_rdvDate="+date+"&cons_rdvObjet="+obj+"&cons_rdvCommentaire="+comment,
          "method": "PATCH",
          data:{
            "cons_rdvDate":date,
            "cons_rdvObjet":obj,
            "cons_rdvCommentaire":comment
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
            // data_profess = response;
            // if (response.length>0) {
            //   var rows = "";
            //   for (var i = 0; i < response.length; i++) {
            //     rows = rows +"<option value="+response[i].id+">"+response[i].acte_libelle+"</option>";
            //   }

            //   $(".acte-select").html(rows);
            // }
            
          });
        // Modif consult
        }
      }//);

      $(".save-med-consul").click(function(){
        patho_save();
        arret_save();
        actes_save();
        exam_save();
        rdv_save();
        ordo_save();

       // window.location = config["ui_url"]+'?page=medecin';
      });
  }

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

   //Agent
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
<<<<<<< HEAD
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed
=======
>>>>>>> d9531ae0f0316662477a2b73ea15774163a167ed


});