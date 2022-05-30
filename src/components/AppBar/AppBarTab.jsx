import { View, Pressable, StyleSheet } from "react-native"
import Text from "../Text"
import { Link } from "react-router-native"

const style = StyleSheet.create({
  menuItem: {},
  link: {
    padding: 10,
  },
})

const AppBarTab = ({ page, link }) => {
  return (
    <View style={style.menuItem}>
      <Pressable>
        <Link to={link} style={style.link}>
          <Text color="top" fontWeight="bold">
            {page}
          </Text>
        </Link>
      </Pressable>
    </View>
  )
}

export default AppBarTab
