// import { colors } from "@config/colors";

export const ButtonDark = {
  variants: [
    {
      props: { variant: "contained" },
      style: {
        color: "white",
        backgroundColor: "pink",
        fill: "currentColor",
      },
    },
  ],
};

export const ButtonLight = {
  styleOverrides: {
    root: {
      backgroundColor: "yellow",
      padding: 0,
    },
  },
  // variants: [
  //   {
  //     props: { variant: "contained" },
  //     style: {
  //       color: colors.greyText[0],
  //       backgroundColor: colors.primary[500],
  //       fill: "currentColor",
  //       // padding: "11.5px 12.5px",
  //       padding: "11.5px 32px",
  //       height: "48px",
  //       alignContent: "center",
  //       width: "inherit",
  //       boxShadow: "none",
  //       borderRadius: "8px",
  //       textTransform: "inherit",
  //       "&:hover": {
  //         backgroundColor: colors.primary[400],
  //         boxShadow: "none",
  //       },
  //       "&:active": {
  //         boxShadow: "none",
  //       },
  //       "&.MuiButtonBase-root.Mui-disabled": {
  //         backgroundColor: colors.primary[500],
  //         opacity: "0.2",

  //         // // opacity: "0.2",
  //         // color: colors.greyText[0],
  //         color: colors.greyText[0],
  //         // pointer: "none",
  //       },
  //     },
  //   },
  //   {
  //     props: { variant: "outlined" },
  //     style: {
  //       color: colors.primary[500],
  //       padding: "10px 32px",
  //       textTransform: "inherit",
  //       letterSpacing: "0.03em",
  //       backgroundColor: colors.greyText[0],
  //       border: `1.5px solid ${colors.primary[500]}`,
  //       borderRadius: "10px",
  //       "&:hover": {
  //         backgroundColor: colors.greyText[10],
  //         border: `1.5px solid ${colors.primary[500]}`,
  //       },
  //       "&:active": {
  //         backgroundColor: colors.greyText[10],
  //         border: `1.5px solid ${colors.primary[500]}`,
  //       },
  //       "&.MuiButtonBase-root.Mui-disabled": {
  //         backgroundColor: colors.greyText[0],
  //         border: `1.5px solid ${colors.primary[500]}`,
  //         opacity: "0.2",
  //         color: colors.primary[500],
  //         pointer: "none",
  //       },
  //     },
  //   },
  //   {
  //     props: { variant: "text" },
  //     style: {
  //       color: colors.greyText[900],
  //       textTransform: "inherit",
  //       letterSpacing: "0.03em",
  //       padding: "0",
  //       "&:hover": {
  //         color: colors.primary[500],
  //       },
  //       "&:active": {
  //         color: colors.primary[500],
  //       },
  //       "&.MuiButtonBase-root.Mui-disabled": {
  //         backgroundColor: colors.greyText[0],
  //         opacity: "0.2",
  //         color: colors.primary[500],
  //         pointer: "none",
  //       },
  //     },
  //   },
  // ],
};
