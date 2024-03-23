import { Stack, router } from "expo-router";
import React from "react";
import { Dimensions, Pressable, Text } from "react-native";

const HomeRoot = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#03045E",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Watched Movies",
        }}
      />
      <Stack.Screen
        name="movieadd"
        options={{
          title: "Add a movie",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.replace("/");
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: width * 0.04,
                }}
              >
                Cancel
              </Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default HomeRoot;
