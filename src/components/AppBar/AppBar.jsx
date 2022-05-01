import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme'
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    height: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusBar: {
    backgroundColor: theme.colors.appBarBackground,
    height: Constants.statusBarHeight
 }
});

const AppBar = () => {
  return (
    <>
      <View style={styles.statusBar}>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab page="Repositories" link="/" />
          <AppBarTab page="Sign In" link="/login" />
          </ScrollView>
      </View>
      </>
  )
};

export default AppBar;
