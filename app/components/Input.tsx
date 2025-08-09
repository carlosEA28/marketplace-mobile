import React from "react";
import { Controller } from "react-hook-form";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardTypes: KeyboardTypeOptions;
}

const Input = ({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardTypes,
}: InputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextInput
            className="w-full h-16 border  "
            placeholder={placeholder}
            onChangeText={field.onChange}
            value={field.value}
            keyboardType={keyboardTypes}
          />
        )}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default Input;
