import { View, StyleSheet, Dimensions } from "react-native"
import Text from "../Text"
import theme from "../../theme"
import { format, toDate, parseISO } from "date-fns"
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
})

const formatDate = (date) => {
  return "formatDate", format(parseISO(date), "dd.MM.yy")
}

const ReviewItem = ({ item }) => {
  let review = item.node
  formatDate(review.createdAt)
  return (
    <View style={styles.card}>
      <View style={styles.mainSection}>
        <View style={styles.circle}>
          <Text fontWeight="bold" fontSize="heading" color="primary">
            {review.rating}
          </Text>
        </View>
        <View>
          <Text fontSize="heading" fontWeight="bold">
            {review.user.username}
          </Text>
          <Text color="textSecondary" style={styles.dateSection}>
            {formatDate(review.createdAt)}
          </Text>
          <Text style={styles.textSection}>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
