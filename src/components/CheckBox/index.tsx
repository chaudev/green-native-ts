// Last modified 12-11-2013 by Chaos Nguyen
// https://thatthuvi.com

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "../Icon";
import { Colors } from "../../styles/colors";

export const CheckBox = (props: TGreenCheckbox): JSX.Element => {
  const { iconSize, textSize, textColor, onPress, activeOpacity } = props;

  const { text, iconType, checked, iconName } = props;

  const { iconCheckedName, iconColor, iconCheckedColor } = props;

  const checkedName = !checked
    ? iconName || "checkbox-blank-outline"
    : iconCheckedName || "checkbox-marked";

  const thisColor = !checked
    ? iconColor || Colors.blueGrey
    : iconCheckedColor || Colors.primaryColor;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.7}
      onPress={() => onPress && onPress()}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Icon
        type={iconType ? iconType : "materialcommunityicons"}
        name={checkedName}
        color={thisColor}
        size={iconSize || 30}
      />
      <Text
        style={{
          fontSize: textSize || 16,
          color: textColor || Colors.primaryColor,
          marginLeft: 5,
        }}
      >
        {text || ""}
      </Text>
    </TouchableOpacity>
  );
};
