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
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
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
            }, 5000) // Slower on mobile
            return () => clearInterval(interval)
        }
    }, [isPlaying, images.length])

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0) // Clear previous touch end
        setTouchStart(e.targetTouches[0].clientX)
        setIsPlaying(false) // Pause auto-play on touch
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            goToNext()
        } else if (isRightSwipe) {
            goToPrevious()
        }
        
        // Resume auto-play after a delay
        setTimeout(() => setIsPlaying(true), 3000)
    }

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
            onMouseEnter={() => !isMobile && setIsPlaying(false)}
            onMouseLeave={() => !isMobile && setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                width: isMobile ? '90%' : '100%',
                maxWidth: isMobile ? '90%' : 'none',
                margin: '0 auto',
                borderRadius: isMobile ? '16px' : '12px'
            }}
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
                                style={{
                                    height: isMobile ? '220px' : 'auto',
                                    width: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className={style.slideContent}>
                                <Typography 
                                    variant={isMobile ? "h6" : "h5"} 
                                    className={style.slideText}
                                    style={{
                                        fontSize: isMobile ? '1.1rem' : '1.5rem',
                                        textAlign: 'center',
                                        fontWeight: 600
                                    }}
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
                <div 
                    className={style.dotsContainer}
                    style={{
                        bottom: isMobile ? '10px' : '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: isMobile ? '6px' : '8px'
                    }}
                >
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${style.dot} ${index === currentSlide ? style.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: isMobile ? '8px' : '10px',
                                height: isMobile ? '8px' : '10px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: index === currentSlide ? '#667eea' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}