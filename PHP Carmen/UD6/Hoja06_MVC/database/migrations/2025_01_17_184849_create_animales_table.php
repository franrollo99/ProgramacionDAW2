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
        Schema::create('animales', function (Blueprint $table) {
            $table->id();
            $table->string('especie')->unique();
            $table->string('slug')->unique();
            $table->decimal('peso', total: 6, places: 1);
            $table->decimal('altura', total: 6, places: 1);
            $table->date('fechaNacimiento');
            // $table->string('imagen')->nullable();
            $table->foreignId('image_id')->nullable()->constrained('images')->onDelete('cascade');
            $table->string('alimentacion', length: 20)->nullable();
            $table->text('descripcion')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animales');
    }
};
