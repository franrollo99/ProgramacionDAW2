<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Animal;

class Image extends Model
{
    protected $fillable = ['nombre', 'url'];
}
