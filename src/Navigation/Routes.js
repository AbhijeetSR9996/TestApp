import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, View, Text, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import imagePath from '../constants/imagePath';
import colors from '../constants/colors';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from '../redux/store';

const Routes = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      Hide_Splash_Screen();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  let Splash_Screen = (
    <ImageBackground source={imagePath.bg} style={styles.SplashScreen_RootView}>
      <View style={styles.SplashScreen_ChildView}>
        <Text style={styles.textStyle}>TEST APP</Text>
      </View>
    </ImageBackground>
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        {AuthStack()}
        {isVisible === true ? Splash_Screen : null}
        <Toast position="top" topOffset={40} />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? moderateVerticalScale(20) : 0,
  },
  SplashScreen_RootView: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    flex: 1,
    marginVertical: moderateVerticalScale(-10),
  },
  textStyle: {
    fontSize: scale(25),
    marginBottom: moderateVerticalScale(20),
    fontWeight: 'bold',
    color: colors.themeColorOne,
  },
});

export default Routes;
