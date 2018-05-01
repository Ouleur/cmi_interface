
<div class="col-sm-12">
    <div class="card m-b-20">
        <div class="card-block">  
            <div class="col-md-3">
                <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".fade"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
            </div>
        </div>
    </div>
</div>
</div>



<div class="col-4 m-t-30">

    <!-- sample modal content -->

    <!--  Modal content for the above example -->
    <div class="modal fade bs-example-modal-lg agent_create" id="add_item" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-full-height">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Ajouter un Agent</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">

                    <div class="row" id="add_item">
                                <div class="col-sm-12">
                                    <div class="card m-b-20">
                                        <div class="card-block">

                                            <!-- <h4 class="mt-0 header-title">Ajout d'un agent</h4> -->
                                            <p class="text-muted m-b-30 font-14"></p>

                                            <form id="form-horizontal" class="form-horizontal form-wizard-wrapper">
                                                <h3>Personnelles</h3>
                                                <fieldset>
                                                    <div class="row">
                                                        
                                                        <div class="col-md-2">
                                                            <div class="form-group row">
                                                                
                                                                <!-- <div class="col-lg-12">
                                                                    <div class="col-md-12"> -->
                                                                       <img class="img-thumbnail avatar" alt="200x200" style="width: 155px; height: 150px;" src="assets/images/users/avatar-1.jpg" data-holder-rendered="true">
                                                                       <input name="photo" class="photo" id="photo" type="file"  hidden="" />
                                                                    <!-- </div>
                                                                    
                                                                </div> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtFirstNameBilling" name="matricule" type="text" class="form-control" placeholder="Matricule">
                                                                </div>
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtFirstNameBilling" name="nom" type="text" class="form-control" placeholder="Nom">
                                                                </div>
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtLastNameBilling" name="prenoms" type="text" class="form-control" placeholder="Prenoms">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   <!--  <div class="row">
                                                        
                                                    </div> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="date_naiss" class="col-lg-3 col-form-label">Date de naissance</label>
                                                                <div class="col-lg-9">
                                                                    <div class="input-group">
                                                                        <input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >
                                                                        <span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="sit_mat" class="col-lg-3 col-form-label">Situation Matrimoniale</label>
                                                                <div class="col-lg-9">
                                                                    <select name="sit_mat" class=" sit_mat-select custom-select">
                                                                        <option value="Célibataire">Célibataire</option>
                                                                        <option value="Marié(e)">Marié(e)</option>
                                                                        <option value="Divorcé(e)">Divorcé(e)</option>
                                                                        <option value="Veuf(ve)">Veuf(ve)</option>
                                                                        
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="localite" class="col-lg-3 col-form-label">Localité</label>
                                                                <div class="col-lg-9">
                                                                    <input id="localite" name="localite" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="lieu_naiss" class="col-lg-3 col-form-label">Lieu de naissance</label>
                                                                <div class="col-lg-9">
                                                                    <input id="lieu_naiss" name="lieu_naiss" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="civilite" class="col-lg-3 col-form-label">Civilité</label>
                                                                <div class="col-lg-9">
                                                                    
                                                                    <select name="civilite" class=" civilite-select custom-select">
                                                                        <option value="Mr">Monsieur</option>
                                                                        <option value="mme">Madamme</option>
                                                                        <option value="dlle">Démoiselle</option>
                                                                    </select>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="grp_sang" class="col-lg-3 col-form-label">Groupe Sanguin</label>
                                                                <div class="col-lg-9">
                                                                    <input id="grp_sang" name="grp_sang" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="nb_enfant" class="col-lg-3 col-form-label">Nombre d'enfant</label>
                                                                <div class="col-lg-9">
                                                                    <input id="nb_enfant" name="nb_enfant" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="contact" class="col-lg-3 col-form-label">Contacts</label>
                                                                <div class="col-lg-9">
                                                                    <input id="contact" name="contact" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">

                                                            <div class="form-group row">
                                                                <label for="sexe" class="col-lg-3 col-form-label">Sexe</label> 
                                                                 <div class="col-lg-9">  
                                                                <div >
                                                                    <select name="sexe" class=" sexe-select custom-select">
                                                                        <option value="0" selected>Selection du genre</option>
                                                                        <option value="M">Masculin</option>
                                                                        <option value="F">Feminin</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="mail" class="col-lg-3 col-form-label">Email</label>
                                                                <div class="col-lg-9">
                                                                    <input id="mail" name="mail" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    
                                                </fieldset>
                                                
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light add_submit">Enregistrer</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

</div>



