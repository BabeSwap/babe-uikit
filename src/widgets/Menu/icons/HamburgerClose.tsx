import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19 15" {...props}>
      <path d="M2 0.25C1.30964 0.25 0.75 0.809644 0.75 1.5C0.75 2.19036 1.30964 2.75 2 2.75H17C17.6904 2.75 18.25 2.19036 18.25 1.5C18.25 0.809644 17.6904 0.25 17 0.25H2Z" fill="#BD1075" stroke="#BD1075" stroke-width="0.5" stroke-linecap="round"/>
      <path d="M2 6.25C1.30964 6.25 0.75 6.80964 0.75 7.5C0.75 8.19036 1.30964 8.75 2 8.75H12C12.6904 8.75 13.25 8.19036 13.25 7.5C13.25 6.80964 12.6904 6.25 12 6.25H2Z" fill="#BD1075" stroke="#BD1075" stroke-width="0.5" stroke-linecap="round"/>
      <path d="M2 12.25C1.30964 12.25 0.75 12.8096 0.75 13.5C0.75 14.1904 1.30964 14.75 2 14.75H8C8.69036 14.75 9.25 14.1904 9.25 13.5C9.25 12.8096 8.69036 12.25 8 12.25H2Z" fill="#BD1075" stroke="#BD1075" stroke-width="0.5" stroke-linecap="round"/>
    </Svg>
  );
};

export default Icon;
