<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Animal;
use App\Models\Revision;

class RevisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $animal = Animal::first();

        $revision1 = new Revision();
        $revision1->fecha = '2020-02-02';
        $revision1->descripcion = 'primera revision';
        $revision1->animal_id = $animal->id;
        $revision1->save();

        $revision2 = new Revision();
        $revision2->fecha = '2021-12-23';
        $revision2->descripcion = 'segunda revision';
        $revision2->animal_id = $animal->id;
        $revision2->save();

    }

    public function down(): void
    {
        Schema::dropIfExists('animales_revisiones');
    }
}
