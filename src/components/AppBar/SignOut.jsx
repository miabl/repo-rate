import { View, StyleSheet, TouchableHighlight } from "react-native"
import { useNavigate } from "react-router-native"
import Text from "../Text"
import theme from "../../theme"
import useAuthStorage from "../../hooks/useAuthStorage"
import { useApolloClient } from "@apollo/client"

const style = StyleSheet.create({
  menuItem: {},
  link: {
    padding: 10,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
})

const SignOut = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate("/")
  }

  return (
    <View style={style.menuItem}>
      <TouchableHighlight onPress={handleSignOut} style={style.link}>
        <Text color="top" fontWeight="bold">
          Sign Out
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default SignOut
