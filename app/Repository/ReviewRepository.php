<?php

declare(strict_types=1);

namespace App\Repository;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Database\Eloquent\Model;

class ReviewRepository implements ReviewRepositoryInterface
{
    /**
     * @param  array  $data
     * @param  Book  $book
     *
     * @return Review
     */
    public function create(array $data, Book $book): Review
    {
    return $book->reviews()->create($data);
    }

}
