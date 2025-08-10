import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, KeyRound, Mail } from "lucide-react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/Input";
import { LoginFormData, LoginFormSchema } from "../schemas/user";

const logoApp = require("@/assets/images/LogoApp.png");

const Login = () => {
  const { control, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View className="flex w-screen h-screen items-center gap-16 justify-center ">
      <View className="flex w-screen h-screen items-center justify-center px-10">
        {/* Header */}
        <View className="flex justify-center items-center w-full">
          <Image source={logoApp} />
          <Text className="font-jost font-bold text-2xl mt-9">
            Acesse sua conta
          </Text>
          <Text className="text-[#666666] text-sm mt-2 text-center">
            Informe seu e-mail e senha para entrar
          </Text>
        </View>

        {/* Formulário */}
        <View className="w-full mt-16 gap-11">
          <View className="gap-8">
            {/* E-mail */}
            <View>
              <Text className="text-[#666666] text-base">E-MAIL</Text>
              <View className="flex flex-row items-center w-full gap-1 border-b border-b-[#949494]">
                <Mail color={"#949494"} size={21} />
                <Input
                  placeholder="mail@exemplo.br"
                  control={control}
                  name="email"
                  keyboardType="email-address"
                  error={formState.errors.email?.message}
                  secureTextEntry={false}
                />
              </View>
            </View>

            {/* Senha */}
            <View>
              <Text className="text-[#666666] text-base">SENHA</Text>
              <View className="flex flex-row items-center gap-1 border-b border-b-[#949494]">
                <KeyRound color={"#949494"} size={21} />
                <Input
                  placeholder="Sua senha"
                  control={control}
                  name="password"
                  keyboardType="visible-password"
                  error={formState.errors.password?.message}
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>

          {/* Botão acessar */}
          <Button text="Acessar">
            <ArrowRight size={18} color={"#fff"} />
          </Button>
        </View>

        {/* Cadastro */}
        <View className="flex justify-center gap-5 mt-[160px]">
          <Text className="text-[#666666] text-lg">
            Ainda não tem uma conta?
          </Text>
          <Button text="Cadastrar">
            <ArrowRight size={18} color={"#F24D0D"} />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
