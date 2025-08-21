// components/CustomList.tsx
import React from "react";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import CommonAvatar from "../Avatar";
import { StarOutline, EditOutlined, MoreVert } from "@mui/icons-material";

interface ListItemData {
  id: string | number;
  name: string;
  subtitle: string;
  avatarUrl?: string;
  actions?: React.ReactNode;
}

interface CustomListProps {
  title?: string;
  data: ListItemData[];
  renderItem?: (item: ListItemData) => React.ReactNode;
  onItemClick?: (item: ListItemData) => void;
  footer?: React.ReactNode;
}

const CustomList: React.FC<CustomListProps> = ({
  data,
  renderItem,
  onItemClick,
}) => {
  const theme = useTheme();

  return (
    <Stack spacing={1}>
      {data.map((item, idx) => (
        <Box
          key={item.id}
          onClick={() => onItemClick?.(item)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1.2,
            px: 2,
            borderRadius: 3,
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              ".action-buttons": {
                opacity: 1,
              },
            },
          }}
        >
          {renderItem ? (
            renderItem(item)
          ) : (
            <>
              <Box display="flex" alignItems="center" gap={1.5}>
                <CommonAvatar
                  size="small"
                  firstName={item?.name?.split(" ")[0]}
                  lastName={item?.name?.split(" ")[1]}
                />
                <Box>
                  <Typography fontWeight={500}>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                className="action-buttons"
                sx={{
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <>
                  <IconButton>
                    <StarOutline />
                  </IconButton>
                  <IconButton>
                    <EditOutlined />
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </>
              </Stack>
            </>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default CustomList;
