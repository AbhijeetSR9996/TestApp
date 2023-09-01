import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import colors from '../constants/colors';

const ButtonComp = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
      {!!img ? (
        <Image source={img} style={{tintColor: colors.white}} />
      ) : (
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    width: '50%',
    backgroundColor: '#5DE750',
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 3,
  },
  btnTextStyle: {
    fontSize: scale(16),
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
