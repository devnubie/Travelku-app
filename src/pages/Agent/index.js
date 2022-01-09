import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HeaderBlue} from '../../components';
import LogoBaraya from '../../assets/img/baraya.png';

const Agent = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderBlue
        title="Agent"
        titleColor="#355c7d"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Our Partner</Text>
      </View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={{position: 'absolute'}}>
          {/* List Agent */}
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image source={LogoBaraya} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Baraya Travel</Text>
                <Text style={styles.content}>Jln.soekarno hatta,bandung</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Agent;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 30,
    paddingBottom: 10,
    marginTop: -10,
  },
  title: {
    fontSize: 24,
    color: '#355c7d',
    fontWeight: '400',
  },
  container: {
    backgroundColor:'#68A2D2',
    borderWidth: 1,
    flexGrow: 1,
    borderColor: 'white',
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  box: {
    marginHorizontal: 30,
    backgroundColor: '#355c7d',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#68A2D2',
    flexDirection: 'row',
    maxWidth: 343,
    maxHeight: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  containerAgent: {
    backgroundColor: '#68A2d2',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 20,
    marginVertical: 30,
  },
  containerContent: {
    marginVertical: 30,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  content: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
