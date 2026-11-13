import { Copyright, EnvelopeSimple, GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 text-center">
      <div className="text-3xl font-bold mb-4">
        Preeti <span className="text-red-600">.</span>
      </div>
      <div className="flex items-center justify-center text-gray-600">
        <EnvelopeSimple size={20} />
        <span>preetiipriyaa@gmail.com</span>
      </div>
      <div className=" flex flex-col items-center"> 
        <p className=" flex items-center" >
          <Copyright size={16} /> 2025 Preeti Priya. All Rights Reserved
        </p>
        <ul className="flex items-center " >
            <a href="https://github.com/priyaapreeti" target="_blank">
                <GithubLogo size={32} />
            </a>
            <a href="https://www.linkedin.com/in/preetiipriya/" target="_blank">
                <LinkedinLogo size={32} />
            </a>
            <a href="https://x.com/preetistful" target="_blank">
                <TwitterLogo size={32} />
            </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
