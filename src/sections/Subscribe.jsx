import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3
        className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
        data-aos="fade-right"
      >
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsleteer
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <input
          type="text"
          placeholder="subscribe@me.com"
          className="input"
          data-aos="fade-left"
          data-aos-delay="250"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth aos="fade-left" aosDelay="500" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
