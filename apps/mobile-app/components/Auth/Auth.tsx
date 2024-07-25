import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthProvider";
import { useCallback } from "react";
import { View, Text } from "react-native";
import { Button } from "../ui/button";

export function Auth() {
  const { login, setCredential } = useAuth();

  const fakeLogin = useCallback(() => {
    setCredential({ user: "test@whattodo.ai" });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      {/* <Button title="Fake Login" onPress={fakeLogin} /> */}
      <Button onPress={fakeLogin}>
        <Text className="text-white">Fake Login</Text>
      </Button>
    </View>
  );
}
