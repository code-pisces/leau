import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const WaterViewer: React.FC = () => {
  const [display, setDisplay] = useState(2000);
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={[styles.title]}>
        {display.toLocaleString("pt-BR")}
        <Text
          style={{
            color: "#7BE7DE",
          }}
        >
          ml
        </Text>
      </Text>
      <Text style={styles.text}>último registro ás 17:00</Text>
    </View>
  );
};

export default WaterViewer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    borderColor: "#9DE2FF",
    borderStyle: "solid",
    borderWidth: 1,
    width: "90%",
    aspectRatio: 1 / 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontFamily: "RobotoSlab_400Regular",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 45,
  },
  text: {
    color: "#FFFFFF",
  },
});
