import { useQuery } from "@apollo/client"
import { GET_REPOSITORY } from "../graphql/queries"

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  })

  if (error) console.log("error!", JSON.stringify(error, null, 2))

  return { data: data ? data : undefined, loading }
}

export default useRepository
