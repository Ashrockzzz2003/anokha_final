import * as React from "react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white px-4 py-8 sm:px-8 lg:px-16">

      <div className="flex justify-center items-center gap-8 py-4">
        <a href="https://www.instagram.com/anokhatechfest/" target="_blank" rel="noreferrer">
          <RiInstagramFill size={32} />
        </a>
        <a href="https://www.facebook.com/anokha.amrita/" target="_blank" rel="noreferrer">
          <RiFacebookFill size={32} />
        </a>
        <a href="https://www.linkedin.com/school/anokha-amrita/" target="_blank" rel="noreferrer">
          <RiLinkedinFill size={32} />
        </a>
        <a href="https://twitter.com/anokha_techfest" target="_blank" rel="noreferrer">
          <RiTwitterFill size={32} />
        </a>
        <a href="https://www.youtube.com/@AnokhaTechfest" target="_blank" rel="noreferrer">
          <RiYoutubeFill size={32} />
        </a>
      </div>

      <div id="contact" className="py-8 text-center">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <div className="pt-4">
          <div className="pb-2 text-lg">
            <a href="mailto:email1@example.com" className="underline hover:no-underline">email1@example.com</a>
          </div>
          <div className="pb-2 text-lg">
            <a href="mailto:email2@example.com" className="underline hover:no-underline">email2@example.com</a>
          </div>
        </div>
      </div>

      <div id="backlinks" className="py-8 text-center">
        <h2 className="text-2xl font-bold">Navigation</h2>
        <div className="grid grid-cols-2 gap-4 pt-4 text-xl">
          <a href="/" className="underline hover:no-underline">Home</a>
          <Link smooth={true} className="underline hover:no-underline" to="about">About</Link>
          <Link smooth={true} className="underline hover:no-underline" to="aboutamrita">About Amrita</Link>
          <Link smooth={true} className="underline hover:no-underline" to="c20g20">C20 G20</Link>
          <Link smooth={true} className="underline hover:no-underline" to="eventide">Eventide</Link>
          <Link smooth={true} className="underline hover:no-underline" to="techfair">TechFair</Link>
          <Link smooth={true} className="underline hover:no-underline" to="gallery">Gallery</Link>
          <Link smooth={true} className="underline hover:no-underline" to="contact">Contact Us</Link>
          <a href="/events" className="underline hover:no-underline">Events &amp; Workshops</a>
          <a href="/team" className="underline hover:no-underline">Team</a>
        </div>
      </div>
                <div className="flex justify-evenly py-4 ">
                    <span>Copyright</span>
                    <span>Made with &#10084; by WMD</span>
                    <span>Terms and Conditions</span>
                </div>

        </footer>
    );
};
// export default function Footer() {
//     return (
//         <footer id="footer" className="bg-babyPowder">

//             <div className="h-auto px-24">
//                 <div className="flex justify-center gap-8 pt-24">
//                     <a href="https://www.instagram.com/anokhatechfest/" target="_blank" rel="noreferrer">
//                         <RiInstagramFill size={50} />
//                     </a>
//                     <a href="https://www.facebook.com/anokha.amrita/" target="_blank" rel="noreferrer">
//                         <RiFacebookFill size={50} />
//                     </a>
//                     <a href="https://www.linkedin.com/school/anokha-amrita/" target="_blank" rel="noreferrer">
//                         <RiLinkedinFill size={50} />
//                     </a>
//                     <a href="https://twitter.com/anokha_techfest" target="_blank" rel="noreferrer">
//                         <RiTwitterFill size={50} />
//                     </a>
//                     <a href="https://www.youtube.com/@AnokhaTechfest" target="_blank" rel="noreferrer">
//                         <RiYoutubeFill size={50} />
//                     </a>
//                 </div>

//                 <div className="flex justify-center">
//                     <div id="contact" className="pt-16 w-1/3">
//                         <div className="text-6xl">Contact Us</div>
//                         <div className="pt-4 pl-4">
//                             <div className="py-2 text-lg">email@email1.com</div>
//                             <div className="py-2 text-lg">email@email2.com</div>
//                         </div>
//                     </div>
//                     <div className="w-full pt-16 flex justify-center">
//                         <div className="block">
//                             <a href="/" >Home</a>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#aboutamrita">About Amrita</Link>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#techfair">TechFair</Link>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#footer">ContactUs</Link>
//                             <a href="/team">Team</a>
//                         </div>
//                         <div className="block">
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#eventide">Eventide</Link>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#about">About</Link>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#c20g20">C20 G20</Link>
//                             <Link smooth={true} className="hover:cursor-pointer" to="/#gallery">Gallery</Link>
//                             <a href="/events">Event & Workshops</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-evenly py-4 ">
//                     <span>Copyright</span>
//                     <span>Made with &#10084; by WMD</span>
//                     <span>Terms and Conditions</span>
//                 </div>
//             </div>

//         </footer>
