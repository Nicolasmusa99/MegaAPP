import React, { useState } from 'react';

export default function ItemCount() {

    const [count, setCount] = useState(0);

    return (
    <div>
        <p>Tu has clickeado {count} </p>
        <button onClick={() => setCount(count + 1)}>
            +
        </button>
        <button onClick={() => setCount(count - 1)}>
            -
        </button>
        </div>
    );
}