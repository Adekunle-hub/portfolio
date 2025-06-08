"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { FC } from "react";

type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;

};

const WorkSliderBtns: FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
 
  iconsStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}
        disabled={swiper.isBeginning}
        >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}
        disabled={swiper.isEnd}
        >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
