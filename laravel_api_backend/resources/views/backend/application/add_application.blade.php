@extends('admin.admin_master')
@section('admin')
 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

<div class="content-body" style="min-height: 788px;">
			<div class="container-fluid">
				<!-- Add Staj -->
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
                                <h4 class="card-title">Staj Ekle </h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">

        <form method="post" action="{{ route('application.store') }}" enctype="multipart/form-data">
        	@csrf

            <div class="form-group">
                <label class="info-title">Kısa Başlık </label>
         <input type="text" name="short_title" class="form-control input-default "  >
            @error('short_title')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>

         <div class="form-group">
            <label class="info-title">Kısa Açıklama </label>
        <textarea name="short_description" class="form-control" rows="4" id="comment"></textarea>
            @error('short_description')
            <span class="text-danger">{{ $message }}</span>
            @enderror
            </div>


            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Resim Yükle</span>
                </div>
                <div class="custom-file">
                    <input type="file" name="small_img" class="custom-file-input" id="image">
                    <label class="custom-file-label">Resim Seç</label>
                </div>
            </div>

            <div class="form-group">
                <img id="showImage" src={{ url('upload/no_image.jpg') }} style="width: 100px; height: 100px;">
            </div>   

            




  <div class="form-group">
                <label class="info-title">Uzun başlık </label>
         <input type="text" name="long_title" class="form-control input-default "  >
            @error('long_title')
            <span class="text-danger">{{ $message }}</span>
            @enderror

        </div>


   <div class="form-group">
                <label class="info-title">Uzun Açıklama</label>
               <textarea class="form-control" name="long_description" id="summernote2"></textarea>
            </div>


         <div class="form-group">
                <label class="info-title">Alınacak Stajyer Sayısı</label>
         <input type="text" name="total_application" class="form-control input-default "  >
            @error('total_application')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>

 <div class="form-group">
                <label class="info-title">Staj Süresi</label>
         <input type="text" name="total_duration" class="form-control input-default "  >
            @error('total_duration')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>

             <div class="form-group">
                <label class="info-title">Teknik Alanlar </label>
         <input type="text" name="total_lecture" class="form-control input-default "  >
            @error('total_lecture')
            <span class="text-danger">{{ $message }}</span>
            @enderror

            </div>


        
     


  <div class="form-group">
                <label class="info-title">Bölüm(İlgili Alanlar)</label>
               <textarea class="form-control" name="skill_all" id="summernote3"></textarea>
            </div>






           <input type="submit" class="btn btn-success" value="Staj Ekle">
            
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
        <script type="text/javascript">
            $(document).ready(function() {
               $('#image').change(function(e){
                   var reader = new FileReader();
                   reader.onload = function(e){
                       $('#showImage').attr('src',e.target.result);
                   }
       
                   reader.readAsDataURL(e.target.files['0']);
               });
            });
           
       </script>  


@endsection


