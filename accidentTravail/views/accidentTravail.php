<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Accidents</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg" data-animation="false"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                </div>
            <table id="" class="table table-striped table_accident_liste" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Reference</th>
                            <th>Circonstance</th>
                            <th>Arrêt</th>
                            <th>Nature Lesion</th>
                            <th>Agent Materiel</th>
                            <th>Equipe</th>
                            <th>Activité</th>
                            <th>Nature Accident</th>
                            <th>Certificat</th>
                            <th>Siège Lesion</th>
                            <th>Secteur</th>
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
                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
                        <div class="modal-dialog modal-lg modal-middle-height" role="document" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">DECLARATION D’ACCIDENT DU TRAVAIL</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="card-block" id="accident_add">
                                
                                        <div class="row">
                                            <div class=" col-md-9 form-group">
                                            </div>
                                            <div class="date_decla col-md-3">
                                                <input type="date" name="date_accident" class="form-control date_accident">
                                                <input type="time" name="time_accident" class="form-control time_accident">
                                                
                                            </div>
                                            
                                            <div class=" col-md-12 form-group">
                                                <b>Information de la victime</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row">
                                                    <div class=" col-md-4 form-group">
                                                        <label>Victime / Nom</label>
                                                        <div >
                                                            <select class="agent-select custom-select select2">
                                                                <!-- <option selected>Selection du type</option>
                                                                <option value="Pha">Pharmacien</option>
                                                                <option value="Inf">Infirmier</option>
                                                                <option value="Med">Medecin</option> -->
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div class=" col-md-4">
                                                        Matricule<br>
                                                        <span class="mtle"></span>
                                                    </div>
                                                    <div class=" col-md-4 form-group">
                                                        SEXE<br>
                                                        <span class="sexe"></span>
                                                        
                                                    </div>
                                                    <div class=" col-md-4">
                                                        Département/Fonction<br>
                                                        <span class="fonction"></span>
                                                        
                                                    </div>
                                                    <div class=" col-md-4">
                                                        Département<br>
                                                        <span class="dpt"></span>
                                                        
                                                    </div>
                                                    <div class=" col-md-4">
                                                        Catégorie<br>
                                                        <span class="cat"></span>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-md-12 form-group">
                                                <b>Description de l'accident</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row">
                                                    <div class=" col-md-4 form-group">

                                                        <div class=" col-md-12 form-group">
                                                            <label>Lieu de l'accident</label>
                                                            <input type="hidden" name="id" class="edit-id">
                                                            <input type="text" name="lieu_accident" class="form-control" required placeholder="Reférence"/>
                                                        </div>
                                                        <div class=" col-md-12 form-group">
                                                            <label>Secteur</label>
                                                            <div >
                                                                <select class="secteur-select custom-select select2"></select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                                                    
                                                    <div class="col-md-8 form-group">
                                                        <label>Circonstance de l'accident</label>
                                                        <textarea name="circonstance" class="form-control circonstance" required placeholder="Circonstance" style="height: 123px;"></textarea>
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label>Activité</label>
                                                        <div >
                                                            <select class="activ-select custom-select select2"></select>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-4 form-group">
                                                        <label>Nature Accident</label>
                                                        <div >
                                                            <select class="na-select custom-select select2"></select>
                                                        </div>

                                                    </div>
                                                     <div class="form-group col-md-4" >
                                                        <label>Siège Lesion</label>
                                                        <div>
                                                            <select class="sl-select custom-select select2"></select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 form-group ">
                                                        <label>Agent Materiel</label>
                                                        <div >
                                                            <select class="am-select custom-select select2"></select>
                                                        </div>

                                                    </div>
                                            

                                            
                                                    <div class="form-group col-md-4">
                                                        <label>Nature lesion</label>
                                                        <div >
                                                            <select class="nl-select custom-select select2"></select>
                                                        </div>

                                                    </div>
                                                   
                                                    <div class="form-group col-md-4">
                                                        <label>Equipe</label>
                                                        <div >
                                                            <select class="equipe-select custom-select select2"></select>
                                                        </div>

                                                    </div>

                                                    

                                                    <div class="col-md-4 form-group">
                                                        <label>Reférence</label>
                                                        <input type="hidden" name="id" class="edit-id">
                                                        <input type="text" name="reference" class="form-control" required placeholder="Reférence"/>
                                                    </div>


                                                     <div class="col-md-8 form-group">
                                                        <label>Nature de travail au moment de l'accident</label>
                                                        <textarea type="text" name="nat_trav" class="form-control nature_travail" required placeholder="Reférence"></textarea> 
                                                    </div>
                                                </div>
                                            </div>


                                            <div class=" col-md-12 form-group">
                                                <b>Autres Informations</b>
                                            </div>
                                            <div class="card col-md-12">
                                                <div class="row">

                                                    <div class=" col-md-12 form-group">
                                                        <p>Témoins</p>
                                                    </div>
                                                    <div class="col-md-3 form-group">
                                                         <div class="col-md-12 form-group">
                                                            <label>Nom et prénoms</label>
                                                            <input type="hidden" name="id" class="edit-id">
                                                            <input type="text" name="reference" class="form-control reference" required placeholder="Reférence"/>
                                                        </div>
                                                        <button type="button" data-animation="false" class="add_temoin btn btn-primary waves-effect waves-light">
                                                                    Ajouter
                                                        </button>
                                                    </div>

                                                    <div class="col-md-3 form-group">
                                                        <label>Matricule</label>
                                                        <input type="hidden" name="id" class="edit-id">
                                                        <input type="text" name="" class="form-control matricule" required placeholder="Reférence"/>
                                                    </div>
                                                

                                                    <div class="col-md-6 form-group">
                                                        <label>Liste des témoins</label>
                                                        <table class="table table-striped tab_temoin">
                                                            <thead>
                                                                <th>#</th>
                                                                <th>Nom</th>
                                                                <th>Matriule</th>
                                                                <th>Action</th>
                                                            </thead>
                                                            <tbody></tbody>
                                                        </table>
                                                    </div>


                                                    <div class="col-md-6 form-group">
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
                          

                                        <div class="form-group">
                                            <div>
                                                <button type="button" data-animation="false" class="add_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
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

                    <!--  Modal content for the above example -->
                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
                        <div class="modal-dialog modal-lg modal-middle-height" role="document" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">MODIFICATION D'UNE DECLARATION D’ACCIDENT DU TRAVAIL</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    
                                        <div class="card-block" id="e_accident_add">
                                    
                                            <div class="row">
                                                <div class=" col-md-9 form-group">
                                                </div>
                                                <div class="date_decla col-md-3">
                                                    <input type="date" name="date_accident" class="form-control date_accident">
                                                    <input type="time" name="time_accident" class="form-control time_accident">
                                                
                                                </div>
                                                
                                                <div class=" col-md-12 form-group">
                                                    <b>Information de la victime</b>
                                                </div>
                                                <div class="card col-md-12">
                                                    <div class="row">
                                                        <div class=" col-md-4 form-group">
                                                            <label>Victime / Nom</label>
                                                            <div >
                                                                <select class="e_agent-select custom-select select2">
                                                                    <!-- <option selected>Selection du type</option>
                                                                    <option value="Pha">Pharmacien</option>
                                                                    <option value="Inf">Infirmier</option>
                                                                    <option value="Med">Medecin</option> -->
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class=" col-md-4">
                                                            Matricule<br>
                                                            <span class="e_mtle"></span>
                                                        </div>
                                                        <div class=" col-md-4 form-group">
                                                            SEXE<br>
                                                            <span class="e_sexe"></span>
                                                            
                                                        </div>
                                                        <div class=" col-md-4">
                                                            Département/Fonction<br>
                                                            <span class="e_fonction"></span>
                                                            
                                                        </div>
                                                        <div class=" col-md-4">
                                                            Département<br>
                                                            <span class="e_dpt"></span>
                                                            
                                                        </div>
                                                        <div class=" col-md-4">
                                                            Catégorie<br>
                                                            <span class="e_cat"></span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class=" col-md-12 form-group">
                                                    <b>Description de l'accident</b>
                                                </div>
                                                <div class="card col-md-12">
                                                    <div class="row">
                                                        <div class=" col-md-4 form-group">

                                                            <div class=" col-md-12 form-group">
                                                                <label>Lieu de l'accident</label>
                                                                <input type="hidden" name="id" class="edit-id">
                                                                <input type="text" name="e_lieu_accident" class="form-control" required placeholder="Reférence"/>
                                                            </div>
                                                            <div class=" col-md-12 form-group">
                                                                <label>Secteur</label>
                                                                <div >
                                                                    <select class="e_secteur-select custom-select select2"></select>
                                                                </div>

                                                            </div>
                                                        </div>
                                                                                        
                                                        <div class="col-md-8 form-group">
                                                            <label>Circonstance de l'accident</label>
                                                            <textarea name="e_circonstance" class="form-control circonstance" required placeholder="Circonstance" style="height: 123px;"></textarea>
                                                        </div>
                                                        <div class="col-md-4 form-group">
                                                            <label>Activité</label>
                                                            <div >
                                                                <select class="e_activ-select custom-select select2"></select>
                                                            </div>

                                                        </div>

                                                        <div class="col-md-4 form-group">
                                                            <label>Nature Accident</label>
                                                            <div >
                                                                <select class="e_na-select custom-select select2"></select>
                                                            </div>

                                                        </div>
                                                         <div class="form-group col-md-4" >
                                                            <label>Siège Lesion</label>
                                                            <div>
                                                                <select class="e_sl-select custom-select select2"></select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 form-group ">
                                                            <label>Agent Materiel</label>
                                                            <div >
                                                                <select class="e_am-select custom-select select2"></select>
                                                            </div>

                                                        </div>
                                                

                                                
                                                        <div class="form-group col-md-4">
                                                            <label>Nature lesion</label>
                                                            <div >
                                                                <select class="e_nl-select custom-select select2"></select>
                                                            </div>

                                                        </div>
                                                       
                                                        <div class="form-group col-md-4">
                                                            <label>Equipe</label>
                                                            <div >
                                                                <select class="e_equipe-select custom-select select2"></select>
                                                            </div>

                                                        </div>

                                                        

                                                        <div class="col-md-4 form-group">
                                                            <label>Reférence</label>
                                                            <input type="hidden" name="id" class="edit-id">
                                                            <input type="text" name="e_reference" class="form-control" required placeholder="Reférence"/>
                                                        </div>


                                                         <div class="col-md-8 form-group">
                                                            <label>Nature de travail au moment de l'accident</label>
                                                            <textarea type="text" name="nat_trav" class="form-control e_nature_travail" required placeholder="Reférence"></textarea> 
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class=" col-md-12 form-group">
                                                    <b>Autres Informations</b>
                                                </div>
                                                <div class="card col-md-12">
                                                    <div class="row">

                                                        <div class=" col-md-12 form-group">
                                                            <p>Témoins</p>
                                                        </div>
                                                        <div class="col-md-3 form-group">
                                                             <div class="col-md-12 form-group">
                                                                <label>Nom et prénoms</label>
                                                                <input type="hidden" name="id" class="edit-id">
                                                                <input type="text" name="reference" class="form-control e_reference" required placeholder="Reférence"/>
                                                            </div>
                                                            <button type="button" data-animation="false" class="e_add_temoin btn btn-primary waves-effect waves-light">
                                                                        Ajouter
                                                            </button>
                                                        </div>

                                                        <div class="col-md-3 form-group">
                                                            <label>Matricule</label>
                                                            <input type="hidden" name="id" class="edit-id">
                                                            <input type="text" name="" class="form-control e_matricule" required placeholder="Reférence"/>
                                                        </div>
                                                    

                                                        <div class="col-md-6 form-group">
                                                            <label>Liste des témoins</label>
                                                            <table class="table table-striped e_tab_temoin">
                                                                <thead>
                                                                    <th>#</th>
                                                                    <th>Nom</th>
                                                                    <th>Matriule</th>
                                                                    <th>Action</th>
                                                                </thead>
                                                                <tbody></tbody>
                                                            </table>
                                                        </div>


                                                        <div class="col-md-6 form-group">
                                                            <label>Arrêt</label>
                                                            <div>
                                                                <div class="input-daterange input-group" id="e_arret-range">
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
                              

                                                <div class="form-group">
                                                    <div>
                                                        <button type="button" data-animation="false" class="add_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
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