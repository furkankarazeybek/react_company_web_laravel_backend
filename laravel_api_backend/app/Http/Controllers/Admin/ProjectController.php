<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projects;
use Intervention\Image\ImageManagerStatic as Image;

use SebastianBergmann\CodeCoverage\Report\Xml\Project;

class ProjectController extends Controller
{

    //API
    public function onSelectThree() {
      
        $result = Projects::limit(3)->get();
        return $result;
    }  

    public function onSelectAll() {

    $result = Projects::all();
    return $result;

    }

    public function ProjectDetails($projectId){
        $id = $projectId;
        $result = Projects::where('id',$id)->get();

        return $result;
    
    }

    //------------------------------------------//

    public function AllProject() {
        $projects = Projects::all();
        return view('backend.project.all_project', compact('projects'));
    }

    public function AddProject() {
        return view('backend.project.add_project');

    }

    public function StoreProject(Request $request) {
        $request->validate([
            'project_name' => 'required',
            'project_description' => 'required',
            'img_one' => 'required'

        ], [

            //eğer girilmezse hata mesajları
            'project_name.required' => 'Proje Adını Giriniz',
            'project_description.required' => 'Proje Açıklaması Giriniz',

        ]);

        $image_one = $request->file('img_one');
        $name_gen = hexdec(uniqid()).'.'.$image_one->getClientOriginalExtension();
         //545454.png
        Image::make($image_one)->resize(626,417)->save('upload/project/'.$name_gen);
        $save_url_one = 'http://127.0.0.1:8000/upload/project/' . $name_gen;

        
        $image_two = $request->file('img_two');
        $name_gen = hexdec(uniqid()).'.'.$image_two->getClientOriginalExtension();
         //545454.png
        Image::make($image_two)->resize(540,607)->save('upload/project/'.$name_gen);
        $save_url_two = 'http://127.0.0.1:8000/upload/project/' . $name_gen;


        Projects::insert([
             'project_name' => $request->project_name,
             'project_description' => $request->project_description,
             'project_features' => $request->project_features,
             'live_preview' => $request->live_preview,
             'img_one' => $save_url_one,
             'img_two' => $save_url_two,

        ]);

        $notification = array(
            'message' => 'Proje başarıyla kaydedildi',
            'alert-type' => 'success'
        );

        return redirect()->route('all.projects')->with($notification); 
    }


    public function EditProject($id) {

        $project = Projects::findOrFail($id);

        return view('backend.project.edit_project', compact('project'));
    }

    public function UpdateProject(Request $request) {

        $project_id = $request->id;

        if($request->file('img_one') && $request->file('img_two')) 
        {
            $image_one = $request->file('img_one');
            $name_gen = hexdec(uniqid()).'.'.$image_one->getClientOriginalExtension();
             //545454.png
            Image::make($image_one)->resize(626,417)->save('upload/project/'.$name_gen);
            $save_url_one = 'http://127.0.0.1:8000/upload/project/' . $name_gen;
    
            
            $image_two = $request->file('img_two');
            $name_gen = hexdec(uniqid()).'.'.$image_two->getClientOriginalExtension();
             //545454.png
            Image::make($image_two)->resize(540,607)->save('upload/project/'.$name_gen);
            $save_url_two = 'http://127.0.0.1:8000/upload/project/' . $name_gen;
    
    
            Projects::findOrFail($project_id)->update([
                 'project_name' => $request->project_name,
                 'project_description' => $request->project_description,
                 'project_features' => $request->project_features,
                 'live_preview' => $request->live_preview,
                 'img_one' => $save_url_one,
                 'img_two' => $save_url_two,
    
            ]);
    
            $notification = array(
                'message' => 'Proje başarıyla güncellendi',
                'alert-type' => 'success'
            );
    
            return redirect()->route('all.projects')->with($notification);
        }
        else if($request->file('img_one'))
        {

            $image_one = $request->file('img_one');
            $name_gen = hexdec(uniqid()).'.'.$image_one->getClientOriginalExtension();
             //545454.png
            Image::make($image_one)->resize(626,417)->save('upload/project/'.$name_gen);
            $save_url_one = 'http://127.0.0.1:8000/upload/project/' . $name_gen;

            Projects::findOrFail($project_id)->update([
                'project_name' => $request->project_name,
                'project_description' => $request->project_description,
                'project_features' => $request->project_features,
                'live_preview' => $request->live_preview,
                'img_one' => $save_url_one,

   
           ]);
   
           $notification = array(
               'message' => 'Proje resimsiz olarak başarıyla güncellendi',
               'alert-type' => 'success'
           );
   
           return redirect()->route('all.projects')->with($notification);
        }

        else if($request->file('img_two')) {
            $image_two = $request->file('img_two');
            $name_gen = hexdec(uniqid()).'.'.$image_two->getClientOriginalExtension();
             //545454.png
            Image::make($image_two)->resize(540,607)->save('upload/project/'.$name_gen);
            $save_url_two = 'http://127.0.0.1:8000/upload/project/' . $name_gen;
    
    
            Projects::findOrFail($project_id)->update([
                 'project_name' => $request->project_name,
                 'project_description' => $request->project_description,
                 'project_features' => $request->project_features,
                 'live_preview' => $request->live_preview,
                 'img_two' => $save_url_two,
    
            ]);
   
           $notification = array(
               'message' => 'Proje resimsiz olarak başarıyla güncellendi',
               'alert-type' => 'success'
           );
   
           return redirect()->route('all.projects')->with($notification);
        }
        else 
        {
            Projects::findOrFail($project_id)->update([
                'project_name' => $request->project_name,
                'project_description' => $request->project_description,
                'project_features' => $request->project_features,
                'live_preview' => $request->live_preview,
         
   
           ]);
   
           $notification = array(
               'message' => 'Proje resimsiz olarak başarıyla güncellendi',
               'alert-type' => 'success'
           );
   
           return redirect()->route('all.projects')->with($notification);
        }


    }

    public function DeleteProject($id) 
    {
        Projects::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Proje başarıyla silindi.',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);
    }

  
}



