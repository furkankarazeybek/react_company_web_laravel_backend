@extends('admin.admin_master')
@section('admin')


<div class="content-body" style="min-height: 788px;">
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
                        <div class="welcome-text">
                            
                             
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        
                    </div>
                </div>



                <!-- row -->
                <div class="row">

                    <div class="col-xl-12 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Anasayfa İçeriğini Düzenle </h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">

        <form method="post" action="{{ route('homecontent.update') }}" >
        	@csrf

            <input type="hidden" name="id" value="{{ $homecontent->id }}">

            <div class="form-group">
                <label class="info-title">Ana Başlık </label>
         <input type="text" name="home_title" class="form-control input-default " value="{{ $homecontent->home_title }}" >
            @error('home_title')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>


              <div class="form-group">
                <label class="info-title">Ana Alt Başlık </label>
         <input type="text" name="home_subtitle" class="form-control input-default " value="{{ $homecontent->home_subtitle }}" >
            @error('home_subtitle')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>


         <div class="form-group">
                <label class="info-title">Şirket Açıklaması </label>
                <textarea class="form-control" name="tech_description" id="summernote">
                    {{ $homecontent->tech_description }}
                </textarea>
            </div>


    <div class="form-group">
                <label class="info-title">Toplam Ürün </label>
         <input type="text" name="total_staff" class="form-control input-default "value="{{ $homecontent->total_staff }}"  >
            @error('total_staff')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>

                <div class="form-group">
                <label class="info-title">Toplam AR-GE Projesi </label>
         <input type="text" name="total_arge_project" class="form-control input-default " value="{{ $homecontent->total_arge_project }}" >
            @error('total_arge_project')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>


                <div class="form-group">
                <label class="info-title">Başvuruya Açık Staj Alanı </label>
         <input type="text" name="total_application" class="form-control input-default " value="{{ $homecontent->total_application }}" >
            @error('total_application')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>

    

 


           <input type="submit" class="btn btn-success" value="Kaydet">
            
        </form>
    </div>
                            </div>
                        </div>
					</div>


					  




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
        height: 200
    });
</script>

<script type="text/javascript">
    $('#summernote2').summernote({
        height: 200
    });
</script>

@endsection 