<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = new User();

        $usuario->name = 'fran';
        $usuario->email = 'fran@gmail.com';
        $usuario->password = bcrypt('fran');
        $usuario->save();
    }
}
