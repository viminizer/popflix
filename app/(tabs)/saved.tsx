import { icons } from "@/constants/icons";
import { StyleSheet, Text, View, Image } from "react-native";
const Saved = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor={"#fff"} />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({});
