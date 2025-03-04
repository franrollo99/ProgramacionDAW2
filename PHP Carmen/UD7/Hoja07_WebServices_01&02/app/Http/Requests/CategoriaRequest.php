<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @OA\Schema(
 *     title="CategoriaRequest",
 *     required={"nombre"},
 *     @OA\Property(
 *         property="nombre",
 *         type="string",
 *         description="Nombre de la categoría"
 *     )
 * )
 */
class CategoriaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|max:50|unique:categorias'
        ];
    }

    public function message(): array
    {
        return [
            'nombre.required' => 'El nombre es obligatorio',
            'nombre.max' => 'El nombre no puede tener más de 50 caracteres',
            'nombre.unique' => 'El nombre ya existe'
        ];
    }
}
