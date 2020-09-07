<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost(){
        $post = Post::all();
        return $post;
    }
}
