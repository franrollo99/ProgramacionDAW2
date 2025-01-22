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

    public function rules(){
        $validar = $request->validate([
            'especie' => 'required|min:3',
            'peso' => 'required|numeric',
            'altura' => 'required|numeric',
            'fechaNacimiento' => 'required|date',
            'imagen' => 'nullable|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

    }

    public function messages(){

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
