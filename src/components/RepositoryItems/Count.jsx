import {View, StyleSheet} from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    marginTop: 5,
  }
})

23

var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
var abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']

const round = (n, precision) => {
    var prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec;
}

const format = (n) => {
    var base = floor(log(abs(n))/log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n/pow(1000,base),1)+suffix : ''+n;
}

const Count = ({ number, description }) => {
  return (
  <View style={styles.container}>
      <Text fontWeight="bold" style={styles.text}>{format(number)}</Text>
    <Text color="textSecondary" style={styles.text}>{description}</Text>
    </View>
  )
}

export default Count