<div class="liste-patient row">




        
</div>
<div class="col-4 m-t-30">

    <!-- sample modal content -->

    <!--  Modal content for the above example -->
    <div class="modal fade bs-example-modal-lg " id="detail_item" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-full-height">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Ajouter un Agent</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">

                    <div class="row" id="add_item">
                                <div class="col-sm-12">
                                    <div class="card m-b-20">
                                        <div class="card-block">

                                            <!-- <h4 class="mt-0 header-title">Ajout d'un agent</h4> -->
                                            <p class="text-muted m-b-30 font-14"></p>

                                            <form id="form-horizontal" class="form-horizontal form-wizard-wrapper">
                                                <h3>Personnelles</h3>
                                                <fieldset>
                                                    <div class="row">
                                                        
                                                        <div class="col-md-2">
                                                            <div class="form-group row">
                                                                
                                                                <!-- <div class="col-lg-12">
                                                                    <div class="col-md-12"> -->
                                                                       <img class="img-thumbnail avatar" alt="200x200" style="width: 155px; height: 150px;" src="assets/images/users/avatar-1.jpg" data-holder-rendered="true">
                                                                       <input name="photo" class="photo" type="file" hidden="true">
                                                                    <!-- </div>
                                                                    
                                                                </div> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtFirstNameBilling" name="matricule" type="text" class="form-control" placeholder="Matricule">
                                                                </div>
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtFirstNameBilling" name="nom" type="text" class="form-control" placeholder="Nom">
                                                                </div>
                                                                
                                                                <div class="col-lg-9">
                                                                    <input id="txtLastNameBilling" name="prenoms" type="text" class="form-control" placeholder="Prenoms">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   <!--  <div class="row">
                                                        
                                                    </div> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="date_naiss" class="col-lg-3 col-form-label">Date de naissance</label>
                                                                <div class="col-lg-9">
                                                                    <div class="input-group">
                                                                        <input type="date" name="date_naiss" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" >
                                                                        <span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="sit_mat" class="col-lg-3 col-form-label">Situation Matrimoniale</label>
                                                                <div class="col-lg-9">
                                                                    <select name="sit_mat" class=" sit_mat-select custom-select">
                                                                        <option value="Célibataire">Célibataire</option>
                                                                        <option value="Marié(e)">Marié(e)</option>
                                                                        <option value="Divorcé(e)">Divorcé(e)</option>
                                                                        <option value="Veuf(ve)">Veuf(ve)</option>
                                                                        
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="localite" class="col-lg-3 col-form-label">Localité</label>
                                                                <div class="col-lg-9">
                                                                    <input id="localite" name="localite" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="lieu_naiss" class="col-lg-3 col-form-label">Lieu de naissance</label>
                                                                <div class="col-lg-9">
                                                                    <input id="lieu_naiss" name="lieu_naiss" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="civilite" class="col-lg-3 col-form-label">Civilité</label>
                                                                <div class="col-lg-9">
                                                                    
                                                                    <select name="civilite" class=" civilite-select custom-select">
                                                                        <option value="Mr">Monsieur</option>
                                                                        <option value="mme">Madamme</option>
                                                                        <option value="dlle">Démoiselle</option>
                                                                    </select>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="grp_sang" class="col-lg-3 col-form-label">Groupe Sanguin</label>
                                                                <div class="col-lg-9">
                                                                    <input id="grp_sang" name="grp_sang" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="nb_enfant" class="col-lg-3 col-form-label">Nombre d'enfant</label>
                                                                <div class="col-lg-9">
                                                                    <input id="nb_enfant" name="nb_enfant" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="contact" class="col-lg-3 col-form-label">Contacts</label>
                                                                <div class="col-lg-9">
                                                                    <input id="contact" name="contact" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">

                                                            <div class="form-group row">
                                                                <label for="sexe" class="col-lg-3 col-form-label">Sexe</label> 
                                                                 <div class="col-lg-9">  
                                                                <div >
                                                                    <select name="sexe" class=" sexe-select custom-select">
                                                                        <option value="0" selected>Selection du genre</option>
                                                                        <option value="M">Masculin</option>
                                                                        <option value="F">Feminin</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="mail" class="col-lg-3 col-form-label">Email</label>
                                                                <div class="col-lg-9">
                                                                    <input id="mail" name="mail" type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    
                                                </fieldset>
                                                <h3>Professionnelles</h3>
                                                <fieldset>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtFirstNameShipping" class="col-lg-3 col-form-label">Entité</label>
                                                                <div class="col-lg-9">
                                                                    <select class="entite-select custom-select">
                                                                        <option value="0" selected>Selection du lieu</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtLastNameShipping" class="col-lg-3 col-form-label">Lieu de travail</label>
                                                                <div class="col-lg-9">
                                                                    <select class="lieu-select custom-select">
                                                                        <option value="0" selected>Selection du lieu</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtCompanyShipping" class="col-lg-3 col-form-label">Type de contrat</label>
                                                                <div class="col-lg-9">
                                                                    <select class="contrat-select custom-select">
                                                                        <option value="0" selected>Type de contrat</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtCompanyShipping" class="col-lg-3 col-form-label">Categorie</label>
                                                                <div class="col-lg-9">
                                                                   <select class="categorie-select custom-select">
                                                                        <option value="0" selected>Selection de la catégorie</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        
                                                        
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtCompanyShipping" class="col-lg-3 col-form-label">Profession</label>
                                                                <div class="col-lg-9">
                                                                    <select class="prof-select custom-select">
                                                                        <option value="0" value="0" selected>Profession</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label for="txtCompanyShipping" class="col-lg-3 col-form-label">Categorie</label>
                                                                <div class="col-lg-9">
                                                                   <select class="type-select custom-select">
                                                                        <option value="0" selected>Selection du type</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                    

                                                </fieldset>
                                                
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light add_submit">Enregistrer</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

</div>