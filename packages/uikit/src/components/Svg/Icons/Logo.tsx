import React from "react";
import { width } from "styled-system";
import Svg from "../Svg";


import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
   <img style={{width:'170px'}} src="https://gateway.pinata.cloud/ipfs/QmZwd5upRaWcwzsBExGxd4z5AYzk9F1FK9KTCdxvKRDz2U"/>
  );
};

export default Icon;
