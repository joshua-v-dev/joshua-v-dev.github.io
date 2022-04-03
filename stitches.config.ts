import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const stitches = createStitches({
  prefix: "",

  theme: {
    // screens
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    // container
    container: {
      center: true,
    },
    // colors
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      "gray-100": "#f7fafc",
      "gray-200": "#edf2f7",
      "gray-300": "#e2e8f0",
      "gray-400": "#cbd5e0",
      "gray-500": "#a0aec0",
      "gray-600": "#718096",
      "gray-700": "#4a5568",
      "gray-800": "#2d3748",
      "gray-900": "#1a202c",
      "red-100": "#fff5f5",
      "red-200": "#fed7d7",
      "red-300": "#feb2b2",
      "red-400": "#fc8181",
      "red-500": "#f56565",
      "red-600": "#e53e3e",
      "red-700": "#c53030",
      "red-800": "#9b2c2c",
      "red-900": "#742a2a",
      "orange-100": "#fffaf0",
      "orange-200": "#feebc8",
      "orange-300": "#fbd38d",
      "orange-400": "#f6ad55",
      "orange-500": "#ed8936",
      "orange-600": "#dd6b20",
      "orange-700": "#c05621",
      "orange-800": "#9c4221",
      "orange-900": "#7b341e",
      "yellow-100": "#fffff0",
      "yellow-200": "#fefcbf",
      "yellow-300": "#faf089",
      "yellow-400": "#f6e05e",
      "yellow-500": "#ecc94b",
      "yellow-600": "#d69e2e",
      "yellow-700": "#b7791f",
      "yellow-800": "#975a16",
      "yellow-900": "#744210",
      "green-100": "#f0fff4",
      "green-200": "#c6f6d5",
      "green-300": "#9ae6b4",
      "green-400": "#68d391",
      "green-500": "#48bb78",
      "green-600": "#38a169",
      "green-700": "#2f855a",
      "green-800": "#276749",
      "green-900": "#22543d",
      "teal-100": "#e6fffa",
      "teal-200": "#b2f5ea",
      "teal-300": "#81e6d9",
      "teal-400": "#4fd1c5",
      "teal-500": "#38b2ac",
      "teal-600": "#319795",
      "teal-700": "#2c7a7b",
      "teal-800": "#285e61",
      "teal-900": "#234e52",
      "blue-100": "#ebf8ff",
      "blue-200": "#bee3f8",
      "blue-300": "#90cdf4",
      "blue-400": "#63b3ed",
      "blue-500": "#4299e1",
      "blue-550": "#0072b1",
      "blue-600": "#3182ce",
      "blue-700": "#2b6cb0",
      "blue-800": "#2c5282",
      "blue-900": "#2a4365",
      "indigo-100": "#ebf4ff",
      "indigo-200": "#c3dafe",
      "indigo-300": "#a3bffa",
      "indigo-400": "#7f9cf5",
      "indigo-500": "#667eea",
      "indigo-600": "#5a67d8",
      "indigo-700": "#4c51bf",
      "indigo-800": "#434190",
      "indigo-900": "#3c366b",
      "purple-100": "#faf5ff",
      "purple-200": "#e9d8fd",
      "purple-300": "#d6bcfa",
      "purple-400": "#b794f4",
      "purple-500": "#9f7aea",
      "purple-600": "#805ad5",
      "purple-700": "#6b46c1",
      "purple-800": "#553c9a",
      "purple-900": "#44337a",
      "pink-100": "#fff5f7",
      "pink-200": "#fed7e2",
      "pink-300": "#fbb6ce",
      "pink-400": "#f687b3",
      "pink-500": "#ed64a6",
      "pink-600": "#d53f8c",
      "pink-700": "#b83280",
      "pink-800": "#97266d",
      "pink-900": "#702459",
    },
    // spacing
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
    },
    // backgroundColor
    // backgroundColor: colors,
    // backgroundPosition
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    // backgroundSize
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    // borderColor
    borderColor: {
      // ...colors,
      "gray-300": "currentColor",
    },
    // borderRadius
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    // borderWidth
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    // boxShadow
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    // cursor
    cursor: {
      default: "default",
      auto: "auto",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    // divideColor
    // divideColor: borderColor,
    // divideWidth
    // divideWidth: borderWidth,
    // fill
    fill: {
      current: "currentColor",
    },
    // flex
    flex: {
      initial: 0,
      1: "auto",
      0: 0,
      none: 0,
    },
    // flexGrow
    flexGrow: {
      0: "0",
      default: "1",
    },
    // flexShrink
    flexShrink: {
      0: "0",
      default: "1",
    },
    // fontFamily
    fontFamily: {
      sans: "system-ui",
      "-apple-system": "BlinkMacSystemFont",
      '"Segoe UI"': "Roboto",
      '"Helvetica Neue"': "Arial",
      '"Noto Sans"': "sans-serif",
      '"Apple Color Emoji"': '"Segoe UI Emoji"',
      '"Segoe UI Symbol"': '"Noto Color Emoji"',

      serif: "Georgia",
      Cambria: '"Times New Roman"',
      Times: "serif",
      mono: "Menlo",
      Monaco: "Consolas",
      '"Liberation Mono"': '"Courier New"',
      // "monospace":
    },
    // fontSize
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    // fontWeight
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    // height
    height: {
      auto: "auto",
      // ...spacing,
      full: "100%",
      screen: "100vh",
    },
    // inset
    inset: {
      0: "0",
      auto: "auto",
    },
    // letterSpacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    // lineHeight
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    // listStyleType
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    // margin
    margin: {
      auto: "auto",
      // ...spacing,
      //  ...negativeSpacing,
    },
    // maxHeight
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    // maxWidth
    maxWidth: {
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      // "screen-sm": screens.sm,
      // "screen-md": screens.md,
      // "screen-lg": screens.lg,
      // "screen-xl": screens.xl,
    },
    // minHeight
    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },
    // minWidth
    minWidth: {
      0: "0",
      full: "100%",
    },
    // objectPosition
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    // opacity
    opacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      100: "1",
    },
    // order
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    // padding
    // padding: spacing,
    // placeholderColor
    // placeholderColor: colors,
    // space
    // space: spacing,
    // stroke
    stroke: {
      current: "currentColor",
    },
    // strokeWidth
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2",
    },
    // textColor
    // textColor: colors,
    // width
    width: {
      auto: "auto",
      // ...spacing,
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    },
    // zIndex
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
    // gap
    gap: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
    },
    // gridTemplateColumns
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    // gridColumn
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
    },
    // gridColumnStart
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    // gridColumnEnd
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    // gridTemplateRows
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
    // gridRow
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
    },
    // gridRowStart
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    // gridRowEnd
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    // transformOrigin
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    // scale
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },
    // rotate
    rotate: {
      [-180]: "-180deg",
      [-90]: "-90deg",
      [-45]: "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    // translate
    translate: {
      // ...spacing,
      // ...negativeSpacing,
      "-full": "-100%",
      "-1/2": "-50%",
      "1/2": "50%",
      full: "100%",
    },
    // skew
    skew: {
      [-12]: "-12deg",
      [-6]: "-6deg",
      [-3]: "-3deg",
      0: "0",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    // transitionProperty
    transitionProperty: {
      none: "none",
      all: "all",
      default:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    // transitionTimingFunction
    transitionTimingFunction: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    // transitionDuration
    transitionDuration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    // transitionDelay
    transitionDelay: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const { css, styled, globalCss, keyframes, getCssText, theme } =
  stitches;
