<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footer;

class FooterController extends Controller
{

    //API
    public function onSelectAll() {
        $result = Footer::all();

        return $result;
    }

    //------------------------------------------//

    public function AllFooterContent(){
    	$footer = Footer::all();
    	return view('backend.footer.all_footer',compact('footer'));
    } // end mehtod 


    public function EditFooterContent($id){
    	$footer = Footer::findOrFail($id);
    	return view('backend.footer.edit_footer',compact('footer'));
    } // end mehtod 


    public function UpdateFooterContent(Request $request){
    	$footer_id = $request->id;

    	Footer::findOrFail($footer_id)->update([

    		'adress' => $request->adress,
    		'email' => $request->email,
    		'phone' => $request->phone,
    		'facebook' => $request->facebook,
    		'linkedin' => $request->linkedin,
    		'twitter' => $request->twitter,
    		'footer_credit' => $request->footer_credit,
    		 
    	]);

    	 $notification = array(
    		'message' => 'Footer Updated Successfully',
    		'alert-type' => 'success'
    	);

    	return redirect()->route('all.footer.content')->with($notification);

    } // end mehtod 
}
