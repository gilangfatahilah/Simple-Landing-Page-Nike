import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          data-aos="fade-right"
        >
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p
          className="mt-4 lg:max-w-lg info-text"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p
          className="mt-6 lg:max-w-lg info-text"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          Our dedication to detail and exllence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" aos="fade-right" aosDelay="500" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
          data-aos="fade-left"
          data-aos-delay="250"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
