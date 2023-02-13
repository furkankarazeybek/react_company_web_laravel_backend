<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\HomePageEtcController;
use App\Models\HomePageEtc;

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

//Grafik
Route::get('/chartdata',[ChartController::class, "onAllSelect"]);

//Kadro
Route::get('/clientreview',[ClientReviewController::class, "onAllSelect"]);

//İletişim
Route::post('/contactsend',[ContactController::class, "onContactSend"]);

//Başvuru

Route::get('/applicationhome',[ApplicationController::class, "onSelectFour"]);
Route::get('/applicationall',[ApplicationController::class, "onSelectAll"]);
Route::get('/applicationdetails/{applicationId}',[ApplicationController::class, "onSelectDetails"]);

//Footer

Route::get('/footerdata',[FooterController::class, "onSelectAll"]);


//Hakkımızda

Route::get('/information',[InformationController::class, "onSelectAll"]);

//Hizmetler

Route::get('/services',[ServiceController::class, "ServiceView"]);

//Projeler

Route::get('/projecthome',[ProjectController::class, "onSelectThree"]);
Route::get('/projectall',[ProjectController::class, "onSelectAll"]);
Route::get('/projectdetails/{projectId}',[ProjectController::class, "ProjectDetails"]);

//Anasayfa

Route::get('/totalhome',[HomePageEtcController::class, "SelectTotalHome"]);
Route::get('/techhome',[HomePageEtcController::class, "SelectTechHome"]);
Route::get('/homepage/title',[HomePageEtcController::class, "SelectHomeTitle"]);










