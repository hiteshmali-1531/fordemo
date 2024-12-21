import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
      <nav className="flex justify-between items-center">
        {/* Left side: College logo or image */}
        <div className="flex items-center gap-4">
          <Image
            src="/LDRP-logo-3.png" // Local image URL
            alt="LDRP Logo"
            width={220} // Adjust width as needed
            height={220} // Adjust height as needed
          />
        
        </div>

        {/* Right side: Navigation links */}
        <div className="flex gap-8 font-bold">
          <Link href="/" className="text-white navItem flex justify-center items-center text-lg  transition duration-300">
            <FontAwesomeIcon icon={faHouse} className=" w-[20px] " /> {/* Icon with margin */}
          </Link>
          <Link href="/student" className="text-white navItem text-lg  transition duration-300">
            Student
          </Link>
          <Link href="/contact" className="text-white navItem text-lg  transition duration-300">
            Contact
          </Link>
          <Link href="/faculty" className="text-white navItem text-lg  transition duration-300">
            Faculty
          </Link>
          <Link href="/admissions" className="text-white navItem text-lg  transition duration-300">
            Admissions
          </Link>
        </div>
      </nav>
    </div>
  );
}
