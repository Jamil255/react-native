import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import downloadImg from '@/assets/images/download.jpeg'
import { Link } from 'expo-router'

const app = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={style.container}>
      <ImageBackground
        source={downloadImg}
        resizeMethod="cover"
        style={style.image}
      >
        <Text style={style.text}>Cofee Shop </Text>
        <Link href={'/explore'} style={style.link}>
          Explore
        </Link>
      </ImageBackground>

      {/* <Text style={style.text}>you click={count}Times</Text>
      <Button onPress={() => setCount(count + 1)} title="click me" /> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  link: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
export default app
