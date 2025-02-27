import React from "react";

const MNSvgIcon = ({ Icon, color = "black", size = 50 }) => {
  return Icon ? <Icon width={size} height={size} fill={color} /> : null;
};

export default MNSvgIcon;
