import React from "react";

const About = () => {
  return (
    <main className="h-fit w-full relative bg-slate-500/20">
      {/* video div starts */}
      <div className="h-screen w-full relative overflow-hidden">
        <h1 className="absolute text-white text-8xl bottom-16 left-7">
          Empowering <br />
          Your Flair
        </h1>
        <video
          className="h-full w-full object-cover"
          src="/videos/vid.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* video div ends */}

      {/* vision div starts */}
      <div className="h-screen p-10">
        <div className="h-[75vh] w-full flex justify-between gap-5">
          <div
            id="left"
            className="h-[75vh] w-[60%]"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669a984428438fc9ad140044_vision-01-p-1600.jpg) center/cover no-repeat",
            }}
          ></div>
          <div
            id="left"
            className="h-[75vh] w-[40%]"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669cf335c017c2f9a61d0856_vision-02-p-1080.jpg) center/cover no-repeat",
            }}
          ></div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-6xl py-5">Our Vision</h1>
          <p className="w-[40%] p-5 text-2xl">
            Le Flair Studios’ vision is to build our brand philosophy into a way
            of life for our global community. We aspire that people feel
            fulfilled by the flair and talents they have within themselves, for
            themselves – not by the validation or recognition of others. We
            strive to disrupt the global fashion industry by inspiring people to
            reject conformity, embracing and celebrating their unique individual
            flair instead. Le Flair Studios seeks to be a safe space and home
            for our community.
          </p>
        </div>
      </div>
      {/* vision div ends */}

      {/* mission div starts */}
      <div className="h-[30vh] w-full bg-black text-white flex items-start justify-between">
        <h1 className="text-6xl p-5">Our Mission</h1>
        <p className="w-[40%] p-5 text-2xl">
          Le Flair Studios’ vision is to build our brand philosophy into a way
          of life for our global community. We aspire that people feel fulfilled
          by the flair and talents they have within themselves, for themselves –
          not by the validation or recognition of others. We strive to disrupt
          the global fashion industry by inspiring people to reject conformity,
          embracing and celebrating their unique individual flair instead. Le
          Flair Studios seeks to be a safe space and home for our community.
        </p>
      </div>
      {/* misson div ends */}

      {/* slideshow div starts */}
      <div
        className="h-screen w-full overflow-hidden relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669bf4cd741d9462e2920e45_auto-slide-02-p-2600.webp) center/cover no-repeat",
        }}
      >
        <p className="w-[45%] text-6xl text-white/90 mt-5 ml-5">
          We believe in pushing the envelope with every project, ensuring that
          each piece we produce is not just a product, but a work of art.
        </p>
      </div>
      {/* slideshow div ends */}

      {/* story div starts */}
      <div className="h-screen w-full p-10 flex">
        <div id="left" className="h-[80vh] w-[30%] mt-20">
          <h1 className="text-8xl">Our Story</h1>
          <p className="w-[90%] mt-5 text-2xl">
            Embrace your individuality and redefine your style with Le Flair
            Studios, the high-end streetwear brand that celebrates what sets you
            apart. We defy the ordinary, focusing on the unique flair that
            defines you. What makes you special? What makes you, you? Watch our
            brand video and dive into the world of Le Flair Studios.
          </p>
        </div>
        <div id="right" className="h-[80vh] w-[70%] mt-20">
          <video
            className="h-full w-full object-cover"
            src="/videos/st.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      {/* story div ends */}

      {/* skills starts */}
      <div className="h-[220vh] w-full backdrop-blur-lg bg-[#E0E0E0] overflow-hidden">
        <div className="p-5 flex">
          <div id="left" className="w-[30%]">
            <img
              src="https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669a55e8b892998f69b3078c_mario-quote-photo.jpg"
              alt="as"
            />
            <h1 className="font-bold text-2xl">Mario Goic</h1>
            <h1>Founder & Co-CEO of Le Flair Studios</h1>
          </div>
          <div id="right" className="w-[40%]">
            <p className="text-5xl font-semibold">
              Le Flair Studios was inspired by my deep connection to the concept
              of flair which I first encountered at a young age through a video
              game and later became a huge part of my football career. Flair
              became a guiding force in my life, helping me navigate adversity
              and offering calm during challenges.
            </p>
            <p className="text-5xl font-semibold mt-16">
              In today’s fast-paced world focused on efficiency and
              quantification, I wanted to create a space where individuality can
              thrive. Le Flair Studios combines this personal insight with the
              idea that clothing is a key form of self-expression, providing a
              platform for people to embrace their “special something.” I aim to
              create a safe space for those who have faced challenges but find
              their path in life by staying true to themselves, to their flair.
            </p>
          </div>
        </div>
        <div className="mt-28 p-5">
          <h1 className="text-8xl font-semibold">Leadership Team</h1>
          <div className="flex mt-10 gap-5">
            <div
              className="h-[120vh] w-2/4 relative"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66731b5c6b260631f74ded45_mario-goic-profile.jpg) center/cover no-repeat",
              }}
            >
              <div className="h-[10vh] absolute bg-white w-full bottom-0 flex flex-col justify-between">
                <div className="p-5">
                  <h1 className="font-semibold text-2xl">Mario Goic</h1>
                  <p className="text-2xl">
                    Founder, Creative Director & Co-CEO of Le Flair Studios
                  </p>
                </div>
                <h1 className="bg-black/90 text-white w-full h-[4vh] flex items-center p-5 text-2xl">
                  Learn More
                </h1>
              </div>
            </div>
            <div
              className="h-[120vh] w-2/4 relative"
              style={{
                background:
                  "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66731b926e9dee80d7738c10_berat-krapi-profile.jpg) center/cover no-repeat",
              }}
            >
              <div className="h-[10vh] absolute bg-white w-full bottom-0 flex flex-col justify-between">
                <div className="p-5">
                  <h1 className="font-semibold text-2xl">Mario Goic</h1>
                  <p className="text-2xl">
                    Founder, Creative Director & Co-CEO of Le Flair Studios
                  </p>
                </div>
                <h1 className="bg-black/90 text-white w-full h-[4vh] flex items-center p-5 text-2xl">
                  Learn More
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills ends */}

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
};

export default About;
