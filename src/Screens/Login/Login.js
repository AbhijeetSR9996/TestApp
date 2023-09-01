import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Image,
} from 'react-native';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import Toast from 'react-native-toast-message';
import {moderateVerticalScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {setData} from '../../redux/actions';

const Login = ({navigation, setData}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setVisible] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleBackPress = () => {
    setModalVisible(true);
    return true;
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalAccept = () => {
    setModalVisible(false);
    BackHandler.exitApp();
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  const handleLogin = () => {
    if (username == '') {
      Toast.show({
        type: 'error',
        text1: 'Username is required.',
      });
      return;
    } else if (username.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Minimum 3 character is allowed.',
      });
      return;
    } else if (password == '') {
      Toast.show({
        type: 'error',
        text1: 'Password is required.',
      });
      return;
    } else if (password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Minimum 6 character is allowed.',
      });
      return;
    } else {
      navigation.navigate(navigationStrings.HOME, {data: username});
      setData(username);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={imagePath.bg} style={styles.imgStyle} />
      <View style={styles.mainStyle}>
        <View style={styles.headingView}>
          <Text style={styles.loginTextStyle}>Welcome!! </Text>
          <Text style={styles.loginTextTwoStyle}>Sign In</Text>
        </View>
        <Text style={styles.labelStyle}>Username</Text>
        <TextInputWithLabel
          label="Username"
          placeHolder="Enter username"
          value={username}
          onChangeText={e => setUsername(e)}
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
        />
        <Text style={styles.labelStyle}>Password</Text>
        <TextInputWithLabel
          label="Password"
          placeHolder="Enter Password"
          value={password}
          onChangeText={e => setPassword(e)}
          secureTextEntry={isVisible}
          rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
          onPressRight={() => setVisible(!isVisible)}
        />

        <TouchableOpacity style={styles.forgotView} activeOpacity={0.7}>
          <Text style={styles.forgotText}>Forgot Password? </Text>
        </TouchableOpacity>

        <ButtonComp btnText={'Sign In'} onPress={handleLogin} />

        <View style={styles.textView}>
          <Text style={styles.forgotText}>or </Text>
        </View>

        <View style={styles.socialView}>
          <TouchableOpacity activeOpacity={0.7} style={styles.socialIcons}>
            <Image source={imagePath.fbIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={imagePath.twIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.socialIcons}>
            <Image source={imagePath.inIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.bottomTextTwo}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <View style={styles.modalTextView}>
            <Text style={styles.modalText}>Do you want to exit the App?</Text>
          </View>
          <View style={styles.modalButtonView}>
            <View style={styles.loginbuttonContainer}>
              <ButtonComp
                btnText={'Cancel'}
                onPress={handleModalCancel}
                btnStyle={styles.cancelbutton}
              />
            </View>
            <View style={styles.loginbuttonContainer}>
              <ButtonComp
                onPress={handleModalAccept}
                btnText={'Accept'}
                btnStyle={styles.acceptbutton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

//export default Login;
export default connect(null, {setData})(Login);
