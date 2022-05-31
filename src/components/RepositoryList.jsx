import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItems/RepositoryItem"
import useRepositories from "../hooks/useRepositories"
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
  const { repositories } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderRepository}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  )
}

export default RepositoryList
