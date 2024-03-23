import {View, Text, Dimensions} from 'react-native'

const MovieItem = ({movieName}) => {
    const {width, height} = Dimensions.get('window')

  return (
    <View style={{
        backgroundColor: "rgba(202, 240, 248, 0.41)",
        width: width * .9,
        height: width * .1,
        borderRadius: 10,
        marginBottom: width * .02,
    }}>
        <Text
        style={{
            fontSize: width * .04,
            fontWeight: 'bold',
            paddingTop: width * .02,
            paddingLeft: width * .05,
        }}
        >{movieName}</Text>
    </View>
  )
}

export default MovieItem