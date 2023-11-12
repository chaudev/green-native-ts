// Last modified 12-11-2013 by Chaos Nguyen
// https://thatthuvi.com

type GreenColorValue = string;

type GreenFontVariant =
  | "small-caps"
  | "oldstyle-nums"
  | "lining-nums"
  | "tabular-nums"
  | "proportional-nums";

type GreenFlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

interface GreenFlexStyle {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | undefined;
  alignItems?: GreenFlexAlignType | undefined;
  alignSelf?: "auto" | GreenFlexAlignType | undefined;
  aspectRatio?: number | undefined;
  borderBottomWidth?: number | undefined;
  borderEndWidth?: number | string | undefined;
  borderLeftWidth?: number | undefined;
  borderRightWidth?: number | undefined;
  borderStartWidth?: number | string | undefined;
  borderTopWidth?: number | undefined;
  borderWidth?: number | undefined;
  bottom?: number | string | undefined;
  display?: "none" | "flex" | undefined;
  end?: number | string | undefined;
  flex?: number | undefined;
  flexBasis?: number | string | undefined;
  flexDirection?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | undefined;
  flexGrow?: number | undefined;
  flexShrink?: number | undefined;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
  height?: number | string | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  left?: number | string | undefined;
  margin?: number | string | undefined;
  marginBottom?: number | string | undefined;
  marginEnd?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  marginLeft?: number | string | undefined;
  marginRight?: number | string | undefined;
  marginStart?: number | string | undefined;
  marginTop?: number | string | undefined;
  marginVertical?: number | string | undefined;
  maxHeight?: number | string | undefined;
  maxWidth?: number | string | undefined;
  minHeight?: number | string | undefined;
  minWidth?: number | string | undefined;
  overflow?: "visible" | "hidden" | "scroll" | undefined;
  padding?: number | string | undefined;
  paddingBottom?: number | string | undefined;
  paddingEnd?: number | string | undefined;
  paddingHorizontal?: number | string | undefined;
  paddingLeft?: number | string | undefined;
  paddingRight?: number | string | undefined;
  paddingStart?: number | string | undefined;
  paddingTop?: number | string | undefined;
  paddingVertical?: number | string | undefined;
  position?: "absolute" | "relative" | undefined;
  right?: number | string | undefined;
  start?: number | string | undefined;
  top?: number | string | undefined;
  width?: number | string | undefined;
  zIndex?: number | undefined;

  /**
   * @platform ios
   */
  direction?: "inherit" | "ltr" | "rtl" | undefined;
}

export interface GreenTransformsStyle {
  transform?: undefined;
  /**
   * @deprecated Use matrix in transform prop instead.
   */
  transformMatrix?: Array<number> | undefined;
  /**
   * @deprecated Use rotate in transform prop instead.
   */
  rotation?: number | undefined;
  /**
   * @deprecated Use scaleX in transform prop instead.
   */
  scaleX?: number | undefined;
  /**
   * @deprecated Use scaleY in transform prop instead.
   */
  scaleY?: number | undefined;
  /**
   * @deprecated Use translateX in transform prop instead.
   */
  translateX?: number | undefined;
  /**
   * @deprecated Use translateY in transform prop instead.
   */
  translateY?: number | undefined;
}

interface GreenViewStyle extends GreenFlexStyle, GreenTransformsStyle {
  backfaceVisibility?: "visible" | "hidden" | undefined;
  backgroundColor?: GreenColorValue | undefined;
  borderBottomColor?: GreenColorValue | undefined;
  borderBottomEndRadius?: number | undefined;
  borderBottomLeftRadius?: number | undefined;
  borderBottomRightRadius?: number | undefined;
  borderBottomStartRadius?: number | undefined;
  borderBottomWidth?: number | undefined;
  borderColor?: GreenColorValue | undefined;
  borderEndColor?: GreenColorValue | undefined;
  borderLeftColor?: GreenColorValue | undefined;
  borderLeftWidth?: number | undefined;
  borderRadius?: number | undefined;
  borderRightColor?: GreenColorValue | undefined;
  borderRightWidth?: number | undefined;
  borderStartColor?: GreenColorValue | undefined;
  borderStyle?: "solid" | "dotted" | "dashed" | undefined;
  borderTopColor?: GreenColorValue | undefined;
  borderTopEndRadius?: number | undefined;
  borderTopLeftRadius?: number | undefined;
  borderTopRightRadius?: number | undefined;
  borderTopStartRadius?: number | undefined;
  borderTopWidth?: number | undefined;
  borderWidth?: number | undefined;
  opacity?: number | undefined;
  testID?: string | undefined;
  /**
   * Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   *
   * @platform android
   */
  elevation?: number | undefined;
}

interface GreenTextStyleIOS extends GreenViewStyle {
  fontVariant?: GreenFontVariant[] | undefined;
  letterSpacing?: number | undefined;
  textDecorationColor?: GreenColorValue | undefined;
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
  writingDirection?: "auto" | "ltr" | "rtl" | undefined;
}

interface GreenTextStyleAndroid extends GreenViewStyle {
  textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined;
  includeFontPadding?: boolean | undefined;
}

export interface GreenTextStyle
  extends GreenTextStyleIOS,
    GreenTextStyleAndroid,
    GreenViewStyle {
  color?: GreenColorValue | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | undefined;
  fontStyle?: "normal" | "italic" | undefined;
  /**
   * Specifies font weight. The values 'normal' and 'bold' are supported
   * for most fonts. Not all fonts have a variant for each of the numeric
   * values, in that case the closest one is chosen.
   */
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  letterSpacing?: number | undefined;
  lineHeight?: number | undefined;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
  textDecorationColor?: GreenColorValue | undefined;
  textShadowColor?: GreenColorValue | undefined;
  textShadowOffset?: { width: number; height: number } | undefined;
  textShadowRadius?: number | undefined;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
  testID?: string | undefined;
}
