<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *  schema="Producto",
 *  type="object",
 *  title="Producto",
 *  @OA\Property(property="id", type="integer", example="1"),
 *  @OA\Property(property="nombre", type="string", example="Producto 1"),
 *  @OA\Property(property="descripcion", type="string", example="Descripción del producto"),
 *  @OA\Property(property="precio", type="number", format="float", example="19.99"),
 *  @OA\Property(property="categoria_id", type="integer", example="1"),
 *  @OA\Property(property="created_at", type="string", format="date-time", example="2025-03-03T12:00:00Z"),
 *  @OA\Property(property="updated_at", type="string", format="date-time", example="2025-03-03T12:00:00Z")
 * )
 */
class Producto extends Model
{
    use HasFactory;

    protected $table = 'productos';
    protected $fillable = ['nombre', 'descripcion', 'precio', 'stock', 'categoria_id'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}
