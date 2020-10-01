<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getAllBlogPost(){
        $posts = Post::with('user','category')->latest()->get();
        return response()->json([
        'posts'=>$posts
        ],200);
    }
}
