/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        DEFAULT: "0 5px 4px  rgba(0, 0, 0, 0.1)",
        flex: "0 6px 12px rgba(0, 0, 0, 0.25)",
        service:
          "0 44px 26px rgba(0, 0, 0, 0.05), 0 79px 32px 30px rgba(0, 0, 0, 0.01)",
      },
      dropShadow: {
        DEFAULT: "0 35px 35px rgba(0, 0, 0, 0.25)",
        service: ",",
      },
      screens: {
        mobile: "480px",
        tablet: "834px",
        laptop: "1440px",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "system-ui"],
        nunito: ["Nunito", "system-ui"],
      },
      fontSize: {
        eiteen: "1.125rem",
        xxs: '0.625rem'
      },
      colors: {
        "eco-green": {
          DEFAULT: "#77BB77",
          prime: "#8EC68E",
          dark: "#234623",
          faint: "#E8F4E8",
          faint2: "#A2C7A2",
          social: "#F4F6F9",
          agile: "#D2E8D2",
        },
        "eco-white": {
          DEFAULT: "#FAFAFA",
        },
        "eco-neutral": {
          DEFAULT: "#151413",
          thick: "#101828",
          thick2: "#9F9C9C",
          input: "#B5B3B3",
          prime: "#898483",
          border: "#CCCBCB",
          faint: "#9F9C9C",
          bg: "#B5B3B3",
          driver: "#F2F2F2",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          1: "#696F79",
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tblack: {
          DEFAULT: "#494949",
        },
        "base-white": "#FAFAFA",
        head: "#5CAE5C",
        error: "#C03744",
        warning: "#EDA145",
        peach: "#EDA14580",
        info: "#0A0B0A",
        tertiary: "#F5F5F5",
        silver: "#768EA9",
        modal: '#DEE5ED',
        clear: '#E7E7E7',
        connect: '#F2F4F5'
      },
      borderRadius: {
        20: "20px",
        normal: "36px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
