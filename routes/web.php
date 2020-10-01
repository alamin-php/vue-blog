<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('public/index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/logout', 'HomeController@logout')->name('logout');
// Route::get('/{anypath}', 'HomeController@index')->where('path','.*');

// Category route here 
Route::get('/category', 'CategoryController@allCategory');
Route::post('/add-category', 'CategoryController@addCategory');
Route::get('/category/{id}', 'CategoryController@deleteCategory');
Route::get('/edit-category/{id}', 'CategoryController@editCategory');
Route::post('/update-category/{id}', 'CategoryController@updateCategory');

// Post route here 
Route::get('/post', 'PostController@allPost');
Route::post('/add-post', 'PostController@addPost');
Route::get('/post/{id}', 'PostController@deletePost');
Route::get('/edit-post/{id}', 'PostController@editPost');
Route::post('/update-post/{id}', 'PostController@updatePost');

// Frontend route 
Route::get('/blogpost', 'BlogController@getAllBlogPost');