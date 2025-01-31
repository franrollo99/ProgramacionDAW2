<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
        $animal->slug = Str::slug($request->especie);
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;
        $animal->descripcion = $request->descripcion;

        if($request->hasFile('imagen')){
            $nombreImagen = $request->imagen->getClientOriginalName();
            $request->imagen->move(public_path('assets/img/'), $nombreImagen);
            $animal->imagen = $nombreImagen;
        }

        $animal->save();

        return redirect()->route('animales.show', $animal);
    }

    /**
     * Display the specified resource.
     */
    public function show(Animal $animal)
    {
        return view('animales.show', ['animal' => $animal]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Animal $animal)
    {
        return view('animales.edit', ['animal' => $animal]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Animal $animal)
    {
        $animal->especie = $request->especie;
        $animal->slug = Str::slug($request->especie);
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;
        $animal->descripcion = $request->descripcion;

        if($request->hasFile('imagen')){
            unlink(public_path('assets/img/'.$animal->imagen));
            $nombreImagen = $request->imagen->getClientOriginalName();
            $request->imagen->move(public_path('assets/img/'), $nombreImagen);
            $animal->imagen = $nombreImagen;
        }

        $animal->save();

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
