import style from "./style.module.css"
import { Typography, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useState, useEffect, useRef } from "react"
import imagem1 from "../../assets/barbearia1.jpg"
import imagem2 from "../../assets/barbearia2.jpg"
import imagem3 from "../../assets/barbearia3.jpg"


export default function CarrosselSistema() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const slideInterval = useRef<NodeJS.Timeout | null>(null)

    const images = [
        {
            id: 1,
            img: imagem1,
            alt: "imagem 1",
            text: "Sistema inteligente para barbearia"
        },
        {
            id: 2,
            img: imagem2,
            alt: "imagem 2",
            text: "Fácil de usar"
        },
        {
            id: 3,
            img: imagem3,
            alt: "imagem 3",
            text: "Custo baixo"
        },
    ]

    // Autoplay
    useEffect(() => {
        if (isPlaying) {
            slideInterval.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % images.length)
            }, 3500)
        }
        return () => {
            if (slideInterval.current) clearInterval(slideInterval.current)
        }
    }, [isPlaying, images.length])

    // Swipe touch
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX)
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX)
    }
    const handleTouchEnd = () => {
        if (touchStart !== null && touchEnd !== null) {
            const distance = touchStart - touchEnd
            if (distance > 50) nextSlide()
            else if (distance < -50) prevSlide()
        }
        setTouchStart(null)
        setTouchEnd(null)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        setIsPlaying(false)
    }
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
        setIsPlaying(false)
    }

    return (
        <div
            className={style.carrosselContainer}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={style.slideWrapper}>
                {images.map((item, idx) => (
                    <div
                        key={item.id}
                        className={`${style.slide} ${idx === currentSlide ? style.active : ""}`}
                        style={{ display: idx === currentSlide ? "flex" : "none" }}
                    >
                        <img src={item.img} alt={item.alt} className={style.image} />
                        <div className={style.textOverlay}>
                            <Typography variant="h4" className={style.slideText}>
                                {item.text}
                            </Typography>
                        </div>
                    </div>
                ))}
                <IconButton
                    className={style.arrowLeft}
                    onClick={prevSlide}
                    aria-label="Anterior"
                    size="large"
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton
                    className={style.arrowRight}
                    onClick={nextSlide}
                    aria-label="Próximo"
                    size="large"
                >
                    <ChevronRight />
                </IconButton>
            </div>
            <div className={style.dots}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${style.dot} ${idx === currentSlide ? style.activeDot : ""}`}
                        onClick={() => { setCurrentSlide(idx); setIsPlaying(false); }}
                    />
                ))}
            </div>
        </div>
    )
}