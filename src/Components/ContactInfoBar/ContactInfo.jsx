import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className=" hidden md:block bg-[#1f305e] text-white p-4 text-sm px-4  flex-col md:flex-row justify-center md:justify-end items-center gap-y-2 md:gap-x-8 md:text-xl">
      <p className="flex items-center gap-1">
        <FiPhone className="w-4 h-4" />
        11 53754846
      </p>

      <p className="flex items-center gap-1">
        <FaInstagram className="w-4 h-4" />
        @jpd_mates
      </p>
      <p className="flex items-center gap-1">
        <MdOutlineMail className="w-4 h-4" />
        jpdmates@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;
