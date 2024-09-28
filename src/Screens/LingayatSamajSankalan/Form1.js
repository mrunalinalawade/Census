import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Buttons from '../../Components/Buttons';
import {WIDTH} from '../../Helpers/Dimensions';
import Inputfield from '../../Components/InputField';

const Form1 = props => {

  return (
    <View>
      <Text style={{color: 'black'}}>fghdfjkgtdfkgjhfdkghdfjg</Text>

      <Buttons
        Label1="Back"
        Label2="Next"
        // Action1={() => props.setReportModalVisible(false)}
        // Action2={() => OnConfirm()}
        ExternalStyle={{
          width: '45%',
          alignSelf: 'center',
          paddingVertical: 10,
        }}
        ExternalStyle1={{
          width: '45%',
          alignSelf: 'center',
        }}
        styles={{width: WIDTH * 0.7, justifyContent: 'space-evenly'}}
        linearGradient3={{
          paddingVertical: 11,
        }}
      />

      {/* <Inputfield
          placeholder={'Enter your email'}
          MaxLength={256}
          value={Email}
          onBlur={() => {
            if (Email != '' || Email != undefined) {
              setShowError(prevState => ({
                ...prevState,
                emailError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            if (Email != '' || Email != undefined) {
              setEmail(text);
              setEmailError(ValidateEmail(text));
            }
          }}
          ShowError={ShowError.emailError}
          Error={EmailError}
        /> */}
    </View>
  );
};
const styles = StyleSheet.create({});
export default Form1;
