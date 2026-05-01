import { Star } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex px-3 py-2 w-full bg-white/30 shadow-lg m-2 items-center">
      <div className="flex text-3xl items-center">
        <span> CEEJUMIA </span>
        <span className="rounded-full h-6 w-6 bg-amber-600">
          <Star className="text-white bg-white border-none" size={4}/>
        </span>
      </div>
    </div>
  )
}
