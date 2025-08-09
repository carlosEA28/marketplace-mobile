import logoApp from "@/assets/images/LogoApp.png";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Input from "../components/Input";
import { LoginFormData, LoginFormSchema } from "../schemas/user";

const Login = () => {
  const { control, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View className="flex w-screen h-screen items-center justify-center bg-red-500">
      <View className="flex justify-center items-center w-[295px] h-[137] bg-yellow-300">
        <View>
          <Image source={logoApp} />
        </View>
        <Text className="font-jost font-bold text-2xl">Acesse sua conta</Text>
        <Text>Informe seu e-mail e senha para entrar</Text>
      </View>

      <View className="flex items-center justify-center w-[295px] h-[240px] bg-blue-600">
        <Text>E-MAIL</Text>
        <TextInput
          placeholder="mail@exemplo.br"
          placeholderTextColor={"#000"}
        />

        <Text>SENHA</Text>
        <Input
          placeholder="mail@exemplo.br"
          control={control}
          name="email"
          keyboardTypes="default"
          error={formState.errors.email?.message}
        />

        <Pressable>
          <Text>Acessar</Text>
        </Pressable>
      </View>

      <Text>Ainda não tem uma conta?</Text>
      <Pressable>
        <Text>Cadastrar</Text>
      </Pressable>
    </View>
  );
};

export default Login;
