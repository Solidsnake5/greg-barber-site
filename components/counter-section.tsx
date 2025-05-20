"use client"

import { useEffect, useState, useRef } from "react"
import { Scissors, Award, Users, Clock } from "lucide-react"
import Image from "next/image"

// Counter data
const counters = [
  {
    icon: Scissors,
    value: 1000,
    label: "Haircuts Completed",
    suffix: "+",
  },
  {
    icon: Award,
    value: 10,
    label: "Years Experience",
    suffix: "+",
  },
  {
    icon: Users,
    value: 500,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: Clock,
    value: 96,
    label: "Satisfaction Rate",
    suffix: "%",
  },
]

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(counters.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  // Function to animate counting
  const animateCount = (index: number, target: number, duration: number) => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      setCounts((prevCounts) => {
        const newCounts = [...prevCounts]
        newCounts[index] = Math.floor(easedProgress * target)
        return newCounts
      })

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          newCounts[index] = target
          return newCounts
        })
      }
    }

    requestAnimationFrame(updateCount)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      counters.forEach((counter, index) => {
        // Stagger the animations slightly
        setTimeout(() => {
          animateCount(index, counter.value, 2000)
        }, index * 200)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-16 text-white">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2mlmo02mlmo02mlm-pzEAowg1D36y8o0GaXlgyeH35Wv0WL.jpeg"
          alt="Classic barbershop interior with vintage chairs"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <counter.icon className="h-12 w-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}
                {counter.suffix}
              </div>
              <div className="text-lg text-gray-300">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
