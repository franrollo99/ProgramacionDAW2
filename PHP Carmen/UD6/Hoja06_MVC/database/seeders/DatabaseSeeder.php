<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Cuidador;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Cuidador::factory(20)->create();

        // Elimino los datos previos de la tabla animales
        DB::table('animales')->delete();
        // Llamo al seeder AnimalSeeder
        $this->call(AnimalSeeder::class);

        DB::table('users')->delete();
        $this->call(UserSeeder::class);

        User::factory(5)->create();

        DB::table('animales_revisiones')->delete();
        $this->call(RevisionSeeder::class);


    }
}
