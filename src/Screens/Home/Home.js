import React from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import {connect} from 'react-redux';

const Home = ({navigation, route}) => {
  const {data} = route.params;
  console.log('data ', data);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={imagePath.bg} style={styles.imgBg} />
      <View
        style={{
          paddingHorizontal: moderateScale(24),
          paddingVertical: moderateVerticalScale(44),
          backgroundColor: 'transparent',
        }}>
        <View style={styles.headingView}>
          <Text style={styles.headingText}>Hi, {data}!!</Text>
          <Text style={styles.descText}>Welcome to TestApp...</Text>
        </View>

        <View style={styles.btnStyle}>
          <ButtonComp
            btnText={'Logout'}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
