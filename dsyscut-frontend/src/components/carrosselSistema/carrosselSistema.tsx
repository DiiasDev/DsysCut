import style from "./style.module.css"
import {  Typography, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useState, useEffect } from "react"
import imagem1 from "../../assets/barbearia1.jpg"
import imagem2 from "../../assets/barbearia2.jpg"
import imagem3 from "../../assets/barbearia3.jpg"

// Hook para detectar mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])
    return isMobile
}

export default function CarrosselSistema() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const isMobile = useIsMobile()

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

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % images.length)
            }, 4000)
            return () => clearInterval(interval)
        }
    }, [isPlaying, images.length])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    return (
        <div 
            className={style.carousel}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <div className={style.carouselContainer}>
                <div 
                    className={style.carouselTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={image.id} className={style.slide}>
                            <img 
                                src={image.img} 
                                alt={image.alt}
                                className={style.slideImage}
                            />
                            <div className={style.slideContent}>
                                <Typography 
                                    variant={isMobile ? "body1" : "h5"} 
                                    className={style.slideText}
                                >
                                    {image.text}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {!isMobile && (
                    <>
                        <IconButton 
                            className={`${style.navButton} ${style.prevButton}`}
                            onClick={goToPrevious}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <IconButton 
                            className={`${style.navButton} ${style.nextButton}`}
                            onClick={goToNext}
                        >
                            <ChevronRight />
                        </IconButton>
                    </>
                )}

                {/* Dots Indicator */}
                <div className={style.dotsContainer}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${style.dot} ${index === currentSlide ? style.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}