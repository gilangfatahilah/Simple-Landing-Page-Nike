import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
        data-aos="fade-up"
        data-aos-delay="500"
      />
      <div
        className="mt-8 flex justify-start gap-2.5"
        data-aos="fade-up"
        data-aos-delay="750"
      >
        <img src={star} alt="Rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3
        className="mt-2 text-2xl leading-normal font-semibold font-palanquin"
        data-aos="fade-up"
        data-aos-delay="750"
      >
        {name}
      </h3>
      <p
        className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal"
        data-aos="fade-up"
        data-aos-delay="750"
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
