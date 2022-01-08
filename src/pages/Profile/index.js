import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IcBackBlue from '../../assets/img/ic-back-blue.png';
import IcProfile from '../../assets/img/ic-profile-person.png';
import IcAddPhoto from '../../assets/img/ic-camera-mini.png';
import {Button, Gap} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      {/*  Header */}
      <TouchableOpacity>
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image source={IcBackBlue} />
          </View>
          <Text style={styles.title}>Profile</Text>
        </View>
      </TouchableOpacity>
      {/* Header */}
      {/* Img component */}
      <View style={styles.profilePhotoContainer}>
        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={IcProfile} />
        </View>
        <TouchableOpacity>
          <View style={styles.addPhoto}>
            <Image source={IcAddPhoto} />
          </View>
        </TouchableOpacity>
      </View>
      {/* img component */}
      {/* Content */}
      {/* name */}
      <Gap height={20} />
      <Text style={styles.name}>John de pendeho</Text>
      {/* name */}
      <View style={styles.contentContainer}>
        <View style={styles.containerText}>
          <Text style={styles.label}>Email:</Text>
          <Text>enryuu122@gmail.com</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.label}>Phone number:</Text>
          <Text>112221112</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.label}>payment method:</Text>
          <Text></Text>
        </View>
      </View>
      {/* content */}
      <View
        style={{
          marginHorizontal:30,
          marginBottom: 20,
        }}>
        <Button text="Logout" textColor="#FFFFFF" color="#FF2D2D" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center',
  },
  imgContainer: {
    paddingHorizontal: 5,
    marginLeft: -5,
  },
  title: {
    fontSize: 20,
    color: '#355c7d',
    fontWeight: '400',
    paddingLeft: 10,
  },
  profilePhotoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    // backgroundColor: 'yellow',
  },
  photoContainer: {
    Width: 100,
    Height: 100,
  },
  photo: {
    width: 100,
    height: 100,
  },
  addPhoto: {
    // backgroundColor: 'red',
    width: 30,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    paddingRight: 100,
    justifyContent: 'center',
  },
  name: {
    color: '#355c7d',
    fontSize: 24,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#355c7d',
    borderRadius: 10,
    borderStyle: 'dashed',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  containerText: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    color: '#355c7d',
  },
});
