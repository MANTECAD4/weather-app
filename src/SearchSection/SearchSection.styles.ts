import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// ownerState
export const SearchButton = styled(Button)(({ theme /* ...ownerState */ }) =>
  theme.unstable_sx({
    height: "100%",
    backgroundColor: "hsl(233, 67%, 56%)",
    color: "#fff",
    textTransform: "none",
    px: "3.2rem",
    borderRadius: "var(--border-radius-1)",
    fontWeight: 400,
    ml: 1.6,
    fontSize: "1.6rem",
  }),
);
