<div class="col-12">
    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <form id="form-horizontal" class="form-horizontal form-wizard-wrapper">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="ay_drt" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Ayant droit</span>
                                </label>
                            </div>

                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="agent" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Agent</span>
                                </label>
                            </div>

                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="autre" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Autre</span>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">

                                        <input id="template-custom" name="txtFirstNameBilling" type="text" class="form-control" placeholder="Matricule">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">
                                        <input id="search-nom" name="txtLastNameBilling" type="text" class="form-control " placeholder="Nom">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">
                                        <input id="txtCompanyBilling" name="txtCompanyBilling" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class='col-md-3'>
                                <div class="dorm-group row">
                                    <button type="button" class="btn btn-dark waves-effect waves-light patient-search">Rechercher</button>
                                </div>
                                
                            </div>

                        </div>
                        

                    </fieldset>
                    
                </form>




            </div>
        </div>
    </div>
<div id="consul-contain">
    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <div class="row">
                    <div class='col-md-9' id="patient-info">
                           <!-- <p><strong>Matricule:</strong> 45872</p>
                           <p><strong>Nom:</strong> ADOU</p>
                           <p><strong>Prénoms:</strong> Kouaho Jean-Marie Vianney</p>
                           <p><strong>Age:</strong> 24</p>
                           <p><strong>Groupe Sanguin:</strong> B+</p> -->
                    </div>
                    <div class="col-md-3">
                       <img class="img-thumbnail " alt="200x200" style="width: 150px; height: 150px;" src="assets/images/users/avatar-1.jpg" data-holder-rendered="true">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <h3>Infirmier</h3>
                <div class="row">

                    <div class="col-md-6">
                            <div class="form-group row">
                            <label for="txtLastNameBilling" class="col-lg-3 col-form-label" >Infirmier</label>
                                <div class=" col-lg-6">
                                    <select class="infirmer-select custom-select">
                                        <!-- <option selected>Selection du type</option>
                                        <option value="Pha">Pharmacien</option>
                                        <option value="Inf">Infirmier</option>
                                        <option value="Med">Medecin</option> -->
                                    </select>
                                </div>
                            </div>
                           
                    </div>

                    <div class="col-md-5">
                        <div class="form-group row">
                            <label for="txtLastNameBilling" class="col-lg-3 col-form-label" >Motif</label>
                            <div class=" col-lg-6">
                                <select  class="motif-select" name="states[]" multiple="multiple">
                                        <!-- <option selected>Selection du type</option>
                                        <option value="Pha">Pharmacien</option>
                                        <option value="Inf">Infirmier</option>
                                        <option value="Med">Medecin</option> -->
                                </select>
                            </div>
                            <div class="col-lg-3"><a href="" data-toggle="modal" data-target=".bs-example-modal-lg" data-animation="true"> + </a></div>
                        </div>
                    </div>
                </div>
                
         </div>
     </div>
    </div>


    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <h3>Medecin</h3>
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="txtLastNameBilling" class="col-lg-3 col-form-label" >Spécialité</label>
                                <div class=" col-lg-6">
                                    <select class="special-select custom-select">
                                       <!--  <option selected>Selection du type</option>
                                        <option value="Pha">Pharmacien</option>
                                        <option value="Inf">Infirmier</option>
                                        <option value="Med">Medecin</option> -->
                                    </select>
                                </div>
                            </div>
                           
                    </div>
                    <div class="col-md-5">
                        <div class="form-group row">
                            <label for="txtLastNameBilling" class="col-lg-3 col-form-label" >Medecin</label>
                                <div class=" col-lg-6">
                                    <select class="medecin-select custom-select">
                                        <!-- <option selected>Selection du type</option>
                                        <option value="Pha">Pharmacien</option>
                                        <option value="Inf">Infirmier</option>
                                        <option value="Med">Medecin</option> -->
                                    </select>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <button type="button" class="btn btn-primary waves-effect waves-light save-consul">Enregistrer la consultation</button>
            </div>
        </div>
    </div>
</div>
</div> <!-- end row -->
 <!--  Modal content for the above example -->
<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvelle symptomatologie</h5>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="card m-b-20">
            <div class="card-block">
                

                    <div class="form-group">
                        <label>Code</label>
                        <input type="text" name="code" class="form-control" required placeholder="Code"/>
                    </div>

                    <div class="form-group">
                        <label>Libelle</label>
                        <div>
                            <input type="text"  name="libelle" class="form-control" required
                            placeholder="Libelle"/>
                        </div>

                    </div>

                    <div class="form-group">
                        <div>
                            <button type="button" data-animation="false" class="add-motif btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                Enregistrer
                            </button>
                            <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                Annuler
                            </button>
                        </div>
                    </div>
                           

            </div>
        </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->