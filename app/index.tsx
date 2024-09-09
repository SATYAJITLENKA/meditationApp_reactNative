import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
 const router =useRouter();
  return (
    <GestureHandlerRootView>
      <View className="flex-1">
        <ImageBackground
          source={beachImage}
          resizeMode="cover"
          className="flex-1"
        >
          <AppGradient  colors={["rgba(0, 0 , 0 , 0.4)", "rgba(0,0,0,0.8)"]}>
         
              <SafeAreaView className="flex-1 px-1 justify-between">
                <View>
                  <Text className="text-4xl font-bold flex text-center text-white">
                    Simple Meditation
                  </Text>
                  <Text className="text-2xl mt-3 text-regular flex text-center text-white">
                    Simplifying Meditation for Everyone  
                  </Text>
                </View>
                <View>
                  <CustomButton onPress={()=>router.push("/nature-meditate")} title="Get Started" />
                </View>
                <StatusBar style="light" />
              </SafeAreaView>
          </AppGradient>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
