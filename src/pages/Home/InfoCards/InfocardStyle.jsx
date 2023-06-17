import bgimage from "../../../assets/images/bg.png";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

export const images = {
  clock: clock,
  marker: marker,
  phone: phone,
};

// TODO: <Banner/> background image
export const bgImage = {
  backgroundImage: `url(${bgimage})`,
  backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  backgroundSize: "1300px 550px",
};

// TODO: <InfoCards/>. infoCard data
export const cardData = [
  {
    id: "1",
    name: "Opening Hours",
    description: "9am to 9.30am",
    icon: clock,
    bgClass: "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
  },
  {
    id: "2",
    name: "Visit our location",
    description: "9am to 9.30am",
    icon: phone,
    bgClass: " bg-secondary",
  },
  {
    id: "3",
    name: "Contact us now",
    description: "9am to 9.30am",
    icon: marker,
    bgClass: " bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
  },
  
];


// TODO: Creating a reusable custom button component

// eslint-disable-next-line react/prop-types
export const CustomButton = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] rounded-2xl border-none shadow-md text-black capitalize">
      {children}
    </button>
  );
};

// ${
//   index % 2 === 1
//     ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]"
//     : "bg-secondary"
// }
