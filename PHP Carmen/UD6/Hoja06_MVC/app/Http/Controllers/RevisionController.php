<?php

namespace App\Http\Controllers;

use App\Models\Revision;
use Illuminate\Http\Request;
use App\Models\Animal;

class RevisionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Animal $animal)
    {
        return view('revisiones.create', ['animal' => $animal]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Animal $animal)
    {
        $revision = new Revision();

        $revision->fecha = $request->fecha;
        $revision->descripcion = $request->descripcion;
        $revision->animal_id = $animal->id;

        $revision->save();

        return redirect()->route('animales.show', $animal);
    }

    /**
     * Display the specified resource.
     */
    public function show(Revision $revision)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Revision $revision)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Revision $revision)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Revision $revision)
    {
        //
    }
}
