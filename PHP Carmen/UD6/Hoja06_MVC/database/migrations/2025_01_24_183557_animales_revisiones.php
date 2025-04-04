<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('animales_revisiones', function(Blueprint $table){
            $table->id();
            $table->date('fecha');
            $table->string('descripcion');
            $table->foreignId('animal_id') // Clave foranea
                ->constrained('animales') // Tabla referenciada
                ->onDelete('cascade'); // (opcional) Elimina las revisiones al borrar el animal
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animales_revisiones');
    }
};
