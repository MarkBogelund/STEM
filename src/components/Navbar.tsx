import { useEffect, useState } from "react";

const Navbar = () => {
  const [navBarColor, setNavBarColor] = useState("bg-custom_blue");
  const offset = 400;

  const convertSectionHeightToPixels = (section: HTMLElement) => {
    const rect = section.getBoundingClientRect();
    const sectionHeightInPixels = rect.bottom - rect.top;
    return sectionHeightInPixels;
  };

  window.addEventListener("scroll", () => {
    const scienceSection = document.querySelector("#science") as HTMLElement;
    const technologySection = document.querySelector(
      "#technology"
    ) as HTMLElement;
    const engenieeringSection = document.querySelector(
      "#engenieering"
    ) as HTMLElement;
    const mathematicsSection = document.querySelector(
      "#mathematics"
    ) as HTMLElement;

    const scienceSectionHeightInPixels = convertSectionHeightToPixels(
      scienceSection!
    );

    const technologySectionHeightInPixels = convertSectionHeightToPixels(
      technologySection!
    );

    const engenieeringSectionHeightInPixels = convertSectionHeightToPixels(
      engenieeringSection!
    );

    const mathematicsSectionHeightInPixels = convertSectionHeightToPixels(
      mathematicsSection!
    );

    if (
      window.scrollY >= scienceSection.offsetTop - offset &&
      window.scrollY <
        scienceSection.offsetTop + scienceSectionHeightInPixels - offset
    ) {
      //console.log("science");
      setNavBarColor("bg-custom_blue");
    } else if (
      window.scrollY >= technologySection.offsetTop - offset &&
      window.scrollY <
        technologySection.offsetTop + technologySectionHeightInPixels - offset
    ) {
      //console.log("technology");
      setNavBarColor("bg-custom_green");
    } else if (
      window.scrollY >= engenieeringSection.offsetTop - offset &&
      window.scrollY <
        engenieeringSection.offsetTop +
          engenieeringSectionHeightInPixels -
          offset
    ) {
      //console.log("engenieering");
      setNavBarColor("bg-custom_red");
    } else if (
      window.scrollY >= mathematicsSection.offsetTop - offset &&
      window.scrollY <
        mathematicsSection.offsetTop + mathematicsSectionHeightInPixels - offset
    ) {
      //console.log("mathematics");
      setNavBarColor("bg-custom_yellow");
    }
  });

  useEffect(() => {
    const navbarElement = document.querySelector("#navbar") as HTMLElement;
    console.log(navbarElement);
    if (navbarElement) {
      navbarElement.classList.add("transition-bg-color");
      setTimeout(() => {
        navbarElement.classList.remove("transition-bg-color");
      }, 300); // Adjust the timing to match the transition duration
    }
  }, [navBarColor]);

  return (
    <div className="w-full h-[15vh] sticky top-0 flex items-end bg-dark">
      <div className="w-[30%] h-[70%] bg-light flex justify-center items-center bottom-0">
        <h1 className="text-7xl text-dark">STEM</h1>
      </div>
      <div
        id="navbar"
        className={`w-[75%] h-[37.5%] flex justify-center items-center gap-16 bottom-0 right-0 transition-all duration-250 ${navBarColor}`}
      >
        <a href="#science" className="text-lg text-light">
          Science
        </a>
        <a href="#technology" className="text-lg text-light">
          Technology
        </a>
        <a href="#engenieering" className="text-lg text-light">
          Engineering
        </a>
        <a href="#mathematics" className="text-lg text-light">
          Mathematics
        </a>
      </div>
    </div>
  );
};

export default Navbar;
