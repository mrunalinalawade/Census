import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from '../assets/Theme';
import FONTS from '../assets/Fonts';
import { WIDTH } from '../Helpers/Dimensions';


const Buttons = (props) => {
  return (
    <View style={[styles.mainContainer, props.styles]}>
      <TouchableOpacity
        disabled={props.disabled1}
        onPress={props.Action1}
        style={[styles.linearGradient1, props.ExternalStyle]}>
        <Text style={[styles.buttonText, { color:'#9C9C'}]}>
          {props.Label1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={props.disabled2}
        onPress={props.Action2}
        style={[{ width: '48%', alignSelf: 'center' }, props.ExternalStyle1]}>
        <LinearGradient
          colors={['#FFC002', '#6F5300']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.linearGradient2, props.linearGradient3]}>
          <Text style={styles.buttonText}>{props.Label2}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width:WIDTH *0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
  },
  linearGradient1: {
    paddingVertical: 15,
    borderRadius: 8,
    width: '48%',
    borderWidth: 1,
    borderColor:'red',
  },
  linearGradient2: {
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color:'#000',
    textAlign: 'center',
    fontFamily: FONTS.semiBold,
  },
});



export default Buttons;
