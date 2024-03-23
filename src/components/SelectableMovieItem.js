import { View, Text, Dimensions, TouchableOpacity } from "react-native";

const MovieItem = ({ movieName, setSelected, selected }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity
      style={{
        backgroundColor: selected ? "blue" : "rgba(202, 240, 248, 0.41)",
        width: width * 0.9,
        borderRadius: 10,
        marginBottom: width * 0.02,
        justifyContent: "center",
      }}
      onPress={setSelected}
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
    </TouchableOpacity>
  );
};

export default MovieItem;
