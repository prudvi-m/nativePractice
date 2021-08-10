import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SuccessScreen({ navigation }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://media-exp1.licdn.com/dms/image/C4D0BAQEJC7BN3dBWxw/company-logo_200_200/0/1617453666937?e=1636588800&v=beta&t=j_1qTuudglWeCqE441R0I8BFRW3TLfAwF7-nTG-4b5o",
        }}
      />

      <Text>Welcome to TimeRack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
    width: 95,
    height: 20,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
});
