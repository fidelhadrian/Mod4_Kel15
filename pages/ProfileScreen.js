import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { data } from "../data/data";
import Card from "../components/Card";
import Header from "../components/Header";

function ProfileScreen() {
  return (
    <View style={style.container}>
      <Header headerText={"Kelompok 15"} flexPosition={"center"}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => <Card dataNama={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
});

export default ProfileScreen;
