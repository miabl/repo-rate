import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'

const style = StyleSheet.create({
  menuItem: {
    padding: 10,
  },
}
)

const AppBarTab = ({page}) => {
  return (
    <View style={style.menuItem}>
    <Pressable>
        <Text fontWeight="bold" fontSize="heading" color="top">{page}</Text>
    </Pressable>
    </View>
  )
}

export default AppBarTab
