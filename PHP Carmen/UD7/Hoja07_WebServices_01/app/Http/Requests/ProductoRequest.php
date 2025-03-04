<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @OA\Schema(
 *     schema="ProductoRequest",
 *     title="ProductoRequest",
 *     required={"nombre", "precio", "stock"},
 *     @OA\Property(
 *         property="nombre",
 *         type="string",
 *         description="Nombre del producto"
 *     ),
 *     @OA\Property(
 *         property="descripcion",
 *         type="string",
 *         description="Descripción del producto"
 *     ),
 *     @OA\Property(
 *         property="precio",
 *         type="number",
 *         description="Precio del producto"
 *     ),
 *     @OA\Property(
 *         property="stock",
 *         type="integer",
 *         description="Stock del producto"
 *     ),
 *     @OA\Property(
 *         property="categoria_id",
 *         type="integer",
 *         description="ID de la categoría del producto"
 *     )
 * )
 */
class ProductoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre' => 'required|max:100|unique:productos',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'categoria_id' => 'nullable|integer|exists:categorias,id'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre.max' => 'El nombre no puede tener más de 100 caracteres',
            'nombre.required' => 'El nombre es obligatorio',
            'nombre.unique' => 'El nombre ya existe',
            'precio.required' => 'El precio es obligatorio',
            'precio.numeric' => 'El precio debe ser un número',
            'precio.min' => 'El precio no puede ser negativo',
            'stock.required' => 'El stock es obligatorio',
            'stock.min' => 'El stock no puede ser negativo',
            'stock.integer' => 'El stock debe ser un número entero',
            'categoria_id.exists' => 'La categoría no existe'
        ];
    }
}
