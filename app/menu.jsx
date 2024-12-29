import { Colors } from '@/constants/Colors'
import React from 'react'
import {
  Appearance,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { data } from '@/constants/data'

const MenuScreen = () => {
  const colorSchema = Appearance.getColorScheme()
  const theme = colorSchema === 'dark' ? Colors.dark : Colors.light
  const styles = createStyles(theme, colorSchema)
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView

  const MenuItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
      {/* Uncomment if image is needed */}
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  )

  return (
    <Container style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MenuItem item={item} />}
      />
    </Container>
  )
}

function createStyles(theme, colorSchema) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 10,
    },
    itemContainer: {
      backgroundColor: theme.card,
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
    },
    itemText: {
      color: theme.text,
      fontSize: 16,
    },
    descriptionText: {
      color: theme.subtext,
      fontSize: 14,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
  })
}

export default MenuScreen
