<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use App\User;
use Auth;
use Image;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost(){
    $posts = Post::with('user','category')->latest()->get();
    return response()->json([
    'posts'=>$posts
    ],200);
    }

    public function addPost(Request $request){
        $this->validate($request, [
            'title' => 'required|min:2',
            'description' => 'required|min:2',
            'cat_id' => 'required',
            'picture' => 'required',
        ]);
        $strpost = strpos($request->picture, ';');
        $substr = substr($request->picture,0,$strpost);
        $ex = explode('/',$substr)[1];
        $name = time().".".$ex;
        $img = Image::make($request->picture)->resize(900, 632);
        $upload_path = public_path()."/upload/";
        $img->save($upload_path.$name);

        $post = new Post();
        $post->cat_id = $request->cat_id;
        $post->title = $request->title;
        $post->description = $request->description;
        $post->user_id = Auth::user()->id;
        $post->picture = $name;
        $post->save();
        return ['message'=>'ok'];
    }
    
    public function updatePost(Request $request, $id){
        $post = Post::find($id);
        $this->validate($request, [
            'title' => 'required|min:2',
            'description' => 'required|min:2',
            'cat_id' => 'required',
            // 'picture' => 'required',
        ]);


        if ($request->picture !=$post->picture) {
                    $strpost = strpos($request->picture, ';');
                    $substr = substr($request->picture,0,$strpost);
                    $ex = explode('/',$substr)[1];
                    $name = time().".".$ex;
                    $img = Image::make($request->picture)->resize(900, 632);
                    $upload_path = public_path()."/upload/";
                    $image = $upload_path.$post->picture;
                    $img->save($upload_path.$name);
            if (file_exists($image)) {
                @unlink($image);
            }
        }else{
            $name = $post->picture;
        }
        
        $post->cat_id = $request->cat_id;
        $post->title = $request->title;
        $post->description = $request->description;
        $post->user_id = Auth::user()->id;
        $post->picture = $name;
        $post->save();
        return ['message'=>'ok'];
    }

        public function editPost($id){
            $post = Post::find($id);
            return response()->json([
                'post'=>$post
            ],200);
        }


        public function deletePost($id){
            $post = Post::find($id);
            $image_path = public_path(). "/upload/";
            $image = $image_path.$post->picture;
            if (file_exists($image)) {
                @unlink($image);
            }
            $post->delete();
        }
}
