
"use client";
import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count +1);
    }
    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2"> 
            I have been Clicked {count} times
            </button>
    );
}