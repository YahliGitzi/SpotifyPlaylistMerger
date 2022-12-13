import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const LoginContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "50%",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginTitle = styled("div")({
  fontSize: "3rem",
  fontWeight: 600,
});

export const LoginBtn = styled(Button)({
  width: "20%",
  backgroundColor: "#32C732AF",
  color: "#fffff7",
  "&:hover": {
    backgroundColor: "#32C732",
  },
  borderRadius: "15px 5px",
  marginTop: "20px",
});
