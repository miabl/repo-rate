import OrderRepositories from "./OrderRepositories"
import Search from "./Search"
import { View } from "react-native"

const RepositoryListHeader = ({
  order,
  setOrder,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <View>
      <View style={{ height: 10 }} />
      <Search
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <OrderRepositories order={order} setOrder={setOrder} />
    </View>
  )
}

export default RepositoryListHeader
