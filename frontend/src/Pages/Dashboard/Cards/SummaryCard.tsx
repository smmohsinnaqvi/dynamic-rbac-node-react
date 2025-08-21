import { Stack, Typography } from "@mui/material";
import { mecGrey } from "../../../Theme/colors";
import MNGridCard from "../../../Components/MNGridCard";
import CommonAvatar from "../../../Components/Avatar";

const SummaryCard = ({
  label,
  value,
  subtitle = "",
  size,
  height,
  isAvatar = false,
}) => (
  <MNGridCard size={size} sx={{ height: height }}>
    <Stack spacing={2} justifyContent={"space-between"} p={2}>
      <Typography variant="summary_card_label">{label}</Typography>
      <Stack>
        {isAvatar ? (
          <Stack spacing={1}>
            <CommonAvatar
              size="small"
              firstName={value?.split(" ")[0]}
              lastName={value?.split(" ")[1]}
            />
            <Typography variant="mec_body_12">{value}</Typography>
          </Stack>
        ) : (
          <Typography variant="summary_card_h2">{value}</Typography>
        )}
        {subtitle && (
          <Typography
            variant={isAvatar ? "mec_body_10" : "mec_body"}
            color={mecGrey[555]}
          >
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Stack>
  </MNGridCard>
);

export default SummaryCard;
