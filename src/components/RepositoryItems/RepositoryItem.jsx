import { View, StyleSheet, Image, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import Text from "../Text"
import Language from "./Language"
import theme from "../../theme"
import { Dimensions } from "react-native"
import Count from "./Count"

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
})

const RepositoryItem = ({ item }) => {
  let navigate = useNavigate()
  const handlePress = () => {
    navigate(`/${item.id}`)
  }
  return (
    <View style={styles.card} testID="repositoryItem">
      <View style={styles.mainSection}>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
          testID="avatar"
        />
        <View>
          <Pressable onPress={() => handlePress()}>
            <Text fontWeight="bold" fontSize="heading" testID="fullName">
              {item.fullName}
            </Text>
          </Pressable>
          <View style={{ flexDirection: "row" }}>
            <Text
              color="textSecondary"
              style={styles.textSection}
              testID="description"
            >
              {item.description}
            </Text>
          </View>
          <Language language={item.language} testID="language" />
        </View>
      </View>
      <View style={styles.countSection} testID="counts">
        <Count number={item.stargazersCount} description="Stars" />
        <Count number={item.forksCount} description="Forks" />
        <Count number={item.reviewCount} description="Reviews" />
        <Count number={item.ratingAverage} description="Rating" />
      </View>
    </View>
  )
}

export default RepositoryItem
