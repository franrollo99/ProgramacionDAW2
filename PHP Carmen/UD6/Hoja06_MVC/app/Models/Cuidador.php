<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuidador extends Model
{
    /** @use HasFactory<\Database\Factories\CuidadorFactory> */
    use HasFactory;

    protected $table = 'cuidadores';

    public function animales(){
        return $this->belongsToMany(Animal::class);
    }
}
