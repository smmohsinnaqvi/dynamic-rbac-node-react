import React from "react";
import { primary } from "../../Theme/colors";

const TabIcon = ({ icon: IconComponent, isActive }) => {
  const iconColor = isActive ? primary[550] : "#A0A0A0";

  return <IconComponent stroke={iconColor} />;
};

export default TabIcon;
