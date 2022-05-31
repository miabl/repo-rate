import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client"

const useSignOut = async () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  await authStorage.removeAccessToken()
  apolloClient.resetStore()
}

export default useSignOut
