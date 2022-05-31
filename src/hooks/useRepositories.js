import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: orderBy, orderDirection: orderDirection },
    fetchPolicy: "cache-and-network",
  })
  if (error) {
    console.log("error!", error)
    console.log(JSON.stringify(error, null, 2))
  }

  return { repositories: data ? data.repositories : undefined, loading }
}

export default useRepositories
