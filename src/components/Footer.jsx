import * as React from "react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { Link } from "react-scroll";
import eventide from "./utils/eventide.png";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="h-auto bg-white">
                <div className="inline-block">
                    <div className="flex justify-center lg:justify-start gap-x-3 pt-24 pl-36">
                        <a
                            href="https://www.instagram.com/anokhatechfest/"
                            target="_blank"
                            rel="noreferrer">
                            <RiInstagramFill size={50} />
                        </a>
                        <a
                            href="https://www.facebook.com/anokha.amrita/"
                            target="_blank"
                            rel="noreferrer">
                            <RiFacebookFill size={50} />
                        </a>
                        <a
                            href="https://www.linkedin.com/school/anokha-amrita/"
                            target="_blank"
                            rel="noreferrer">
                            <RiLinkedinFill size={50} />
                        </a>
                        <a
                            href="https://twitter.com/anokha_techfest"
                            target="_blank"
                            rel="noreferrer">
                            <RiTwitterFill size={50} />
                        </a>
                        <a
                            href="https://www.youtube.com/@AnokhaTechfest"
                            target="_blank"
                            rel="noreferrer">
                            <RiYoutubeFill size={50} />
                        </a>
                    </div>

                    <div id="contact" className="pl-36 pt-16 overflow-hidden">
                        <div className="text-6xl">Contact Us</div>
                        <div className="pt-4 pl-4">
                            <div className="py-2 text-lg">email@email1.com</div>
                            <div className="py-2 text-lg">email@email2.com</div>
                        </div>
                    </div>
                    <div className="pl-36 w-[70vw] pt-16">
                        <div id="backlinks" className="grid grid-cols-2 gap-4 text-2xl">
                            <a href="/">Home</a>
                            <Link smooth={true} className="hover:cursor-pointer" to="about">
                                About
                            </Link>
                            <Link
                                smooth={true}
                                className="hover:cursor-pointer"
                                to="aboutamrita">
                                About Amrita
                            </Link>
                            <Link smooth={true} className="hover:cursor-pointer" to="c20g20">
                                C20 G20
                            </Link>
                            <Link
                                smooth={true}
                                className="hover:cursor-pointer"
                                to="eventide">
                                Eventide
                            </Link>
                            <Link
                                smooth={true}
                                className="hover:cursor-pointer"
                                to="techfair">
                                TechFair
                            </Link>
                            <Link smooth={true} className="hover:cursor-pointer" to="gallery">
                                Gallery
                            </Link>
                            <Link smooth={true} className="hover:cursor-pointer" to="footer">
                                ContactUs
                            </Link>
                            <a href="/events">Event & Workshops</a>
                            <a href="/team">Team</a>
                        </div>
                    </div>
                </div>
                <div className="inline-block px-36">
                    <img src={eventide} alt="Eventide" width={250} style={{ float: 'right' }} />
                </div>
                <div className="flex justify-evenly py-4 ">
                    <span>Copyright</span>
                    <span>Made with &#10084; by WMD</span>
                    <span>Terms and Conditions</span>
                </div>
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
