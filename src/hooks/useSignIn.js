import { useMutation } from "@apollo/client"
import { AUTHENTICATE_USER } from "../graphql/mutations"

import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client"

const useSignIn = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(AUTHENTICATE_USER)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    return data
  }

  return [signIn, result]
}

export default useSignIn
