import React from "react";
import 'boxicons/css/boxicons.min.css'

const Footer = () => {
  return (
    <footer className=" bg-[#212331] text-[#6b6b6b]   body-font">
      <div className="container px-5 py-24 mx-auto flex items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0  mx-auto text-center md:text-left">
          <a className="flex flex-column gap-3 title-font text-center font-medium items-center md:justify-center justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-20 h-20 text-white "
              viewBox="0 0 24 24"
            >
              
              <image 
                 href="/kadi_logo.jpg" 
                  className=" text-white   rounded-full" 
                  width={20} 
                  height={20}
                     />
            </svg>
            </a>
            <div className="mt-3 text-center ">
            <h4 className="ml-3 text-sm text-white">LDRP Institute of Technology & Research</h4>
            <h4 className="ml-3 text-sm  text-[#c5c5c5]">Near KH-5,Sector-15,Gandhinagar - 382015</h4>
            </div>
        <div className="text-center flex flex-col gap-2 ">
          
          <p className="m-0 p-0 text-sm text-[#c5c5c5]"> <i className="bx bx-phone "></i> 
          + 91 - 079 - 23241492
          </p>
          <p className="m-0 p-0  text-[#c5c5c5]"> <i className="bx bxs-message"></i>  info@ldrp.ac.in</p>
          <a href="http://www.ldrp.ac.in" target="_blank" className="m-0 p-0  text-[#c5c5c5]"> <i className="bx bx-globe"></i>  www.ldrp.ac.in</a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left  text-center">
          {["STUDENT", "FACULTY", "ADMISSION", "RESOURCES"].map(
            (category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  text-[#c5c5c5] tracking-widest text-sm mb-3">
                  {category}
                </h2>
                <nav className="list-none mb-10">
                  {["First Link", "Second Link", "Third Link", "Fourth Link"].map(
                    (link, idx) => (
                      <li key={idx} className="my-4">
                        <a className=" text-[#c5c5c5]    hover:text-white">
                          {link}
                        </a>
                      </li>
                    )
                  )}
                </nav>
              </div>
            )
          )}
        </div>
      </div>
      <div className="bg-[#2b2d3b]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-[#c5c5c5] text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-[#c5c5c5] ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {[
              {
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
              },
              {
                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                circle: { cx: "4", cy: "4", r: "2" },
              },
            ].map((icon, idx) => (
              <a key={idx} className="text-gray-500 ml-3">
                <svg
                  fill="white"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={icon.circle ? "0" : "2"}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  {icon.d && <path d={icon.d}></path>}
                  {icon.circle && (
                    <circle
                      cx={icon.circle.cx}
                      cy={icon.circle.cy}
                      r={icon.circle.r}
                      stroke="none"
                    ></circle>
                  )}
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
