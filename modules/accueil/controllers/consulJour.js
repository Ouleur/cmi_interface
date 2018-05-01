
  
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


consulJour();