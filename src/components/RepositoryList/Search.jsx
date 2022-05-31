import { View, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

const Search = ({ searchKeyword, setSearchKeyword }) => {
  const styles = StyleSheet.create({
    searchbar: {
      alignItems: "center",
      width: "95%",
      borderRadius: 3,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
  })

  const onChangeSearch = (query) => setSearchKeyword(query)

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        style={styles.searchbar}
      />
    </View>
  )
}

export default Search
