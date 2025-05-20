import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image container */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_u0uip3u0uip3u0ui-cbp74q2MkLIFHEST4GWfjs2DDo7j8Y.jpeg"
            alt="James Mitchell, Master Barber"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Right side - Black background with white text */}
        <div className="w-full md:w-1/2 bg-black text-white py-10 px-8 md:px-12 lg:px-16 flex flex-col justify-center h-[300px] md:h-[500px]">
          <h2 className="text-3xl font-bold mb-3">About Greg Cerda</h2>
          <div className="w-16 h-1 bg-white mb-4"></div>

          <div className="space-y-3">
            <p>
              With over 10 years of experience, I've dedicated my career to the art of barbering and men's grooming.
            </p>

            <p>
              I specialize in precision cuts, fades, classic styles, and beard grooming. My philosophy is simple: every
              client deserves personalized attention and a haircut that suits their lifestyle and personality.
            </p>

            <p>
              When I'm not behind the chair, I'm constantly learning new techniques and staying up-to-date with the
              latest trends to bring the best service to my clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
