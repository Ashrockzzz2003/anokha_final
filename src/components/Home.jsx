import * as React from "react";
import logo from "../components/utils/anokha_2023_white.png";
import "../components/styles/home.css";
import "../components/styles/gallery.css";
import "../components/styles/background.css";
import eventide from "../components/utils/eventide.png";
import ab1 from "../components/utils/cbe campus.svg";
import { Typography } from "@material-tailwind/react";
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
        {/* <Marquee
          pauseOnHover="true"
          gradient="false"
          gradientColor="[0, 0, 0]"
          speed={60}
          className="bg-marqeeOrange"
        >
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
          <span class="text-4xl font-title mx-8">DARE TO BE DIFFERENT</span>
        </Marquee> */}
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
          className="mb-8"
        >
          <img src={logo} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
          <img src={logo} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
          <img src={logo} alt="Anokha Logo" className="h-32 ml-auto mr-auto" />
        </Marquee>
      </div>

      <div
        id="about"
        className="w-full h-full lg:h-[100vh] block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
      >
        <table className="w-full" data-aos="fade-up-right">
          <tbody>
            <tr>
              <td>
                <div className="wrap">
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/1.jpg")}
                  ></img>
                  <img className="card" alt="Eventide" src={eventide}></img>
                  <img className="card" alt="Eventide" src={eventide}></img>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="wrap">
                  <img className="card" alt="Eventide" src={eventide}></img>
                  <img className="card" alt="Eventide" src={eventide}></img>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-black font-title text-center lg:text-left"
          >
            ABOUT ANOKHA
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
        <div className="gradient"></div>
        <div className="gradient gradient-right"></div>
        <div
          id="aboutamrita"
          className="w-full h-full lg:h-[100vh] block items-center justify-center lg:flex lg:justify-around pt-20 pb-10 px-16"
        >
          <table className="w-full" data-aos="fade-up-right">
            <tbody>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 1.jpg")}
                    ></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 2.jpg")}
                    ></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 3.jpg")}
                    ></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/AM 4.jpg")}
                    ></img>
                    <img className="card" alt="Eventide" src={eventide}></img>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            data-aos="fade-up-left"
            className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
          >
            <Typography
              variant="h1"
              className="mb-2 text-lime-50 font-title text-center lg:text-left"
            >
              ABOUT AMRITA
            </Typography>
            <Typography className="text-lime-50 text-xl text-center lg:text-justify">
              Anokha, the national engineering techfest of Amrita School of
              Engineering, Coimbatore, is a 3-day congregation of some of the
              brightest minds in India. Founded in 2010, Anokha has grown by
              leaps and bounds and has progressed to become one of the most
              popular and top techfests in India. Having successfully completed
              eight editions, Anokha has had an average annual participation of
              over 10,000 of the best undergraduate engineering students from
              top-ranking engineering institutions in India like IITs, BITS,
              NITs and IIITs participating as well as partner universities in
              USA and Europe like University of New Mexico, EVRY France and
              Uppsala University-Sweden.
            </Typography>
          </div>
        </div>
      </div>

      <div
        id="c20g20"
        className="w-full h-full lg:h-[100vh] block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
      >
        <table className="w-full" data-aos="fade-up-right">
          <tbody>
            <iframe
              width="560"
              height="320"
              src="https://www.youtube.com/embed/qJVUux1rAfI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-lg"
            ></iframe>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-black font-title text-center lg:text-left"
          >
            Civil 20 India
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
        <div className="gradient"></div>
        <div className="gradient gradient-right"></div>
        <div
          id="eventide"
          className="w-full h-full lg:h-[100vh] block items-center justify-center lg:flex lg:justify-evenly pt-10 pb-10 mb-32 px-16"
        >
          <table className="w-full" data-aos="fade-up-right">
            <tbody>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-1.jpg")}
                    ></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-2.jpg")}
                    ></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-3.jpg")}
                    ></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wrap">
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-4.jpg")}
                    ></img>
                    <img
                      className="card"
                      alt="Eventide"
                      src={require("./utils/AHK/Eventide-4.jpg")}
                    ></img>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            data-aos="fade-up-left"
            className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
          >
            <Typography
              variant="h1"
              className="mb-2 text-khaki font-title text-center lg:text-left"
            >
              EVENTIDE
            </Typography>
            <Typography className="font-normal text-babyPowder text-xl text-center lg:text-justify">
              Anokha, the national engineering techfest of Amrita School of
              Engineering, Coimbatore, is a 3-day congregation of some of the
              brightest minds in India. Founded in 2010, Anokha has grown by
              leaps and bounds and has progressed to become one of the most
              popular and top techfests in India. Having successfully completed
              eight editions, Anokha has had an average annual participation of
              over 10,000 of the best undergraduate engineering students from
              top-ranking engineering institutions in India like IITs, BITS,
              NITs and IIITs participating as well as partner universities in
              USA and Europe like University of New Mexico, EVRY France and
              Uppsala University-Sweden.
            </Typography>
          </div>
        </div>
      </div>

      <div
        id="techfair"
        className="w-full h-full lg:h-[100vh] block items-center justify-center lg:flex lg:justify-evenly bg-babyPowder mb-0 pb-32 pt-32 px-16"
      >
        <table className="w-full" data-aos="fade-up-right">
          <tbody>
            <tr>
              <td>
                <div className="wrap">
                  <img className="card v2" alt="Eventide" src={eventide}></img>
                  <img className="card v2" alt="Eventide" src={eventide}></img>
                  <img className="card v2" alt="Eventide" src={eventide}></img>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="wrap">
                  <img className="card v2" alt="Eventide" src={eventide}></img>
                  <img className="card v2" alt="Eventide" src={eventide}></img>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-backgroundColor font-title text-center lg:text-left"
          >
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
            className="mb-16 text-khaki text-center font-title"
          >
            GALLERY
          </Typography>
          <div className="gallery">
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
            <div className="gallery-item">
              <figure>
                <img src="https://anokha-image.securehuman.workers.dev/0:/home/2.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
