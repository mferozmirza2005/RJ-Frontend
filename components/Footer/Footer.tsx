import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex mx-auto py-8">
        <div className="w-1/3">
          <h1>Logo</h1>
          <ul>
            <li>Facebook: xxxxx</li>
            <li>Insagram: xxxxx</li>
            <li>Gmail: xxxxx@gmail.com</li>
            <li>Phone no. +92xxxxxxxxxx</li>
            <li>Whatsapp: +92xxxxxxxxxx</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h1>Site Map</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2869032316985!2d67.02023797471797!3d24.92229434278175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f934cf63273%3A0xd4cd220a9b061b73!2sRoomi%20jewellers!5e0!3m2!1sen!2s!4v1728236070722!5m2!1sen!2s"
            height="300"
            className="border-none w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
