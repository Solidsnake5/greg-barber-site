import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left side - Black background with text */}
        <div className="w-full md:w-1/2 bg-black text-white py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center min-h-[45vh] md:min-h-[90vh]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Premium Barber Services</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Experience the art of precision cutting and styling from a master barber with over 10 years of experience.
          </p>
          <div>
            <Link
              href="/services"
              className="inline-block bg-white text-black px-8 py-3 font-medium transition-transform hover:transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right side - Image container */}
        <div className="w-full md:w-1/2 min-h-[45vh] md:min-h-[90vh] relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2nbxkj2nbxkj2nbx-TZLbz3NJzBgou5I2CKg8lvGb9FtVPE.jpeg"
            alt="Professional barber giving a haircut with gold clippers"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
