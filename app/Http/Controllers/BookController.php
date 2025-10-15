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
     * @return array
     */
    public function show($id): array
    {
        $book = Book::with('reviews')->findOrFail($id);
        return (new BookResource($book))->resolve();
    }
}
