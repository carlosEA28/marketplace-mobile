import React, { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ButtonCustomProps = {
  children?: ReactNode;
  text: string;
} & TouchableOpacityProps;

const Button = ({ children, text }: ButtonCustomProps) => {
  return (
    <View>
      <TouchableOpacity className="flex flex-row  items-center justify-between p-5 w-full h-14 bg-[#F24D0D] rounded-xl">
        <Text className="text-white">{text}</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
