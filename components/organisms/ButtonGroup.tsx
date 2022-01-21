import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const WaterViewer: React.FC = () => {
  const [display, setDisplay] = useState(2000)
  return (
    <View style={styles.container}>
      <Text>oi</Text>
    </View>
  );
};

export default WaterViewer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 30,
    aspectRatio: 1/1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
