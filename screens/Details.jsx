import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../shared/Card";

export default function Details(props) {
  const [url, setUrl] = React.useState(props.navigation.getParam("url"));
  const [pokiData, setPokiData] = React.useState({
    update: false,
    name: "",
    id: 0,
    pokiType: [],
    pokiWeight: 0,
    pokiHeight: 0,
    Image: "",
  });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function lastUrl(id) {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${pokiData.id - 1}/`);
    setPokiData(prevData => ({...prevData, update: true} ) )
  }

  function nextUrl(id) {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${pokiData.id + 1}/`);
    setPokiData(prevData => ({...prevData, update: true} ) )
  }

  // Fetching the Data for specific pokimon
  React.useEffect(
    () =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPokiData({
            update: true,
            name: data["name"],
            id: data["id"],
            pokiWeight: data["weight"],
            pokiHeight: data["height"],
            pokiType: data["types"],
            Image: data["sprites"],
            moves: data["moves"],
          });
        }),
    [url]
  );

  if (pokiData.update) {
    return (
      <View style={{ flex: 1 }}>
        {/* Title of the pokemon */}
        <View style={styles.title}>
          <Text style={styles.name}>{capitalize(pokiData['name'])}</Text>
          <Text style={styles.id}>
            Id: #{pokiData["id"].toString().padStart(3, "0")}
          </Text>
        </View>
        {/* Buttons to pokemons */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => lastUrl(pokiData.id)}
          >
            {pokiData.id != 1 && (
              <View style={styles.button}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nextUrl(pokiData.id)}>
            {pokiData.id != 649 && (
              <View style={styles.button}>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Images of the pokemon */}
        <View style={styles.image}>
          <Image
            style={{ width: 180, height: 180, marginTop: -25 }}
            source={{
              uri: pokiData["Image"]["front_default"],
            }}
          />
          <Image
            style={{ width: 180, height: 180, marginTop: -25 }}
            source={{
              uri: pokiData["Image"]["back_default"],
            }}
          />
        </View>
        {/* Details of the pokemon */}
        <View>
          <Text style={styles.heading}>Details</Text>
          <View style={styles.details }>
            <Card>
              <Text>Weight: {pokiData.pokiWeight}</Text>
            </Card>
            <Card>
              <Text>Height: {pokiData.pokiHeight}</Text>
            </Card>
          </View>
        </View>
        {/* Type of pokemon */}

        <View>
          <Text style={styles.heading}>Pokemon Type</Text>
          <View style={styles.type  }>
            {pokiData["pokiType"].map((data) => (
              <View key={data.type.name}>
                <Card>
                  <Text>{data.type.name}</Text>
                </Card>
              </View>
            ))}
          </View>
        </View>

        {/* Moves of the pokemon */}
        <View style={{flex:1}} >
          <Text style={styles.heading}>Moves</Text>
          <ScrollView>
            <View style={styles.moves} key={pokiData.name}>
              {pokiData["moves"].map((data) => (
                <View  key={data.move.name}>
                  <Card >
                    <Text>{data.move.name}</Text>
                  </Card>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
    // Loading Page
  } else {
    return (
      <View>
        <Text>Loading Pokimon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    backgroundColor: "#FE7F2D",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  name: {
    fontSize: 25,
  },
  id: {
    alignSelf: "flex-start",
    position: "absolute",
    right: 0,
    fontSize:18,
  },
  button: {
    height: 50,
    width: 70,
    backgroundColor: "#619B8A",
    borderRadius: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  type: {
    flexDirection: "row",
    borderStartWidth:3,
    borderColor: '#FCCA46'
  },

  moves: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    borderStartWidth:3,
    borderColor: '#FCCA46'
  },
  details: {
    flexDirection: "row",
    borderStartWidth:3,
    borderColor: '#FCCA46'
    

  },
  heading: {
    marginLeft:10,
    fontSize: 25,
    letterSpacing: 5,
    
  },
 
});
