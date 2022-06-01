import { View, Pressable, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native"
import Text from "../Text"
import { Formik } from "formik"
import FormikTextInput from "../Forms/FormikTextInput"
import theme from "../../theme"
import * as yup from "yup"
import useCreateReview from "../../hooks/useCreateReview"
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
  repoName: "",
  rating: "",
  review: "",
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Username is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating between 0 and 100")
    .positive()
    .integer()
    .lessThan(101)
    .moreThan(0),
  text: yup.string(),
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.component}>
      <FormikTextInput name="ownerName" placeholder="Owner Name" />
      <FormikTextInput name="repositoryName" placeholder="Repository Name" />
      <FormikTextInput name="rating" placeholder="100" type="number" />
      <FormikTextInput
        name="text"
        placeholder="Write review"
        multiline={true}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontWeight="bold" color="top">
          Create a Review
        </Text>
      </Pressable>
    </View>
  )
}

const SubmitReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      const data = await createReview(values)
      navigate(`/${data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SubmitReview
