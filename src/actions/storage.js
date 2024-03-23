import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMovies = async () => {
  try {
    const storedMovies = await AsyncStorage.getItem("movies");
    if (storedMovies !== null) {
      return await JSON.parse(storedMovies);
      console.log("Movies retrieved successfully.");
    }
  } catch (error) {
    console.error("Error retrieving names:", error);
  }
};

export const saveMovie = async (movie) => {
  try {
    const storedMovies = await AsyncStorage.getItem("movies");
    if (storedMovies !== null) {
      const parsedMovies = JSON.parse(storedMovies);
      parsedMovies.push(movie);
      await AsyncStorage.setItem("movies", JSON.stringify(parsedMovies));
      console.log("Movie saved successfully.");
    } else {
      await AsyncStorage.setItem("movies", JSON.stringify([movie]));
      console.log("Movie saved successfully.");
    }
  } catch (error) {
    console.error("Error saving movie:", error);
  }
};

export const clearMovies = async () => {
  try {
    await AsyncStorage.removeItem("movies");
  } catch (error) {
    console.log(error);
  }
};
