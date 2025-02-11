<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *  schema="Producto",
 *  type="object",
 *  title="Producto",
 *  @OA\Property(property="id", type="integer", example="1"),
 *  @OA\Property(property="nombre", type="string", example="Producto 1"),
 *  @OA\Property(property="descripcion", type="text", example="Descripcion 1"),
 *  @OA\Property(property="precio", type="decimal", example="1.00"),
 *  @OA\Property(property="stock", type="integer", example="10"),
 *  @OA\Property(property="categoria_id", type="unsignedBigInteger", example="1111111"),
 * 
 *  )
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
