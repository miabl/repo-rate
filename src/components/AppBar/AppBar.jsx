import { View, StyleSheet, ScrollView } from "react-native"
import useGetUser from "../../hooks/useGetUser"
import theme from "../../theme"
import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"
import Text from "../Text"
import SignOut from "./SignOut"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    height: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    backgroundColor: theme.colors.appBarBackground,
    height: Constants.statusBarHeight,
  },
})

const AppBar = () => {
  const { user, loading } = useGetUser()

  if (loading) return <Text>loading...</Text>

  const signedIn = user != null

  let signin = <AppBarTab page="Sign in" link="/login" />
  if (signedIn) {
    signin = <SignOut />
  }

  return (
    <>
      <View style={styles.statusBar}></View>
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab page="Repositories" link="/" />
          {signedIn ? (
            <>
              <AppBarTab page="Create a review" link="/submitreview" />
              <AppBarTab page="My reviews" link="/userreviews" />
            </>
          ) : (
            <AppBarTab page="Sign up" link="/signup" />
          )}
          {signin}
        </ScrollView>
      </View>
    </>
  )
}

export default AppBar
