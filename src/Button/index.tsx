import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={sheet.container}>
        <Text style={sheet.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const sheet = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 200,
    borderRadius: 20,
  },
  text: { color: "white", fontSize: 18 },
});
