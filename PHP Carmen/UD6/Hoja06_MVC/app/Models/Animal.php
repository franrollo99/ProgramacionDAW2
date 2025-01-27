<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Animal extends Model
{
    // Indico explicitamente que el modelo Animal usa la tabla animales en vez de animals
    protected $table = 'animales';
    // filleable

    public function getEdad()
    {
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return $fechaFormateada->diffInYears(Carbon::now());
    }

    // Muestra el slug en la url en vez de el id
    public function getRouteKeyName(){
        return 'slug';
    }

    public function revisiones(){
        return $this->hasMany(Revision::class);
    }

    public function cuidadores(){
        return $this->belongsToMany(Cuidador::class);
    }
}
