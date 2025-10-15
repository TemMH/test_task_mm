import React from 'react';

export default function ReviewList({ reviews }) {
    if (!reviews.length) return <p>Пока нет отзывов.</p>;

    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>
                    <strong>{review.username}</strong> ({review.rating}/5)
                    <p>{review.comment || 'Без комментария'}</p>
                </li>
            ))}
        </ul>
    );
}
