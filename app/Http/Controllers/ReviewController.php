<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Review\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Services\ReviewService;

class ReviewController extends Controller
{

    public function __construct(private readonly ReviewService $reviewService) {}

    /**
     * @param  StoreReviewRequest  $request
     * @param $id
     *
     * @return ReviewResource
     */
    public function store(StoreReviewRequest $request, $id): ReviewResource
    {
        $data = $request->validated();

        $review = $this->reviewService->create($data, $id);

        return ReviewResource::make($review)->resolve();
    }

}
