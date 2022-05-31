import { View, StyleSheet, Image, Dimensions } from "react-native"
import Text from "../Text"
import Language from "../RepositoryItems/Language"
import theme from "../../theme"
import ViewGithub from "../RepositoryItems/ViewGithub"
import Count from "../RepositoryItems/Count"

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

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <View style={styles.card} testID="repositoryItem">
        <View style={styles.mainSection}>
          <Image
            style={styles.avatar}
            source={{ uri: repository.ownerAvatarUrl }}
            testID="avatar"
          />
          <View>
            <Text fontWeight="bold" fontSize="heading" testID="fullName">
              {repository.fullName}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                color="textSecondary"
                style={styles.textSection}
                testID="description"
              >
                {repository.description}
              </Text>
            </View>
            <Language language={repository.language} testID="language" />
          </View>
        </View>
        <View style={styles.countSection} testID="counts">
          <Count number={repository.stargazersCount} description="Stars" />
          <Count number={repository.forksCount} description="Forks" />
          <Count number={repository.reviewCount} description="Reviews" />
          <Count number={repository.ratingAverage} description="Rating" />
        </View>
        <ViewGithub url={repository.url} />
      </View>
      <View style={styles.separator} />
    </View>
  )
}

export default RepositoryInfo
