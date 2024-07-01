import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactUsHomeBtn = () => {
  let router=useRouter()
  console.log(`this is router is the next js ${router}`)
  return (
    <Link
      href={"/contactus"}
      className="font-[Merriweather-sans] flex items-center justify-center gap-1 h-fit bg-[#010080] rounded-sm text-white px-5 py-2 hover:border hover:border-dashed cursor-pointer text-[12px] z-[999999]"
    >
      <img src={"/Assets/Icons/map.svg"} alt="" className="w-[22px] h-[18px]" />
      <p className="uppercase">Contact Us</p>
    </Link>
  );
};

export default ContactUsHomeBtn;
