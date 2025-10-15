<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;

class BookController extends Controller
{

    /**
     * @return array
     */
    public function index(): array
    {
        return BookResource::collection(Book::all())->resolve();
    }


    /**
     * @param $id
     *
     * @return BookResource
     */
    public function show($id): BookResource
    {
        $book = Book::with('reviews')->findOrFail($id);
        return BookResource::make($book)->resolve();
    }
}
