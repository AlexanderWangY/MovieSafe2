import {View, Text, Dimensions, TouchableOpacity} from 'react-native'

const MovieItem = ({movieName, setSelected, selected}) => {
    const {width, height} = Dimensions.get('window')

  return (
    <TouchableOpacity style={{
        backgroundColor: selected ? "blue" : "rgba(202, 240, 248, 0.41)",
        width: width * .9,
        height: width * .1,
        borderRadius: 10,
        marginBottom: width * .02,
    }}
    onPress={setSelected}
    >
        <Text
        style={{
            fontSize: width * .04,
            fontWeight: 'bold',
            paddingTop: width * .02,
            paddingLeft: width * .05,
        }}
        >{movieName}</Text>
    </TouchableOpacity >
  )
}

export default MovieItem