import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center w-screen h-screen">
      <Text className="text-red-600">Oi</Text>
      <Link href={"/login"}>Click</Link>
    </View>
  );
}
