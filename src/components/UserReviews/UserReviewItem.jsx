import { View, StyleSheet, Dimensions, Pressable, Alert } from "react-native"
import { useNavigate } from "react-router-native"
import Text from "../Text"
import theme from "../../theme"
import { format, parseISO } from "date-fns"
import useDeleteReview from "../../hooks/useDeleteReview"

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
  dateSection: {
    paddingTop: 5,
  },
  countSection: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    padding: 8,
    marginRight: 15,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bluebutton: {
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  redbutton: {
    borderRadius: 3,
    padding: 10,
    margin: 5,
    flex: 1,
    backgroundColor: theme.colors.error,
    alignItems: "center",
  },
})

const formatDate = (date) => {
  return "formatDate", format(parseISO(date), "dd.MM.yy")
}

const UserReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview()

  const handleRepoPress = () => {
    navigate(`/${review.node.repository.id}`)
  }

  const handleDelete = async () => {
    const deleteReviewId = review.node.id

    try {
      await deleteReview({ deleteReviewId: deleteReviewId })
      refetch({ includeReviews: true })
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeletePress = () => {
    Alert.alert(
      "Delete Review",
      `Are you sure you want to delete review for ${review.node.repository.fullName}?`,
      [
        {
          text: "Confirm",
          onPress: () => handleDelete(),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
      ]
    )
  }

  formatDate(review.node.createdAt)
  return (
    <View style={styles.card}>
      <View style={styles.mainSection}>
        <View style={styles.circle}>
          <Text fontWeight="bold" fontSize="heading" color="primary">
            {review.node.rating}
          </Text>
        </View>
        <View>
          <Text fontSize="heading" fontWeight="bold">
            {review.node.repository.fullName}
          </Text>
          <Text color="textSecondary" style={styles.dateSection}>
            {formatDate(review.node.createdAt)}
          </Text>
          <Text style={styles.textSection}>{review.node.text}</Text>
        </View>
      </View>
      <View style={styles.countSection}>
        <Pressable style={styles.bluebutton} onPress={handleRepoPress}>
          <Text color="top" fontWeight="bold">
            View Repository
          </Text>
        </Pressable>
        <Pressable style={styles.redbutton} onPress={handleDeletePress}>
          <Text color="top" fontWeight="bold">
            Delete Review
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default UserReviewItem
