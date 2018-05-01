
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
    <div class="modal fade bs-example-modal-lg " id="add_item" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Ajouter un praticien</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">

                    <div class="card m-b-20">
                        <div class="card-block">

                            <!-- <h4 class="mt-0 header-title">Ajouter un praticien</h4> -->


                            <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" name="nom" class="form-control" required placeholder="Type something"/>
                                </div>

                                <div class="form-group">
                                    <label>Prenoms</label>
                                    <div>
                                        <input type="text" name="prenoms" id="" class="form-control" required
                                        placeholder=""/>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label >Sexe</label>
                                    <div >
                                        <select class="sexe-select custom-select">
                                            <option selected>Selection du genre</option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>E-Mail</label>
                                    <div>
                                        <input type="email" name="mail" class="form-control" required
                                        parsley-type="email" placeholder="Enter a valid e-mail"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Contacts</label>
                                    <div>
                                        <input type="text" name="contact" class="form-control"
                                        required placeholder=""/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label >Type praticien</label>
                                    <div >
                                        <select class="type-select custom-select">
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <button type="submit" data-dismiss="modal" class="add_submit btn btn-pink waves-effect waves-light">
                                            Submit
                                        </button>
                                        <button type="reset" data-dismiss="modal" class="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            

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
<div class="liste-praticiens row">




        
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

                            
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" name="nom" class="form-control" required placeholder="Type something"/>
                                </div>

                                <div class="form-group">
                                    <label>Prenoms</label>
                                    <div>
                                        <input type="text" name="prenoms" id="" class="form-control" required
                                        placeholder=""/>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label >Sexe</label>
                                    <div >
                                        <select class="sexe-select custom-select">
                                            <option selected>Selection du genre</option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>E-Mail</label>
                                    <div>
                                        <input type="email" name="mail" class="form-control" required
                                        parsley-type="email" placeholder="Enter a valid e-mail"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Contacts</label>
                                    <div>
                                        <input type="text" class="form-control"
                                        required placeholder=""/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label >Type praticien</label>
                                    <div >
                                        <select class="type-select custom-select">
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <button type="submit" data-dismiss="modal" class="btn btn-pink waves-effect waves-light">
                                            Submit
                                        </button>
                                        <button type="reset" data-dismiss="modal" class="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            

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