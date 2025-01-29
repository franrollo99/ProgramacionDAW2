<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CrearAnimalRequest;
use App\Http\Requests\EditarRequest;
use App\Models\Animal;
use App\Models\Cuidador;
use App\Models\Image;
use Illuminate\Support\Str;

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
    public function store(CrearAnimalRequest $request)
{
    $animal = new Animal();

    $animal->especie = $request->especie;
    $animal->slug = Str::slug($request->especie);
    $animal->peso = $request->peso;
    $animal->altura = $request->altura;
    $animal->fechaNacimiento = $request->fechaNacimiento;
    $animal->alimentacion = $request->alimentacion;
    $animal->descripcion = $request->descripcion;

    if ($request->hasFile('imagen')) {
        $fileName = $request->imagen->getClientOriginalName();
        $request->file('imagen')->move(public_path('assets/img'), $fileName);

        // Creamos la imagen y la guardamos en la base de datos
        $imagen = new Image();
        $imagen->nombre = $fileName;
        $imagen->url = 'assets/img/' . $fileName;
        $imagen->save();

        // Asignar la imagen al animal
        $animal->image_id = $imagen->id;
    }

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
    public function update(EditarRequest $request, Animal $animal)
    {
        // Actualizo los valores del modelo
        $animal->especie = $request->especie;
        $animal->slug = Str::slug($request->especie);
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;

        if ($request->hasFile('imagen')) {
            // Eliminamos la imagen antigua
            if ($animal->imagen && file_exists(public_path($animal->imagen->url))) {
                unlink(public_path($animal->imagen->url));
            }

            // Guardo la imagen nueva
            $nombreImagen = $request->imagen->getClientOriginalName();
            $request->file('imagen')->move(public_path('assets/img'), $fileName);

            // Guardo los cambios en la base de datos
            $animal->imagen->nombre = $nombreImagen;
            $animal->imagen->url = 'assets/img/' . $nombreImagen;
            $animal->imagen->save();
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
    public function destroy(Animal $animal)
    {
        if ($animal->image_id){
            $imagen = Image::find($animal->image_id);
            $rutaImagen = public_path('assets/img/' . $imagen->nombre);

            if(file_exists($rutaImagen)){
                unlink($rutaImagen);
            }

            $imagen->delete();
        }

        $animal->delete();

        return redirect()->route('animales.index');
    }
}
