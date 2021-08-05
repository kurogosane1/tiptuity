//Import Packages
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
//Import StyleComponenets
import Logo from "../../Assets/qr-code.svg";
import {
  NavBarContainer,
  NavBlock,
  FrontLogo,
  FrontLogoImage,
  FrontLinks,
  SideBlock,
  SideLinks,
  SideLogo,
  Cross,
  SpacerSideNav,
  NavBarSideContainer,
} from "../../style";

function Frontnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "name", title: "Home", href: "#Home" },
    { name: "information", title: "Information", href: "#Information" },
    { name: "clients", title: "Clients", href: "#Clients" },
    { name: "mobile", title: "Mobile", href: "#Mobile" },
    { name: "pricing", title: "Pricing", href: "#Pricing" },
  ];

  return (
    <AnimatePresence>
      <NavBarContainer>
        <NavBlock>
          <FrontLogo>
            <FrontLogoImage
              src={Logo}
              alt="Front logo title"
              layoutId="FrontLoading"
            />
            <span>TipTuity</span>
          </FrontLogo>
          <FrontLinks>
            {links.map((info, index) => (
              <li
                id={info.name}
                data-aos="fade-left"
                data-aos-delay={`${index * 100}`}>
                <a href={info.href}>{info.title}</a>
              </li>
            ))}
          </FrontLinks>
          {isOpen ? (
            <Cross
              className="bx bx-x"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <Cross
              className="bx bx-menu-alt-right"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </NavBlock>
      </NavBarContainer>
      <NavBarSideContainer side={isOpen ? "0" : "-100%"}>
        <SideBlock>
          <SpacerSideNav />
          <SideLinks size={0}>
            {links.map((info, index) => (
              <li
                onClick={() => setIsOpen(false)}
                id={info.name}
                data-aos="fade-left"
                data-aos-delay={`${index * 100}`}>
                <a href={info.href}>{info.title}</a>
              </li>
            ))}
          </SideLinks>
        </SideBlock>
      </NavBarSideContainer>
    </AnimatePresence>
  );
}

export default Frontnavbar;
