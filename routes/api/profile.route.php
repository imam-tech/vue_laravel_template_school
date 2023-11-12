<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController;

Route:: group(['prefix' => 'profile', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [ProfileController::class, 'index']);
});