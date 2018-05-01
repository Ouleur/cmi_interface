<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Utilisateurs</h4>
                

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
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvel Acte</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                        <div class="card-block">
                                            <div class="form-group">
                                                <label>Patenaire</label>
                                                <select name="partner" class="partner-select custom-select select2">
                                            </div>
                                            <div class="form-group">
                                                <label>Nom</label>
                                                <input type="text" name="nom" class="form-control" required placeholder="YAPI"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Prenoms</label>
                                                <input type="text" name="prenoms" class="form-control" required placeholder="Eric"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Mail</label>
                                                <div>
                                                    <input type="text"  name="mail" class="form-control" required
                                                    placeholder="Ex: info@cmi.ci"/>
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label>Mot de passe</label>
                                                <div>
                                                    <input type="password"  name="password" class="form-control" required
                                                    placeholder="Password"/>
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label>Confirmation</label>
                                                <div>
                                                    <input type="password"  name="pass_confirm" class="form-control" required
                                                    placeholder="Confirmation"/>
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <button type="button" data-animation="false" class="add_user btn btn-pink waves-effect waves-light" data-dismiss="modal">
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
                    <div class="modal fade edit-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="profil_edit">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Modifier la profession</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                        <div class="card-block">
                                            <div class="form-group">
                                                <label>Patenaire</label>
                                                <select name="e_partner" class="e_partner-select custom-select"></select>
                                            </div>

                                            <div class="form-group">
                                                <label>Nom</label>
                                                <input type="hidden" name="id" class="edit-id">
                                                <input type="text" name="e_nom" class="form-control" required placeholder="YAPI"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Prenoms</label>
                                                <input type="text" name="e_prenoms" class="form-control" required placeholder="Eric"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Mail</label>
                                                <div>
                                                    <input type="text"  name="e_mail" class="form-control" required
                                                    placeholder="Ex: info@cmi.ci"/>
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label>Mot de passe</label>
                                                <div>
                                                    <input type="password"  name="e_pass" class="form-control" required
                                                    placeholder="Password"/>
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label>Confirmation</label>
                                                <div>
                                                    <input type="password"  name="e_pass_confirm" class="form-control" required
                                                    placeholder=""/>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card m-b-20">
                                        <div class="card-block" id="ambauche_add">
                                                <!-- Nav tabs -->
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Droit d'acces</a>
                                                </li>
                                            </ul>

                                               
                                            <div class="tab-pane p-3" id="home" role="tabpanel">
                                                <div class="row droit_module">
                                                </div>
                                            </div>    
                                        </div>
                                    </div>

                                    <div class="card m-b-20">
                                        <div class="card-block">
                                            <div class="form-group">
                                                <div>
                                                    <button type="button" class="edit_submit btn btn-pink waves-effect waves-light" data-dismiss="modal">
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
                            <th>Nom</th>
                            <th>Prénoms</th>
                            <th>Mail</th>
                            <th>Partenaire</th>
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