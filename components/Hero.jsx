'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/hero-slider-1.jpg',
      subtitle: 'Tradational & Hygine',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: '/hero-slider-2.jpg',
      subtitle: 'delightful experience',
      title: 'Flavors Inspired by the Seasons',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: '/hero-slider-3.jpg',
      subtitle: 'amazing & delicious',
      title: 'Where every flavor tells a story',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
  ]

  const slideNext = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1))
  }

  const slidePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(slideNext, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentSlide ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <Image
                src={slide.image}
                width={1880}
                height={950}
                alt=""
                className="img-cover"
                priority={index === 0}
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>

            <h1 className="display-1 hero-title slider-reveal">
              {slide.title.split(' ').slice(0, 4).join(' ')} <br />
              {slide.title.split(' ').slice(4).join(' ')}
            </h1>

            <p className="body-2 hero-text slider-reveal">{slide.text}</p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
      >
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
      >
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <a href="#" className="hero-btn has-after">
        <Image src="/hero-icon.png" width={48} height={48} alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  )
}
