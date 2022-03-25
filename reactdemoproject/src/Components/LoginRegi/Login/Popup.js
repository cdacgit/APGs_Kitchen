import React from "react";
import { PopupBox,Box,CloseIcon } from "./PopupElement";

const Popup = props => {
  return (
    <PopupBox>
      <Box>
        <CloseIcon onClick={props.handleClose}>x</CloseIcon>
        {props.content}
      </Box>
    </PopupBox>
  );
};
 
export default Popup;