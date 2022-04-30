import useViewport from "./../../viewport/useViewport";
import React from "react";
import { AboutCardDetails } from "../../Data/Cards";
import {
  StyledCardGroup,
  Para,
  Pic,
} from "../../Styled/components/CardGroupStyled";
import Typography from "@mui/material/Typography";

const CardGroup = ({ item: { title, heading, imageURL, isInverted } }) => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <>
      <StyledCardGroup
        dis={isMobile ? "inline" : "flex"}
        Direct={isInverted ? "row" : "row-reverse"}
        wd={isTablet ? "96%" : "85%"}
        mar={isTablet ? "4.5% 2%" : " 4.5% 0%"}
      >
        <Para wd={isMobile ? "100%" : "50%"} pad={isMobile ? "0 5%" : "0%"}>
          <Typography
            variant="h4"
            fontSize= "1.7rem"
            gutterBottom
            fontFamily="Manjari"
            fontStyle="normal"
            fontWeight="100"
          
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            fontFamily="Manjari"
            fontStyle="normal"
            fontWeight="100 !important"
            width={isMobile ? "92%" : "85%"}
            lineheight="26px"
            textAlign="justify"
            color=" #252525"
          >
            {heading}
          </Typography>
        </Para>
        <Pic wd={isMobile ? "100%" : "50%"} pad={isMobile ? "0 5%" : "0%"}>
          <img style={{ width: "80%" }} src={imageURL}></img>
        </Pic>
      </StyledCardGroup>
    </>
  );
};

export default CardGroup;
