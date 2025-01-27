<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Revision;
use App\Models\Animal;

class RevisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $animal = Animal::first();
        // $animal = Animal::where('id', 1)->first();

        $revision1 = new Revision();
        $revision1->fecha = '2022-10-05';
        $revision1->descripcion = 'Primera revision';
        $revision1->animal_id = $animal->id;
        $revision1->save();

        $revision2 = new Revision();
        $revision2->fecha = '2023-10-05';
        $revision2->descripcion = 'Segunda revision';
        $revision2->animal_id = $animal->id;
        $revision2->save();
    }
}
