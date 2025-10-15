<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;


    protected $table = 'books';
    protected $fillable = [
        'title',
        'author',
        'year',
        'genre',
        'description'
    ];

    public $timestamps = false;

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'book_id');
    }

}
