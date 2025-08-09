import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import logoApp from "../../assets/images/LogoApp.png";

const Login = () => {
  return (
    <View className="flex w-screen h-screen items-center justify-center bg-red-500">
      <View className="flex justify-center items-center w-[295px] h-[137]">
        <View>
          <Image source={logoApp} />
        </View>
        <Text>Acesse sua conta</Text>
        <Text>Informe seu e-mail e senha para entrar</Text>
      </View>

      <View className="flex items-center justify-center w-[295px] h-[240px] bg-blue-600">
        <Text> E-MAIL</Text>
        <TextInput
          placeholder="mail@exemplo.br"
          placeholderTextColor={"#000"}
        />

        <Text> SENHA</Text>
        <TextInput placeholder="Sua Senha" placeholderTextColor={"#000"} />

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
