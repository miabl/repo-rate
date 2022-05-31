import { View, Pressable, StyleSheet } from "react-native"
import Text from "../Text"
import { Formik } from "formik"
import FormikTextInput from "./FormikTextInput"
import theme from "../../theme"
import * as yup from "yup"

const styles = StyleSheet.create({
  component: {
    backgroundColor: theme.colors.cardBackground,
  },
  button: {
    margin: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
})

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.component}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        testID="passwordField"
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontWeight="bold" color="top" testID="submitButton">
          Sign In
        </Text>
      </Pressable>
    </View>
  )
}

const SignInContainer = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInContainer
