import React from "react";
import { StyleSheet, View } from "react-native";
import { TextPresents } from "../molecules";
import { WaterViewer, ButtonGroup } from "../organisms";

const AppTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextPresents />
      <WaterViewer />
      <ButtonGroup />
    </View>
  );
};

export default AppTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
