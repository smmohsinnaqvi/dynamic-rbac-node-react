import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { gray, themePalette } from "../../Theme/colors";
import { useLocation, useNavigate } from "react-router-dom";

interface ActionBarProps {
  breadCrumbs: { label: string; path: string }[];
}

const ActionBar: React.FC<ActionBarProps> = ({ breadCrumbs }) => {
  // const breadCrumbs = [
  //   { label: "Home", path: "/" },
  //   { label: "Dashboard", path: "/dashboard" },
  //   { label: "Projects", path: "/projects" },
  //   { label: "Current Project", path: "/projects/123" },
  // ];
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <Stack
      flexDirection={"row"}
      sx={{
        borderBottom: `1px solid ${gray[650]}`,
        borderTop: `1px solid ${gray[650]}`,
        height: 50,
        borderRadius: 1,
        backgroundColor: themePalette.palette.common.white,
        position: "sticky",
        zIndex: 50,
        top: 0,
        px: 2,

        alignItems: "center",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        {breadCrumbs.map((item, index) =>
          index === breadCrumbs.length - 1 ? (
            <Typography
              key={item.path}
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {item.label}
            </Typography>
          ) : (
            <Link
              key={item.path}
              underline="hover"
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              sx={{ cursor: "pointer" }}
            >
              {item.label}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Stack>
  );
};

export default ActionBar;
