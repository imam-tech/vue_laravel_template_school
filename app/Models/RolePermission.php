<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RolePermission extends Model
{
    use HasFactory;
    
    protected $table = 'role_permissions';
    protected $guarded = [];

    public function permission() {
        return $this->hasOne(Permission::class, 'id', 'permission_id');
    }
}
