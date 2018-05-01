<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Equipes</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg" data-animation="false"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
                    <div class="col-xs-6 col-sm-3 m-b-30" hidden="true">
                                                    <p class="text-muted">Success Log with callback</p>
                                                    <button type="button" class="btn btn-primary waves-effect waves-light" id="alertify-success-callback">Click me</button>
                                                </div>

                    <!--  Modal content for the above example -->
                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_add">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvelle Equipe</h5>
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

                     <!--  Modal content for the above example -->
                    <div class="modal fade edit-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="prof_edit">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Modifier l'équipe</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                <div class="card-block">
                                    

                                        <div class="form-group">
                                            <label>Code</label>
                                            <input type="hidden" name="id" class="edit-id">
                                            <input type="text" name="e_code" class="form-control" required placeholder="Type something"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Libelle</label>
                                            <div>
                                                <input type="text"  name="e_libelle" class="form-control" required
                                                placeholder="Password"/>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <div>
                                                <button type="button" class="edit_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
                                                    Modifier
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

                </div>
<table id="datatable-buttons" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Code</th>
                            <th>Libelle</th>
                            <th>Date enregistrement</th>
                            <th>Date modification</th>
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