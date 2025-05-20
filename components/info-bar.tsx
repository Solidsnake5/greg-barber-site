import { Mail, Phone, User } from "lucide-react"
import Link from "next/link"

export default function InfoBar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <User className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Greg Cerda</span>
        </div>

        <div className="flex items-center mb-2 sm:mb-0">
          <Phone className="h-4 w-4 mr-2" />
          <Link href="tel:+1234567890" className="text-sm hover:text-gray-300 transition-colors">
            (516)647-9026
          </Link>
        </div>

        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2" />
          <Link href="mailto:james@precisioncuts.com" className="text-sm hover:text-gray-300 transition-colors">
            gregcerda@icloud.com
          </Link>
        </div>
      </div>
    </div>
  )
}
