import {StyleSheet} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  imgBg: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateVerticalScale(24),
  },
  headingText: {
    fontSize: scale(26),
    color: colors.textColor,
    fontWeight: '400',
  },
  descText: {
    fontSize: scale(26),
    color: colors.themeColorOne,
    fontWeight: 'bold',
  },
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateVerticalScale(210),
  },
});

export default styles;
