<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Animal extends Model
{
    protected $table = 'animales';

    public function getEdad(){
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return $fechaFormateada->diffInYears(Carbon::now());
    }

    public function getRouteKeyName(){
        return 'slug';
    }

    public function revisiones(){
        return $this->hasMany(Revision::class);
    }
}
