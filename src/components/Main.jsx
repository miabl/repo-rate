import { StyleSheet, View } from "react-native"
import { Route, Routes, Navigate } from "react-router-native"

import RepositoryList from "./RepositoryList"
import RepositoryDetail from "./RepositoryDetail/RepositoryDetail"
import SignIn from "./SigninForm/SignIn"
import SignUp from "./SignupForm/SignUp"
import AppBar from "./AppBar/AppBar"
import theme from "../theme"
import SubmitReview from "./ReviewForm/SubmitReview"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/:repositoryId" element={<RepositoryDetail />} />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/login" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/submitreview" element={<SubmitReview />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
