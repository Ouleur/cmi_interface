<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                
                <h4 >Historique des consultations </h4>
                <p class="text-muted m-b-30 font-14"></p>

                <div class="table-rep-plugin">
                    <div class="table-responsive b-0" data-pattern="">
                        <table id="consultation_tab" class="table  table-striped">
                            <thead>
                            <tr>
                                <th data-priority="1">Matricule</th>
                                <th data-priority="3">Nom et prénoms</th>
                                <th data-priority="1">Qualité</th>
                                <th data-priority="3">Age</th>
                                <th data-priority="3">Etape</th>
                                <th data-priority="6">Praticien</th>
                                <th data-priority="6">Spécialité</th>
                                <th data-priority="6">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    </div> <!-- end col -->
</div> <!-- end row -->


<!--  Modal content for the above example -->
<div class="modal fade edit-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-full-height" role="document" >
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
                                <div class='col-md-9 patient_info'>
                                    <!-- <p><strong>Matricule:</strong> 45872</p>
                                    <p><strong>Nom:</strong> ADOU</p>
                                    <p><strong>Prénoms:</strong> Kouaho Jean-Marie Vianney</p>
                                    <p><strong>Age:</strong> 24</p>
                                    <p><strong>Groupe Sanguin:</strong> B+</p> -->
                                </div>
                                <div class="col-md-3">
                                    <img class="img-thumbnail" alt="200x200" style="width: 150px; height: 150px;" src="assets/images/users/avatar-1.jpg" data-holder-rendered="true">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-b-20">
                    <div class="card-block">



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
                                <a class="nav-link" data-toggle="tab" href="#rdv" role="tab">RDV</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active p-3" id="diagnostic" role="tabpanel">


                                <div class="row">
                                    <!-- <div class="col-sm-5">


                                        <h4>Diagnostic</h4>
                                        <div class="row">
                                            <div class="form-group col-sm-5">
                                                <label>Signe</label>
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
                                    </div> -->

                                    <div class="col-sm-9">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="card m-b-20">

                                                    <h3>Liste des Diagnostiques</h3>
                                                    <table id="" class="table diagnostique_tb">
                                                        <thead class="thead-default">
                                                            <tr>
                                                                <th>Pathologie</th>
                                                                <th>Signe</th>
                                                                <!-- <th>Actions</th> -->
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

                                                    <!-- <button type="button" class="btn btn-dark  waves-effect waves-light add-ordonnance" data-toggle="modal" data-target=".bs-medicament-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button> -->

                                                    <table id="" class="table ordonnances-tb">
                                                        <thead class="thead-default">
                                                            <!-- <th>Pathologie</th> -->
                                                            <th>Medicament</th>
                                                            <th>Quantité</th>
                                                            <th>Durée</th>
                                                            <th>Posologie</th>
                                                            <!-- <th>Actions</th> -->
                                                        </thead>
                                                        <tbody >

                                                        </tbody>
                                                    </table>

                                                <!-- </div> -->
                                            </div> <!-- end col -->
                                        </div>
                                    </div>
                                   <!--  <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light ordo_save">
                                            Enregistrer l'ordonnance
                                        </button>
                                    </div> -->
                                </div> <!-- row -->
                            </div>

                            <!-- <div class="tab-pane p-3" id="examens" role="tabpanel">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-8">
                                                
                                               
                                                    <!-- <div class="card-block">

                                                        <select id='select-exam' multiple='multiple'>
                                                          <option value='elem_1'>elem 1</option>
                                                          <option value='elem_2'>elem 2</option>
                                                          <option value='elem_3'>elem 3</option>
                                                          <option value='elem_4'>elem 4</option>
                                                          <option value='elem_100'>elem 100</option>
                                                        </select>
                                                    </div> 
                                                    <h4 class="mt-0 header-title">Sélection des examens</h4>
                                                    <div class="row">
                                                    <div class="col-lg-5">

                                                        <select name="from[]" id="examen" class="form-control" size="8" multiple="multiple">
                                                        </select>
                                                    </div>
                                                    
                                                    <div class="col-lg-2">
                                                        <button type="button" id="examen_rightAll" class="btn btn-block"><i class="fa fa-forward"></i></button>
                                                        <button type="button" id="examen_rightSelected" class="btn btn-block"><i class="fa fa-chevron-right"></i></button>
                                                        <button type="button" id="examen_leftSelected" class="btn btn-block"><i class="fa fa-chevron-left"></i></button>
                                                        <button type="button" id="examen_leftAll" class="btn btn-block"><i class="fa fa-backward "></i></button>
                                                    </div>
                                                    
                                                    <div class="col-lg-5">
                                                        <select name="to[]" id="examen_to" class="form-control" size="8" multiple="multiple"></select>
                                                    </div>
                                                </div>

                                            </div> 

                                            <!-- end col 
                                            <div class="col-lg-4">
                                                <label for="comment_exam" class="col-lg-3 col-form-label">Commentaire</label>
                                                <textarea id="comment_exam" name="comment_exam" type="text" class="form-control"></textarea>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div> <!-- row 
                            </div> -->


                            <div class="tab-pane p-3" id="examens" role="tabpanel">
                                 <!-- Loader -->
                                <div class="row">

                                   <div class="col-sm-12">
                                            <!-- <div class="card m-b-20"> -->

                                                <!-- <button type="button" class="btn btn-dark waves-effect waves-light add-resultat" data-toggle="modal" data-target=".bs-medicament-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                                                 -->
                                                <table id="" class="table examens-resl-tb">
                                                    <thead class="thead-default">
                                                        <th>Examens</th>
                                                        <!-- <th>Fait</th> -->
                                                        <th>Date</th>
                                                        <!-- <th>Resultats</th> -->
                                                        <th>Commentaire</th>
                                                        <!-- <th>Actions</th> -->
                                                    </thead>
                               

                                                    <tbody >
                                                    </tbody>

                                                </table>
                                                <div id="loader"><div id="status"><div class="spinner"></div></div></div>

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
                                            <div class="col-lg-8">
                                                <h4 class="mt-0 header-title">Liste des Actes</h4>

                                                    <!-- <div class="card-block">

                                                        <select id='pre-selected-options' multiple='multiple'>
                                                          <option value='elem_1'>elem 1</option>
                                                          <option value='elem_2'>elem 2</option>
                                                          <option value='elem_3'>elem 3</option>
                                                          <option value='elem_4'>elem 4</option>
                                                          <option value='elem_100'>elem 100</option>
                                                        </select>
                                                    </div>
 -->
                                                
                                                <!-- <div class="row rdv_act">
                                                    <div class="col-lg-5">
                                                        
                                                        <select name="from[]" id="acte" class="form-control" size="8" multiple="multiple"></select>
                                                    </div>
                                                    
                                                    <div class="col-lg-2">
                                                        <button type="button" id="acte_rightAll" class="btn btn-block"><i class="fa fa-forward"></i></button>
                                                        <button type="button" id="acte_rightSelected" class="btn btn-block"><i class="fa fa-chevron-right"></i></button>
                                                        <button type="button" id="acte_leftSelected" class="btn btn-block"><i class="fa fa-chevron-left"></i></button>
                                                        <button type="button" id="acte_leftAll" class="btn btn-block"><i class="fa fa-backward "></i></button>
                                                    </div>
                                                
                                                    <div class="col-lg-5">
                                                        <select name="to[]" id="acte_to" class="form-control" size="8" multiple="multiple"></select>
                                                    </div>
                                                </div> -->
                                                <div class="acte_liste" >
                                                </div>
                                            </div> <!-- end col -->
                                            <div class="col-lg-4">
                                                <label for="comment_acte" class="col-lg-3 col-form-label">Commentaire</label>
                                                <textarea id="comment_acte" name="comment_acte" type="text" class="form-control" readonly="true"></textarea>
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
            
                            <div class="tab-pane p-3" id="rdv" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <label for="date_rdv" class="col-lg-12 col-form-label">Date du rendez-vous</label>
                                                                <div class="input-group">
                                                                    <input type="date" name="date_rdv" class="form-control date_rdv" placeholder="mm/dd/yyyy" readonly="true" >
                                                                    <span class="input-group-addon bg-custom b-0"><i class="mdi mdi-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <label for="rdv_obj" class="col-lg-12 col-form-label">Objet du rendez-vous</label>
                                                                <input id="rdv_obj" name="rdv_obj" type="text" class="form-control" readonly="true">
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
                                                                <textarea id="commentaire" name="commentaire" type="text" class="commentaire form-control" readonly="true"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   <!--  <div class="col-sm-12">
                                        <button class="btn btn-success waves-effect waves-light rdv_save">
                                            Enregistrer le rendez-vous
                                        </button>
                                    </div> -->
                                </div> <!-- row -->
                            </div>
                        </div>



                        <!-- <div class="form-group">
                            <div>
                                <button type="submit" class="save-med-consul btn btn-pink waves-effect waves-light">
                                    Enregistrer la prestation
                                </button>
                                <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                    Retour
                                </button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
