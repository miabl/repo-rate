import { useQuery } from "@apollo/client"
import { GET_USER } from "../graphql/queries"

const useGetUser = (variables) => {
  const includeReviews = variables?.includeReviews
    ? variables.includeReviews
    : false

  const { data, error, loading, ...result } = useQuery(GET_USER, {
    variables: { includeReviews: includeReviews },
    fetchPolicy: "cache-and-network",
  })

  if (error) console.log("error!", JSON.stringify(error, null, 2))

  return {
    user: data?.me,
    loading,
    ...result,
  }
}

export default useGetUser
