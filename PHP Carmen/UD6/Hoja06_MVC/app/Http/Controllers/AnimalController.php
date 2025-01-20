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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $especie)
    {
        $animal = Animal::where('especie', $especie);

        return view('animales.show', ['animal'=>$animal]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $especie)
    {
        $animal = Animal::where('especie', $especie);

        return view('animales.edit', ['animal'=>$animal]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
