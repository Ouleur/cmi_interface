<div class="row row-in">





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
                                <div class='col-md-9 patient_info'>
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
                                <a class="nav-link active" data-toggle="tab" href="#diagnostic" role="tab">DIAGNOSRIQUES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#ordonnances" role="tab">ORDONNANCES</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#examens" role="tab">EXAMENS</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#resexamens" role="tab">RESULTAT </a>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#actes" role="tab">ACTES</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#arret" role="tab">ARRET DE TRAVAIL</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#rdv" role="tab">RDV</a>
                            </li>

                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active p-3" id="diagnostic" role="tabpanel">


                                <div class="row">
                                    <div class="col-sm-3 motif_inf">
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div >
                                                    <select class="motif-med-select" name="motifs">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-dark  waves-effect waves-light add-motif_inf_med"><i class="mdi mdi-plus-circle" ></i> Ajouter</button>

                                        <table id="" class="table motif_inf-tb">
                                            <thead class="thead-default">
                                                <!-- <th>Pathologie</th> -->
                                                <th>#</th>
                                                <th>Motif</th>
                                                <th>Action</th>
                                            </thead>
                                            <tbody class="tab-body">

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-sm-3">


                                        <h4>Diagnostique</h4>
                                        <div class="row">
                                            <div class="form-group col-sm-5">
                                                <label>Symptomatologie</label>
                                                <div>
                                                    <select class="custom-select cause_custom">
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-4"></div>
                                            <div class="form-group col-sm-5">
                                                <label >Pathologie</label>
                                                <div >
                                                    <select class="custom-select patho-custom">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-dark waves-effect waves-light patho_add">
                                                Ajouter
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-sm-5">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="card m-b-20">

                                                    <h3>Liste des Diagnostiques</h3>
                                                    <table id="" class="table diagnostique_tb">
                                                        <thead class="thead-default">
                                                            <tr>
                                                                <th>Pathologie</th>
                                                                <th>Signe</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div> <!-- end col -->
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light patho_save">
                                            Enregistrer la pathologie
                                        </button>
                                    </div> -->
                                </div> <!-- row -->
                            </div>


                            <div class="tab-pane p-3" id="ordonnances" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <!-- <div class="card m-b-20"> -->

                                                    <button type="button" class="btn btn-dark  waves-effect waves-light add-ordonnance" data-toggle="modal" data-target=".bs-medicament-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                                                    <div class="col-lg-12 ordonnances-tb-med">
                                                    <table id="" class="table ordonnances-tb">
                                                        <thead class="thead-default">
                                                            <!-- <th>Pathologie</th> -->
                                                            <th>Medicament</th>
                                                            <th>Remplacant</th>
                                                            <th>Quantité</th>
                                                            <th>Servir</th>
                                                            <th>Durée</th>
                                                            <th>Posologie</th>
                                                            <th>Actions</th>
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>
                                                    </div>
                                                <!-- </div> -->
                                            </div> <!-- end col -->
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light ordo_save">
                                            Enregistrer l'ordonnance
                                        </button>
                                    </div> -->
                                </div> <!-- row -->
                            </div>

                            <div class="tab-pane p-3" id="examens" role="tabpanel">
                                 <!-- Loader -->
                                <div class="row">

                                   <div class="col-sm-12">
                                            <!-- <div class="card m-b-20"> -->

                                                <button type="button" class="btn btn-dark waves-effect waves-light add-resultat" data-toggle="modal" data-target=".bs-medicament-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                                                
                                                <table id="" class="table examens-resl-tb">
                                                    <thead class="thead-default">
                                                        <th>Examens</th>
                                                        <th>Fait</th>
                                                        <th>Prescrit le</th>
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

                            <div class="tab-pane p-3" id="actes" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            
                                            <div class="col-lg-4 actes_infirmier">
                                                
                                                <h4 class="mt-0 header-title">Sélection des actes >></h4>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        
                                                        <select name="acte" class="form-control acte_select">
                                                            
                                                        </select>
                                                    </div>

                                                    <div class="col-lg-12">
                                                        <label for="comment_acte" class="col-lg-3 col-form-label">Commentaire</label>
                                                        <textarea id="comment_acte" name="comment_acte" type="text" class="form-control" ></textarea>
                                                    </div>

                                                    <div class="col-lg-12">
                                                        <button type="button" class="btn btn-dark waves-effect waves-light add-acte" ><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                                                    </div>
                                                    
                                                </div>
                                            </div> <!-- end col -->

                                            <div class="col-lg-8 acte_infirmier_med">
                                                        Liste des actes
                                                
                                                <div class="col-lg-12">
                                                    <table id="" class="table acte_infirmier_tb">
                                                        <thead class="thead-default">
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Actes</th>
                                                                <th>Commentaire</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            
                                            <!-- <div class="col-sm-12" style="margin: 10px 0 0 0;">
                                                <button class="btn btn-success waves-effect waves-light actes_save">
                                                    Enregistrer les Actes
                                                </button>
                                            </div> -->
                                        </div>
                                    </div>
                                </div> <!-- row -->
                            </div>

                            <div class="tab-pane p-3" id="arret" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row rdv_edit">
                                            <div class="col-sm-5">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row ">
                                                            <label>Arrêt</label>
                                                            <div>
                                                                <div class="input-daterange input-group" id="arret-range">
                                                                    <input type="text" class="form-control" name="start" id="start" placeholder="Début d'arrêt" data-date-format="mm/dd/yyyy"/>
                                                                    <span class="input-group-addon b-0">au</span>
                                                                    <input type="text" class="form-control" name="end" id="end" placeholder="Fin d'arrêt"/>
                                                                    <span class="input-group-addon b-0 nbr_jr"></span>
                                                                </div>
                                                            </div>
                                        
                                                        </div>

                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-lg-6 arret_medecin_med">
                                                        Liste des Arrêts
                                                
                                                <div class="col-lg-12">
                                                    <table id="" class="table arret_medecin_tb">
                                                        <thead class="thead-default">
                                                            <tr>
                                                                <th>Date Début</th>
                                                                <th>Date Fin</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light rdv_save">
                                            Enregistrer le rendez-vous
                                        </button>
                                    </div> -->
                                </div> <!-- row -->
                            </div>
            
                            <div class="tab-pane p-3" id="rdv" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                        <div class="row rdv_edit col-sm-6">
                                            <div class="col-sm-5">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <label for="date_rdv" class="col-lg-12 col-form-label">Date du rendez-vous</label>
                                                                <div class="input-group">
                                                                    <input type="date" name="date_rdv" class="form-control date_rdv" placeholder="mm/dd/yyyy"  >
                                                                    <span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <label for="rdv_obj" class="col-lg-12 col-form-label">Objet du rendez-vous</label>
                                                                <input id="rdv_obj" name="rdv_obj" type="text" class="form-control" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-7">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <label for="commentaire" class="col-lg-3 col-form-label">Commentaire</label>
                                                                <textarea id="commentaire" style="height: 126px;" name="commentaire" type="text" class="form-control" ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 rdv_medecin_med">
                                                        Liste des Rendez-vous
                                                
                                                <div class="col-lg-12">
                                                    <table id="" class="table rdv_medecin_tb">
                                                        <thead class="thead-default">
                                                            <tr>
                                                                <th>Date </th>
                                                                <th>Objet</th>
                                                                <th>Commentaire</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        <!-- <div class="col-sm-3 motif_inf">
                                            
                                            <table id="" class="table rdv-tb">
                                                <thead class="thead-default"> -->
                                                    <!-- <th>Pathologie</th> -->
                                                    <!-- <th>#</th>
                                                    <th>Date</th>
                                                    <th>Objet</th>
                                                    <th>Commentaire</th>
                                                </thead>
                                                <tbody class="tab-body">

                                                </tbody>
                                            </table>
                                        </div> -->
                                    </div>
                                    </div>
                                    <!-- <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light rdv_save">
                                            Enregistrer le rendez-vous
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
