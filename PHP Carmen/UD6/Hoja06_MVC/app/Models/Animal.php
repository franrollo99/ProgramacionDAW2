<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Animal extends Model
{
    // Indico explicitamente que el modelo Animal usa la tabla animales en vez de animals
    protected $table = 'animales';
    // $fillable es una propiedad que define que atributos pueden ser asignados, evitando que los usuarios puedan modificar campos no autorizados en la base de datos
    protected $fillable = ['especie', 'slug', 'peso', 'altura', 'fechaNacimiento', 'alimentacion', 'descripcion', 'image_id'];

    // Este metodo me permite acceder a la clase Image desde Animal
    public function imagen()
    {
        return $this->belongsTo(Image::class, 'image_id'); // Relacion uno a uno inversa
    }

    public function getEdad()
    {
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return floor($fechaFormateada->diffInYears(Carbon::now()));
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
