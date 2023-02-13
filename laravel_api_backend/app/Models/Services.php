<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{

    protected $fillable = [
        'service_name',
        'service_description',
        'service_logo',
    ];
    use HasFactory;
}
