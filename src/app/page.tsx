"use client";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Reservation from "./reservation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (Loading) {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center bg-[rgb(236,225,211)] h-[80vh]">
          <img
            src="https://media.tenor.com/YSHdPP-LR1cAAAAi/star-rail-kuru.gif"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="bg-[rgb(236,225,211)] text-[rgb(236,225,211)]">
      <Header />
      <div className="thisbg">
        <div className="flex justify-around items-center max-w-[88rem] m-auto ">
          <div className="max-w-[600px]">
            <div className="">
              <h1 className="text-xl tracking-[0.4rem] text-[rgb(210,112,74)]">
                AUNTHENTIC JAPANESE CUISINE...
              </h1>
              <p className="text-7xl pt-4 bodoni-moda">
                We serve the best food in{" "}
                <span className="text-[rgb(210,112,74)]">town</span>
              </p>
              <p className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci reiciendis repellat quam itaque perferendis nostrum
                vitae totam earu!
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    router.push("./menu");
                  }}
                  className="p-3 bg-[rgb(210,112,74)] text-[rgb(236,225,211)] rounded-full sm:mt-5 tracking-wider"
                >
                  View Menu →
                </button>
                <button
                  onClick={() => {
                    router.push("./order");
                  }}
                  className="p-3 bg-[rgb(33,78,72)] hover:bg-[rgb(210,112,74)] transition-all duration-300 border-[1px] border-[rgb(210,112,74)] text-white rounded-full sm:mt-5 tracking-wider"
                >
                  Order now →
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              className="opacity-0"
              src="/banner.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={600}
              height={320}
              style={{ transform: "rotate(-30deg)" }}
            />
            <Image
              className="absolute top-24 z-30 right-[165px]"
              src="/banner.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={700}
              height={520}
              style={{ transform: "rotate(-30deg)" }}
            />
            <Image
              className="absolute top-[650px] z-30 right-[800px]"
              src="/wigglly.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={200}
              height={120}
              style={{ transform: "rotate(0deg)" }}
            />
            <div className="absolute opacity-20 text-[11rem] ungai top-[180px] left-[0px] z-10">
              🍣Sumo Snacks
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[88rem] text-3xl text-center p-24 m-auto text-black tracking-tighter flex flex-col items-center justify-center pt-[7rem]">
        <div>Categories</div>
        <div className="text-[rgb(45,105,97)] bodoni-moda text-5xl pt-6 max-w-[500px]">
          Explore Our Exquisite JAPANESE Cuisine
        </div>
        <div className="pt-24 flex gap-7 ">
          <div className=" w-[14rem] bg-[rgb(214,113,75)] rounded-lg p-2 text-center text-[rgb(236,225,211)]">
            <Image
              src="/ramen.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
            <div>Ramen</div>
          </div>
          <div className=" w-[14rem] bg-[rgb(33,78,72)] rounded-lg p-2 text-center text-[rgb(236,225,211)]">
            <Image
              src="/dump.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
            <div>Dumplings</div>
          </div>
          <div className=" w-[14rem] bg-[rgb(247,205,94)] rounded-lg p-2 text-center text-[rgb(236,225,211)]">
            <Image
              src="/riceball.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
            <div>Rice Balls</div>
          </div>
          <div className="w-[14rem] bg-[rgb(89,47,36)] rounded-lg p-2 text-center text-[rgb(236,225,211)]">
            <Image
              src="/mochi.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
            <div>Mochi</div>
          </div>
          <div className=" w-[14rem] bg-[rgb(214,113,75)] rounded-lg p-2 text-center text-[rgb(236,225,211)]">
            <Image
              src="/sushi.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
            <div>Sushi</div>
          </div>
        </div>
      </div>
      <div className="flex mt-12 justify-between max-w-[76rem] text-black m-auto">
        <div className="max-w-[600px] text-left text-xl ">
          <div className="text-3xl pb-4">Delicious menu</div>
          <div className="tracking-tighter text-6xl pb-4 text-[rgb(45,105,97)] bodoni-moda">
            Awaken your taste buds.
          </div>
          <div className="text-lg opacity-50 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla vel cum minus dolorum quasi sint quidem quaerat
            veniam fugiat.
          </div>
          <button
            onClick={() => {
              router.push("./menu");
            }}
            className="p-3 bg-[rgb(210,112,74)] text-white rounded-full sm:mt-5 tracking-wider"
          >
            View Menu →
          </button>
        </div>
        <div>
          <div>
            <Image
              src="/dumpking.jpg"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={400}
              height={600}
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
        </div>
      </div>
      <div id="about" className="thisbg py-24">
        <div className="text-6xl flex justify-center pt-4 bodoni-moda pb-9">
          Why Choose Us?
        </div>
        <div className="relative h-full max-w-[88rem] pl-[80px] m-auto flex justify-between">
          <div>
            <div className="flex flex-col max-w-[400px] p-4">
              <span className="translate-x-[-20px]">
                <Image
                  src="/freshness.png"
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  width={70}
                  height={70}
                  style={{ transform: "rotate(0deg)" }}
                />
              </span>
              <span className="text-3xl py-4">Freshness</span>
              <span className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                debitis.
              </span>
            </div>
            <div className="flex flex-col max-w-[400px] p-4">
              <span className="translate-x-[-20px]">
                <Image
                  src="/ambience.png"
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  width={70}
                  height={70}
                  style={{ transform: "rotate(0deg)" }}
                />
              </span>
              <span className="text-3xl py-4">Ambience</span>
              <span className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                debitis.
              </span>
            </div>
            <div className="flex flex-col max-w-[400px] p-4">
              <span className="translate-x-[-20px]">
                <Image
                  src="/variety.png"
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  width={70}
                  height={70}
                  style={{ transform: "rotate(0deg)" }}
                />
              </span>
              <span className="text-3xl py-4">Variety</span>
              <span className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                debitis.
              </span>
            </div>
          </div>
          <div className="z-10">
            <div className="flex flex-col max-w-[400px] p-4">
              <span className="translate-x-[-20px]">
                <Image
                  src="/expertise.png"
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  width={70}
                  height={70}
                  style={{ transform: "rotate(0deg)" }}
                />
              </span>
              <span className="text-3xl py-4">Expertise</span>
              <span className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                debitis.
              </span>
            </div>
            <div className="flex flex-col max-w-[400px] p-4">
              <span className="translate-x-[-20px]">
                <Image
                  src="/authenticity.png"
                  alt="hero"
                  objectFit="cover"
                  quality={100}
                  width={70}
                  height={70}
                  style={{ transform: "rotate(0deg)" }}
                />
              </span>
              <span className="text-3xl py-4">Authenticity</span>
              <span className="opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                debitis.
              </span>
            </div>
          </div>
          <Image
            className="absolute right-[-230px] top-[300px] z-5"
            src="/wowsushi.png"
            alt="hero"
            objectFit="cover"
            quality={100}
            width={1146}
            height={576}
          />
        </div>
      </div>
      <div className="py-24">
        <div className="thisbg flex justify-around items-center max-w-[66rem] m-auto rounded-xl p-4">
          <div>
            <div className="text-5xl tracking-tighter py-4">
              Enjoy The Delicious{" "}
              <span className="text-[rgb(214,113,75)]">Food...</span>
            </div>
            <div className="max-w-[500px] pb-4 opacity-50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            </div>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => {
                  router.push("./menu");
                }}
                className="p-3 bg-[rgb(210,112,74)] hover:bg-[rgb(33,78,72)] transition-all duration-300 text-white rounded-full sm:mt-5 tracking-wider"
              >
                View Menu →
              </button>
              <button
                onClick={() => {
                  router.push("./order");
                }}
                className="p-3 bg-[rgb(33,78,72)] hover:bg-[rgb(210,112,74)] transition-all duration-300 border-[1px] border-[rgb(210,112,74)] text-white rounded-full sm:mt-5 tracking-wider"
              >
                Order now →
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/lastimage.png"
              alt="hero"
              objectFit="cover"
              quality={100}
              width={300}
              height={300}
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
