import Image from "next/image";
import { assets, infoList } from "../../../assets/assets.js";
const About = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto py-12 px-6" id="about">
      <h4 className="mb-4 text-lg text-center">Introduction</h4>
      <h2 className="text-5xl text-center mb-12"> About me</h2>
      <div>
        {/* <div>
            {/* <Image src={assets.user_image}/> */}
        {/* </div>  */}
        <div className="text-center mx-auto flex flex-col items-center">
          <p className="mb-16 max-w-2xl mx-auto leading-relaxed text-lg">
            Experinenced software engineer with nearly 3 years of professional
            experience building responsive, user-friendly applications. Over
            time, I've expanded into full-stack development with the MERN stack,
            giving me end-to-end expertise in designing and delivering modern
            web solutions.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8">
            {infoList.map(({ icon, iconDark, title, description }, idx) => (
              <li key={idx} className="border border-gray-400 rounded flex flex-col items-center p-3 cursor-pointer hover:scale-105 hover:bg-lightHover">
                <Image src={icon} alt={title} className="w-7 mt-3"/>
                <h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
                <p className="text-gray-600 text-sm ">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
