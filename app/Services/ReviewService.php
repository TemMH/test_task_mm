<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Book;
use App\Models\Review;
use App\Repository\ReviewRepository;

class ReviewService
{

    public function __construct(private readonly ReviewRepository $reviewRepository){}

    /**
     * @param  array  $request
     * @param $id
     *
     * @return Review
     */
    public function create(array $request, $id): Review
    {
        $book = Book::findOrFail($id);
        $review = $this->reviewRepository->create($request, $book);
        return $review;
    }
}
