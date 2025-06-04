import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Question({ question, answer, className = "" }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`w-full shadow-md lg:p-20 md:p-10 sm:p-10 p-10  rounded-2xl py-10 border bg-stone-900 ${className}`}>
            <div className="flex justify-between items-center cursor-pointer  " onClick={() => setOpen(!open)}>
                <h2 className="heading text-stone-50 lg:text-4xl heding md:text-4xl sm:text-3xl text-2xl ">{question}</h2>
                {open ? (
                    <Minus className="text-amber-500 w-12 h-8" />
                ) : (
                    <Plus className="text-amber-500 w-8 h-8" />
                )}
            </div>
            {open && (
                <p className="mt-4 text-stone-50 text-lg mt-8">
                    {answer}
                </p>
            )}
        </div>
    );
}
