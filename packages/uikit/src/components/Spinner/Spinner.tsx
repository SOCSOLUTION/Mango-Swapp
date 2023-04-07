import React from "react";
import { Image, Box } from "@pancakeswap/uikit";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        src="https://www.pinclipart.com/picdir/big/332-3320373_mango-png-hd-photo-mango-cartoon-clipart.png"
        alt="freeswapp3d-Spinner"
      />
    </Box>
  );
};

export default Spinner;
