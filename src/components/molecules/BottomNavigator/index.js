import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import HomeIcon from '../../../assets/img/home.png';
import IcHistory from '../../../assets/img/ic-history.png';
import Profile from '../../../assets/img/profile-2.png';

const Icon = ({label}) => {
  switch (label) {
    case 'Home':
      return <Image source={HomeIcon} />;
    case 'History':
      return <Image source={IcHistory} />;
    case 'Profile':
      return <Image source={Profile} />;
    default:
      return <Image source={HomeIcon} />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label}/>
            {/* <Text>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#355C7D',
    paddingHorizontal: 30,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
});
