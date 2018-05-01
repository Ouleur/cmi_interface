<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Visites annuelle</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg" data-animation="false"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                </div>
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

<div class="col-4 m-t-30">

    <!-- sample modal content -->

    <!--  Modal content for the above example -->
    <div class="modal fade bs-example-modal-lg" role="dialog" id="myModal" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
                        <div class="modal-dialog modal-lg modal-middle-height" role="document" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Enregistrement d'une visite d'ambauche</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body ">
                                    
                                    <div class="card-block" id="ambauche_add">
                                
                                        <div class="row">
                                            
                                            <div class=" col-md-12 form-group">
                                                <b>Recherche de l'employer</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>Matricule</label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <input id="template-custom" name="txtFirstNameBilling" type="text" class="form-control col-md-12" placeholder="Matricule">
                                                    </div>
                                                    <div class='col-md-3'>
                                                        <div class="dorm-group row">
                                                            <button type="button" class="btn btn-dark waves-effect waves-light patient-search">Rechercher</button>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" col-md-12 form-group">
                                                <b>Information générale</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row ">
                                                    <div class='col-md-9' id="patient-info">
                                                    </div>                                                      
                                                </div>
                                            </div>

                                            <div class=" col-md-12 form-group">
                                                <b>Visite d'ambauche</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row">
                                                    <div class=" col-md-6">
                                                        <div class="row">
                                                            <div class=" col-md-12">
                                                                <div class="row">
                                                                <div class="col-md-3">
                                                                Motif
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <select class="motif-visite-select custom-select select2">
                                                                        <option value="ambauche">Ambauche</option>
                                                                        <option value="annuelle" selected>Annuelle</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        
                                                            
                                                            <div class=" col-md-12">
                                                                <div class="row">
                                                                <div class="col-md-3">Infirmier</div>
                                                                <div class="col-md-7">
                                                                <select type="text" name="infirmier" class="form-control infirmier-select" ></select>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div class=" col-md-12">
                                                                <div class="row">
                                                               <div class="col-md-3">Medecin</div>
                                                               <div class="col-md-7">
                                                                <select type="date" name="medecin" class="form-control medecin-select" ></select>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div class=" col-md-12">
                                                                <div class="row">
                                                               <div class="col-md-3">Date de rendez-vous</div>
                                                               <div class="col-md-7">
                                                                <input type="date" name="daterdv" class="form-control " required placeholder="Ex : 04/12/2000"/>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div class=" col-md-12">
                                                                <div class="row">
                                                               <div class="col-md-3">Heure de rendez-vous</div>
                                                               <div class="col-md-7">
                                                                <input type="time" name="heurerdv" class="form-control " required placeholder="Ex : 14:45"/>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6" style="height: 300px;">
                                                        Examens
                                                        <div class="col-lg-8 acte_infirmier_med">
                                                            <div class="row">
                                                                    
                                                                <div class="col-md-7">
                                                                    <select class="exam-visite-select custom-select">
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <button type="button" data-animation="false" class="btn-add-exeam-ann-visit btn btn-pink waves-effect waves-light">Ajouter</button>
                                                                </div>
                                                        
                                                                <div class="col-lg-12">
                                                                    <table id="" class="table exam_visite_ann_tb">
                                                                        <thead class="thead-default">
                                                                            <tr>
                                                                                <th>#</th>
                                                                                <th>Examen</th>
                                                                                <th>Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody >

                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            
                                        </div>
                          

                                        <div class="form-group">
                                            <div>
                                                <button type="button" data-animation="false" class="add_ann_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                                    Enregistrer
                                                </button>
                                                <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                                     Annuler
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal-dialog -->
                    </div><!-- /.modal -->
</div>
<div class="liste-praticiens row">




        
</div>
         <!--  Modal content for the above example -->
    <div class="modal fade <?php echo 'bs-example-modal-lg'.$i;?>" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Detail du praticien <?php echo $i;?></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    
                    <div class="card m-b-20">
                        <div class="card-block">

                            
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" name="nom" class="form-control" required placeholder="Type something"/>
                                </div>

                                <div class="form-group">
                                    <label>Prenoms</label>
                                    <div>
                                        <input type="text" name="prenoms" id="" class="form-control" required
                                        placeholder=""/>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label >Sexe</label>
                                    <div >
                                        <select class="sexe-select custom-select">
                                            <option selected>Selection du genre</option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>E-Mail</label>
                                    <div>
                                        <input type="email" name="mail" class="form-control" required
                                        parsley-type="email" placeholder="Enter a valid e-mail"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Contacts</label>
                                    <div>
                                        <input type="text" class="form-control"
                                        required placeholder=""/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label >Type praticien</label>
                                    <div >
                                        <select class="type-select custom-select">
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <button type="submit" data-dismiss="modal" class="btn btn-pink waves-effect waves-light">
                                            Submit
                                        </button>
                                        <button type="reset" data-dismiss="modal" class="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
        
</div>