<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CrearRevisionRequest extends FormRequest
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
           'fecha' => 'required|date|before_or_equal:today',
           'descripcion' => 'required',
       ];
   }

   public function messages()
   {
       return [
           'fecha.required' => 'La fecha es obligatoria.',
           'fecha.date' => 'La fecha debe tener formato de fecha aaaa-mm-dd.',
           'fecha.before_or_equal' => 'La fecha debe de ser valida',
           'descripcion.required' => 'La descripcion es obligatoria.',
       ];
   }
}
