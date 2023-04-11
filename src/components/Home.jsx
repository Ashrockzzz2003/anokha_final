import * as React from "react";
import iete from "../components/utils/iete.jpeg";
import icici from "../components/utils/icici.png";
import clab from "../components/utils/clab.webp";
import "../components/styles/home.css";
import "../components/styles/gallery.css";
import ab1 from "../components/utils/cbe campus.svg";
import {Typography} from "@material-tailwind/react";
import anokha_text from "../components/utils/anokha_text.svg";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 100,
    });
  }, []);

  return (
    <div className="home ml-auto mr-auto pt-12 snap-y">
      <div>
        <div data-aos="fade-down" className="m-4 mt-12">
          <img
            src={anokha_text}
            alt="Anokha Logo"
            className="h-36 pt-12 lg:h-64 ml-auto mr-auto"
          />
        </div>

        <div data-aos="fade-up" className="m-2">
          <img
            src={ab1}
            alt="Anokha Logo"
            className="h-[60vh] ml-auto mr-auto"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="pb-10">
        <Typography variant="h1" className=" text-khaki text-center mt-24 mb-8">
          Our Sponsors
        </Typography>
        <Marquee
          pauseOnHover="true"
          gradient="false"
          gradientColor="[0, 0, 0]"
          speed={40}
          className="mb-8">
          <img src={icici} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
          <img src={clab} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
          <img src={iete} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
        </Marquee>
      </div>

      <div
        id="about"
        className="w-full h-full lg:h-[100vh] block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16">
        <table className="w-full" data-aos="fade-up-right">
          <tbody>
            <tr>
              <td>
                <div className="wrap">
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/1.jpg")}></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/2.jpg")}></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/5.jpg")}></img>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="wrap">
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/8.jpg")}></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/9.jpg")}></img>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6">
          <Typography
            variant="h1"
            className="mb-2 text-black font-title text-center lg:text-left">
            ABOUT
          </Typography>
          <Typography className="text-black text-xl text-center lg:text-justify">
            Anokha, the national engineering techfest of Amrita School of
            Engineering, Coimbatore, is a 3-day congregation of some of the
            brightest minds in India. Founded in 2010, Anokha has grown by leaps
            and bounds and has progressed to become one of the most popular and
            top techfests in India. Having successfully completed eight
            editions, Anokha has had an average annual participation of over
            10,000 of the best undergraduate engineering students from
            top-ranking engineering institutions in India like IITs, BITS, NITs
            and IIITs participating as well as partner universities in USA and
            Europe like University of New Mexico, EVRY France and Uppsala
            University-Sweden.
          </Typography>
        </div>
      </div>

      <div className="background-container">
        <div
          id="aboutamrita"
          className="w-full h-full lg:h-[100vh] block items-center justify-center lg:flex lg:justify-around pt-20 pb-10 px-16">
          <table className="w-full" data-aos="fade-up-right">
            <tbody>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 1.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 2.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 3.jpg")}></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 4.jpg")}></img>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            data-aos="fade-up-left"
            className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6">
            <Typography
              variant="h1"
              className="mb-2 text-lime-50 font-title text-center lg:text-left">
              ABOUT Amrita
            </Typography>
            <Typography className="text-lime-50 text-xl text-center lg:text-justify">
              Amrita Vishwa Vidyapeetham University's Coimbatore campus is a
              picturesque and serene educational institution located in the
              foothills of the Western Ghats. With state-of-the-art facilities
              and a commitment to academic excellence, the university offers a
              wide range of undergraduate and postgraduate programs in various
              fields, including engineering, management, medicine, arts, and
              sciences. The campus boasts of world-class research facilities and
              is known for its focus on innovation and entrepreneurship. Apart
              from academics, the university emphasizes the importance of
              extracurricular activities and encourages students to participate
              in cultural events, sports, and community service. The campus
              provides a holistic and enriching learning environment that
              fosters the intellectual and personal growth of its students,
              making it a top choice for students from all over India and around
              the world.
            </Typography>
          </div>
        </div>
      </div>

      <div
        id="c20g20"
        className="w-full h-full lg:h-[100vh] block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
      >
        <iframe src="https://www.youtube.com/embed/qJVUux1rAfI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-lg w-full h-full"></iframe>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6">
          <Typography
            variant="h1"
            className="mb-2 text-black font-title text-center lg:text-left">
            C20 G20
          </Typography>
          <Typography className="text-black text-xl text-center lg:text-justify">
            Anokha 2023 techfest is proud to be recognized as a side event of
            the prestigious Civil20 (C20) official engagement group of G20 with
            various workshops, innovation showcase & techfair aligning to the
            various working groups of C20, which are hosted by Amrita University
            with world-renowned humanitarian leader, Sri Mata Amritanandamayi
            Devi (AMMA) as Chancellor of the university
          </Typography>
        </div>
      </div>

      <div className="background-container">
        <div className="gradient"></div>
        <div className="gradient gradient-right"></div>
        <div
          id="eventide"
          className="w-full h-full lg:h-[100vh] block items-center justify-center lg:flex lg:justify-evenly pt-10 pb-10 mb-32 px-16">
          <table className="w-full" data-aos="fade-up-right">
            <tbody>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-1.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-2.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-3.jpg")}></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-4.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-4.jpg")}></img>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            data-aos="fade-up-left"
            className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6">
            <Typography
              variant="h1"
              className="mb-2 text-khaki font-title text-center lg:text-left">
              EVENTIDE
            </Typography>
            <Typography className="font-normal text-babyPowder text-xl text-center lg:text-justify">
              "All work and no play makes Jack a dull boy.", a proverb says. At
              Anokha, we understand this very well. Eventide, the cultural
              component of Anokha, has brought joy to thousands over the past
              decade through explosive performances from talented and
              captivating artists. The performances leave our audience in awe,
              showcasing the beauty and diversity of human expression through
              art. Some talented and passionate artists who have previously
              graced the stage include percussionist Sivamani; playback singers
              Vijay Prakash, Karthik, Benny Dayal, Haricharan, Rahul Nambiar,
              Alaap Raju, Shaktisree Gopalan, Sunitha Sarathy, Ranjani-Gayatri,
              and Nikita Gandhi. Eventide has become a platform for the
              celebration of India's rich cultural heritage, featuring
              performers from all over the country, representing a diverse range
              of genres. Between soulful classical music, scintillating film
              numbers and explosive percussion, we've explored every genre you
              can name. It's been an incredible experience to witness the talent
              and dedication of the performers, who have brought their cultures
              and traditions to life through their art, leaving a lasting
              impression on the audience.
            </Typography>
          </div>
        </div>
      </div>

      <div
        id="techfair"
        className="w-full h-full lg:h-[100vh] block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16">
        <table className="w-full" data-aos="fade-up-right">
          <tbody>
            <tr>
              <td>
              <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 1.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 2.jpg")}></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 3.jpg")}></img>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className="wrap">
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/8.jpg")}></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/9.jpg")}></img>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6">
          <Typography
            variant="h1"
            className="mb-2 text-backgroundColor font-title text-center lg:text-left">
            TECHFAIR
          </Typography>
          <Typography className="text-lg font-normal text-backgroundColor text-center lg:text-justify">
            Anokha, the national engineering techfest of Amrita School of
            Engineering, Coimbatore, is a 3-day congregation of some of the
            brightest minds in India. Founded in 2010, Anokha has grown by leaps
            and bounds and has progressed to become one of the most popular and
            top techfests in India. Having successfully completed eight
            editions, Anokha has had an average annual participation of over
            10,000 of the best undergraduate engineering students from
            top-ranking engineering institutions in India like IITs, BITS, NITs
            and IIITs participating as well as partner universities in USA and
            Europe like University of New Mexico, EVRY France and Uppsala
            University-Sweden.
          </Typography>
        </div>
      </div>

      <div className="background-container">
        <div className="gradient"></div>
        <div className="gradient gradient-right"></div>
        <div className="container w-full lg:h-[100vh] overflow-y-auto  no-scrollbar ml-auto mr-auto mt-24">
          <Typography
            variant="h1"
            className="mb-16 text-khaki text-center font-title">
            GALLERY
          </Typography>
          <div className="gallery">
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/1.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/3.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/4.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/5.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/6.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/7.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/8.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/9.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/10.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/11.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/12.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/13.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/14.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/17.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/gallery/18.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
