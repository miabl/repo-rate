import useRepositories from "../../hooks/useRepositories"
import RepositoryListContainer from "./RepositoryListContainer"
import { useState } from "react"

const RepositoryList = () => {
  let orderBy = null
  let orderDirection = null

  const [order, setOrder] = useState("Latest repositories")
  const [searchKeyword, setSearchKeyword] = useState("")

  switch (order) {
    case "Latest repositories":
      orderBy = "CREATED_AT"
      orderDirection = "ASC"
      break
    case "Highest rated repositories":
      orderBy = "RATING_AVERAGE"
      orderDirection = "DESC"
      break
    case "Lowest rated repositories":
      orderBy = "RATING_AVERAGE"
      orderDirection = "ASC"
  }

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    orderBy,
    orderDirection,
    searchKeyword,
  })

  let repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositoryNodes={repositoryNodes}
      order={order}
      setOrder={setOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
