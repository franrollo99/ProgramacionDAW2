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

        $user = new User();
        $user->name = 'Francisco';
        $user->email = 'fran.5oct99@gmail.com';
        $user->password = bcrypt('Francisco');
        $user->save();


        // User::create([
        //     'name' => 'Francisco',
        //     'email' => 'fran.5oct99@gmail.com',
        //     'password' => bcrypt('Francisco'),
        // ]);
    }
}
