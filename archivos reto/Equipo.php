<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Equipo extends Model
{

    protected $table = 'equipos';

    protected $fillable = [
        'nombre',
        'grupo',
        'centro_id',
        'usuarioIdCreacion',
        'fechaCreacion',
        'usuarioIdActualizacion',
        'fechaActualizacion'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->usuarioIdCreacion = Auth::id() ?? 1;
            $model->fechaCreacion = now();
        });


        static::updating(function ($model) {
            $model->usuarioIdActualizacion = Auth::id() ?? 1;
            $model->fechaActualizacion = now();
        });
    }

    public function jugadores()
    {
        return $this->hasMany(Jugador::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }

    public function imagenes()
    {
        return $this->hasMany(Imagen::class);
    }

    public function publicaciones()
    {
        return $this->hasMany(Publicacion::class);
    }

    public function patrocinadores()
    {
        return $this->belongsToMany(Patrocinador::class, 'patrocinadores_equipos', 'equipo_id', 'patrocinador_id')
            ->withTimestamps()
            ->withPivot('usuarioIdCreacion', 'fechaCreacion', 'usuarioIdActualizacion', 'fechaActualizacion');
    }
    public function centro()
    {
        return $this->belongsTo(Centro::class, 'centro_id');
    }

}
