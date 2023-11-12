// Last modified 12-11-2013 by Chaos Nguyen
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
    | "fontawesome5";
  name?: string;
  size?: number;
  color?: "red" | "green" | "blue" | "yellow" | string;
  style?: GreenTextStyle;
};
