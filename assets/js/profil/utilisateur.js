$(document).ready(function(){
var page = window.location.search.substring(1).split('page=')[1];


function conexion(){

	$(".conexion").click(function(){
		
			var username = $("#username").val();
			var password = $("#userpassword").val();
			
			var settings = {
			    "async": true,
			    "crossDomain": true,
			    "url": config["base_url"]+"/auth-tokens?login="+username+"&password="+password,
			    "method": "POST",
			    type:'POST',
			    data:{"login":username, "password":password},
			    success : function(code_html, statut){
			        //alert(code_html.value);
			        if ($(".remind").is(":checked")) {
						localStorage.setItem("token",code_html.value);
						localStorage.setItem("cmi-id",code_html.id);
				    }else {
						sessionStorage.setItem("token",code_html.value);
						sessionStorage.setItem("cmi-id",code_html.id);
					}
	          		window.location = config["ui_url"]+'?page=index&module=dashboard';

			      },
			      error : function(resultat, statut, erreur){
			      },
			      complete : function(resultat, statut){
			      } 
			    }

		    $.ajax(settings).done(function (response) {
		    	// if (typeof response.value!="undefine") {
		    	// 	window.location = config["ui_url"]+'?page=consulJour';
		    	// }
			});
		
	});

}

//Vérifions si le token est valide
function start(){
	
	if (window.location.href != window.location.origin+"/cmi/login.php" ) {
		var settings = {
		    "async": true,
		    "crossDomain": true,
		    "url": config["base_url"]+"/usersConnected/"+config["cmi-id"],
		    "method": "GET",
		    type:'GET',
		    data:{},
		    headers: {
			    "x-auth-token": config["auth_token"],
			},
		    success : function(code_html, statut){
		        //alert(code_html[0].proff_libelle);
	      		//window.location = config["ui_url"]+'?page=consulJour';

		      },
		      error : function(resultat, statut, erreur){
		      	if(erreur=="Unauthorized"){
		      		window.location = config["ui_base"]+"/login.php";
		      	}	        
		      },
		      complete : function(resultat, statut){
		      } 
		    }

	    $.ajax(settings).done(function (response) {

	    	//Gestion des Menus selon le profil
	    	for (var e = 0; e <modules.length; e++) {
	    		acces = false;

	    		for (var i = 0; i <response.droit_acces.length; i++) {

	    			if (response.droit_acces[i].da_fonctionalite == modules[e].nom) {
					    acces = true;
					    break;
					}else{
					    acces = false;
					}
	    		}

	    		if (!acces) {
	    			$("li."+modules[e].nom).remove();
	    		}
			  
			}
	    	
		});
	}
}


//Vérifions si le token est valide
function deconnexion(){
		
	$(".deconnexion").click(function(){
		var settings = {
		    "async": true,
		    "crossDomain": true,
		    "url": config["base_url"]+"/auth-tokens/"+config["cmi-id"],
		    "method": "DELETE",
		    type:'DELETE',
		    headers: {
		        "x-auth-token": config["auth_token"],
		      },
		    data:{
		    },
		    success : function(code_html, statut){
		        //alert(code_html[0].proff_libelle);
	      		window.location = config["ui_url"];

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




// Execution des fonctions

start();

conexion();

deconnexion();
});