import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  moderateVerticalScale,
  scale,
  moderateScale,
} from 'react-native-size-matters';
import colors from '../constants/colors';

const TextInputWithLabel = ({
  label,
  placeHolder,
  value,
  onChangeText = () => {},
  inputStyle = {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <View style={styles.flexView}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={colors.textColorTwo}
          value={value}
          onChangeText={onChangeText}
          style={styles.inlineStyle}
          {...props}
        />
        {!!rightIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
            <Image style={styles.imgStyle} source={rightIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 0.7,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(4),
    paddingHorizontal: moderateScale(5),
  },
  inlineStyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(14),
    color: colors.textColor,
    flex: 1,
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyle: {
    tintColor: colors.textColorTwo,
    height: moderateScale(20),
    width: moderateScale(20),
    marginHorizontal: moderateScale(5),
  },
});

export default TextInputWithLabel;
