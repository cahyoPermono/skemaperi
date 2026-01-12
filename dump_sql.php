<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$tables = ['users', 'contents', 'screenings', 'screening_answers', 'contacts'];
$output = "";

$output .= "SET FOREIGN_KEY_CHECKS=0;\n";
$output .= "START TRANSACTION;\n\n";

foreach ($tables as $table) {
    if (!Schema::hasTable($table))
        continue;

    $rows = DB::table($table)->get();

    if ($rows->count() > 0) {
        $output .= "-- Data for table `$table`\n";
        // $output .= "TRUNCATE TABLE `$table`;\n"; // Optional: Clear table before insert

        foreach ($rows as $row) {
            $rowArray = (array) $row;
            $columns = array_keys($rowArray);
            $values = array_values($rowArray);

            $colList = implode('`, `', $columns);

            $valList = array_map(function ($val) {
                if (is_null($val))
                    return 'NULL';
                if (is_bool($val))
                    return $val ? 1 : 0;
                if (is_numeric($val) && !is_string($val))
                    return $val; // Keep numbers as is if logical
                // Escape string for MySQL
                $val = str_replace("'", "''", $val);
                $val = str_replace("\\", "\\\\", $val);
                return "'$val'";
            }, $values);

            $valString = implode(", ", $valList);

            $output .= "INSERT INTO `$table` (`$colList`) VALUES ($valString);\n";
        }
        $output .= "\n";
    }
}

$output .= "COMMIT;\n";
$output .= "SET FOREIGN_KEY_CHECKS=1;\n";

file_put_contents('skemaperi_data.sql', $output);
echo "Data dumped to skemaperi_data.sql\n";
