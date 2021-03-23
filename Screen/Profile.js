
import React from 'react';
import { StyleSheet,  View , Image} from 'react-native';
import ProfileItem from '../Component/ProfileItem'
export default function Profile() {
    
     return (
    <View style={styles.container}>
      <Image 
      style={{height: 200}}
        source ={{uri: require("../assets/profile.jpg")}}
      />

      <ProfileItem name="username" value="Sareh Raofian"/>
      <ProfileItem name="Gmail" value="SarehRaofian@gmail.com"/>
      <ProfileItem name="Gender" value="Female"/>
      <ProfileItem name="Mobile" value="+93 9999 77" />
      <ProfileItem name="Address" value="Herat-Afghanistan"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
   
});
