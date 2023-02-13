<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomePageEtc;
use Illuminate\Http\Request;
use App\Models\Projects;

class HomePageEtcController extends Controller
{

    //API
    public function SelectTotalHome() {
        $result = HomePageEtc::select('total_staff','total_application','total_arge_project')->get();

        return $result;
    }

    public function SelectTechHome() {
        $result = HomePageEtc::select('tech_description')->get();

        return $result;
    }

    public function SelectHomeTitle() {
        $result = HomePageEtc::select('home_title','home_subtitle')->get();

        return $result;
    }

    //------------------------------------------//


    public function AllHomeContent(){

        $homecontent = HomePageEtc::all();
            return view('backend.homecontent.all_homecontent',compact('homecontent'));
        } // end method 
    
    
    
    
  
        public function EditHomeContent($id){
    
            $homecontent = HomePageEtc::findOrFail($id);
            return view('backend.homecontent.edit_homecontent',compact('homecontent'));
    
        } // end method 
    
        public function UpdateHomeContent(Request $request){
    
            $home_id = $request->id;
    
            HomePageEtc::findOrFail($home_id)->update([
                'home_title' => $request->home_title,
                'home_subtitle' => $request->home_subtitle,
                'tech_description' => $request->tech_description,
                'total_staff' => $request->total_staff,
                'total_arge_project' => $request->total_arge_project,
                'total_application' => $request->total_application,
                 
            ]);
    
             $notification = array(
                'message' => 'Home Content Updated Successfully',
                'alert-type' => 'success'
            );
    
            return redirect()->route('all.home.content')->with($notification);
    
    
        } // end method 
    
    
   
    
    
    
}


