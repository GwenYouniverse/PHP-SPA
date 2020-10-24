<?php
class Connection
{
    public static function connect($database)
    {
        try {
            $db = new PDO('mysql:host=' . $database['host'] . ';dbname=' . $database['dbname'] . ';', $database['user'], $database['password']);
            return $db;
        } catch (PDOException $e) {
            die("Error" . $e->getMessage());
        }

    }
}
