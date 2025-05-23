<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Titulacion;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cuidador>
 */
class CuidadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nombre = $this->faker->name;
        $id_titulacion1 = Titulacion::inRandomOrder()->first()->id;
        $id_titulacion2 = Titulacion::whereNotIn('id', [$id_titulacion1])->inRandomOrder()->first()->id;

        return [
            'nombre' => $nombre,
            'slug' => Str::slug($nombre),
            'id_titulacion1' => $id_titulacion1,
            'id_titulacion2' => $id_titulacion2,
        ];
    }
}
