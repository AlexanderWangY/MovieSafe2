import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMovies = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('movies')
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log(error)
    }

}

export const saveMovie = async (movieName) => {
    try {
        const jsonValue = await getMovies();
        const appendedMovies = [...jsonValue, movieName]
        await AsyncStorage.setItem('movies', JSON.stringify(appendedMovies))

    } catch (error) {
        console.log(error)
    }
}