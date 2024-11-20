import React from "react";
import {
  UserIcon,
  LockClosedIcon,
  MapPinIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

function InfoSection() {
  return (
    <section className="text-white flex flex-col space-y-16 mt-16 px-4 sm:mt-32 lg:mt-48 lg:flex-wrap lg:space-y-0">
      {/* Easy Sign-Up Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-36 lg:ml-12">
        <UserIcon width={150} className="mb-8 lg:mb-0 lg:mr-12" />
        <div className="lg:flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text_color font-semibold mb-4 lg:mb-10">
            Easy Sign-Up and Secure Access
          </h2>
          <p className="text-gray-500 text-base sm:text-lg lg:text-lg leading-7 sm:leading-8 lg:leading-9 lg:w-3/4 mx-auto lg:mx-0">
            Creating an account is simple and straightforward, allowing you to
            access all features quickly. Our platform prioritizes your safety by
            ensuring that your login information is protected with advanced
            security measures, giving you the confidence to use our services
            without worry.
          </p>
        </div>
      </div>

      {/* Crime Reporting Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-36 lg:ml-12">
        <div className="lg:flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text_color font-semibold mb-4 lg:mb-10">
            Quick and Confidential Crime Reporting
          </h2>
          <p className="text-gray-500 text-base sm:text-lg lg:text-lg leading-7 sm:leading-8 lg:leading-9 lg:w-3/4 mx-auto lg:mx-0">
            Our user-friendly interface allows you to report crimes with ease,
            guiding you through each step to provide important details like
            location, time, and type of crime. Your privacy is our top concern,
            so all reports are handled with strict confidentiality to protect
            your identity and personal information.
          </p>
        </div>
        <LockClosedIcon width={150} className="mt-8 lg:mt-0 lg:ml-12" />
      </div>

      {/* Location Detection Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-36 lg:ml-12">
        <MapPinIcon width={150} className="mb-8 lg:mb-0 lg:mr-12" />
        <div className="lg:flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text_color font-semibold mb-4 lg:mb-10">
            Automatic Location Detection
          </h2>
          <p className="text-gray-500 text-base sm:text-lg lg:text-lg leading-7 sm:leading-8 lg:leading-9 lg:w-3/4 mx-auto lg:mx-0">
            To make reporting even more convenient, our platform automatically
            detects your current location, allowing you to submit accurate crime
            reports without the hassle of manually entering your whereabouts.
            This feature helps ensure that your report reaches the right
            authorities quickly and efficiently.
          </p>
        </div>
      </div>

      {/* Police Notification Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-36 lg:ml-12">
        <div className="lg:flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text_color font-semibold mb-4 lg:mb-10">
            Instant Police Notifications
          </h2>
          <p className="text-gray-500 text-base sm:text-lg lg:text-lg leading-7 sm:leading-8 lg:leading-9 lg:w-3/4 mx-auto lg:mx-0">
            Once a crime is reported, our system immediately alerts police
            officers within a 10 km radius, ensuring they receive real-time
            updates and can respond promptly. This feature enhances the chances
            of a rapid response, helping to keep you and your community safer.
          </p>
        </div>
        <BellAlertIcon width={150} className="mt-8 lg:mt-0 lg:ml-12" />
      </div>
    </section>
  );
}

export default InfoSection;
