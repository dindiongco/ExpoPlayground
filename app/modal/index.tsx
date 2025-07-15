import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get("window").width;
  const drawerWidth = screenWidth * 0.66;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.burgerButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="menu" size={32} color="#25292e" />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          {/* Overlay area to close modal */}
          <Pressable
            style={styles.overlayTouchable}
            onPress={() => setModalVisible(false)}
          />
          {/* Drawer */}
          <View style={[styles.drawer, { width: drawerWidth }]}>
            <Text style={styles.drawerItem}>About</Text>
            <Text style={styles.drawerItem}>Contact</Text>
            <Text style={styles.drawerItem}>Settings</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons name="close" size={28} color="#25292e" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  burgerButton: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    flexDirection: "row",
  },
  overlayTouchable: {
    flex: 1,
  },
  drawer: {
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  drawerItem: {
    fontSize: 20,
    marginVertical: 15,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
