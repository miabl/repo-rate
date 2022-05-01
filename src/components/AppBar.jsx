import { View, StyleSheet } from 'react-native';
import theme from '../theme'
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
});

const AppBar = () => {
  return (
  <View style={styles.container}>
      <AppBarTab page="Repositories" />
  </View>
  )
};

export default AppBar;
