import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity,StyleSheet, Text, View, ScrollView,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from './blog.json';

export default function App() {
 const [items, setItems] = useState(data);

 const shuffleItems = () => {
 setItems([...items].sort(() => Math.random() - 0.5));
 };
 return (
 <SafeAreaView style={styles.container}>
    <ScrollView>
 {items.map((item) => (
 <View key={item.id}>
 <Text style={styles.item1}>{item.title}</Text>
 <Text style={styles.items}>{item.content}</Text>
 </View>
 ))}
 </ScrollView>
<TouchableOpacity
 style={styles.button}
 onPress={shuffleItems}
>
 <Text style={{color: "white"}}>Refresh</Text>
</TouchableOpacity>
 </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 justifyContent:'center',
 height:"100%",

 },
 button: {
 alignItems: 'center',
 backgroundColor: 'orange',
 height: "6%",
 width: "100%",
 justifyContent: 'center',
 },

 items:{
  fontWeight:400,
  fontSize: 15,
  backgroundColor: "blanchedalmond",
  marginTop:10,
  padding:30,
 },
 item1:{
  fontSize:30,
  fontStyle: "italic",
  
 }
});
