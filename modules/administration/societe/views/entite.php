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
                                            <label>Code</label>
                                            <input type="text" name="code" class="form-control" required placeholder="Type something"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Libelle</label>
                                            <div>
                                                <input type="text" name="libelle" class="form-control" required
                                                placeholder=""/>
                                            </div>

                                        </div>
                                        <div class="form-group">
                                            <label >Societe</label>
                                            <div >
                                                <select name="societe" class="societe-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label >Parent</label>
                                            <div >
                                                <select name="parent" class="parent-select custom-select">
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <button class="add_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
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
                            <th>Societe</th>
                            <th>Parent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody id="entite_tb">
                     
                    </tbody>
                </table>

            </div>
        </div>
    </div> <!-- end col -->
</div> <!-- end row -->