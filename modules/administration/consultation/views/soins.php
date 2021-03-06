<div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Entités</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>

                    <!--  Modal content for the above example -->
                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Large modal</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in,
                                        egestas eget quam. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque
                                        nisl consectetur et. Vivamus sagittis lacus vel
                                    augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur.
                                        Praesent commodo cursus magna, vel scelerisque
                                        nisl consectetur et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                    fringilla.</p>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal-dialog -->
                    </div><!-- /.modal -->

                    <button type="button" class="btn btn-secondary waves-effect"><i class="mdi mdi-reload"></i>Actualisé</button> 
                </div>

                <div class="row">
    <div class="col-12">
        <div class="card m-b-20">
            <div class="card-block">

                <h4 class="mt-0 header-title">Liste des Entités</h4>
                

                <div class="col-6">
                    <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="mdi mdi-plus-circle" ></i>Ajouter</button>

                    <!--  Modal content for the above example -->
                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myLargeModalLabel">Nouvelle Entité</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <div class="card m-b-20">
                                <div class="card-block">
                                    

                                    <form class="" action="#">
                                        <div class="form-group">
                                            <label>Code</label>
                                            <input type="text" class="form-control" required placeholder="Type something"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Libelle</label>
                                            <div>
                                                <input type="password" id="pass2" class="form-control" required
                                                placeholder="Password"/>
                                            </div>

                                        </div>
                                        <div class="form-group">
                                            <label >Societe</label>
                                            <div >
                                                <select class="custom-select">
                                                    <option selected>Selection du genre</option>
                                                    <option value="M">Masculin</option>
                                                    <option value="F">Feminin</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label>Parent</label>
                                            <div>
                                                <input type="email" class="form-control" required
                                                parsley-type="email" placeholder="Enter a valid e-mail"/>
                                            </div>
                                        </div>
                                                                                
                                    </form>

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
                            <th>Code</th>
                            <th>Libelle</th>
                            <th>Societe</th>
                            <th>Parent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Brielle Williamson</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Herrod Chandler</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Rhona Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Colleen Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Sonya Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jena Gaines</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Quinn Flynn</td>
                            <td>Support Lead</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Charde Marshall</td>
                            <td>Regional Director</td>
                            <td>San Francisco</td>
                            <td>36</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Haley Kennedy</td>
                            <td>Senior Marketing Designer</td>
                            <td>London</td>
                            <td>43</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>19</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Michael Silva</td>
                            <td>Marketing Designer</td>
                            <td>London</td>
                            <td>66</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Paul Byrd</td>
                            <td>Chief Financial Officer (CFO)</td>
                            <td>New York</td>
                            <td>64</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Gloria Little</td>
                            <td>Systems Administrator</td>
                            <td>New York</td>
                            <td>59</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Bradley Greer</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>41</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Dai Rios</td>
                            <td>Personnel Lead</td>
                            <td>Edinburgh</td>
                            <td>35</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jenette Caldwell</td>
                            <td>Development Lead</td>
                            <td>New York</td>
                            <td>30</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Yuri Berry</td>
                            <td>Chief Marketing Officer (CMO)</td>
                            <td>New York</td>
                            <td>40</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Caesar Vance</td>
                            <td>Pre-Sales Support</td>
                            <td>New York</td>
                            <td>21</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Doris Wilder</td>
                            <td>Sales Assistant</td>
                            <td>Sidney</td>
                            <td>23</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Angelica Ramos</td>
                            <td>Chief Executive Officer (CEO)</td>
                            <td>London</td>
                            <td>47</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Gavin Joyce</td>
                            <td>Developer</td>
                            <td>Edinburgh</td>
                            <td>42</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jennifer Chang</td>
                            <td>Regional Director</td>
                            <td>Singapore</td>
                            <td>28</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Brenden Wagner</td>
                            <td>Software Engineer</td>
                            <td>San Francisco</td>
                            <td>28</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Fiona Green</td>
                            <td>Chief Operating Officer (COO)</td>
                            <td>San Francisco</td>
                            <td>48</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Shou Itou</td>
                            <td>Regional Marketing</td>
                            <td>Tokyo</td>
                            <td>20</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Michelle House</td>
                            <td>Integration Specialist</td>
                            <td>Sidney</td>
                            <td>37</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Suki Burks</td>
                            <td>Developer</td>
                            <td>London</td>
                            <td>53</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Prescott Bartlett</td>
                            <td>Technical Author</td>
                            <td>London</td>
                            <td>27</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Gavin Cortez</td>
                            <td>Team Leader</td>
                            <td>San Francisco</td>
                            <td>22</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Martena Mccray</td>
                            <td>Post-Sales support</td>
                            <td>Edinburgh</td>
                            <td>46</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Unity Butler</td>
                            <td>Marketing Designer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Howard Hatfield</td>
                            <td>Office Manager</td>
                            <td>San Francisco</td>
                            <td>51</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Hope Fuentes</td>
                            <td>Secretary</td>
                            <td>San Francisco</td>
                            <td>41</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Vivian Harrell</td>
                            <td>Financial Controller</td>
                            <td>San Francisco</td>
                            <td>62</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Timothy Mooney</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>37</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jackson Bradshaw</td>
                            <td>Director</td>
                            <td>New York</td>
                            <td>65</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Olivia Liang</td>
                            <td>Support Engineer</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Bruno Nash</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>38</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Sakura Yamamoto</td>
                            <td>Support Engineer</td>
                            <td>Tokyo</td>
                            <td>37</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Thor Walton</td>
                            <td>Developer</td>
                            <td>New York</td>
                            <td>61</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Finn Camacho</td>
                            <td>Support Engineer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Serge Baldwin</td>
                            <td>Data Coordinator</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Zenaida Frank</td>
                            <td>Software Engineer</td>
                            <td>New York</td>
                            <td>63</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Zorita Serrano</td>
                            <td>Software Engineer</td>
                            <td>San Francisco</td>
                            <td>56</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jennifer Acosta</td>
                            <td>Junior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>43</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Cara Stevens</td>
                            <td>Sales Assistant</td>
                            <td>New York</td>
                            <td>46</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Hermione Butler</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>47</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Lael Greer</td>
                            <td>Systems Administrator</td>
                            <td>London</td>
                            <td>21</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Jonas Alexander</td>
                            <td>Developer</td>
                            <td>San Francisco</td>
                            <td>30</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Shad Decker</td>
                            <td>Regional Director</td>
                            <td>Edinburgh</td>
                            <td>51</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Michael Bruce</td>
                            <td>Javascript Developer</td>
                            <td>Singapore</td>
                            <td>29</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Donna Snider</td>
                            <td>Customer Support</td>
                            <td>New York</td>
                            <td>27</td>
                            <td><button type="button" class="btn btn-pink waves-effect waves-light"><i class="ion-trash-a"></i></button> | <button type="button" class="btn btn-primary waves-effect waves-light"><i class="ion-edit"></i></button></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div> <!-- end col -->
</div> <!-- end row -->