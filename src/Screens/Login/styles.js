import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  imgStyle: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    fontSize: scale(26),
    color: colors.textColor,
    fontWeight: '400',
  },
  loginTextTwoStyle: {
    fontSize: scale(26),
    color: colors.themeColorOne,
    fontWeight: 'bold',
  },
  labelStyle: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.textColor,
    marginHorizontal: moderateScale(10),
    marginBottom: moderateVerticalScale(-9),
    zIndex: 1,
    backgroundColor: '#f1f1f1',
    marginRight: moderateScale(240),
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(24),
    backgroundColor: 'transparent',
  },
  headingView: {
    alignSelf: 'flex-start',
    marginVertical: moderateVerticalScale(24),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
    marginTop: moderateVerticalScale(10),
  },
  forgotText: {
    fontSize: scale(13),
    color: colors.textColorTwo,
    fontWeight: '400',
  },
  textView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
    alignSelf: 'center',
  },
  socialView: {
    alignSelf: 'center',
    //marginVertical: moderateVerticalScale(24),
    flexDirection: 'row',
    marginTop: moderateVerticalScale(-5),
  },
  socialIcons: {marginVertical: moderateVerticalScale(5)},
  bottomView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(52),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {color: colors.textColor},
  bottomTextTwo: {
    color: colors.themeColorOne,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: verticalScale(250),
  },
  modalTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(-15),
  },
  modalText: {
    fontSize: scale(13),
    color: colors.textColor,
    fontWeight: '400',
  },
  modalButtonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginbuttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(-15),
    marginHorizontal: moderateScale(5),
  },
  cancelbutton: {
    borderRadius: moderateScale(10),
    width: moderateScale(150),
  },
  acceptbutton: {
    borderRadius: moderateScale(10),
    width: moderateScale(150),
    backgroundColor: '#00bc00',
  },
});

export default styles;
