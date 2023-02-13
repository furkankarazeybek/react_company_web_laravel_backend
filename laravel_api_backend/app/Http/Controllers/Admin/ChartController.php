<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chart;

class ChartController extends Controller
{


    //API
    public function onAllSelect() {
        $result = Chart::all();
        return $result;
         
    }

    //------------------------------------------//

    public function AllChartContent(){
        $chart = Chart::all();
    	return view('backend.chart.all_chart',compact('chart'));
    } // end method 

    public function AddChartContent(){
        $chart = Chart::all();
        return view('backend.chart.add_chart', compact('chart'));
    } // end method 


    public function EditChartContent($id){
    	$chart = Chart::findOrFail($id);
    	return view('backend.chart.edit_chart',compact('chart'));

    } // end method 

 

    public function UpdateChartContent(Request $request){

    		$chart_id = $request->id;

    	Chart::findOrFail($chart_id)->update([

    		'Technology' => $request->Technology,
    		'Projeler' => $request->Projeler,
    		 
    		 
    	]);

    	 $notification = array(
    		'message' => 'Teknoloji bilgisi kaydedildi',
    		'alert-type' => 'success'
    	);

    	return redirect()->route('all.chart.content')->with($notification);

    } // end method 



    public function StoreChartContent(Request $request) {
        
        Chart::insert([
            'Technology' => $request->teknoloji,
            'Projeler' => $request->proje,
        
       ]);

       $notification = array(
           'message' => 'Hizmet başarıyla kaydedildi',
           'alert-type' => 'success'
       );

       return redirect()->route('all.chart.content')->with($notification);

    }
}
