import { FaAddressCard } from "react-icons/fa";
import { BiMobileAlt } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="">
      <p className="font-bold text-black text-4xl text-center my-5 p-2">
        Contact Us
      </p>
      <p className="my-3 p-2 text-center">Getting in touch is Easy!</p>
      <div className=" hidden w-full lg:grid lg:grid-cols-3 h-[200px]  space-x-2 items-center justify-center mx-4">
        <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
          <FaAddressCard fontSize={"50px"} />
          <p className="font-semibold">Address</p>
          <p>Sujathanagar, Kothagudem, Telangana</p>
        </div>
        <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
          <BiMobileAlt fontSize={"50px"} />
          <p className="font-semibold">Phone & E-mail</p>
          <p>
            <span className="font-semibold">Contact:</span> 9347393345
          </p>
          <p>
            <span className="font-semibold">Email:</span> meghanaconstructions@gmail.com
          </p>
        </div>
        <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
          <FaBusinessTime fontSize={"50px"} />
          <p className="font-semibold">Business Hours</p>
          <p>Monday-Friday</p>
          <p>9:00 am - 5:00 pm</p>
        </div>
      </div>

      <div className="lg:hidden mx-4">
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
            <FaAddressCard fontSize={"50px"} />
            <p className="font-semibold">Address</p>
            <p>Sujathanagar, Kothagudem, Telangana</p>
          </div>
          <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
            <BiMobileAlt fontSize={"50px"} />
            <p className="font-semibold">Phone & E-mail</p>
            <p>
              <span className="font-semibold">Contact:</span> 9347393345
            </p>
            <p>
              <span className="font-semibold">Email:</span> meghanaconstructions@gmail.com
            </p>
          </div>
          <div className=" rounded-lg p-4 flex items-center justify-center flex-col h-full w-[400px]">
            <FaBusinessTime fontSize={"50px"} />
            <p className="font-semibold">Business Hours</p>
            <p>Monday-Friday</p>
            <p>9:00 am - 5:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
