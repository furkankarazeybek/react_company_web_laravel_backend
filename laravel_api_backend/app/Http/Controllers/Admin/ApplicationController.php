<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Applications;
use App\Models\Projects;
use Intervention\Image\ImageManagerStatic as Image;

class ApplicationController extends Controller
{

    //API
    public function onSelectAll() {
        $result = Applications::all();

        return $result;
    }

    public function onSelectFour() {
        $result = Applications::limit(4)->get();

        return $result;
    }

    public function onSelectDetails($applicationId) {
        
        $id = $applicationId;
        $result = Applications::where('id',$id)->get();

        return $result ;
    }
  //------------------------------------------//

    public function AllApplication() {
        $applications = Applications::all();
       
        return view('backend.application.all_application', compact('applications'));
    }

    public function AddApplication() {
        return view('backend.application.add_application');

    }
    

    public function EditApplication($id) {
        $applications = Applications::findOrFail($id);
        return view('backend.application.edit_application',compact('applications'));
    }


    public function StoreApplication(Request $request){

        $request->validate([
            'short_title' => 'required',
            'short_description' => 'required',
            'small_img' => 'required',
        ],[
            'short_title.required' => 'Input Short Title Name',
            'short_description.required' => 'Input Short Description',

        ]);

        $image = $request->file('small_img'); 
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(626,417)->save('upload/applications/'.$name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/applications/'.$name_gen;

        Applications::insert([
            'short_title' => $request->short_title,
            'short_description' => $request->short_description,
            'long_title' => $request->long_title,
            'long_description' => $request->long_description,
            'total_duration' => $request->total_duration,
            'total_lecture' => $request->total_lecture,
            'total_application'=>$request->total_application,
            'skill_all' => $request->skill_all,
            'small_img' => $save_url,
        ]);

         $notification = array(
            'message' => 'Staj başarıyla eklendi',
            'alert-type' => 'success'
        );

        return redirect()->route('all.application')->with($notification);

    } // e

    public function UpdateApplication(Request $request){


        $course_id = $request->id;

        if ($request->file('small_img')) {

        $image = $request->file('small_img'); 
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(626,417)->save('upload/applications/'.$name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/applications/'.$name_gen;

        Applications::findOrFail($course_id)->update([

            'short_title' => $request->short_title,
            'short_description' => $request->short_description,
            'long_title' => $request->long_title,
            'long_description' => $request->long_description,
            'total_duration' => $request->total_duration,
            'total_lecture' => $request->total_lecture,
            'total_application' => $request->total_application,
            'skill_all' => $request->skill_all,
            'small_img' => $save_url,
        ]);

         $notification = array(
            'message' => 'Staj başarıyla düzenlendi',
            'alert-type' => 'success'
        );

        return redirect()->route('all.application')->with($notification);

             

        }else{

            Applications::findOrFail($course_id)->update([

            'short_title' => $request->short_title,
            'short_description' => $request->short_description,
            'long_title' => $request->long_title,
            'long_description' => $request->long_description,
            'total_duration' => $request->total_duration,
            'total_lecture' => $request->total_lecture,
            'total_application' => $request->total_application,
            'skill_all' => $request->skill_all,
            
        ]);

         $notification = array(
            'message' => 'Staj bilgileri düzenlendi',
            'alert-type' => 'success'
        );

        return redirect()->route('all.application')->with($notification);

        }

    } // end method 



    public function DeleteApplication($id) 
    {
        Applications::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Staj başarıyla silindi.',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);
    }



}
