import { StyleSheet, View } from "react-native"
import { Route, Routes, Navigate, useParams } from "react-router-native"

import RepositoryList from "./RepositoryList"
import RepositoryDetail from "./RepositoryItems/RepositoryDetail"
import SignIn from "./Form/SignIn"
import AppBar from "./AppBar/AppBar"
import theme from "../theme"

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
        <Route path="/:id" element={<RepositoryDetail />} />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/login" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
