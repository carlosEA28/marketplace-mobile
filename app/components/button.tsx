import React, { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { cva } from "class-variance-authority";

type ButtonCustomProps = {
  children?: ReactNode;
  text?: string;
} & TouchableOpacityProps;

const buttonVariants = cva(
  "flex flex-row  items-center justify-between p-4 w-full h-14 rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-[#F24D0D] text-white",
        ghost: "bg-transparent border  border-[#F24D0D]",
      },
    },
  }
);

const Button = ({
  children,
  text,
  variant,
  ...rest
}: ButtonCustomProps & { variant: "default" | "ghost" }) => {
  return (
    <View className="w-full ">
      <TouchableOpacity className={buttonVariants({ variant })} {...rest}>
        <Text className={variant === "ghost" ? "text-[#F24D0D]" : "text-white"}>
          {text}
        </Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
