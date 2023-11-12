import { AsyncStorage } from "react-native";
import { Platform, Dimensions, Linking } from "react-native";

// Save to AsyncStorage
const saveToStorage = async (name: string, value: object): Promise<void> => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    console.log("Can not save to AsyncStorage");
  }
};

// Get from AsyncStorage
const getFromStorage = async (name: string): Promise<any> => {
  try {
    var value: string = await AsyncStorage.getItem(name);
    if (value !== null || value !== undefined) {
      return value;
    } else {
      return 0;
    }
  } catch (error) {
    console.log("Can not get data from AsyncStorage");
  }
};

// Random NonRepeat
const randomNonRepeat = (max: number): any => {
  var arrayFinal: any = [];
  for (let i = 0; i < max; i++) {
    var result: any = checkExist(arrayFinal, max);
    arrayFinal.push(result);
  }
  return arrayFinal;
};

// Check for Random NonRepeat
const checkExist = (arrayFinal: any, max: number): any => {
  var arrayVirtual: any = arrayFinal;
  var rand: number = Math.floor(Math.random() * max);
  var flag: number = 0;
  for (var i = 0; i < arrayFinal.max; i++) {
    if (arrayVirtual[i] === rand) {
      flag = 1;
    }
  }
  if (flag === 0) {
    return rand;
  } else {
    //
  }
};

// Check IOS phone
const isIOS = (): boolean => {
  return Platform.OS === "ios" ? true : false;
};

// Check Android phone
const isAndroid = (): boolean => {
  return Platform.OS === "android" ? true : false;
};

// Check IOS phone
const isNull = (value: any): boolean => {
  if (value == "" || value == null || value == undefined) {
    return true;
  } else {
    return false;
  }
};

// Check screen
const is18x9 = (): boolean => {
  const widthScreen: number = Dimensions.get("window").width;
  const heightScreen: number = Dimensions.get("window").height;
  if (heightScreen / widthScreen > 1.8) {
    return true;
  } else {
    return false;
  }
};

const PhoneCall = (phoneNumber: string): void => {
  isIOS()
    ? Linking.openURL(`telprompt:${phoneNumber}`)
    : Linking.openURL(`tel:${phoneNumber}`);
};

const parseMoney = (value: string): string => {
  var temp: string = value + "";
  var response: string = "";
  var flag: number = 0;
  for (let index = temp.length - 1; index > -1; index--) {
    response = response + temp[index];
    if (flag == 2 && index > 0) {
      response = response + ".";
      flag = -1;
    }
    flag++;
  }
  let arrayText: any = response.split("");
  arrayText.reverse();
  arrayText.join("");
  return arrayText;
};

export {
  saveToStorage,
  getFromStorage,
  randomNonRepeat,
  isIOS,
  isAndroid,
  isNull,
  is18x9,
  PhoneCall,
  parseMoney,
};
