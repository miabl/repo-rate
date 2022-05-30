import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client"

const useSignOut = async () => {
  console.log("signout function")
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  await authStorage.removeAccessToken()
  apolloClient.resetStore()
}

export default useSignOut
