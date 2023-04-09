import Marquee from "react-fast-marquee";
import eventide from "../components/utils/eventide.png";

export default function Carousel() {
    return (
        <div className="h-[100dvh]">
            <Marquee pauseOnHover="true" gradient="false" gradientColor="[0, 0, 0]" speed={32}>
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
                <img src={eventide} alt="Anokha Logo" className="h-72 m-2" />
            </Marquee>
        </div>
    )
}