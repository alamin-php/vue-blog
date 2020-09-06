<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request){
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:50',
        ]);

        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message'=>'ok'];
    }

    public function allCategory(){
        $categories = Category::latest()->get();
        return response()->json([
            'categories'=>$categories
        ],200);
    }

    public function deleteCategory($id){
        $category = Category::find($id);
        $category->delete();
    }
}
