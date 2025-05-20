export default function StaticMap() {
  return (
    <div className="h-full w-full bg-gray-200 relative overflow-hidden">
      {/* Simplified map representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Map background */}
          <div className="absolute inset-0 bg-gray-300">
            {/* Grid lines to simulate map */}
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-400 opacity-30"
                  style={{
                    backgroundColor: i % 3 === 0 ? "#e5e7eb" : i % 7 === 0 ? "#d1d5db" : "",
                  }}
                />
              ))}
            </div>

            {/* Simulated roads */}
            <div className="absolute top-1/2 left-0 right-0 h-6 bg-white opacity-60"></div>
            <div className="absolute top-1/4 left-0 right-0 h-4 bg-white opacity-40"></div>
            <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-white opacity-50"></div>
            <div className="absolute left-2/3 top-0 bottom-0 w-6 bg-white opacity-60"></div>
          </div>

          {/* Location marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="h-6 w-6 rounded-full bg-black border-2 border-white"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                Precision Cuts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map attribution */}
      <div className="absolute bottom-1 right-1 text-xs text-gray-600 bg-white bg-opacity-70 px-1 rounded">
        Map View
      </div>
    </div>
  )
}
