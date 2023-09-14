export const CardLight = {
  styleOverrides: {
    root: {
      backgroundColor: "#ffa81a",
      padding: 0,
      transition: "all 0.2s",
      color: "#fff",
      "&:hover": {
        color: "#000",
        backgroundColor: "#fff !important",
        transform: "translateY(-3%)",
      },
      "& .MuiCardContent-root": {
        padding: "20px",
        paddingBottom: "15px",
        border: "1px solid rgba(255,255,255,.2)",
        borderTop: "0",
        // backgroundColor: "#fff !important",
      },
    },
  },
};
