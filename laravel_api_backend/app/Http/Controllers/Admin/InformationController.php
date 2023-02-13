<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Information;


class InformationController extends Controller
{

    //API
    public function onSelectAll() {
        $result = Information::all();

        return $result;
    }

    //------------------------------------------//

    public function AllInformation() {
        $result = Information::all();
        return view('backend.information.all_information', compact('result'));
    }


    public function AddInformation() {
        $result = Information::all();
        return view('backend.information.add_information', compact('result'));
    }

    public function StoreInformation(Request $request) {
        
        Information::insert([
           'about' => $request->about,
           'data_protect' => $request->data_protect,
           'terms' => $request->terms,
           'privacy' => $request->privacy,
        ]);

        $notification = array(
            'message' => "Kurum bilgileri başarıyla eklendi.",
            "alert-type" => "success"
        );

        return redirect()->route('all.information')->with($notification);
    }

    public function EditInformation($id) {
      $information = Information::findOrFail($id);  
      return view('backend.information.edit_information', compact('information'));       
   } 

   public function UpdateInformation(Request $request, $id) { 
    Information::findOrFail($id)->update([
        'about' => $request->about,
        'data_protect' => $request->data_protect,
        'terms' => $request->terms,
        'privacy' => $request->privacy,
     ]);

     $notification = array(
         'message' => "Kurum bilgileri başarıyla güncellendi.",
         "alert-type" => "success"
     );

     return redirect()->route('all.information')->with($notification);

   }

   public function DeleteInformation($id) {

    Information::findOrFail($id)->delete();

    $notification = array(
        'message' => "Kurum bilgileri başarıyla silindi.",
        "alert-type" => "success"
    );

    return redirect()->back()->with($notification);

   }  
}
