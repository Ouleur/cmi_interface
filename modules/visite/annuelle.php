<div class="col-12">
    <div class="col-sm-12">
        <div class="card m-b-20">
            <div class="card-block">
                <form id="form-horizontal" class="form-horizontal form-wizard-wrapper">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="ay_drt" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Ayant droit</span>
                                </label>
                            </div>

                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="agent" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Agent</span>
                                </label>
                            </div>

                            <div class="col-md-3">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="autre" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Autre</span>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">

                                        <input id="template-custom" name="txtFirstNameBilling" type="text" class="form-control" placeholder="Matricule">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">
                                        <input id="search-nom" name="txtLastNameBilling" type="text" class="form-control " placeholder="Nom">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group row">

                                    <div class="col-lg-9">
                                        <input id="txtCompanyBilling" name="txtCompanyBilling" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class='col-md-3'>
                                <div class="dorm-group row">
                                    <button type="button" class="btn btn-dark waves-effect waves-light patient-search">Rechercher</button>
                                </div>
                                
                            </div>

                        </div>
                        

                    </fieldset>
                    
                </form>




            </div>
        </div>
    </div>

<div class="row row-in">

        
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
                        <div class="card-block">

                            


                                <h4 class="mt-0 header-title">Prestation</h4>

                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#motifs" role="tab">Motifs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#home" role="tab">Prise de Constances</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Actes</a>
                                    </li>

                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div class="tab-pane active p-3" id="motifs" role="tabpanel">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <div >
                                                        <select class="acte-med-select" name="actes">
                                                        </select>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-dark  waves-effect waves-light add-motif_inf_cons"><i class="mdi mdi-plus-circle" ></i> Ajouter</button>
                                            </div>
                                            <div class="col-md-8">
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
                                            
                                            
                                        </div>
                                    </div>
                                    <div class="tab-pane p-3" id="home" role="tabpanel">
                                        <div class="row">
                                            <div class="col-sm-5">


                                                <h4>Tension arterielle</h4>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="tension" type="text" class="form-control" placeholder="Ex: 14/12">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-md-5">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="txtLastNameBilling" name="txtLastNameBilling" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>

                                            <div class="col-sm-4">


                                                <h4>Temperature</h4>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="temperature" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-sm-3">


                                                <h4>Poids</h4>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group row">

                                                            <div class="col-lg-12">
                                                                <input id="" name="poids" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div class="tab-pane p-3" id="profile" role="tabpanel">
                                     <div class="row">
                                        <div class="col-sm-5">


                                            <h4>Soins</h4>
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <div class="form-group">
                                                        <label>Actes</label>
                                                        <div >
                                                            <select class="acte-select custom-select">
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group row">

                                                        <div class="col-lg-12">
                                                           <textarea required class="form-control soins_comm" rows="5"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div>
                                                    <button class="btn btn-pink waves-effect waves-light soins_save">
                                                        Ajouter le soin
                                                    </button>
                                                </div>
                                        </div>

                        <div class="col-sm-7">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card m-b-20">
                                        
                                            <h3>Liste des Soins</h3>
                                            <table class="table soins-table">
                                                <col width="30px" />
                                                <col width="40px" />
                                                <col width="10px" />

                                                <thead class="thead-default">
                                                <tr>
                                                    <th>Acte</th>
                                                    <th>Commentaire</th>
                                                    <th>Sup</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                
                                                
                                                </tbody>
                                            </table>

                                    </div>
                                    
                                </div> <!-- end col -->
                            </div>
                        </div>



                                    </div>
                                </div>
                            </div>



                            <div class="form-group">
                                <div>
                                    <button type="submit" class="btn btn-pink waves-effect waves-light infrimier_save" data-dismiss="modal">
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
