import { View, StyleSheet, Image } from "react-native"
import Text from "../Text"
import Language from "./Language"
import theme from "../../theme"
import { Dimensions } from "react-native"
import Count from "./Count"
import ViewGithub from "./ViewGithub"
import useRepository from "../../hooks/useRepository"
import { useParams } from "react-router-native"
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

const RepositoryDetail = () => {
  const { id } = useParams()
  const item = useRepository(id)
  console.log("item:", item)
  if (item == undefined) return

  const repository = item.data.repository

  return (
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
  )
}

export default RepositoryDetail
