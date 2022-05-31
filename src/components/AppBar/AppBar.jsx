import { View, StyleSheet, ScrollView } from "react-native"
import { useQuery } from "@apollo/client"
import { GET_USER } from "../../graphql/queries"
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
  const { loading, data } = useQuery(GET_USER)
  if (loading) return <Text>loading...</Text>

  const signedIn = data.me != null

  let signin = <AppBarTab page="Sign In" link="/login" />
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
            <AppBarTab page="Create a Review" link="/submitreview" />
          ) : (
            <AppBarTab page="Sign Up" link="/signup" />
          )}
          {signin}
        </ScrollView>
      </View>
    </>
  )
}

export default AppBar
