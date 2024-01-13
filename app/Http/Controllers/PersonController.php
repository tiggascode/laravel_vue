<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke(){
        $persons = [
            [
                'id' => 1,
                'name' => 'Tigran',
                'age' => 17,
                'job' => 'developer',
            ],
            [
                'id' => 2,
                'name' => 'Vasilevs',
                'age' => 31,
                'job' => 'developer',
            ],
            [
                'id' => 3,
                'name' => 'aaaaa',
                'age' => 26,
                'job' => 'erafdadfdafas',
            ],
        ];
        return $persons;
    }
}
