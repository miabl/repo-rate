import { View, Pressable, StyleSheet } from "react-native"
import Text from "../Text"
import { Formik } from "formik"
import FormikTextInput from "../Forms/FormikTextInput"
import theme from "../../theme"
import useCreateUser from "../../hooks/useCreateUser"
import useSignIn from "../../hooks/useSignIn"
import * as yup from "yup"
import { useNavigate } from "react-router-native"

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
  changePassword: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.component}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontWeight="bold" color="top">
          Sign Up
        </Text>
      </Pressable>
    </View>
  )
}

const SignUp = () => {
  const [signUp] = useCreateUser()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp({ username, password })
      await signIn({ username, password })
      navigate("/")
    } catch (e) {
      console.log(e)
      console.log(JSON.stringify(e, null, 2))
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp
