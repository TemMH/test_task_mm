<?php

declare(strict_types=1);

namespace App\Repository;

use App\Models\Book;
use App\Models\Review;

interface ReviewRepositoryInterface
{
    public function create(array $data, Book $book): Review;
}
