
var token=(sessionStorage.getItem("token")==null) ? localStorage.getItem("token") : sessionStorage.getItem("token");

var id=(sessionStorage.getItem("cmi-id")==null) ? localStorage.getItem("cmi-id") : sessionStorage.getItem("cmi-id");

var config = {
	"ui_base":"http://localhost/cmi",
	"ui_url":"http://localhost/cmi/index.php",
	//"base_url":"http://127.0.0.1:8000",
	"base_url":"http://127.0.0.1/cmi_dev/web/app.php",
	"auth_token":token,
	"cmi-id":id
	
};


var modules = [
			{"nom":"accueil","titre":"Accueil"},
			{"nom":"consultation","titre":"Consultation"},
			{"nom":"infirmier","titre":"Infirmier"},
			{"nom":"medecin","titre":"Medecin"},
			{"nom":"pharmacien","titre":"Pharmacien"},
			{"nom":"accidentTravail","titre":"Accident de travail"},
			{"nom":"visite","titre":"Visite"},
			{"nom":"administration","titre":"Administration"},
			{"nom":"dashboard","titre":"Tableau de bord"}
];