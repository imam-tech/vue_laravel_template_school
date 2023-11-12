<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthRepository {
    public function login($data) {
        try {
            $user = User::with(['role.rolePermissions.permission'])->where('email', $data['email'])->first();
            if (!$user) return resultFunction("Err code AR-L: user " . $data['email'] . ' is not found');

            if (!Hash::check($data['password'], $user['password'])) {
                return resultFunction("Err code AR-L: password of user " . $data['email'] . ' is not correct');
            }


            Auth::login($user);
            $token = $user->createToken('API Token')->plainTextToken;

            return resultFunction("", true, [
                "user" => $user,
                "role" => $user->role->title,
                "permissions" => array_column($user->role->rolePermissions->toArray(), 'permission'),
                "token" => $token,
                "sign_at" => date("Y-m-d H:i:s")
            ]);
        } catch (\Exception $e) {
            return resultFunction("Err code AR-L: catch " . $e->getMessage());
        }
    }

    public function logout($request) {
        try {
            $request->user()->currentAccessToken()->delete();
            return resultFunction("Success logged out", true);
        } catch (\Exception $e) {
            return resultFunction("Err code AR-LOg: catch " . $e->getMessage());
        }
    }
}