import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity

} from 'react-native';

module.exports = React.createClass({

  openUrl(url){
    Linking.canOpenURL(url).then(supported => {
      if(supported){
        Linking.openURL(url);
      } else {
        console.log(`Can not open ${url}`);
      }
    })
  },

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={()=>{this.props.navigator.pop()}}
          >
            <Text style={styles.link}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{this.openUrl(this.props.url)}}
          >
            <Text style={styles.link}>Full Details</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.body}>
          <Image
            style={styles.detailImg}
            source={{uri: this.props.img}}
          />
          <Text style={styles.title}>{this.props.title}</Text>
          <ScrollView style={styles.description}>
            <Text>{this.props.description}</Text>
          </ScrollView>
        </View>

      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  body:{
    flex: 19,
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    color: 'blue',
    fontSize: 12
  },
  detailImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    padding: 5
  },
  description: {
    padding: 10
  }
});
