import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import MovieItem from "../../components/MovieItem";
import { useEffect, useState } from "react";
import { getMovies } from "../../actions/storage";

const Home = () => {
  const { width, height } = Dimensions.get("window");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAsyncMovies = async () => {
      const fetchedMovies = await getMovies();
      console.log(fetchedMovies);
      setMovies(fetchedMovies);
    };

    fetchAsyncMovies();
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.replace("/movieadd");
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(144, 224, 239, 0.46)",
            borderRadius: width * 0.1,
            margin: width * 0.04,
            paddingTop: width * 0.025,
            paddingBottom: width * 0.025,
          }}
        >
          <Text
            style={{
              fontSize: width * 0.04,
              fontWeight: "bold",
              color: "#2097F3",
            }}
          >
            Add a movie
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flex: 9.5,
          alignItems: "center",
          height: "100%",
        }}
      >
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return <MovieItem movieName={item} />;
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default Home;
