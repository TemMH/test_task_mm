import React, { useState, useEffect } from 'react';
import ReviewList from '../Review/ReviewList';
import ReviewForm from '../Review/ReviewForm';

export default function BookCard({ bookId, onBack }) {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    const fetchBook = async () => {
        try {
            const response = await fetch(`/api/books/${bookId}`);
            if (!response.ok) throw new Error('Ошибка загрузки книги');
            const data = await response.json();
            setBook(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchBook();
    }, [bookId]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!book) return <p>Загрузка...</p>;

    return (
        <div>
            <button onClick={onBack}>← Назад</button>
            <h2>{book.title}</h2>
            <p><b>Автор:</b> {book.author}</p>
            <p><b>Жанр:</b> {book.genre}</p>
            <p><b>Год выпуска:</b> {book.year}</p>
            <p>{book.description}</p>
            <h3>Отзывы</h3>
            <ReviewList reviews={book.reviews || []} />
            <ReviewForm bookId={bookId} onSuccess={fetchBook} />
        </div>
    );
}
