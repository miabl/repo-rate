import React from "react"
import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "../RepositoryItems/RepositoryItem"
import RepositoryListHeader from "./RepositoryListHeader"
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const renderRepository = ({ item }) => {
  return <RepositoryItem item={item} />
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { order, setOrder, searchKeyword, setSearchKeyword } = this.props

    return (
      <RepositoryListHeader
        order={order}
        setOrder={setOrder}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    )
  }

  render() {
    const { repositoryNodes } = this.props

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={{ zIndex: 10 }}
        renderItem={renderRepository}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

export default RepositoryListContainer
