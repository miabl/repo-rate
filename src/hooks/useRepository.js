import { useQuery } from "@apollo/client"
import { GET_REPOSITORY } from "../graphql/queries"

const useRepository = (variables) => {
  const { id, first } = variables
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      variables: {
        id: id,
        first: first,
      },
      fetchPolicy: "cache-and-network",
    }
  )

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  if (error) console.log("error!", JSON.stringify(error, null, 2))

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepository
