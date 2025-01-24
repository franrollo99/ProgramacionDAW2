<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CrearAnimalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Cambiar a true
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
            'especie' => 'required|min:3',
            'peso' => 'required|numeric',
            'altura' => 'required|numeric',
            'fechaNacimiento' => 'required|date',
            'imagen' => 'required|mimes:jpeg,png,jpg,svg',
        ];
    }


    public function messages()
    {
        return [
            'especie.required' => 'El campo "especie" es obligatorio.',
            'especie.min' => 'La especie debe tener al menos 3 caracteres.',
            'peso.required' => 'El peso es obligatorio.',
            'peso.numeric' => 'El peso debe ser un número.',
            'altura.required' => 'La altura es obligatoria.',
            'altura.numeric' => 'La altura debe ser un número.',
            'fechaNacimiento.required' => 'La fecha de nacimiento es obligatoria.',
            'fechaNacimiento.date' => 'La fecha de nacimiento debe ser una fecha válida.',
            'imagen.required' => 'La imagen es obligatoria.',
            'imagen.mimes' => 'La imagen debe ser un archivo de tipo: jpeg, png, jpg, svg.',
        ];
    }

}
