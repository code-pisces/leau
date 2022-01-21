import { View, Text, StyleSheet } from "react-native";

const TextPresents: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Olá!</Text>
      <Text style={styles.text}>Quantidade de água ingerida hoje:</Text>
    </View>
  );
};

export default TextPresents;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: '300',
    fontFamily: "Roboto",
  },
  textBold: {
    fontFamily: "RobotoSlab_700Bold",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
});
