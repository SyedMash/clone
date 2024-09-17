import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Journal = () => {
  return (
    <main className="min-h-screen relative w-full bg-[#E0E0E0]">
      {/* jonral duv starts */}
      <div className="h-[110vh] w-full relative top-[56px] overflow-hidden">
        <h1 className="text-8xl mt-10 ml-10">Journal</h1>
        <div className="h-[75vh] w-full mt-36 flex gap-1">
          <div
            className="h-full w-[35%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669c50eb4610614df22470c4_cover-01.jpg) center/cover no-repeat",
            }}
          >
            <div className="absolute bg-white w-full bottom-0 flex flex-col justify-between">
              <div className="p-5">
                <h1 className="font-semibold text-2xl">STREETWEAR</h1>
                <p className="text-2xl">
                  Flair Stories: Hear from the Community
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-full w-[35%] relative"
            style={{
              background:
                "url(https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669bed5c147bdd407b4bf779_cover-02.jpg) center/cover no-repeat",
            }}
          >
            <div className="absolute bg-white w-full bottom-0 flex flex-col justify-between">
              <div className="p-5">
                <h1 className="font-semibold text-2xl">COMMUNITY</h1>
                <p className="text-2xl">Le Flair Studios and Fashion — Why?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* journal div ends */}

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
};

export default Journal;
