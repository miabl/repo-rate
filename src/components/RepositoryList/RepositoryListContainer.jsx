import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItems/RepositoryItem"
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const renderRepository = ({ item }) => {
  return <RepositoryItem item={item} />
}

export const RepositoryListContainer = ({ repositories }) => {
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

export default RepositoryListContainer
