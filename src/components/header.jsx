import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Header() {
  return (
    <header className="header flex">
      <div className="header-icons p-2 ps-4">
        <div className="icon-box rounded-sm mt-1">
          <div className="icon pt-1 ps-1">
            <FaPhoneAlt />
          </div>
        </div>
        <div className="relative bottom-6 left-8">
          <span className="text-white text-sm font-semibold text-font">
            +92 312 5123913
          </span>
        </div>
      </div>
      <div className="header-icons p-1 ms-8">
        <div className="rounded-sm mt-1 mail">
          <div className="icon pt-1 ps-1">
            <IoMail style={{ color: "white" }} size={23} />
          </div>
        </div>
        <div className="relative bottom-6 left-8 mail">
          <span className="text-white text-sm font-semibold text-font">
            info@meetahsan.com
          </span>
        </div>
      </div>

      <div className="media-links absolute right-3 mt-2 flex space-x-5">
        <div className="w-9 h-9 bg-white rounded-full pt-2 ps-2">
            <FaFacebookF className="text-black " size={20} />
        </div>
        <div className="w-9 h-9 bg-white rounded-full pt-2 ps-2">
            <FaInstagram className="text-black " size={20} />
        </div>
        <div className="w-9 h-9 bg-white rounded-full pt-2 ps-2">
            <FaYoutube className="text-black " size={20} />
        </div>
      </div>
    </header>
  );
}
export default Header;
