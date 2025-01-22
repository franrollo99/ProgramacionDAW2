<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $animales = Animal::all();
        return view('animales.index', ['animales' => $animales]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('animales.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $animal = new Animal();

        $animal->especie = $request->especie;
        $animal->slug = \Str::slug($request->especie); // Generar un slug automáticamente
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;

        // Procesar la imagen
        if ($request->hasFile('imagen')) {
            $fileName = $request->imagen->getClientOriginalName();
            $path = $request->imagen->storeAs('public/assets/img', $fileName);
            $animal->imagen = $fileName;
        }

        $animal->descripcion = $request->descripcion;

        // Guardar el modelo en la base de datos
        $animal->save();

        // Redirigir a la vista del animal creado
        return redirect()->route('animales.show', $animal);
    }

    /**
     * Display the specified resource.
     */
    public function show(Animal $animal)
    {
        return view('animales.show', ['animal'=>$animal]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Animal $animal)
    {
        return view('animales.edit', ['animal'=>$animal]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Animal $animal)
    {
        // Validar los datos de entrada
        $request->validate([
            'especie' => 'required|min:3',
            'peso' => 'required|numeric',
            'altura' => 'required|numeric',
            'fechaNacimiento' => 'required|date',
            'imagen' => 'nullable|mimes:jpeg,png,jpg,svg|max:2048',
            'alimentacion' => 'nullable|string|max:20',
            'descripcion' => 'nullable|string',
        ]);

        // Actualizar los valores del modelo
        $animal->especie = $request->especie;
        $animal->slug = \Str::slug($request->especie); // Generar un nuevo slug
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;

        // Procesar la imagen (si se sube una nueva)
        if ($request->hasFile('imagen')) {
            $fileName = $request->imagen->getClientOriginalName();
            $path = $request->imagen->storeAs('public/assets/img', $fileName);
            $animal->imagen = $fileName;
        }

        $animal->descripcion = $request->descripcion;

        // Guardar los cambios en la base de datos
        $animal->save();

        // Redirigir a la vista del animal editado
        return redirect()->route('animales.show', $animal);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
