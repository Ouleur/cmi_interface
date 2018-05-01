
function index(){
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultationsJourNombre",
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
   $(".counter_consul").html(response.consultation);
   $(".counter_accident").html(response.accident);
   $(".consult_total").html(response.consultationTotal);
  });
}

function pharmacie(){
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
      var medicaments = ['Diponible'];
      var seuil = ['Seuil'];
      var nom = [];
      if (response.length>0) {
        var rows = '';
        for (var i = 0; i < response.length; i++) {
          rows = rows +"<tr>";
          rows = rows +"<td>"+response[i].medic_libelle+"</td>";
          rows = rows +"<td>"+response[i].medic_nb_dispo+"</td>";
          rows = rows +"<td>"+response[i].medic_nb_seuil+"</td>";
          rows = rows +"</tr>";    

          medicaments.push(response[i].medic_nb_dispo);
          seuil.push(response[i].medic_nb_seuil)   
          nom.push(response[i].medic_libelle)   
        }

        $(".table_pharmacie_liste tbody").html(rows);
      }


      var chartP = c3.generate({
    bindto: '#chartP',
    data: {
      columns: [
              medicaments,seuil
      ],
      axes: {
        Diponible: 'y'
      },
      types: {
        Diponible: 'bar' // ADD
      }
    },
    axis: {
      y: {
        label: {
          text: 'Quantié',
          position: 'outer-middle'
        }
      },
      x: {
            type: 'category',
            categories: nom
        }
      }
    
});
      
    });
}

function patientParDepartement(){
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/consultationsParDep",
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
    
    rows = "";
    tT= 0;
    tF=0;
    tM=0;                    
    for (var i = 0; i < response.length; i++) {
      tT+=eval(response[i].Total);
      tF+=eval(response[i].qte_patientF);
      tM+=eval(response[i].qte_patientM);
    }

    for (var i = 0; i < response.length; i++) {
      rows += '<tr>';
      rows += '<td width="60%">'+response[i].enti_libelle+'</td>';
      rows += '<td>'+response[i].Total+'</td>';
      Tt = (isNaN(Math.round((eval(response[i].Total)*100)/tT,3))) ? 0 : Math.round((eval(response[i].Total)*100)/tT,3);
      rows += '<td>'+Tt+'</td>';
      rows += '<td>'+response[i].qte_patientF+'</td>';
      
      Ft = (isNaN(Math.round((eval(response[i].qte_patientF)*100)/response[i].Total,3))) ? 0 : Math.round((eval(response[i].qte_patientF)*100)/response[i].Total,3);
      rows += '<td>'+Ft+'</td>';
      rows += '<td>'+response[i].qte_patientM+'</td>';

      Mt = (isNaN(Math.round((eval(response[i].qte_patientM)*100)/response[i].Total,3))) ? 0 : Math.round((eval(response[i].qte_patientM)*100)/response[i].Total,3);
      rows += '<td>'+Mt+'</td>';
      rows += '</tr>';
    }
    rows += '<tr class="last_line" style="border-top: 5px #f0a015 solid;background: #8a8a8a;color: #fff;">';
    rows += '<td width="60%">Total</td>';
    rows += '<td>'+tT+'</td>';
    Tt = (isNaN(Math.round((tT*100)/tT,3))) ? 0 : Math.round((tT*100)/tT,3);
    rows += '<td>'+Tt+'</td>';
    rows += '<td>'+tF+'</td>';
    Ft = (isNaN(Math.round((tF*100)/tT,3))) ? 0 : Math.round((tF*100)/tT,3);
    rows += '<td>'+Ft+'</td>';
    rows += '<td>'+tM+'</td>';
    Mt = (isNaN(Math.round((tM*100)/tT,3))) ? 0 : Math.round((tM*100)/tT,3);
    rows += '<td>'+Mt+'</td>';
    rows += '</tr>';

    $(".table_consultation_liste tbody").html(rows);

  });
}


function accidentParDepartement(){
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": config["base_url"]+"/accidentParDep",
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
    
    rows = "";
    tT= 0;
    tF=0;
    tM=0;                    
    for (var i = 0; i < response.length; i++) {
      tT+=eval(response[i].Total);
      tF+=eval(response[i].qte_patientF);
      tM+=eval(response[i].qte_patientM);
    }

    for (var i = 0; i < response.length; i++) {
      rows += '<tr>';
      rows += '<td width="60%">'+response[i].enti_libelle+'</td>';
      rows += '<td>'+response[i].Total+'</td>';
      Tt = (isNaN(Math.round((eval(response[i].Total)*100)/tT,3))) ? 0 : Math.round((eval(response[i].Total)*100)/tT,3);
      rows += '<td>'+Tt+'</td>';
      rows += '<td>'+response[i].qte_patientF+'</td>';
      
      Ft = (isNaN(Math.round((eval(response[i].qte_patientF)*100)/response[i].Total,3))) ? 0 : Math.round((eval(response[i].qte_patientF)*100)/response[i].Total,3);
      rows += '<td>'+Ft+'</td>';
      rows += '<td>'+response[i].qte_patientM+'</td>';

      Mt = (isNaN(Math.round((eval(response[i].qte_patientM)*100)/response[i].Total,3))) ? 0 : Math.round((eval(response[i].qte_patientM)*100)/response[i].Total,3);
      rows += '<td>'+Mt+'</td>';
      rows += '</tr>';
    }
    rows += '<tr class="last_line" style="border-top: 5px #f0a015 solid;background: #8a8a8a;color: #fff;">';
    rows += '<td width="60%">Total</td>';
    rows += '<td>'+tT+'</td>';
    Tt = (isNaN(Math.round((tT*100)/tT,3))) ? 0 : Math.round((tT*100)/tT,3);
    rows += '<td>'+Tt+'</td>';
    rows += '<td>'+tF+'</td>';
    Ft = (isNaN(Math.round((tF*100)/tT,3))) ? 0 : Math.round((tF*100)/tT,3);
    rows += '<td>'+Ft+'</td>';
    rows += '<td>'+tM+'</td>';
    Mt = (isNaN(Math.round((tM*100)/tT,3))) ? 0 : Math.round((tM*100)/tT,3);
    rows += '<td>'+Mt+'</td>';
    rows += '</tr>';

    $(".table_accident_liste tbody").html(rows);

  });
}

pharmacie();
index();

accidentParDepartement();
patientParDepartement();