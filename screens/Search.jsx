import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../shared/Card";

const image = { uri: "https://wallpapercave.com/wp/wp5461215.jpg" };

export default function Search(props) {
  const [pokemon, SetPokemon] = React.useState([]);
  const [searchpokemon, SetSearchPokemon] = React.useState(pokemon);
  const [search, SetSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((res) => res.json())
      .then((data) => {
        SetPokemon(data.results), SetSearchPokemon(data.results);
      });
  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function test(val) {
    SetSearch(val);
    if (val === "") {
      SetSearchPokemon(pokemon);
    } else {
      SetSearchPokemon(
        pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }

  const pressHandler = () => {
    props.navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1,
    justifyContent: "center"}} source={image} resizeMode="cover">
        <View style={styles.search}>
          <MaterialCommunityIcons name="pokemon-go" size={28} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search Pokemon Name"
            onChangeText={(value) => test(value)}
            value={search}
          />
        </View>
        <View style={{ alignItems: "center", flex: 1 }}>
          <FlatList
            data={searchpokemon}
            numColumns={2}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => props.navigation.navigate('Details' , item)}>
                <Card>
                  <Image
                    style={styles.gif}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/black-white/anim/normal/${item.name}.gif`,
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>
                    {capitalize(item.name)}
                  </Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    flexDirection: "row",
    marginVertical: 50,
    marginHorizontal: 50,
  },
  input: {
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  gif: {
    width: 60,
    height: 60,
  },
});
