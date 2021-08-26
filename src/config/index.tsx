import { Dimensions } from "react-native";

export const { width: windowWidth, height: windowHeight } =
  Dimensions.get("window");
export const { width: screenWidth, height: screenHeight } =
  Dimensions.get("screen");

export const config = {
  hostURL: "https://github.com/chaudev/green-native-ts",
  colors: {
    transparent: "rgba(0,0,0,0)",
    trans05: "rgba(0,0,0,0.05)",
    trans10: "rgba(0,0,0,0.1)",
    trans20: "rgba(0,0,0,0.2)",
    trans30: "rgba(0,0,0,0.3)",
    trans40: "rgba(0,0,0,0.3)",
    trans50: "rgba(0,0,0,0.5)",
    primaryColor: "#46b96c",
    primaryColorLight: "#62c47c",
    primaryColorDark: "#198235",
    green: "#28C953",
    red: "#F44336",
    redLight: "#ed6960",
    redDark: "#d0362a",
    blue: "#2196F3",
    blueLight: "#29B6F6",
    blueDark: "#1976D2",
    pink: "#E91E63",
    pinkLight: "#F06292",
    pinkDark: "#C2185B",
    orange: "#FF5722",
    orangeLight: "#FF8A65",
    orangeDark: "#E64A19",
    blueGrey: "#607D8B",
    blueGreyLight: "#90A4AE",
    blueGreyDark: "#455A64",
    purple: "#9C27B0",
    purpleLight: "#BA68C8",
    purpleDark: "#7B1FA2",
    borderColor: "#ECEFF1",
    borderColorDark: "#CFD8DC",
    facebook: "#1877F2",
    messenger: "#0099FF",
    tumblr: "#34465D",
    yahoo: "#410093",
    pinterest: "#BD081C",
    youtube: "#CD201F",
    line: "#00C300",
    medium: "#02B875",
    white: "#fff",
    black: "#000",
  },
};
