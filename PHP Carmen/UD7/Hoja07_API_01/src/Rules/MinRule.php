<?php
declare(strict_types=1);

namespace App\Rules;

final class MinRule extends AbstractRule
{
    private int $min;

    public function __construct(int $min, string $message = '')
    {
        parent::__construct($message);
        $this->min = $min;
    }

    public function validate(mixed $value): bool
    {
        return is_string($value) && strlen($value) >= $this->min;
    }
}
