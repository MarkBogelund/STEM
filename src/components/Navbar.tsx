import { useEffect, useState, useContext } from "react";
import { sectionContext } from "../App";
import { act } from "react-dom/test-utils";

const Navbar = () => {
  const { setActiveSection, setActiveSectionColor, activeSectionColor } =
    useContext(sectionContext);
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
      setActiveSection("Science");
      setActiveSectionColor("bg-custom_blue");
    } else if (
      window.scrollY >= technologySection.offsetTop - offset &&
      window.scrollY <
        technologySection.offsetTop + technologySectionHeightInPixels - offset
    ) {
      setActiveSection("Technology");
      setActiveSectionColor("bg-custom_green");
    } else if (
      window.scrollY >= engenieeringSection.offsetTop - offset &&
      window.scrollY <
        engenieeringSection.offsetTop +
          engenieeringSectionHeightInPixels -
          offset
    ) {
      setActiveSection("Engineering");
      setActiveSectionColor("bg-custom_red");
    } else if (
      window.scrollY >= mathematicsSection.offsetTop - offset &&
      window.scrollY <
        mathematicsSection.offsetTop + mathematicsSectionHeightInPixels - offset
    ) {
      setActiveSection("Mathematics");
      setActiveSectionColor("bg-custom_yellow");
    } else {
      setActiveSection("STEM");
      setActiveSectionColor("bg-custom_blue");
    }
  });

  useEffect(() => {
    const navbarElement = document.querySelector("#navbar") as HTMLElement;
    console.log(navbarElement);
    if (navbarElement) {
      navbarElement.classList.add("transition-bg-color");
      setTimeout(() => {
        navbarElement.classList.remove("transition-bg-color");
      }, 300);
    }
  }, [activeSectionColor]);

  return (
    <div className="w-full h-[15vh] flex items-end bg-dark">
      <div
        id="navbar"
        className={`w-[100%] h-[37.5%] flex justify-center items-center gap-16 bottom-0 right-0 transition-all duration-250 ${activeSectionColor}`}
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
