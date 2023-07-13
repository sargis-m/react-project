import React from "react";
import './StateDemo.css';

import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        firstName: 'Sargis',
        lastName: 'Mosikyan',
        email: 'sm@mail.com',
    });

    return (
        <>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}

export default function StateDemo() {
    return (
        <section>
            <h1>useState Form example</h1>
            <div className="state-form">
                <Form/>
            </div>
        </section>
    );
}
