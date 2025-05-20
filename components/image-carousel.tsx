"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Updated image data with direct URLs
const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2nbxkj2nbxkj2nbx-DRR9kaMc4W50OGFXlFwZUEMvE6RGqw.jpeg",
    alt: "Barber using gold clippers for a precision haircut",
    title: "Precision Cutting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_u0uip3u0uip3u0ui%20%281%29-8ROdvRLjfVPG62lUm617PwAX5kDhhw.jpeg",
    alt: "Professional barber portrait with well-groomed beard",
    title: "Meet Your Barber",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bj81jnbj81jnbj81-SsxQzVP0YC2Fmm66DanqjvBPBIv5JZ.jpeg",
    alt: "Barber styling client's hair with gold clippers and comb",
    title: "Expert Styling",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Classic fade haircut",
    title: "Classic Fade",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Beard trim and styling",
    title: "Beard Grooming",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Razor fade haircut",
    title: "Razor Fade",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Pompadour style",
    title: "Pompadour",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Textured crop haircut",
    title: "Textured Crop",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Slick back hairstyle",
    title: "Slick Back",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Undercut hairstyle",
    title: "Undercut",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const openModal = (index: number) => {
    setModalImage(index)
    setModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const nextModalImage = () => {
    setModalImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevModalImage = () => {
    setModalImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Current Image */}
        <div
          className="w-full h-full cursor-pointer transition-opacity duration-500"
          onClick={() => openModal(currentIndex)}
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            unoptimized={images[currentIndex].src.startsWith("https://")}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
            <h3 className="text-xl font-medium">{images[currentIndex].title}</h3>
            <p className="text-sm text-gray-300">{images[currentIndex].alt}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-20 relative cursor-pointer ${
              index === currentIndex ? "ring-2 ring-black" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized={image.src.startsWith("https://")}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={images[modalImage].src || "/placeholder.svg"}
              alt={images[modalImage].alt}
              fill
              className="object-contain"
              unoptimized={images[modalImage].src.startsWith("https://")}
            />

            <button
              className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={prevModalImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={nextModalImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">
              <h3 className="text-xl font-medium text-center">{images[modalImage].title}</h3>
              <p className="text-sm text-gray-300 text-center">{images[modalImage].alt}</p>
              <p className="text-xs text-center mt-2 text-gray-400">
                {modalImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
