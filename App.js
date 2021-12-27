// import { StatusBar } from 'expo-status-bar';
import React from "react";
import Home from "./screens/Home";
import Search from "./screens/Search";

import Navigation from "./routs/searchStack";

export default function App() {
  const [clicked, setButton] = React.useState(false);

  if (clicked) {
    return <Navigation />;
  }
  else{
    return <Home onPress={() => setButton(true)} />
  }
}
