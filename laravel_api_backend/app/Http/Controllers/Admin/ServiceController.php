<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Services;
use Intervention\Image\ImageManagerStatic as Image;


class ServiceController extends Controller
{

    //API
    public function ServiceView() {
        
        $services = Services::latest()->get();
        return $services;
    }

    //------------------------------------------//

    public function AllService() {
        $result = Services::all();
        return view('backend.service.all_service', compact('result'));
    }

    public function AddService() {

        return view('backend.service.add_service');

    }

    public function StoreService(Request $request) {

        $request->validate([
            'service_name' => 'required',
            'service_description' => 'required',
            'service_logo' => 'required'

        ], [

            //eğer girilmezse hata mesajları
            'service_name.required' => 'Hizmet Adını Giriniz',
            'service_description.required' => 'Hizmet Açıklaması Giriniz',

        ]);

        $image = $request->file('service_logo');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
         //545454.png
        Image::make($image)->resize(512,512)->save('upload/service/'.$name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/service/' . $name_gen;


        Services::insert([
             'service_name' => $request->service_name,
             'service_description' => $request->service_description,
             'service_logo' => $save_url,
        ]);

        $notification = array(
            'message' => 'Hizmet başarıyla kaydedildi',
            'alert-type' => 'success'
        );

        return redirect()->route('all.services')->with($notification);
    }

    public function EditService($id) {

        $services = Services::findOrFail($id);
        return view('backend.service.edit_service', compact('services'));
    }

    public function updateService(Request $request) {

        $service_id = $request->id;


            //logo isteği varsa
            if($request->file('service_logo')) {

           $image = $request->file('service_logo');
           $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            //545454.png
           Image::make($image)->resize(512.512)->save('upload/service/'.$name_gen);
           $save_url = 'http://127.0.0.1:8000/upload/service/' . $name_gen;


            Services::findOrFail($service_id)->update([
                 'service_name' => $request->service_name,
                 'service_description' => $request->service_description,
                 'service_logo' => $save_url,
            ]);
    
            $notification = array(
                'message' => 'Hizmet bilgisi başarıyla güncellendi.',
                'alert-type' => 'success'
            );
    
            return redirect()->route('all.services')->with($notification);
            
        }
        else{

            Services::findOrFail($service_id)->update([
                'service_name' => $request->service_name,
                'service_description' => $request->service_description,
           ]);
   
           $notification = array(
               'message' => 'Hizmet bilgisi resimsiz olarak başarıyla güncellendi.',
               'alert-type' => 'success'
           );
   
           return redirect()->route('all.services')->with($notification);



        }

    }


    public function DeleteService($id) {

        Services::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Hizmet başarıyla silindi.',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);
    }
}
