import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme'
import Constants from 'expo-constants'
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
  },
  statusBar: {
    backgroundColor: theme.colors.appBarBackground,
    height: Constants.statusBarHeight
 }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
    </View>
      <AppBar />
      <RepositoryList/>
    </View>
  )
}

export default Main
