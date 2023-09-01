import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

const HeaderComp = ({onPressBack}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={!!onPressBack ? onPressBack : () => goBack()}>
        <Image source={imagePath.backIcon} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(42),
  },
});
