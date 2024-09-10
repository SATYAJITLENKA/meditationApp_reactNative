import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditionData";
import meditation_images from "@/constants/meditation_images";
import { LinearGradient } from "expo-linear-gradient";
const Naturemeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="mb-3 font-bold text-4xl text-left text-gray-200">
            Welcome Satya
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start Your meditation Practice Today
          </Text>
        </View>
        <FlatList
          className="mb-20"
          data={MEDITATION_DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("clicked")}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={meditation_images[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                {/* <LinearGradient
                  className="flex-1 justify-center items-center"
                  colors={["transparent", "rgba(0,0,0,0,8)"]}
                >
               
                </LinearGradient> */}
                <Text className="text-center font-bold text-white text-3xl">
                  {item.title}
                </Text>
              </ImageBackground>
            </Pressable>
          )}
        />
      </AppGradient>
    </View>
  );
};

export default Naturemeditate;
