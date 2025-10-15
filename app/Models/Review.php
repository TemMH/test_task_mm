<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $table = 'reviews';

    protected $fillable = [
        'book_id',
        'username',
        'rating',
        'comment',
    ];


    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class, 'book_id');
    }
}
