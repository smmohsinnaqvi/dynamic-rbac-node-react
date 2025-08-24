import React from "react";
import { Avatar } from "@mui/material";

type Size = "small" | "medium" | "large";

interface CommonAvatarProps {
  firstName: string;
  lastName: string;
  src?: string;
  size?: Size;
}

const sizeMap: Record<
  Size,
  { width: number; height: number; fontSize: number }
> = {
  small: { width: 32, height: 32, fontSize: 14 },
  medium: { width: 40, height: 40, fontSize: 16 },
  large: { width: 56, height: 56, fontSize: 20 },
};

// Generates a consistent color using HSL based on string hash
const generateColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 60%, 60%)`;
};

const CommonAvatar: React.FC<CommonAvatarProps> = ({
  firstName,
  lastName,
  src,
  size = "medium",
}) => {
  const initials = `${firstName?.[0] ?? ""}${
    lastName?.[0] ?? ""
  }`.toUpperCase();
  const fullName = `${firstName}${lastName}`;
  const { width, height, fontSize } = sizeMap[size];
  const fallbackColor = generateColorFromName(fullName);

  return (
    <Avatar
      src={src}
      sx={{
        width,
        height,
        fontSize,
        bgcolor: !src ? fallbackColor : undefined,
        color: "#fff",
      }}
    >
      {!src && initials}
    </Avatar>
  );
};

export default CommonAvatar;
