import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// Style
import { FrontContainer } from "../../style";
import MainSide from "../../components/FrontSide/MainSide";
import TeamOrganized from "../../components/FrontSide/TeamOrganized";
import FrontClientSide from "../../components/FrontSide/FrontClientSide";
import FrontMobileSide from "../../components/FrontSide/FrontMobileSide";
import FrontChoiceSide from "../../components/FrontSide/FrontChoiceSide";
import Frontnavbar from "../../components/FrontNavbar/frontnavbar";
import ScrollToTop from "../../ScrollToTop";
import FrontLoadingPage from "../../components/Loading/FrontLoadingPage";

function Main() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <FrontLoadingPage setLoading={setLoading} />
          ) : (
            <FrontContainer>
              <ScrollToTop />
              <Frontnavbar />
              <MainSide />
              <TeamOrganized />
              <FrontClientSide />
              <FrontMobileSide />
              <FrontChoiceSide />
            </FrontContainer>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default Main;
