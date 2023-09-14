import TextField from "@mui/material/TextField";
import { InputProps } from "@mui/material";

function InputField({ variant, ref, children, ...props }) {
  const inputVariant = () => (
    <TextField
      variant={variant}
      autoComplete
      {...props}
      // sx={{
      //   "& .MuiInputBase-root": {
      //     background: "yellow",
      //     "& .MuiInputBase-input": {
      //       padding: "0 !important",
      //     },
      //   },
      // }}
    >
      {children}
    </TextField>
  );
  return inputVariant();
}

export default InputField;
