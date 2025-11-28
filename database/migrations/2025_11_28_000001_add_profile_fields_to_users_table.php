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
        Schema::table('users', function (Blueprint $table) {
            // Profile fields
            if (!Schema::hasColumn('users', 'tanggal_lahir')) {
                $table->date('tanggal_lahir')->nullable();
            }
            if (!Schema::hasColumn('users', 'berat_badan')) {
                $table->decimal('berat_badan', 5, 2)->nullable(); // dalam kg
            }
            if (!Schema::hasColumn('users', 'tinggi_badan')) {
                $table->decimal('tinggi_badan', 5, 2)->nullable(); // dalam cm
            }
            if (!Schema::hasColumn('users', 'lingkar_lengan')) {
                $table->decimal('lingkar_lengan', 5, 2)->nullable(); // dalam cm
            }
            if (!Schema::hasColumn('users', 'hpht')) {
                $table->date('hpht')->nullable(); // Hari Pertama Haid Terakhir
            }
            if (!Schema::hasColumn('users', 'nomor_hp')) {
                $table->string('nomor_hp')->nullable();
            }
            if (!Schema::hasColumn('users', 'profile_completed')) {
                $table->boolean('profile_completed')->default(false);
            }
            if (!Schema::hasColumn('users', 'pregnancy_age_weeks')) {
                $table->integer('pregnancy_age_weeks')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columnsToDropArray = [];

            if (Schema::hasColumn('users', 'tanggal_lahir')) {
                $columnsToDropArray[] = 'tanggal_lahir';
            }
            if (Schema::hasColumn('users', 'berat_badan')) {
                $columnsToDropArray[] = 'berat_badan';
            }
            if (Schema::hasColumn('users', 'tinggi_badan')) {
                $columnsToDropArray[] = 'tinggi_badan';
            }
            if (Schema::hasColumn('users', 'lingkar_lengan')) {
                $columnsToDropArray[] = 'lingkar_lengan';
            }
            if (Schema::hasColumn('users', 'hpht')) {
                $columnsToDropArray[] = 'hpht';
            }
            if (Schema::hasColumn('users', 'nomor_hp')) {
                $columnsToDropArray[] = 'nomor_hp';
            }
            if (Schema::hasColumn('users', 'profile_completed')) {
                $columnsToDropArray[] = 'profile_completed';
            }
            if (Schema::hasColumn('users', 'pregnancy_age_weeks')) {
                $columnsToDropArray[] = 'pregnancy_age_weeks';
            }

            if (!empty($columnsToDropArray)) {
                $table->dropColumn($columnsToDropArray);
            }
        });
    }
};
