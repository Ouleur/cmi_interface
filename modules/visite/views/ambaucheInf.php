<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Visites d'ambauche</h4>
            <table id="" class="table table-striped table_visite_liste" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénoms</th>
                            <th>Date de naissance</th>
                            <th>Date de lavisite</th>
                            <th>Heure de la visite</th>
                            <th>Infirmier</th>
                            <th>Medecin</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                        
                    </tbody>
            </table>

            </div>
        </div>
    </div>
</div>
<!--  Modal content for the above example -->
        <div class="modal fade bs-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mt-0" id="myLargeModalLabel">Large modal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                       <div class="col-sm-12">
                        <div class="card m-b-20">
                            <div class="card-block">
                                <div class="row">
                                    <div class='col-md-9 patient-info'>
                                        
                                    </div>
                                    <div class="col-md-3">
                                        <img class="img-thumbnail" alt="200x200" style="width: 150px; height: 150px;" src="assets/images/users/avatar-3.jpg" data-holder-rendered="true">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card m-b-20">
                        <div class="card-block" id="ambauche_add">

                            

                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Prise de Constances</a>
                                    </li>

                                </ul>

                               
                                    <div class="tab-pane p-3" id="home" role="tabpanel">
                                        <div class="row">
                                            <div class="col-sm-2">


                                                Tension arterielle
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        Bras gauche
                                                        <input id="" name="bras_g" type="text" class="form-control" placeholder="Ex: 14">
                                                    </div>
                                                    <div class="col-lg-12">
                                                        Bras droit
                                                        <input id="" name="bras_d" type="text" class="form-control" placeholder="Ex: 14">
                                                    </div>
                                                </div>
                                                    
                                                </div>
                                            <div class="col-sm-2">


                                                Poids
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="poids" type="text" class="form-control" placeholder="Ex: 80">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-2">


                                                Taille
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="taille" type="text" class="form-control" placeholder="Ex: 1.70">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-2">


                                                Pouls
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="pouls" type="text" class="form-control"
                                                                placeholder="Ex: 60">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-2">


                                                Temperature
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="temperature" type="text" class="form-control" placeholder="Ex: 37">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-sm-2">


                                                Ophtamologie
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        Oeil gauche
                                                        <input id="" name="oeuil_g" type="text" class="form-control" placeholder="Ex: 14">
                                                    </div>
                                                    <div class="col-lg-12">
                                                        Oeil droit
                                                        <input id="" name="oeuil_d" type="text" class="form-control" placeholder="Ex: 14">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    
                                    </div>
                                </div>
                            </div>



                            <div class="form-group">
                                <div>
                                    <button type="submit" class="btn btn-pink waves-effect waves-light infrimier_visite_save" data-dismiss="modal">
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
