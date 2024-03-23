import { View, Text, Dimensions } from "react-native";

const MovieItem = ({ movieName }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        backgroundColor: "rgba(202, 240, 248, 0.41)",
        width: width * 0.9,
        borderRadius: 10,
        marginBottom: width * 0.02,
      }}
    >
      <Text
        style={{
          fontSize: width * 0.04,
          fontWeight: "bold",
          paddingTop: width * 0.02,
          paddingBottom: width * 0.02,
          paddingLeft: width * 0.05,
        }}
      >
        {movieName}
      </Text>
    </View>
  );
};

export default MovieItem;
