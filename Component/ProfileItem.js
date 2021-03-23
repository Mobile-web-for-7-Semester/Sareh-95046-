
import React from 'react';
import { StyleSheet,  View , Text} from 'react-native';

export default function ProfileItem({name, value}) {
    
     return (
    <View style={styles.container}>
      <Text style={styles.txt}>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt:{
    fontWeight: 'bold',
    fontSize: 16,
    marginTop : 8
  }
   
});
