import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { FlagIcon } from "@heroicons/react/24/solid";

function InfoSection() {
  return (
    <section className="text-white flex flex-wrap mt-96">
      <div className="flex items-center ml-12 mb-36">
        <UserIcon width={500} className="ml-40 mr-40" />
        <div>
          <div className="text-4xl text-text_color font-semibold mb-10">
            Easy Sign-Up and Secure Access
          </div>
          <p className="text-gray-500 leading-9 text-lg w-3/4">
            Creating an account is simple and straightforward, allowing you to
            access all features quickly. Our platform prioritizes your safety by
            ensuring that your login information is protected with advanced
            security measures, giving you the confidence to use our services
            without worry.
          </p>
        </div>
      </div>
      <div className="flex items-center ml-12 mb-36">
        <div className="ml-40">
          <div className="text-4xl text-text_color font-semibold mb-10">
            Quick and Confidential Crime Reporting
          </div>
          <p className="text-gray-500 leading-9 text-lg w-3/4">
            Our user-friendly interface allows you to report crimes with ease,
            guiding you through each step to provide important details like
            location, time, and type of crime. Your privacy is our top concern,
            so all reports are handled with strict confidentiality to protect
            your identity and personal information.
          </p>
        </div>
        <LockClosedIcon width={500} className="ml-30 mr-40" />
      </div>
      <div className="flex items-center ml-12 mb-36">
        <MapPinIcon width={500} className="ml-40 mr-40" />
        <div>
          <div className="text-4xl text-text_color font-semibold mb-10">
            Automatic Location Detection
          </div>
          <p className="text-gray-500 leading-9 text-lg w-3/4">
            To make reporting even more convenient, our platform automatically
            detects your current location, allowing you to submit accurate crime
            reports without the hassle of manually entering your whereabouts.
            This feature helps ensure that your report reaches the right
            authorities quickly and efficiently.
          </p>
        </div>
      </div>
      <div className="flex items-center ml-12 mb-36">
        <div className="ml-40">
          <div className="text-4xl text-text_color font-semibold mb-10">
            Instant Police Notifications
          </div>
          <p className="text-gray-500 leading-9 text-lg w-3/4">
            Once a crime is reported, our system immediately alerts police
            officers within a 10 km radius, ensuring they receive real-time
            updates and can respond promptly. This feature enhances the chances
            of a rapid response, helping to keep you and your community safer.
          </p>
        </div>
        <BellAlertIcon width={500} className="ml-30 mr-40" />
      </div>
      <div className="flex items-center ml-12 mb-36">
        <FlagIcon width={500} className="ml-40 mr-40" />
        <div>
          <div className="text-4xl text-text_color font-semibold mb-10">
            Automatic Location Detection
          </div>
          <p className="text-gray-500 leading-9 text-lg w-3/4">
            To make reporting even more convenient, our platform automatically
            detects your current location, allowing you to submit accurate crime
            reports without the hassle of manually entering your whereabouts.
            This feature helps ensure that your report reaches the right
            authorities quickly and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
