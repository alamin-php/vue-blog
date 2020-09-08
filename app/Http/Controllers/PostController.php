<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost(){
    $posts = Post::with('user','category')->latest()->get();
    return response()->json([
    'posts'=>$posts
    ],200);
    }

        public function deletePost($id){
        $post = Post::find($id);
        $post->delete();
        }
}
