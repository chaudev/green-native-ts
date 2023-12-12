// Last modified 12-12-2013 by Chaos Nguyen
// https://thatthuvi.com

type TGreenCheckbox = {
  checked: boolean;
  text?: string;
  iconType?:
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
  iconName?: string;
  iconCheckedName?: string;
  iconColor?: string;
  iconCheckedColor?: string;
  iconSize?: number;
  textSize?: number;
  textColor?: string;
  onPress?: Function;
  activeOpacity?: number;
};
