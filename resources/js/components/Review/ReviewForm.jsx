import React, { useState } from 'react';

export default function ReviewForm({ bookId, onSuccess }) {
    const [form, setForm] = useState({ username: '', rating: '', comment: '' });
    const [errors, setErrors] = useState({ username: '', rating: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ username: '', rating: '' });

        let hasErrors = false;
        const newErrors = { username: '', rating: '' };

        if (!form.username) {
            newErrors.username = 'Имя обязательно';
            hasErrors = true;
        }
        if (!form.rating) {
            newErrors.rating = 'Оценка обязательна';
            hasErrors = true;
        }

        if (hasErrors) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(`/api/books/${bookId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 422) {
                    const errors = errorData.errors || {};
                    const errorMessage = Object.values(errors).flat().join(', ');
                    throw new Error(errorMessage || 'Ошибка валидации');
                }
                throw new Error('Ошибка при отправке отзыва');
            }

            const data = await response.json();
            onSuccess(data);
            setForm({ username: '', rating: '', comment: '' });
        } catch (err) {
            setErrors((prev) => ({ ...prev, general: err.message }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Добавить отзыв</h4>
            {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
            <div>
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                <input
                    type="text"
                    name="username"
                    placeholder="Ваше имя"
                    value={form.username}
                    onChange={handleChange}
                />

            </div>
            <div>
                {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
                <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    placeholder="Оценка"
                    value={form.rating}
                    onChange={handleChange}
                />
            </div>
            <div>
        <textarea
            name="comment"
            placeholder="Комментарий"
            value={form.comment}
            onChange={handleChange}
        />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
}
