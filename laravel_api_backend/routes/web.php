<?php

use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\HomePageEtcController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\StajController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/home/all',[HomePageEtcController::class, 'AllHomeContent'])->name('all.home.content');
});

Route::get('/logout',[AdminUserController::class, "AdminLogout"])->name('admin.logout');

Route::prefix('admin')->group(function(){
    Route::get('/user/profile',[AdminUserController::class, "UserProfile"])->name('user.profile');


    Route::get('/user/profile/edit',[AdminUserController::class, "UserProfileEdit"])->name('user.profile.edit');
    

    Route::post('/user/profile/store',[AdminUserController::class, "UserProfileStore"])->name('user.profile.store');


    Route::get('/change/password',[AdminUserController::class, "UserChangePassword"])->name('change.password');


    Route::post('/change/password/update',[AdminUserController::class, "UserPasswordUpdate"])->name('change.password.update');


});

//Bilgiler Tüm Route
Route::prefix('information')->group(function(){
    Route::get('/all',[InformationController::class, "AllInformation"])->name('all.information');

    Route::get('/add',[InformationController::class, "AddInformation"])->name('add.information');

    Route::post('/store',[InformationController::class, "StoreInformation"])->name('information.store');

    Route::get('/edit/{id}',[InformationController::class, "EditInformation"])->name('edit.information');


    Route::post('/update/{id}',[InformationController::class, "UpdateInformation"])->name('information.update');

    Route::get('/delete/{id}',[InformationController::class, "DeleteInformation"])->name('delete.information');

  
});


//Hizmetler Tüm Route

Route::prefix('service')->group(function(){
    Route::get('/all',[ServiceController::class, "AllService"])->name('all.services');

    Route::get('/add',[ServiceController::class, "AddService"])->name('add.services');

    Route::post('/store',[ServiceController::class, "StoreService"])->name('service.store');

    Route::get('/edit/{id}',[ServiceController::class, "EditService"])->name('edit.service');


    Route::post('/update/',[ServiceController::class, "UpdateService"])->name('service.update');

    Route::get('/delete/{id}',[ServiceController::class, "DeleteService"])->name('delete.service');

  
});


//Projeler Tüm 

Route::prefix('project')->group(function(){
    Route::get('/all',[ProjectController::class, "AllProject"])->name('all.projects');

    Route::get('/add',[ProjectController::class, "AddProject"])->name('add.project');

    Route::post('/store',[ProjectController::class, "StoreProject"])->name('project.store');

    Route::get('/edit/{id}',[ProjectController::class, "EditProject"])->name('edit.project');


    Route::post('/update/',[ProjectController::class, "UpdateProject"])->name('project.update');

    Route::get('/delete/{id}',[ProjectController::class, "DeleteProject"])->name('delete.project');

  
});

//Stajlar Tüm
Route::prefix('application')->group(function(){

    Route::get('/all',[ApplicationController::class, "AllApplication"])->name('all.application');

    Route::get('/add',[ApplicationController::class, "AddApplication"])->name('add.application');

    Route::post('/store',[ApplicationController::class, "StoreApplication"])->name('application.store');

    Route::get('/edit/{id}',[ApplicationController::class, "EditApplication"])->name('edit.application');


    Route::post('/update/',[ApplicationController::class, "UpdateApplication"])->name('application.update');

    Route::get('/delete/{id}',[ApplicationController::class, "DeleteApplication"])->name('delete.application');

  
});



 // Home  Routes 
 Route::prefix('home')->group(function(){

    Route::get('/all',[HomePageEtcController::class, 'AllHomeContent'])->name('all.home.content');

    Route::get('/edit/{id}',[HomePageEtcController::class, 'EditHomeContent'])->name('edit.homecontent');
    
    Route::post('/update/',[HomePageEtcController::class, 'UpdateHomeContent'])->name('homecontent.update');
    
    });


 // Client Review 
 Route::prefix('review')->group(function(){

    Route::get('/all',[ClientReviewController::class, 'AllReview'])->name('all.review');
    
    Route::get('/add',[ClientReviewController::class, 'AddReview'])->name('add.review');
    
    Route::post('/store',[ClientReviewController::class, 'StoreReview'])->name('review.store');
    
    Route::get('/edit/{id}',[ClientReviewController::class, 'EditReview'])->name('edit.review');
    
    Route::post('/update/',[ClientReviewController::class, 'UpdateReview'])->name('review.update');
    
    Route::get('/delete/{id}',[ClientReviewController::class, 'DeleteReview'])->name('delete.review'); 
    
    });    


// Footer Routes 
Route::prefix('footer')->group(function(){

    Route::get('/all',[FooterController::class, 'AllFooterContent'])->name('all.footer.content');
    
    Route::get('/edit/{id}',[FooterController::class, 'EditFooterContent'])->name('edit.footer');
    
    Route::post('/update/',[FooterController::class, 'UpdateFooterContent'])->name('footer.update');

    
    });



     // Chart Content All Routes 
Route::prefix('chart')->group(function(){

    Route::get('/all',[ChartController::class, 'AllChartContent'])->name('all.chart.content');

    Route::match(['post'],'/store',[ChartController::class, 'StoreChartContent'])->name('chart.store');

     Route::get('/add',[ChartController::class, 'AddChartContent'])->name('add.chart.content');
    

    
    Route::get('/edit/{id}',[ChartController::class, 'EditChartContent'])->name('edit.chart');
    
    Route::post('/update/',[ChartController::class, 'UpdateChartContent'])->name('chart.update');

    
    });
    
    
    
    Route::get('/all',[ContactController::class, 'AllContactMessage'])->name('contact.message');
    
    Route::get('/delete/message/{id}',[ContactController::class, 'DeleteContactMessage'])->name('delete.message'); 