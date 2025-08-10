import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

//passando custom props mais as props nativas do textInput
type InputProps = {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
} & TextInputProps;

const Input = ({ name, control, rules, error, ...inputProps }: InputProps) => {
  return (
    <View className="flex flex-1 ">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextInput
            className="w-full h-16 placeholder:text-[#949494] text-base"
            value={field.value}
            onChangeText={field.onChange}
            {...inputProps}
          />
        )}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default Input;
