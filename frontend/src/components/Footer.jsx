import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark_blue py-8 text-white text-center mt-12">
      {/* Top section for any additional links or social icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="#privacy"
          className="text-footer_color hover:text-white transition duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="text-footer_color hover:text-white transition duration-300"
        >
          Terms of Service
        </a>
        <a
          href="#contact"
          className="text-footer_color hover:text-white transition duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Divider for aesthetic */}
      <div className="border-t border-footer_color w-1/2 mx-auto mb-4"></div>

      {/* Copyright Information */}
      <div className="text-sm text-footer_color mb-2">
        © 2024 Crime Reporting. All rights reserved.
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center space-x-4">
        <a
          href="#facebook"
          aria-label="Facebook"
          className="hover:text-hover_color"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#twitter"
          aria-label="Twitter"
          className="hover:text-hover_color"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#linkedin"
          aria-label="LinkedIn"
          className="hover:text-hover_color"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#instagram"
          aria-label="Instagram"
          className="hover:text-hover_color"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
