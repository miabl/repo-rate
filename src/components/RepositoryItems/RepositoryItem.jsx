import { View, StyleSheet, Image } from "react-native"
import Text from '../Text'
import Language from "./Language"
import theme from "../../theme"
import { Dimensions } from "react-native"
import Count from './Count'

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: theme.colors.cardBackground,
  },
  mainSection: {
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  textSection: {
    width: Dimensions.get("screen").width - 90,
    paddingVertical: 10
  },
  countSection: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.mainSection}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View>
          <Text fontWeight="bold" fontSize="heading" >{item.fullName}</Text>
          <View style={{ flexDirection: 'row'}}>
            <Text color="textSecondary" style={styles.textSection}>{item.description}</Text>
            </View>
            <Language language={item.language} />
        </View>
      </View>
      <View style={styles.countSection}>
        <Count number={item.stargazersCount} description="Stars" />
        <Count number={item.forksCount} description="Forks" />
        <Count number={item.reviewCount} description="Reviews" />
        <Count number={item.ratingAverage} description="Rating"/>

    </View>
    </View>
  )
}

export default RepositoryItem