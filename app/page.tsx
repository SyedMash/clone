"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Button from "@/components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Input from "@/components/Input";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  //main ref
  const mainRef = useRef<HTMLDivElement>(null);

  //section 2 content refs
  const li1 = useRef<HTMLDivElement>(null);
  const li2 = useRef<HTMLDivElement>(null);
  const li3 = useRef<HTMLDivElement>(null);
  const li4 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "11.6% 0%",
        end: "100% 0%",
        scrub: 0.02,
        pin: true,
        // markers: true,
      },
    });
    timeline
      .to(li1.current, { top: "-100%" }, "a")
      .to(li3.current, { top: "0%" }, "a")
      .to(li2.current, { top: "100%" }, "a")
      .to(li4.current, { top: "0%" }, "a");
  });

  return (
    <main ref={mainRef} className="h-fit w-full relative bg-slate-500/20">
      {/* hero seciton starts */}
      <div
        className="min-h-screen w-full relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(./images/heroImg.webp) center/cover no-repeat",
        }}
      >
        <h1 className="text-9xl text-white font-semibold absolute bottom-10 left-7">
          Embrace what <br /> makes You --- You
        </h1>
        <div className="absolute right-7 bottom-10">
          <Button title="Discover Now" />
        </div>
      </div>
      {/* hero seciton ends */}

      {/* small div starts */}
      <div className="h-[15vh] w-full backdrop-blur-xl bg-white/50 flex items-center">
        <h1 className="text-7xl font-semibold ml-10">
          <span className="text-black/50">Celebrate your flair</span> Expression{" "}
          <br /> on your own terms
        </h1>
      </div>
      {/* small div ends */}

      {/* section 2 starts */}
      <div className="h-screen w-full flex z-0">
        <div id="left" className="h-full w-2/4 relative overflow-hidden">
          <div
            ref={li1}
            className="h-full w-full absolute overflow-hidden"
            style={{
              background: "url(./images/leftd1.webp) center/cover no-repeat",
            }}
          >
            <h1 className="text-white text-2xl font-bold mt-10 ml-10">
              Crafting Unique Narratives Through <br /> Limited Edition Drops{" "}
            </h1>
            <h1 className="bg-white text-black text-center absolute bottom-10 w-[90%] ml-[5%] h-[40px] flex items-center justify-center cursor-pointer">
              Shop Now
            </h1>
          </div>
          <div
            ref={li3}
            className="h-full w-full absolute top-full"
            style={{
              background: "url(./images/leftd3.webp) center/cover no-repeat",
            }}
          >
            <h1 className="text-white text-2xl font-bold mt-10 ml-10">
              Crafting Unique Narratives Through <br /> Limited Edition Drops{" "}
            </h1>
            <h1 className="bg-white text-black text-center absolute bottom-10 w-[90%] ml-[5%] h-[40px] flex items-center justify-center cursor-pointer">
              Shop Now
            </h1>
          </div>
        </div>
        <div id="right" className="h-full w-2/4 relative overflow-hidden">
          <div
            ref={li2}
            className="h-full w-full absolute overflow-hidden"
            style={{
              background: "url(./images/leftd2.jpg) center/cover no-repeat",
            }}
          >
            <h1 className="text-white text-2xl font-bold mt-10 ml-10">
              Crafting Unique Narratives Through <br /> Limited Edition Drops{" "}
            </h1>
            <h1 className="bg-white text-black text-center absolute bottom-10 w-[90%] ml-[5%] h-[40px] flex items-center justify-center cursor-pointer">
              Shop Now
            </h1>
          </div>
          <div
            ref={li4}
            className="h-full w-full absolute -top-full overflow-hidden"
            style={{
              background: "url(./images/leftd4.jpg) center/cover no-repeat",
            }}
          >
            <h1 className="text-white text-2xl font-bold mt-10 ml-10">
              Crafting Unique Narratives Through <br /> Limited Edition Drops{" "}
            </h1>
            <h1 className="bg-white text-black text-center absolute bottom-10 w-[90%] ml-[5%] h-[40px] flex items-center justify-center cursor-pointer">
              Shop Now
            </h1>
          </div>
        </div>
      </div>
      {/* section 2 ends */}

      {/* featured Div starts */}
      <div className="min-h-[100vh] w-full bg-[#E0E0E0]">
        <div className="h-[20vh] w-full flex items-end justify-between p-5">
          <h1 className="text-8xl text-black/50">Featured</h1>
          <Button title="All Products" backgroundColor={"#3400D0"} />
        </div>
        <div className="h-[80vh] w-full flex gap-2">
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667301c94d370e77b5a2ee54_monogram-persian-violet-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6673006ae21170624985eec8_classic-black-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667300b7d022bb7402817090_classic-white-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66730528b95e9ec43f541968_sugar-swizzle-01-p-500.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
        </div>
      </div>
      {/* featured Div ends */}

      {/* Popular Div starts */}
      <div className="min-h-[100vh] w-full bg-[#E0E0E0]">
        <div className="h-[15vh] w-full flex items-end justify-between p-5">
          <h1 className="text-8xl text-black/50">Popular</h1>
          <Button title="All Products" backgroundColor={"#3400D0"} />
        </div>
        <div className="h-[80vh] w-full flex gap-2">
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667302235f22ca508929cda0_monogram-frosty-green-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6673006ae21170624985eec8_classic-black-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667301c94d370e77b5a2ee54_monogram-persian-violet-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
          <div
            className="h-[70vh] w-[30%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66730528b95e9ec43f541968_sugar-swizzle-01-p-500.jpg) center/cover no-repeat",
            }}
          >
            <div className="h-[5vh] w-full absolute bottom-0 bg-white"></div>
          </div>
        </div>
      </div>
      {/* Popular Div ends */}

      {/* community secion starts */}
      <div className="h-fit w-full bg-white overflow-hidden">
        <div className=" flex justify-between">
          <div id="left" className="w-[40%] mt-20 ml-10">
            <h1 className="text-6xl mb-5">Join the Community</h1>
            <p className="text-2xl mb-5">
              At Le Flair Studios, we believe that everyone has their own unique
              flair a special something that differentiates you from everyone
              else. It is in your DNA, and we want you to magnify it, not erase
              it.
            </p>
            <Button title="About Us" backgroundColor="#3400D0" />
          </div>
          <div id="right" className="h-[80vh] w-[60%] mt-20 mr-10 flex">
            <div className="h-full w-[20%] flex flex-col gap-2">
              <div
                className="h-[20%] w-[90%]"
                style={{
                  background:
                    "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667da5090665eaa8ce827f39_home-gallery-01%20(1).jpg) center/cover no-repeat",
                }}
              ></div>
              <div
                className="h-[20%] w-[90%]"
                style={{
                  background:
                    "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6673173c5af8f97c870e0bdc_home-gallery-02.jpg) center/cover no-repeat",
                }}
              ></div>
              <div
                className="h-[20%] w-[90%]"
                style={{
                  background:
                    "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66731745997c1c241079ee09_home-gallery-03.jpg) center/cover no-repeat",
                }}
              ></div>
              <div
                className="h-[20%] w-[90%]"
                style={{
                  background:
                    "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669cf65bd02654086ea2eb92_last-gallery%20(1).jpg) center/cover no-repeat",
                }}
              ></div>
            </div>
            <div
              className="h-full w-[80%]"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66731745997c1c241079ee09_home-gallery-03.jpg) center/cover no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="h-[20vh] w-full flex items-end justify-between p-5">
          <h1 className="text-6xl">
            <span className="text-black/50">Le Flair Studios</span> <br />{" "}
            Choose Yourself
          </h1>
          <div className="w-[25%] text-2xl">
            <p className="mb-5">
              Wearing Le Flair Studios is about more than just clothing. It’s a
              statement and reminder of not forgetting who you are and what
              makes you special. When you choose to wear Le Flair Studios, you
              choose yourself.
            </p>
            <Button title="Shop All" backgroundColor="#3400D0" />
          </div>
        </div>
      </div>
      {/* community secion ends */}

      {/* banner div starts */}
      <div
        className="h-screen w-full"
        style={{
          background:
            "url(https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669aee0d4a6730cc277f2aa8_fullsize-img-home.jpg) center/cover no-repeat",
        }}
      ></div>
      {/* banner div ends */}

      {/* ethos div starts */}
      <div className="min-h-screen w-full overflow-hidden">
        <h1 className="text-8xl font-semibold text-black/50 mt-10 ml-10">
          Our Ethos
        </h1>
        <div className="mt-10 flex gap-5 w-full px-5">
          <div className="min-h-[70vh] w-[33%]">
            <h1 className="text-4xl mb-5 border-b border-black border-t p-2">
              1.
            </h1>
            <div
              className="min-h-[70vh] w-full"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669eca31a22c8bf4c085e9f5_ethos-01.jpg) center/cover no-repeat",
              }}
            ></div>
            <div>
              <h1 className="text-5xl text-black/50 font-semibold my-5">
                High quality and craftsmanship
              </h1>
              <p className="text-[20px]">
                Our products are designed and crafted using premium materials,
                ensuring comfort and durability. Feel confident and comfortable
                in any situation with Le Flair Studios apparel, knowing each
                piece is made with care and integrity.
              </p>
            </div>
          </div>
          <div className="min-h-[70vh] w-[33%]">
            <h1 className="text-4xl mb-5 border-b border-black border-t p-2">
              2.
            </h1>
            <div
              className="min-h-[70vh] w-full"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669eca3b5c55373fc22b84c8_ethos-02.jpg) center/cover no-repeat",
              }}
            ></div>
            <div>
              <h1 className="text-5xl text-black/50 font-semibold my-5">
                Community & Storytelling
              </h1>
              <p className="text-[20px]">
                At Le Flair Studios, we believe in the power of community and
                self-expression. Our brand is more than just clothing; it’s a
                medium for showcasing individuality. We tell a story that
                celebrates uniqueness and rebellion.
              </p>
            </div>
          </div>
          <div className="min-h-[70vh] w-[33%]">
            <h1 className="text-4xl mb-5 border-b border-black border-t p-2">
              3.
            </h1>
            <div
              className="min-h-[70vh] w-full"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669eca432dd5d947f24f56fc_ethos-03.jpg) center/cover no-repeat",
              }}
            ></div>
            <div>
              <h1 className="text-5xl text-black/50 font-semibold my-5">
                Sustainable and ethical practices
              </h1>
              <p className="text-[20px]">
                Our products are ethically manufactured in Portugal, adhering to
                fair labor practices. We prioritize sustainability by using
                eco-friendly materials <br /> and responsible production
                methods.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ethos div ends */}

      {/* faq section starts */}
      <div className="min-h-[70vh] w-full overflow-hidden">
        <h1 className="text-8xl font-semibold text-black/50 mt-28 ml-10">
          Frequently Asked Questions
        </h1>
        <div className="flex items-center justify-between mt-10 ml-10  cursor-pointer border-t border-b border-black py-5 w-[97%]">
          <h1 className="text-5xl">
            How do I choose the right size for my order?
          </h1>
          <h1 className="text-5xl">+</h1>
        </div>
        <div className="flex items-center justify-between ml-10  cursor-pointer border-b border-black py-5  w-[97%]">
          <h1 className="text-5xl">
            How often is the assortment of the collection updated?
          </h1>
          <h1 className="text-5xl">+</h1>
        </div>
        <div className="flex items-center justify-between ml-10  cursor-pointer border-b border-black py-5  w-[97%]">
          <h1 className="text-5xl">Where is our clothing manufactured?</h1>
          <h1 className="text-5xl">+</h1>
        </div>
        <div className="flex items-center justify-between ml-10  cursor-pointer border-b border-black py-5  w-[97%]">
          <h1 className="text-5xl">Do you deliver internationally?</h1>
          <h1 className="text-5xl">+</h1>
        </div>
        <div className="flex items-center justify-between ml-10  cursor-pointer border-b border-black py-5  w-[97%]">
          <h1 className="text-5xl">Can I return an item?</h1>
          <h1 className="text-5xl">+</h1>
        </div>
        <div className="ml-10 mt-10 text-2xl w-[30%]">
          <p>
            Didnt find an answer to your question? You can always check our list
            of essential information here or submit your question to our support
            team customer@leflairstudios.com
          </p>
        </div>
      </div>
      {/* faq section ends */}

      {/* video div starts */}
      <div className="h-screen w-full relative overflow-hidden">
        <div className="absolute text-5xl text-white w-[40%] mt-5 ml-5">
          <p className="mb-7">
            Embrace the essence of Le Flair Studios and become a part of a
            movement that celebrates individuality.
          </p>
          <Button title="Shop All" />
        </div>
        <video
          className="h-full w-full object-cover"
          src="/videos/vid.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute bottom-8 right-8 w-[40%] bg-white flex flex-col p-5">
          <h1 className="my-5">Be the first to know about the latest drops</h1>
          <Input placeText="Enter first name" />
          <Input placeText="Enter e-mail address" />
          <div className="flex justify-between mt-5">
            <p className="w-[40%]">
              By signing up you agree to receive recurring automated marketing
              messages from Le Flair Studious.
            </p>
            <Button title="Subscribe to Newsletter" backgroundColor="#3400D0" />
          </div>
        </div>
      </div>
      {/* video div ends */}

      {/* footer starts */}
      <footer className="h-[80vh] w-full bg-black text-white overflow-hidden relative">
        <h1 className="text-5xl mt-10 ml-5">Leflairstudios</h1>
        <div className="w-full mt-52 flex">
          <div className="w-[33%] ">
            <div className="border-t border-b border-l p-2 border-white/50 w-full">
              <h1 className="text-4xl">International Shipping</h1>
              <p className="mt-24">
                We offer international shipping to over 50 countries, ensuring
                our products reach customers around the globe.
              </p>
            </div>
            <h1 className="mt-3 mb-10 ml-7">Menu</h1>
            <h1 className="ml-7">Home</h1>
            <h1 className="ml-7">Catlog</h1>
            <h1 className="ml-7">About</h1>
            <h1 className="ml-7">Journal</h1>
          </div>
          <div className="w-[33%]">
            <div className="border-t border-b border-l p-2 border-white/50 w-full">
              <h1 className="text-4xl">International Shipping</h1>
              <p className="mt-24">
                We offer international shipping to over 50 countries, ensuring
                our products reach customers around the globe.
              </p>
            </div>
            <h1 className="mt-3 mb-10 ml-7">Menu</h1>
            <h1 className="ml-7">All</h1>
            <h1 className="ml-7">Drops</h1>
          </div>
          <div className="w-[33%]">
            <div className="border-t border-b border-l p-2 border-white/50 w-full">
              <h1 className="text-4xl">International Shipping</h1>
              <p className="mt-24">
                We offer international shipping to over 50 countries, ensuring
                our products reach customers around the globe.
              </p>
            </div>
            <h1 className="mt-3 mb-10 ml-7">Support</h1>
            <h1 className="ml-7">Shipping and Delievery</h1>
            <h1 className="ml-7">Payment Methods</h1>
            <h1 className="ml-7">Return and Refunds</h1>
            <h1 className="ml-7">Terms of Service</h1>
            <h1 className="ml-7">Privacy Policy</h1>
            <h1 className="ml-7">Contact</h1>
          </div>
        </div>
        <div className="absolute w-full bottom-0 p-5 flex items-center justify-between border-t border-white/50">
          <h1 className="text-2xl font-semibold">Leflairstudios</h1>
          <h1 className="text-2xl font-semibold">2024 AllRightsReserved</h1>
        </div>
      </footer>
      {/* footer ends */}
    </main>
  );
}
