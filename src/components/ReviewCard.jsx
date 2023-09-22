import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover 2-[120px] h-[120px]"
        data-aos="fade-up"
        data-aos-delay="500"
      />
      <p
        className="mt-6 max-w-sm text-center info-text"
        data-aos="fade-up"
        data-aos-delay="750"
      >
        {feedback}
      </p>
      <div
        className="flex mt-3 justify-center items-center gap-2.5"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3
        className="mt-1 font-palanquin text-3xl text-center font-bold"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
