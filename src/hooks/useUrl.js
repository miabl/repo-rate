import { useQuery } from "@apollo/client"
import { GET_URL } from "../graphql/queries"

const useUrl = () => {
  const { data, error, loading } = useQuery(GET_URL, {
    fetchPolicy: "cache-and-network",
  })

  if (error) console.log("error!", error)

  return { url: data ? data.url : undefined, loading }
}

export default useUrl
