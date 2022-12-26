<?php


class Db
{
    protected static function connectDB () {
        return new PDO('mysql:host=localhost;dbname=my_places;charset=utf8', 'root', '');
    }
}