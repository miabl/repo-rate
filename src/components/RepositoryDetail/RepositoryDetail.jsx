import { View, StyleSheet, Dimensions, FlatList } from "react-native"
import theme from "../../theme"
import useRepository from "../../hooks/useRepository"
import { useParams } from "react-router-native"
import RepositoryInfo from "./RepositoryInfo"
import ReviewItem from "./ReviewItem"
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: theme.colors.cardBackground,
  },
  mainSection: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  textSection: {
    width: Dimensions.get("screen").width - 90,
    paddingVertical: 10,
  },
  countSection: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryDetail = () => {
  const { repositoryId } = useParams()
  const { data, loading } = useRepository(repositoryId)
  if (loading) return <View style={styles.card} testID="repositoryItem"></View>

  const repository = data.repository
  const reviews = data.repository.reviews.edges

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
}

export default RepositoryDetail
