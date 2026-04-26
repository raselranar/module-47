import Image from "next/image";
import Logo from "@/assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <header>
      <div className="max-w-md mx-auto mt-10 flex justify-center flex-col gap-5 ">
        <Image src={Logo} width={300} height={200} alt="logo" />
        <h3 className="text-gray-400">Journalism Without Fear or Favour</h3>
        <h4>{format(new Date(), "EEEE, MMMM,dd, yyyy")}</h4>
      </div>
    </header>
  );
};
export default Header;
