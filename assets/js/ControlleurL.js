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





});