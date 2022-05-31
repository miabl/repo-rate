import { useState } from "react"
import { View, StyleSheet, Pressable } from "react-native"
import { Menu, Provider, List } from "react-native-paper"
import theme from "../../theme"

const OrderRepositories = ({ order, setOrder }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    greyText: {
      color: theme.colors.textSecondary,
    },
    currentOrder: {},
    dropdown: {},
  })

  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  const handleChange = (item) => {
    setOrder(item)
  }

  return (
    <Provider>
      <View
        style={{
          width: "100%",
        }}
      >
        <List.Section title="">
          <List.Accordion
            title={order}
            onPress={openMenu}
            style={{
              width: "100%",
              backgroundColor: theme.colors.mainBackground,
            }}
          ></List.Accordion>
        </List.Section>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={styles.container}
          anchor={{ x: 75, y: 100 }}
        >
          <Menu.Item title="Select an item..." />
          <Menu.Item
            onPress={() => handleChange("Latest repositories")}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => {
              handleChange("Highest rated repositories")
            }}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => {
              handleChange("Lowest rated repositories")
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </Provider>
  )
}

export default OrderRepositories
