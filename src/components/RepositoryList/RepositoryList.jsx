import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "../RepositoryItems/RepositoryItem"
import useRepositories from "../../hooks/useRepositories"
import RepositoryListHeader from "./RepositoryListHeader"
import RepositoryListContainer from "./RepositoryListContainer"
import { useState } from "react"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const renderRepository = ({ item }) => {
  return <RepositoryItem item={item} />
}

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

  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
  })

  let repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <RepositoryListContainer
      repositoryNodes={repositoryNodes}
      order={order}
      setOrder={setOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  )
}

export default RepositoryList
