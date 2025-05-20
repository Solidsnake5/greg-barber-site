import ImageCarousel from "./image-carousel"

export default function GallerySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Showcase</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Browse through a collection of my finest work. Each image showcases the precision, creativity, and attention
            to detail that goes into every haircut and style. Click on any image to view a larger version and get
            inspired for your next visit.
          </p>
        </div>

        <ImageCarousel />
      </div>
    </section>
  )
}
