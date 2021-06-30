import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>
        Nama : Kharisma Titania Putri {"\n"}
        NPM : 18.1.03.03.18 {"\n"}
        Alamat : Nganjuk {"\n"}
        Prodi : Sistem Informasi {"\n"}
        {"\n"}
      </Text>
      <Button title="Kembali" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
