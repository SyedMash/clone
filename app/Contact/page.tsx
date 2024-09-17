import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <div className="h-screen w-full overflow-hidden absolute top-[56px] text-black">
        <h1 className="text-7xl mt-10 ml-10">Contact</h1>
        <div className="h-[90vh] w-full  p-10 flex justify-between">
          <div id="left" className="mt-20">
            <div className="text-2xl">
              <h1 className="text-black/50">General Inquiries</h1>
              <p>customer@leflairstudios.com</p>
            </div>
            <div className="my-10 text-2xl">
              <h1 className="text-black/50">Head Office</h1>
              <p>Hafergasse 14, Kalsdorf bei Graz, Styria 8401, Austria</p>
            </div>
            <div className="mb-10 text-2xl">
              <h1 className="text-black/50">Hours</h1>
              <p>Mon-Fri 9:00AM -- 4:00PM</p>
            </div>
            <div className="text-2xl">
              <h1 className="text-black/50">Press Inquiries</h1>
              <p>press@leflairstudios.com</p>
            </div>
          </div>
          <div id="form" className="mt-20">
            <h1 className="text-5xl">Ask us a question</h1>
            <div className="mt-10">
              <form className="flex flex-col">
                <div className="flex gap-4 mb-5">
                  <Input placeText="Name*" />
                  <Input placeText="Email*" />
                </div>
                <Input placeText="Phone" />
                <textarea
                  name=""
                  id=""
                  placeholder="Message*"
                  className="placeholder:font-semibold placeholder:text-black p-3  bg-[#E0E0E0] mt-5"
                  rows={4}
                ></textarea>
                <label className="text-2xl my-5">
                  Preferred method of contact
                </label>
                <div className="text-2xl flex gap-2 mb-5 items-center">
                  <input type="checkbox" name="" id="" className="" />
                  <label htmlFor="">Phone</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Email</label>
                </div>
                <Button title="Send Message" backgroundColor="#3400D0" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
