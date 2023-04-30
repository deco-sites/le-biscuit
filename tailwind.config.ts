// Daisi UI theme
export const theme = {
  "primary": "#ed1b2f",
  "red-icon": "#f15766",
  "camp-grey": "#f5f5f5",
  "grey-icon": "#444444",
  "bottom-green": "#27ae60",
  "blue-text-discount": "#006ca1",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        "primary": "#ed1b2f",
        "red-icon": "#f15766",
        "camp-grey": "#f5f5f5",
        "grey-icon": "#444444",
        "bottom-green": "#27ae60",
        "blue-text-discount": "#006ca1",
      },
      fontSize: {
        "heading-1": ["56px", "67.2px"],
        "heading-2": ["24px", "28.8px"],
        "heading-3": ["20px", "24px"],
        "menu": ["16px", "20px"],
        "button": ["14px", "18px"],
        "body": ["16px", "20px"],
        "caption": ["13px", "16px"],
        "list-price": ["10px", "20px"],
      },
      fontWeight: {
        "heading-1": "500",
        "heading-2": "500",
        "heading-3": "500",
        "menu": "400",
        "button": "700",
        "body": "400",
        "caption": "400",
        "list-price": "400",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
        "progress": "progress-frame ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "progress-frame": {
          from: {
            "--dot-progress": "0%",
          },
          to: {
            "--dot-progress": "100%",
          },
        },
      },
    },
    boxShadow: {
      sm: "0px 1px 3px 0px #00000014",
      default: "0px 1px 4px 0px #0000001F",
      md: "0px 1px 5px 0px #00000024",
      lg: "0px 4px 10px 0px #0000001F",
    },
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
      serif: ["inherit", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    plugins: {
      backdrop: {
        "&::backdrop": {
          background: "rgba(0, 0, 0, 0.5)",
        },
      },
      "scroll-snap-center": {
        "scroll-snap-align": "center",
      },
      "scroll-x-mandatory": {
        "scroll-snap-type": "x mandatory",
      },
      "snap-x": {
        "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
      },
      "snap-mandatory": {
        "--tw-scroll-snap-strictness": "mandatory",
      },
      "scrollbar-none": {
        "scrollbar-width": "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      "details-arrow-none": {
        "&::-webkit-details-marker": {
          display: "none",
        },
      },
      "scrollbar-black": {
        "scrollbar-width": "auto",
        "scrollbar-color": "#030303 #ffffff",
  
        "&::-webkit-scrollbar": {
          "width": "10px",
          "height": "10px",
        },
  
        "&::-webkit-scrollbar-track": {
          "background": "#ffffff",
        },
  
        "&::-webkit-scrollbar-thumb": {
          "background-color": "#030303",
          "border-radius": "10px",
          "border": "3px solid #ffffff",
        },
      },
      "scrollbar-black-tranparent-y": {
        "scrollbar-width": "auto",
        "scrollbar-color": "#030303 ",
  
        "&::-webkit-scrollbar": {
          "width": "4px",
          "height": "0px",
        },
  
        "&::-webkit-scrollbar-thumb": {
          "background-color": "#030303",
          "border-radius": "10px",
        },
      },
  
      "scrollbar-black-tranparent-x": {
        "scrollbar-width": "auto",
        "scrollbar-color": "#030303 ",
  
        "&::-webkit-scrollbar": {
          "width": "0px",
          "height": "4px",
        },
  
        "&::-webkit-scrollbar-thumb": {
          "background-color": "#030303",
          "border-radius": "10px",
        },
      }
    }
  },
};
