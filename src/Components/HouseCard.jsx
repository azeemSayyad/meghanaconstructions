import GallerySlides from "./GallerySlides";

const HouseCard = (data) => {
  const { title, city, locality, description, price, img, gallery } = data.data;

  return (
    <div class="flex w-auto  bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04) ">
      <div class="p-4 rounded-lg bg-gradient-to-br from-cyan-200 to-cyan-600 text-stone-700 overflow-hidden">
        {gallery ? (
          <GallerySlides gallery={gallery} />
        ) : (
          <img
            class="rounded-lg object-cover w-full h-[300px] hover:scale-105 duration-300"
            src={img}
            alt=""
          />
        )}
        <h5 class="my-2 text-xl font-medium overflow-hidden">{title}</h5>
        <div className="flex justify-between my-3">
          <p class="my-3">
            <span className=" font-bold">City </span>: {city}
          </p>
          <p className="p-2 bg-rose-500 rounded-lg text-white">
            Price: {price}
          </p>
        </div>
        <p class="my-3">
          <span className=" font-bold ">Locality </span>: {locality}
        </p>
        <p class="my-3">
          <span className=" font-bold ">Description </span>: {description}
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
