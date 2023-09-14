import { createTheme } from "@mui/material/styles";
// import Typography from "@theme/Typography/Typography";
import { ButtonLight } from "./Button/Button";
import { InputFieldLight } from "./InputField/InputField";
import { CardLight } from "./Card/Card";

// console.log(DropdownLight)
// console.log(InputFieldLight)

const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      type: "light",
    },
  },
  // typography: Typography,
  components: {
    MuiButton: ButtonLight,
    MuiTextField: InputFieldLight,
    MuiCard: CardLight,
  },
});

export default LightTheme;
