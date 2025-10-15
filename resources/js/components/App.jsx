import React, { useState } from 'react';
import BookList from './Book/BookList';
import BookCard from './Book/BookCard';

export default function App() {
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div>
            {!selectedBook ? (
                <BookList onSelect={setSelectedBook} />
            ) : (
                <BookCard bookId={selectedBook} onBack={() => setSelectedBook(null)} />
            )}
        </div>
    );
}
