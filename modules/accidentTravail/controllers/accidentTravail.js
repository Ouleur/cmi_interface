

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

  accidentTravail();