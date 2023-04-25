import * as React from "react";
import iete from "../components/utils/iete.jpg";
import icici from "../components/utils/icici.jpg";
import clab from "../components/utils/clab.jpg";
import jaj from "../components/utils/jaj.jpg";
import "../components/styles/home.css";
import "../components/styles/gallery.css";
import ab1 from "../components/utils/cbe campus.svg";
import { Typography } from "@material-tailwind/react";
import anokha_text from "../components/utils/Anokha web hero.png";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import photo1 from "./utils/AHK/Gallery/1.jpeg";
import photo2 from "./utils/AHK/Gallery/2.jpeg";
import photo3 from "./utils/AHK/Gallery/3.jpeg";
import photo4 from "./utils/AHK/Gallery/4.jpeg";
import photo5 from "./utils/AHK/Gallery/5.jpeg";
import photo6 from "./utils/AHK/Gallery/6.jpeg";
import photo7 from "./utils/AHK/Gallery/7.jpeg";
import photo8 from "./utils/AHK/Gallery/8.jpeg";
import photo9 from "./utils/AHK/Gallery/9.jpeg";
import anokha_app from "./utils/anokha_app.png";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
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
            className="w-auto pt-12 lg:h-64 px-24 ml-auto mr-auto"
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
          className="mb-8"
        >
          <img
            src={icici}
            alt="Anokha Logo"
            className="h-32 ml-auto mr-auto rounded-lg"
          />
          <img
            src={clab}
            alt="Anokha Logo"
            className="h-32 ml-auto mr-auto rounded-lg "
          />
          <img
            src={iete}
            alt="Anokha Logo"
            className="h-32 ml-auto mr-auto rounded-lg"
          />
          <img
            src={jaj}
            alt="Anokha Logo"
            className="h-32 ml-auto mr-auto rounded-lg"
          />
        </Marquee>
      </div>
      <Marquee
        pauseOnHover="true"
        gradient="false"
        gradientColor="[0, 0, 0]"
        speed={80}
        className="h-14 bg-marqueeBg"
      >
        <span class="text-4xl mx-4">#DareToBeDifferent</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#YouAreTheLight</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#NoOneIsLeftBehind</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#BiggerAndBetter</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#DareToBeDifferent</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#YouAreTheLight</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#NoOneIsLeftBehind</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#BiggerAndBetter</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#DareToBeDifferent</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#YouAreTheLight</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#NoOneIsLeftBehind</span>
        <span class="text-4xl mx-4">•</span>

        <span class="text-4xl mx-4">#BiggerAndBetter</span>
        <span class="text-4xl mx-4">•</span>
      </Marquee>
      <div
        id={"about"}
        className="w-full h-full lg:h-screen block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
      >
        <table className="w-full mr-6" data-aos="fade-up-right">
          <tbody>
            <tr>
              <td>
                <div className="wrap">
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/1.jpg")}
                  ></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/2.jpg")}
                  ></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/5.jpg")}
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
                    src={require("./utils/AHK/8.jpg")}
                  ></img>
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/9.jpg")}
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
            className="mb-2 text-black uppercase font-title text-center lg:text-left"
          >
            ABOUT ANOKHA
          </Typography>
          <Typography className="text-black text-xl text-center lg:text-justify">
            Anokha, the national techfest of Amrita Vishwa Vidyapeetham
            Coimbatore, is a 3-day congregation of some of the brightest minds
            in India. Founded in 2010, Anokha has grown by leaps and bounds and
            has progressed to become one of the leading techfests in India.
            Anokha has successfully completed ten editions and boasts an average
            annual participation of over 10,000 outstanding students from
            top-ranking engineering institutions in India like IITs, BITS, NITs
            and IIITs as well as partner universities in USA and Europe namely
            University of New Mexico, EVRY France and Uppsala University-Sweden.
          </Typography>
        </div>
      </div>

      <div
        id={"aboutamrita"}
        className="w-full h-full lg:min-h-screen block items-center justify-center lg:flex lg:justify-evenly pt-10 pb-10 mb-32 px-16"
      >
        <table className="w-full mr-6" data-aos="fade-up-right">
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
                  <img
                    className="card"
                    alt="Eventide"
                    src={require("./utils/AHK/AM 6.jpg")}
                  ></img>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up-left"
          className="lg:mt-24 mt-24 mb-24 lg:ml-32 lg:w-fit lg:px-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-lime-50 uppercase font-title text-center lg:text-left"
          >
            ABOUT Amrita
          </Typography>
          <Typography className="text-lime-50 text-xl text-center lg:text-justify">
            Amrita Vishwa Vidyapeetham Coimbatore campus is a picturesque and
            serene educational institution located in the foothills of the
            Western Ghats. With state-of-the-art facilities and a commitment to
            academic excellence, the university offers a wide range of
            undergraduate and postgraduate programs in various fields, including
            engineering, management, medicine, arts, and sciences. The campus
            boasts of world-class research facilities and is known for its focus
            on innovation and entrepreneurship. Apart from academics, the
            university emphasizes the importance of extracurricular activities
            and encourages students to participate in cultural events, sports,
            and community service. The campus provides a holistic and enriching
            learning environment that fosters the intellectual and personal
            growth of its students, making it a top choice for students from all
            over India and around the world.
          </Typography>
        </div>
      </div>

      <div
        id={"c20g20"}
        className="w-full h-full lg:h-screen block bg-babyPowder items-center justify-center lg:flex lg:justify-around py-10 px-16"
      >
        <div
          className=" flex justify-center lg:w-full"
          data-aos="fade-up-right"
        >
          <iframe
            className="aspect-video rounded-lg lg:w-full"
            src="https://www.youtube.com/embed/qJVUux1rAfI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div
          data-aos="fade-up-left"
          className="lg:m-16 mt-24 lg:ml-32 lg:w-fit lg:pr-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-black font-title text-center lg:text-left"
          >
            C20 G20
          </Typography>
          <Typography className="text-black text-xl text-center lg:text-justify">
            Anokha 2023 techfest is proud to be recognized as a supporting event
            of the prestigious Civil20 (C20), official engagement group of G20.
            The fest orchestrates a plethora of workshops, innovation showcases
            and a techfair aligning to the various working groups of C20, which
            are hosted by Amrita University under the guidance of world-renowned
            humanitarian leader, Sri Mata Amritanandamayi Devi (AMMA), the
            Chancellor of the university.
          </Typography>
        </div>
      </div>

      <div
        id={"eventide"}
        className="w-full h-full lg:min-h-screen block items-center justify-center lg:flex lg:justify-evenly pt-10 pb-10 mb-32 px-16"
      >
        
        <table className="w-full mr-6" data-aos="fade-up-right">
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
          className="lg:m-16 mt-32 lg:ml-32 lg:w-fit lg:px-6"
        >
          <Typography
            variant="h1"
            className="mb-2 text-khaki font-title text-center lg:text-left"
          >
            EVENTIDE
          </Typography>
          <Typography className="font-normal text-babyPowder text-xl text-center lg:text-justify">
            Eventide, the cultural extravaganza of Anokha, has brought joy to
            thousands over the past decade through explosive performances from
            talented and captivating artists. The performances leave our
            audience in awe, showcasing the magnificence of human expression
            through art. Some passionate artists who have previously graced the
            stage include percussionist Sivamani; playback singers Vijay
            Prakash, Karthik, Benny Dayal, Haricharan, Rahul Nambiar, Alaap
            Raju, Shaktisree Gopalan, Sunitha Sarathy, Ranjani-Gayatri, and
            Nikita Gandhi. Eventide has become a platform for the celebration of
            India's rich cultural heritage and diversity featuring performers
            from all over the country. Between soulful classical music,
            scintillating film numbers and explosive percussion, we've explored
            every genre you can name. It's been an incredible experience to
            witness the dedication of the performers who have left a lasting
            impression on the audience.
          </Typography>
        </div>
      </div>

      <div
        id={"techfair"}
        className="w-full h-full lg:h-screen block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
      >
        <div
          className=" flex justify-center lg:w-full"
          data-aos="fade-up-right"
        >
          <iframe
            className="aspect-video rounded-lg lg:w-full"
            src="https://www.youtube.com/embed/tZtuf_sxObU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
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

      <div
        className="container w-full lg:h-screen overflow-y-auto  no-scrollbar ml-auto mr-auto mt-24"
        id="gallery"
      >
        <Typography
          variant="h1"
          className="mb-16 text-khaki text-center font-title"
        >
          GALLERY
        </Typography>
        <div className="gallery">
          <div className="gallery-item">
            <figure>
              <img src={photo1} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo2} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo3} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo4} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo5} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo6} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo7} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo8} alt="gallery" />
            </figure>
          </div>
          <div className="gallery-item">
            <figure>
              <img src={photo9} alt="gallery" />
            </figure>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full block bg-babyPowder items-center justify-center lg:flex lg:justify-around pt-10 pb-10 px-16"
        id="app"
      >
        <div className="lg:w-1/2">
          <Typography
            variant="h1"
            className="mb-8 text-backgroundColor text-center font-title"
          >
            Anokha'23 App
          </Typography>
          <Typography className="text-xl font-normal text-backgroundColor text-center lg:text-justify pt-8 pb-8">
            Elevate your Anokha experience with the <b>Anokha'23</b> App! Stay connected, register for events, and receive updates all in one place. Download now from the Play Store to elevate your experience and make the most of this exciting event.
          </Typography>
          <div className="w-fit ml-auto mr-auto">
            <a href='https://play.google.com/store/apps/details?id=com.vaisakhkrishnank.anokha_home&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target={"_blank"} rel={"noreferrer"}><img alt='Get it on Google Play' className="w-64" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-4">
          <img src={anokha_app} className="w-[280px] ml-auto mr-auto" alt="App Anokha" />
        </div>
      </div>
    </div>
  );
};

export default Home;
