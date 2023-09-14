export const InputFieldDark = {
  variants: [
    {
      props: { variant: "standard" },
      style: {
        // color: colors.greyText[900],
        // backgroundColor: colors.greyText[40],
        fill: "currentColor",
      },
    },
  ],
};

export const InputFieldLight = {
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        "& .MuiInputBase-input": {
          padding: "0",
          "&.MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          // "&.Mui-focused": {
          //   boxShadow: "none",
          //   border: "none",
          //   outline: "none",
          // },
          // "&:hover": {
          //   boxShadow: "none",
          //   border: "none",
          //   outline: "none",
          // },
          // "&:hover": {
          //   backgroundColor: colors.primary[400],
          //   boxShadow: "none",
          // },
          // "&:active": {
          //   boxShadow: "none",
          // },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputBase-root.Mui-focused": {
          outline: "none",
          border: "none",
          boxShadow: "none",
          // background: "transparent",
          // background: "green",
        },
      },
    },
    {
      props: { variant: "fill" },
      style: {
        padding: "0",
        backgroundColor: "yellow",
      },
    },
  ],
};
