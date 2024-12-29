import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Appearance } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.headerBackGround,
        },
        headerTintColor: theme.tint,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="contact"
        options={{
          title: 'contact',
          headerShown: true,
          headerTitle: 'Contact Us ',
        }}
      />
      <Stack.Screen
        name="menu"
        options={{
          title: 'menu',
          headerShown: true,
          headerTitle: 'Menu Shop List',
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{ headerShown: false, title: 'OOPs' }}
      />
    </Stack>
  )
}
