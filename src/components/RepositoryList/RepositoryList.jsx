import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "../RepositoryItems/RepositoryItem"
import useRepositories from "../../hooks/useRepositories"
import OrderRepositories from "./OrderRepositories"
import { useState, useEffect } from "react"

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

  const { repositories } = useRepositories({ orderBy, orderDirection })

  let repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={() => (
        <OrderRepositories order={order} setOrder={setOrder} />
      )}
      ListHeaderComponentStyle={{ zIndex: 10 }}
      renderItem={renderRepository}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  )
}

export default RepositoryList
