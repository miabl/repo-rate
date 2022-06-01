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

const renderReview = ({ item }) => {
  return <ReviewItem review={item} />
}

const RepositoryDetail = () => {
  const { repositoryId } = useParams()
  const { repository, fetchMore, loading } = useRepository({
    first: 5,
    id: repositoryId,
  })
  if (loading) return <View style={styles.card} testID="repositoryItem"></View>

  const reviews = repository.reviews.edges

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviews}
      renderItem={renderReview}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
}

export default RepositoryDetail
