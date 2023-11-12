// Last modified 12-11-2013 by Chaos Nguyen
// https://thatthuvi.com

import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";

import { TGreenIcon } from "./icon";

const Icon = (props: TGreenIcon) => {
  const { type, name, size, color, style } = props;

  const IconProps = {
    name: name ? name : "smileo",
    size: size ? size : 18,
    color: color ? color : "#28C953",
    style: style ? style : {},
  };

  if (type === "antdesign") {
    return <AntDesign {...IconProps} />;
  }

  if (type === "fontawesome") {
    return <FontAwesome {...IconProps} />;
  }

  if (type === "fontawesome5") {
    return <FontAwesome5 {...IconProps} />;
  }

  if (type === "fontisto") {
    return <Fontisto {...IconProps} />;
  }

  if (type === "ionicons") {
    return <Ionicons {...IconProps} />;
  }

  if (type === "materialicons") {
    return <MaterialIcons {...IconProps} />;
  }

  if (type === "octicons") {
    return <Octicons {...IconProps} />;
  }

  if (type === "materialcommunityicons") {
    return <MaterialCommunityIcons {...IconProps} />;
  }

  if (type === "entypo") {
    return <Entypo {...IconProps} />;
  }

  return <Ionicons {...IconProps} />;
};

const GreenIcon = Icon;

export {
  Icon,
  GreenIcon,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Fontisto,
  Octicons,
  AntDesign,
};
