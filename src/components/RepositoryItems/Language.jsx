import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import Text from "../Text"

const styles = StyleSheet.create({
  component: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderColor: theme.colors.primary,
    padding: 2,
    borderRadius: 3,
    borderWidth: 2,
    color: theme.colors.top,
  },
})

const Language = ({ language }) => {
  return (
    <View style={styles.component}>
      <Text color="top" testID="language">
        {language}
      </Text>
    </View>
  )
}

export default Language
