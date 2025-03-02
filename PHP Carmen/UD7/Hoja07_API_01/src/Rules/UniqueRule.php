<?php
declare(strict_types=1);

namespace App\Rules;

use PDO;

final class UniqueRule extends AbstractRule
{
    private PDO $db;
    private string $table;
    private string $column;
    private ?int $id; // Hacemos que sea opcional, asi se usa solo en el caso de que se esté actualizando un registro

    public function __construct(PDO $db, string $table, string $column, ?int $id, string $message = '')
    {
        parent::__construct($message);
        $this->db = $db;
        $this->table = $table;
        $this->column = $column;
        $this->id = $id;
    }

    public function validate(mixed $value): bool
    {
        $sql = "SELECT COUNT(*) FROM {$this->table} WHERE {$this->column} = :value";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(['value' => $value]);

        return $stmt->fetchColumn() == 0;
    }
}
