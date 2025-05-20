import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import StaticMap from "./static-map"

// Store hours data
const storeHours = [
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
  { day: "Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

// Social media links
const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
]

// Quick links
const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Gallery", url: "/gallery" },
  { name: "About", url: "/about" },
  { name: "Book Now", url: "/booking" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row">
        {/* Map Section - 50% on desktop */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
          <StaticMap />
        </div>

        {/* Footer Content - 50% on desktop */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <span>
                    267 W Merrick Rd
                    <br />
                    Valley Stream, NY 11580
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <Link href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                    gregcerda@icloud.com
                  </Link>
                </li>
                <li className="flex items-center">
                  
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      aria-label={social.name}
                      className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours and Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-3">Hours</h3>
              <ul className="space-y-1 mb-4 text-sm">
                {storeHours.map((item) => (
                  <li key={item.day} className="flex justify-between">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-gray-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright moved outside the flex container */}
      <div className="bg-black text-center py-2 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Precision Cuts. All rights reserved. | Site by &copy; Whatever Web Solutions
        </p>
      </div>
    </footer>
  )
}
