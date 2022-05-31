import { StyleSheet, Pressable } from "react-native"
import Text from "../Text"
import { openURL } from "expo-linking"
import theme from "../../theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 5,
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 4,
    alignItems: "center",
  },
  text: {
    padding: 5,
  },
})

const ViewGithub = ({ url }) => {
  const handleClick = () => {
    openURL(url)
  }

  return (
    <Pressable onPress={() => handleClick()} style={styles.container}>
      <Text color="top" fontWeight="bold" style={styles.text}>
        View on Github
      </Text>
    </Pressable>
  )
}

export default ViewGithub
