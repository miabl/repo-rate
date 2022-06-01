import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = (variables) => {
  const { orderBy, orderDirection, searchKeyword, first } = variables
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables: {
        orderBy: orderBy,
        orderDirection: orderDirection,
        searchKeyword: searchKeyword,
        first: first,
      },
      fetchPolicy: "cache-and-network",
    }
  )

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  if (error) {
    console.log("error!", error)
    console.log(JSON.stringify(error, null, 2))
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositories
