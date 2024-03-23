import { Redirect, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import SelectableMovieItem from '../../components/SelectableMovieItem'
import { saveMovie } from '../../actions/storage'


const MovieAdd = () => {
    const { width, height } = Dimensions.get('window')
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const [selectedMovieName, setSelectedMovieName] = useState('')
    const [selectedMovieKey, setSelectedMovieKey] = useState('')

    const onHandleSubmit = async () => {
        const searchQuery = query.replace(/ /g, "%20");
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGFmY2YyZTJjMWQyMzBkYWM5NzIzNGU5MWUxMjQ5MyIsInN1YiI6IjY1ZjhlMjFhMzNhMzc2MDE4NDM1YmRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R-_0PyJQAm80I6PKvEfGXnwYhBPjyKIZSSW6yJnPCfE",
            },
          };

        const movieDataRaw = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&primary_release_year=545611&page=1`,
        options)

        const movieData = await movieDataRaw.json()
        console.log(movieData.results)
        setMovies(movieData.results)
    }

  return (
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    }}>
        <TextInput 
        placeholder='Enter movie name...'
        style={{
            backgroundColor: '#F1F1F1',
            width: width * .9,
            height: height * .05,
            marginTop: width * .03,
            paddingLeft: width * .05,
            borderRadius: 20,
            fontWeight: 'bold',
            fontSize: width * .04,
            marginBottom: width * .03,

        }}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={onHandleSubmit}
        />
        <FlatList
        style={{
            width: '100%',
        }}

        contentContainerStyle={{
            alignItems: 'center',
        
        }}
        data={movies}
        renderItem={({item, index}) => {
            if (item.title === selectedMovieName && index.toString() === selectedMovieKey){
                return (<SelectableMovieItem movieName={item.title} selected={true} setSelected={() => {
                    setSelectedMovieName('')
                    setSelectedMovieKey('')
                }} />)
            } else {
                return (<SelectableMovieItem movieName={item.title} selected={false} setSelected={() => {
                    setSelectedMovieName(item.title)
                    setSelectedMovieKey(index.toString())
                }} />)
            }
        }}
        keyExtractor={(item, index) => index}
        />

        <TouchableOpacity
        onPress={async () => {
            if (selectedMovieName !== ''){
                await saveMovie(selectedMovieName)
                router.replace('/home')
            }
        }}
        style={{
          backgroundColor: "#C7F4FC",
          height: height * 0.05,
          width: "90%",
          position: "absolute",
          bottom: height * 0.05,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: width * 0.04,
            color: "#2097F3",
          }}
        >
          Add Selected Movie
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieAdd