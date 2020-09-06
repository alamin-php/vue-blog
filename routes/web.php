<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/logout', 'HomeController@logout')->name('logout');
// Route::get('/{anypath}', 'HomeController@index')->where('path','.*');

// Category route here 
Route::post('/add-category', 'CategoryController@addCategory');
Route::get('/category', 'CategoryController@allCategory');
Route::get('/category/{id}', 'CategoryController@deleteCategory');
