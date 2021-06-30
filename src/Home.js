import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function Beranda({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}> Welcome To My Beranda {"\n"} </Text>
      <Button title="Biodata" onPress={() => navigation.navigate("Biodata")} />
    </View>
  );
}
