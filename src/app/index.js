import { Redirect } from 'expo-router'
import { View, Text } from 'react-native'


const Root = () => {
  return (
    <Redirect href="/home" />
  )
}

export default Root