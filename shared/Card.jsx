import React from "react";
import reactDom from "react-dom";
import { StyleSheet, View, } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Card(props) {
    
 



  return (
   
      <View style={ styles.card}>
        <View style={styles.cardContent}>{props.children}</View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 1,
    borderWidth: 2,
    borderColor: "#333",
    marginVertical: 5,
    marginHorizontal: 20,
    borderStyle: "dashed",
    alignItems: "center",
    width: 150,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
