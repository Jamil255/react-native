import downloadImg from '@/assets/images/download.jpeg'
import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={downloadImg}
        resizeMethod="cover"
        style={style.image}
      >
        <Text style={style.text}>Cofee Shop </Text>
        <Link href={'/contact'} style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={style.btn}>
            <Text style={style.textBtn}> Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
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
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  btn: {
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    height: 60,
    border: '1px solid red',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default app
