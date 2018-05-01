<div class="row row-in">


</div>

<!--  Modal content for the above example -->
<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0" id="myLargeModalLabel">Detail de l'ordonnace</h5>
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
                    <div class="card-block">

                       <!--  <form class="" action="#"> -->

                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Ordonnaces</a>
                                </li>

                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane active p-3" id="home" role="tabpanel">
                                    <div class="row">



                                        <table id="" class="table ordonnances-tb">
                                            <thead class="thead-default">
                                                <!-- <th>Pathologie</th> -->
                                                <th>Medicament</th>
                                                <th>Quantité</th>
                                                <th>Durée</th>
                                                <th>Posologie</th>
                                                <th>Servir</th>
                                                <th>Remplacer</th>
                                                <th>Motif</th>
                                            </thead>
                                            <tbody >

                                            </tbody>
                                        </table>



                                    </div>




                                </div>
                            </div>



                            <div class="form-group">
                                <div>
                                    <button type="submit" class="btn btn-pink waves-effect waves-light pharm_save">
                                        Enregistrer
                                    </button>
                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal">
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        <!-- </form> -->
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
