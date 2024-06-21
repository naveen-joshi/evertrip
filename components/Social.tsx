import { FaWhatsapp, FaPhone } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="fixed right-3 bottom-3 flex flex-col items-center gap-2 space-x-4">
      <a
        href="https://wa.me/+919653810555?text=Hi"
        target="_blank"
        className="bg-[#DCFCE7] z-10 rounded-full p-2"
        rel="noreferrer"
      >
        <FaWhatsapp className="w-10 h-10" color="green" />
      </a>
      {/* <a
        href="tel:+91-7375858968"
        target="_blank"
        rel="noreferrer"
        className="bg-[#ffcc4c] rounded-full p-2"
      >
        <FaPhone className="text-blue-70 w-10 h-10" />
      </a> */}
    </div>
  );
};

export default SocialLinks;
