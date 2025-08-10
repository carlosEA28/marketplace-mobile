import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

//passando custom props mais as props nativas do textInput
type InputProps = {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  children?: ReactNode;
} & TextInputProps;

const Input = ({
  name,
  control,
  rules,
  error,
  children,
  ...inputProps
}: InputProps) => {
  return (
    <View className="flex flex-1">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <View className="flex flex-row items-center gap-2 border-b border-b-[#949494]">
            {children}
            <TextInput
              className="flex-1 h-16 placeholder:text-[#949494] text-base"
              value={field.value}
              onChangeText={field.onChange}
              {...inputProps}
            />
          </View>
        )}
      />
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
};

export default Input;
