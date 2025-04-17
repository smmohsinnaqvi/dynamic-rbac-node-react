import { gray, themePalette } from "./colors";

export const themeInputs = {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "40px",
          maxHeigh: "auto",
          borderRadius: "7px",
          backgroundColor: "#fff",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "23px",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: themePalette.palette.gray.light,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: themePalette.palette.gray.main,
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: themePalette.palette.gray.main,
            borderWidth: 2,
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: themePalette.palette.error.main,
          },

          "&.Mui-disabled": {
            backgroundColor: gray[50],
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: gray[300],
            },
          },
        },

        input: {
          height: "38px",
          padding: "10px 14px",
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
            transitionProperty: "background-color, color",
          },
          "&::placeholder": {
            fontWeight: 400,
            color: themePalette.palette.gray.inputPlaceholderGray,
            opacity: 0.5,
          },
        },

        // ✨ Multiline textarea styles
        multiline: {
          padding: 0,
          height: "auto !important", // allow flexible height
          minHeight: "100px", // set a decent base height
          "& textarea": {
            padding: "10px 14px",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "23px",
            resize: "vertical", // optional: allow user resizing
            "&::placeholder": {
              color: themePalette.palette.gray.inputPlaceholderGray,
              opacity: 0.5,
            },
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          fontFamily: "Inter",
          fontSize: 12,

          "&.Mui-error": {
            marginTop: "4px",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: "#6B7280",
        },
      },
    },
  },
};
