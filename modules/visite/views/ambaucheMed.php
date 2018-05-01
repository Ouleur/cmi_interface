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
                            <th>Date de la visite</th>
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
<div class="modal fade bs-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-full-height" role="document" >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0" id="myLargeModalLabel">Informations de consultation</h5>
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
                                    <img class="img-thumbnail" alt="200x200" style="width: 150px; height: 150px;" src="assets/images/users/avatar-1.jpg" data-holder-rendered="true">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-b-20">
                    <div class="card-block consultation_info">



                        <h4 class="mt-0 header-title">Prestation</h4>

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#examens" role="tab">EXAMENS</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            


                            <div class="tab-pane p-3 active" id="examens" role="tabpanel">
                                 <!-- Loader -->
                                <div class="row">

                                   <div class="col-sm-12">
                                            <!-- <div class="card m-b-20"> -->

                                                <button type="button" class="btn btn-dark waves-effect waves-light add-resultat" data-toggle="modal" data-target=".bs-medicament-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                                                
                                                <table id="" class="table examens-resl-tb">
                                                    <thead class="thead-default">
                                                        <th>Examens</th>
                                                        <th>Fait</th>
                                                        <th>Fait le</th>
                                                        <th>Resultat</th>
                                                        <th>Commentaire</th>
                                                        <th>Actions</th>
                                                    </thead>
                               

                                                    <tbody >
                                                    </tbody>

                                                </table>
                                                <div id="loader" hidden><div id="status"><div class="spinner"></div></div></div>

                                                <!-- </div> -->
                                        
                                    </div>
                                    <!-- <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light exam_save">
                                            Enregistrer les examens
                                        </button>
                                    </div> -->
                                    
                                </div> <!-- row -->
                            </div>

                                        
                            
                        </div>



                        <div class="form-group">
                            <div>
                                <button class="save-med-consul btn btn-pink waves-effect waves-light">
                                    Enregistrer la prestation
                                </button>
                                <button type="reset" data-dismiss="modal" class="btn btn-secondary waves-effect m-l-5">
                                    Retour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!--  Modal content for the above example -->
<div class="modal fade bs-examen-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0" id="myLargeModalLabel">Modification de l'examen</h5>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="card m-b-20">
                    <div class="card-block">
                        
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="row">
                                    <input type="text" class="data_id" hidden>
                                    <div class="col-sm-6">
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                    Examen : 
                                            </div>
                                            <div class="col-lg-8 examen_nom"> Examen 1</div>
                                        
                                            <div class="col-lg-4">Etat : </div>

                                                                        
                                                <div class="col-lg-8">
                                                    <input type="checkbox" id="etatExam" data-width="100"/><!-- 
                                                    <label for="etatExam" data-on-label="Fait" data-off-label="Non"></label> -->
                                                </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group row">
                                                <div class="col-lg-4">Prescrit le : </div>
                                                <div class="col-lg-8 examen_date_prescrit">
                                                   12 / 12 / 2016
                                                </div>
                                        
                                                <div class="col-lg-4">Fait le : </div>
                                                <div class="col-lg-8">
                                                    <input type="date"  name="libelle" class="form-control examen_date_fait" required
                                                    placeholder="03 / 02 / 2018"/>
                                                </div>

                                        </div>

                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group row">

                                            <div class="col-lg-12">Interpretation</div>
                                            <div class="col-lg-12">
                                                <textarea name="libelle" class="form-control examen_resultat" required
                                                placeholder="Interpretation du resultat"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group row">

                                            <div class="col-lg-12">Comentaire</div>
                                            <div class="col-lg-12">
                                                <textarea type="text"  name="libelle" class="form-control examen_comentaire" required
                                                placeholder="Password"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-sm-8">
                                        <div>
                                            <button type="button" data-animation="false" class="modif_exam_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                                Modifier
                                            </button>
                                            <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                   
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
