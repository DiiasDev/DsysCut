import React from "react";
import { FiScissors } from "react-icons/fi";

export default function BarbeariaButton() {
    return (
        <button
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition font-medium"
        >
            {React.createElement(FiScissors as React.FC<{ size?: number }>, { size: 20 })}
            <span>Controle da Barbearia</span>
        </button>
    );
}
