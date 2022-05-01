import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from "../../theme"
const styles = StyleSheet.create({
  input: {
    margin: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.colors.textSecondary,
    padding: 10
  },
  inputError: {
    borderColor: theme.colors.error,
    margin: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10
  }
});

const TextInput = ({ style, error, ...props }) => {

  return <NativeTextInput style={error ? styles.inputError : styles.input} {...props} />;
};

export default TextInput;
