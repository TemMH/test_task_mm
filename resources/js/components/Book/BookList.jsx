import React, { useState, useEffect } from 'react';

export default function BookList({ onSelect }) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/api/books');
                if (!response.ok) throw new Error('Ошибка загрузки книг');
                const data = await response.json();
                setBooks(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchBooks();
    }, []);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!books.length && !error) return <p>Загрузка...</p>;

    return (
        <div>
            <h1>Список книг</h1>
            <ul>
                {books.map(book => (
                    <li
                        key={book.id}
                        onClick={() => onSelect(book.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <strong>{book.title}</strong> - {book.author}
                        <br />
                        <p>{book.genre}</p>
                        <p>{book.description.slice(0, 50)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
