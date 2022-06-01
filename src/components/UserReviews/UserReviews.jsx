import { View, StyleSheet, FlatList } from "react-native"
import useGetUser from "../../hooks/useGetUser"
import UserReviewItem from "./UserReviewItem"

const UserReviews = () => {
  const { user, loading, refetch } = useGetUser({ includeReviews: true })

  if (loading) return <View></View>

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  })

  const ItemSeparator = () => <View style={styles.separator} />

  const renderReview = ({ item }) => {
    return <UserReviewItem review={item} refetch={refetch} />
  }

  return (
    <FlatList
      data={user.reviews.edges}
      renderItem={renderReview}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default UserReviews
