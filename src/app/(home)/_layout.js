import { Stack, router } from 'expo-router'
import React from 'react'
import { Dimensions, Pressable, Text } from 'react-native'

const HomeRoot = () => {
    const { height, width } = Dimensions.get("window");

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#03045E"
                },
                headerTintColor: "#FFF",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22
                }
            }}
        >
            <Stack.Screen name="home" 
            options={{
                title: "Watched Movies"
            }}
            />
            <Stack.Screen name="movieadd" 
            options={{
                title: "Add a movie",
                headerLeft: () => (
                    <Pressable
                    onPress={() => {
                        router.replace('/home')
                    }}
                    >
                        <Text
                        style={{
                            color: "#FFF",
                            fontSize: width * .04,
                        }}
                        >Cancel</Text>
                    </Pressable>
                )
            }}
            />
        </Stack>
    )
}

export default HomeRoot