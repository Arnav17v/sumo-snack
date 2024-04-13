import Image from "next/image";
import Footer from "../footer";
import Header from "../header";
const menu = () => {
  return (
    <menu id="menu" className="thisbg">
      <Header />
      <div className="flex justify-center items-center bg-[rgb(236,225,211)] p-6">
        <Image
          className="z-40"
          src="/MENU.jpg"
          alt="hero"
          objectFit="cover"
          quality={100}
          width={795}
          height={900}
        />
      </div>
      <div className="absolute opacity-20 text-[11rem] ungai top-[180px] left-[0px] z-10">
        🍣Sumo Snacks
      </div>
      <div className="absolute opacity-20 text-[11rem] ungai bottom-[80px] right-[0px] z-10">
        🍣Sumo Snacks
      </div>
      <Footer />
    </menu>
  );
};
export default menu;
