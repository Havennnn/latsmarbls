import React from "react";
import Button from "../../layouts/buttons/Button";
import AboutHeader from "./AboutHeader";

const ContactInfo = ({ openModal }) => {
  return (
    <>
      <AboutHeader />
      <div className="gap-2 flex flex-col px-6 2xl:px-16 py-24 2xl:py-32 sm:px-14 text-dgray 2xl:text-2xl">
        <h1 className="font-bold text-3xl 2xl:text-5xl">Lets Connect!</h1>
        <p className="text-gray font-normal pl-30 w-5/6 pt-5">
          You can contact me through any of my social media profiles or email me
          directly. I'm always open to new opportunities, and connections, so
          don't hesitate to get in touch.
        </p>
        <p className="text-gray font-bold pl-30 w-5/6 pt-5">
          <i className="fas fa-phone"></i> 0995-332-4941
        </p>
        <p className="text-gray font-bold pl-30 w-5/6">
          <i className="fas fa-envelope"></i> marablelatrell@gmail.com
        </p>
        <p className="text-gray font-normal pl-30 w-5/6 pt-5 pb-3">
          You can email me directly through here:
        </p>
        <div className="pl-30 w-5/6">
          <Button
            onClick={openModal}
            icon="fas fa-envelope"
            text="Contact"
            buttonClassName="w-1/2 sm:w-42 h-12 2xl:h-14"
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
