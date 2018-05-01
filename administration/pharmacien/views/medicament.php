<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Entités</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>

                    <!--  Modal content for the above example -->
                    <div class="modal fade bs-example-modal-lg " id="add_item" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvelle Entité</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                <div class="card-block">
                                    
                                    <div class="form-group">
                                            <label >Famille</label>
                                            <div >
                                                <select class="famille-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label>Code</label>
                                            <input type="text" name="code" class="form-control" required placeholder="Type something"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Libelle</label>
                                            <div>
                                                <input type="text" name="libelle" id="pass2" class="form-control" required
                                                placeholder="Password"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label>Quantité</label>
                                            <div>
                                                <input type="text" name="qte" class="form-control" required
                                                placeholder="100"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label>Seuil</label>
                                            <div>
                                                <input type="text" name="seuil" class="form-control" required
                                                placeholder="10"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label >Forme</label>
                                            <div >
                                                <select class="forme-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div>
                                                <button type="button" data-animation="false" class="add_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                                    Submit
                                                </button>
                                                <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                                    Cancel
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
                    <div class="modal fade edit-modal-lg " id="edit_item" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvelle Entité</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                <div class="card-block">
                                    
                                    <div class="form-group">
                                            <input type="hidden" name="id" class="edit-id">
                                        
                                            <label >Famille</label>
                                            <div >
                                                <select class="famille-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label>Code</label>
                                            <input type="text" name="e_code" class="form-control" required placeholder="Type something"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Libelle</label>
                                            <div>
                                                <input type="text" name="e_libelle" id="pass2" class="form-control" required
                                                placeholder="Password"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label>Quantité</label>
                                            <div>
                                                <input type="text" name="e_qte" class="form-control" required
                                                placeholder="100"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label>Seuil</label>
                                            <div>
                                                <input type="text" name="e_seuil" class="form-control" required
                                                placeholder="10"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label >Forme</label>
                                            <div >
                                                <select class="forme-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div>
                                                <button type="button" data-animation="false" class="edit_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                                    Submit
                                                </button>
                                                <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                        

                                </div>
                            </div>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal-dialog -->
                    </div><!-- /.modal -->


                    <button type="button" class="btn btn-secondary waves-effect"><i class="mdi mdi-reload"></i>Actualisé</button> 
                </div>
<table id="datatable-buttons" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Code</th>
                            <th>Libelle</th>
                            <th>Disponible</th>
                            <th>Seuil</th>
                            <th>Famille</th>
                            <th>Forme</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                       
                    </tbody>
                </table>

            </div>
        </div>
    </div> <!-- end col -->
</div> <!-- end row -->