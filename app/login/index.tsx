import logoApp from "@/assets/images/LogoApp.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Image, Pressable, Text, View } from "react-native";
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
    <View className="flex w-screen h-screen items-center justify-center ">
      <View className="flex justify-center items-center w-[295px] h-[137px] ">
        <View>
          <Image source={logoApp} />
        </View>
        <Text className="font-jost font-bold text-2xl mt-9">
          Acesse sua conta
        </Text>
        <Text className="text-[#666666] text-sm mt-2">
          Informe seu e-mail e senha para entrar
        </Text>
      </View>

      <View className="flex items-center justify-center mt-16 gap-10 w-[295px] h-[240px] ">
        <View className="w-full gap-5">
          <View className="w-full ">
            <Text className="text-[#666666] text-base ">E-MAIL</Text>
            <Input
              placeholder="mail@exemplo.br"
              control={control}
              name="email"
              keyboardTypes="default"
              error={formState.errors.email?.message}
            />
          </View>

          <View className="w-full">
            <Text className="text-[#666666] text-base">SENHA</Text>
            <Input
              placeholder="Sua senha"
              control={control}
              name="password"
              keyboardTypes="default"
              error={formState.errors.password?.message}
            />
          </View>
        </View>

        <Pressable className="">
          <Text>Acessar</Text>
        </Pressable>
      </View>

      <View className="flex items-center justify-center gap-5 mt-40">
        <Text>Ainda não tem uma conta?</Text>
        <Link href={"#"}>
          <Text>Cadastrar</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
