import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const stored = window.localStorage.getItem("theme");
            if (stored === "dark" || stored === "light") return stored as Theme;
        }
        return "light";
    });

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    // Sincroniza o tema caso seja alterado em outra aba
    useEffect(() => {
        const handler = () => {
            const stored = window.localStorage.getItem("theme");
            if (stored === "dark" || stored === "light") setTheme(stored as Theme);
        };
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, []);

    const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}


