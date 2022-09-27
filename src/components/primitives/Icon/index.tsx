// @ts-nocheck
import React from "react";
import { Icon as NBIcon } from "native-base";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import Feather from "react-native-vector-icons/dist/Feather";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import Foundation from "react-native-vector-icons/dist/Foundation";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/dist/Octicons";
import Zocial from "react-native-vector-icons/dist/Zocial";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons";

export const Icon = ({ as, ...props }: any) => {
  const map = {
    AntDesign: AntDesign,
    Entypo: Entypo,
    EvilIcons: EvilIcons,
    Feather: Feather,
    FontAwesome: FontAwesome,
    Fontisto: Fontisto,
    Foundation: Foundation,
    Ionicons: Ionicons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    MaterialIcons: MaterialIcons,
    Octicons: Octicons,
    SimpleLineIcons: SimpleLineIcons,
    Zocial: Zocial,
  };

  return <NBIcon as={map[as]} {...props}></NBIcon>;
};
