
<div class="col-sm-12">
    <div class="card m-b-20">
        <div class="card-block">  
            <div class="col-md-3">
                <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".fade"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>
            </div>
        </div>
    </div>
</div>
</div>



<div class="col-4 m-t-30">

    <!-- sample modal content -->

    <!--  Modal content for the above example -->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Large modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">

                    <div class="card m-b-20">
                        <div class="card-block">

                            <h4 class="mt-0 header-title">Ajouter un praticien</h4>


                            <form class="" action="#">
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" class="form-control" required placeholder="Type something"/>
                                </div>

                                <div class="form-group">
                                    <label>Prenoms</label>
                                    <div>
                                        <input type="password" id="pass2" class="form-control" required
                                        placeholder="Password"/>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label >Sexe</label>
                                    <div >
                                        <select class="custom-select">
                                            <option selected>Selection du genre</option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>E-Mail</label>
                                    <div>
                                        <input type="email" class="form-control" required
                                        parsley-type="email" placeholder="Enter a valid e-mail"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Contacts</label>
                                    <div>
                                        <input parsley-type="url" type="url" class="form-control"
                                        required placeholder="URL"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label >Type praticien</label>
                                    <div >
                                        <select class="custom-select">
                                            <option selected>Selection du type</option>
                                            <option value="Pha">Pharmacien</option>
                                            <option value="Inf">Infirmier</option>
                                            <option value="Med">Medecin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <button type="submit" class="btn btn-pink waves-effect waves-light">
                                            Submit
                                        </button>
                                        <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

</div>
</div>
<div class="row">


    <?php
    for ($i=1; $i < 7; $i++) { 
    # code...
        ?>

        <div class="col-lg-4" data-toggle="modal" data-target="<?php echo '.bs-example-modal-lg'.$i;?>">
            <div class="card m-b-20">
                <div class="card-block">

                    <div class="media">
                        <img class="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="m-t-10 font-18 mb-1">Mathias N. Klausen</h5>
                            <p class="text-muted m-b-5">pauline@admiria.com</p>
                            <p class="text-muted font-14 font-500 font-secondary">Creative Director</p>
                        </div>
                    </div>

                    <div class="row text-center m-t-20">
                        <div class="col-6">
                            <h5 class="mb-0">9652</h5>
                            <p class="text-muted font-14">Patient</p>
                        </div>
                        <div class="col-6">
                            <h5 class="mb-0">7451</h5>
                            <p class="text-muted font-14">Activated</p>
                        </div>
                    </div>

                    <div id="<?php echo "sparkline".$i;?>" class="text-center"></div>

                </div>
            </div>
        </div>

         <!--  Modal content for the above example -->
    <div class="modal fade <?php echo 'bs-example-modal-lg'.$i;?>" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Detail du praticien <?php echo $i;?></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    
                    <div class="card m-b-20">
                        <div class="card-block">

                            <form class="" action="#">
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" class="form-control" required placeholder="Type something"/>
                                </div>

                                <div class="form-group">
                                    <label>Prenoms</label>
                                    <div>
                                        <input type="password" id="pass2" class="form-control" required
                                        placeholder="Password"/>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label >Sexe</label>
                                    <div >
                                        <select class="custom-select">
                                            <option selected>Selection du genre</option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>E-Mail</label>
                                    <div>
                                        <input type="email" class="form-control" required
                                        parsley-type="email" placeholder="Enter a valid e-mail"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Contacts</label>
                                    <div>
                                        <input parsley-type="url" type="url" class="form-control"
                                        required placeholder="URL"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label >Type praticien</label>
                                    <div >
                                        <select class="custom-select">
                                            <option selected>Selection du type</option>
                                            <option value="Pha">Pharmacien</option>
                                            <option value="Inf">Infirmier</option>
                                            <option value="Med">Medecin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <button type="submit" class="btn btn-pink waves-effect waves-light">
                                            Submit
                                        </button>
                                        <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
        <?php 
    }?>
</div>

</div>