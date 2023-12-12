// Last modified 12-12-2013 by Chau Nguyen
// https://thatthuvi.com

import { GreenTextStyle } from "../../types/primary";

export type TGreenIcon = {
  type?:
    | "entypo"
    | "octicons"
    | "materialcommunityicons"
    | "materialicons"
    | "ionicons"
    | "fontisto"
    | "antdesign"
    | "fontawesome"
    | "fontawesome5"
    | "AntDesign"
    | "Octicons"
    | "MaterialIcons"
    | "Ionicons"
    | "Fontisto"
    | "FontAwesome5"
    | "FontAwesome"
    | "MaterialCommunityIcons";
  name?: string;
  size?: number;
  color?: "red" | "green" | "blue" | "yellow" | string;
  style?: GreenTextStyle;
};
