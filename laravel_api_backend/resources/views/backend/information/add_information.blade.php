@extends('admin.admin_master')
@section('admin') 

<div class="content-body" style="min-height: 1100px;">
			<div class="container-fluid">
				<!-- Add Project -->
				<div class="modal fade" id="addProjectSidebar">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								
							</div>
							<div class="modal-body">
								
							</div>
						</div>
					</div>
				</div>



                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                       
                    </div>
                </div>




                <!-- row -->
                <div class="row">


                    <div class="col-xl-12 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Yeni Bilgi Ekle</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                  <form method="post" action="{{ route('information.store') }}" >
                    @csrf

                      <div class="form-group">
                          <label class="info-title">Hakkımızda</label>
                          <textarea class="form-control" name="about" id="summernote"></textarea>
                      </div>

                      
                      <div class="form-group">
                        <label class="info-title">Veri Koruma İlkeleri</label>
                        <textarea class="form-control" name="data_protect" id="summernote2"></textarea>
                    </div>

                    
                    <div class="form-group">
                        <label class="info-title">Şartlar ve Koşullar</label>
                        <textarea class="form-control" name="terms" id="summernote3"></textarea>
                    </div>

                    <div class="form-group">
                        <label class="info-title">Gizlilik Koşulları</label>
                        <textarea class="form-control" name="privacy" id="summernote4"></textarea>
                    </div>

                    

                   
                    <input type="submit" class="btn btn-success" value="Kaydet">
                     
                  </form> 
                                </div>
                            </div>
                        </div>
					</div>
 
                             </form>
                          </div>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
        </div>

     <!-- summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>


<script type="text/javascript">
    $('#summernote').summernote({
        height: 400
    });
    
</script>

<script type="text/javascript">
    $('#summernote2').summernote({
        height: 400
    });
</script>

<script type="text/javascript">
    $('#summernote3').summernote({
        height: 400
    });
</script>

<script type="text/javascript">
    $('#summernote4').summernote({
        height: 400
    });
</script>

@endsection
