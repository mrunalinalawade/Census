import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../Components/Buttons';
import {WIDTH} from '../../Helpers/Dimensions';
import Inputfield from '../../Components/InputField';
import {ValidateEmail} from '../../Components/ValidationConfig/Validations';
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';
// import DatePicker from 'react-native-date-picker';
// import RegisterDatePicker from '../../Components/RegisterDatePicker';

const Form1 = props => {
  const [FName, setFName] = useState('');
  const [FNameError, setFNameError] = useState('');
  const [MName, setMName] = useState('');
  const [MNameError, setMNameError] = useState('');
  const [SName, setSName] = useState('');
  const [SNameError, setSNameError] = useState('');
  // const [birthDate, setDate] = useState('');
  // const [open, setOpen] = useState(false);
  // const [dateSelected, setDateSelected] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  const [ShowError, setShowError] = useState({
    FNameError: false,
    MNameError: false,
    SNameError: false,
  });

  // const isValidDate = (Date_) => {
  //   const selectedDate = Date_ || minDate;
  //   setErrorMessage('');
  //   if (selectedDate <= minDate || selectedDate >= maxDate) {
  //     console.log(
  //       selectedDate <= minDate || selectedDate >= maxDate,
  //       birthDate,
  //       'birthDate',
  //       dateSelected,
  //     );
  //     setErrorMessage(
  //       dateSelected ? '' : 'Please enter a valid birth.',
  //     );
  //     return false;
  //   } else {
  //     setErrorMessage('');
  //     return true;
  //   }
  // };

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, alignSelf: 'center'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        <View
          style={{
            width: WIDTH * 0.9,
            backgroundColor: COLORS.YELLOWPRIME,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'center',
            padding: '4%',
          }}>
          <Text style={styles.headStyle}>Family Head Details</Text>
        </View>
        <View
          style={{
            width: WIDTH * 0.9,
            backgroundColor: COLORS.ERROR_COLOR_RED,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: 'center',
            padding: '4%',
          }}>
          <Text style={styles.typename}>Type name of family head</Text>
        </View>
        <Text style={styles.firstname}>
          First Name<Text style={styles.starStyle}>*</Text>
        </Text>

        <Inputfield
          placeholder={'Enter First Name'}
          MaxLength={256}
          value={FName}
          onBlur={() => {
            if (FName != '' || FName != undefined) {
              setShowError(prevState => ({
                ...prevState,
                FNameError: true,
              }));
            }
          }}
          onChangeText={text => {
            if (FName != '' || FName != undefined) {
              setFName(text);
              setFNameError(ValidateEmail(text));
            }
          }}
          ShowError={ShowError.FNameError}
          Error={FNameError}
        />
        <Text style={styles.firstname}>
          Middle Name(Father/husband)<Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter Middle Name'}
          MaxLength={256}
          value={MName}
          onBlur={() => {
            if (MName != '' || MName != undefined) {
              setShowError(prevState => ({
                ...prevState,
                MNameError: true,
              }));
            }
          }}
          onChangeText={text => {
            if (MName != '' || MName != undefined) {
              setMName(text);
              setMNameError(ValidateEmail(text));
            }
          }}
          ShowError={ShowError.MNameError}
          Error={MNameError}
        />
        <Text style={styles.firstname}>
          Surname<Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter SurName'}
          MaxLength={256}
          value={SName}
          onBlur={() => {
            if (SName != '' || SName != undefined) {
              setShowError(prevState => ({
                ...prevState,
                SNameError: true,
              }));
            }
          }}
          onChangeText={text => {
            if (SName != '' || SName != undefined) {
              setSName(text);
              setSNameError(ValidateEmail(text));
            }
          }}
          ShowError={ShowError.SNameError}
          Error={SNameError}
        />
        <Text style={styles.firstname}>
          Gender<Text style={styles.starStyle}>*</Text>
        </Text>
        <Text style={styles.firstname}>
          Date Of Birth<Text tyle={styles.starStyle}>*</Text>
        </Text>
        {/* <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: '#F6F6F633',
            width: WIDTH * 0.9,
            paddingVertical: Platform.OS == 'ios' ? '5.9%' : '4.9%',
            borderRadius: 8,
            marginTop: '1.5%',
            flexDirection: 'row',
            justifyContent: 'space-between',

            paddingHorizontal: '5.5%',
          }}>
          <View>
            <Text style={dateSelected ? styles.dateStyle : styles.dateStyle1}>
              {dateSelected
                ? moment(birthDate).format('DD-MM-YYYY')
                : 'Enter Birth'}
            </Text>
          </View>

          {/* <RegisterDatePicker /> */}
        {/* </TouchableOpacity>  */}
        {/* {errorMessage && (
              <Text style={styles.Errorstyle1}>{errorMessage}</Text>
            )} */}
            {/* <DatePicker
              modal
              open={open}
              date={date18YearsAgo}
              mode="date"
              maximumDate={date18YearsAgo}
              minimumDate={date100YearsAgo}
              onConfirm={date => {
                console.log(date);
                setOpen(false);
                setDate(date);
                setDateSelected(true);
                isValidDate(date);
                setErrorMessage('');
              }}
              onCancel={() => {
                setOpen(false);
              }}
            /> */}
        <Text style={styles.firstname}>
          Sub Caste<Text style={styles.starStyle}>*</Text>
        </Text>

        {/* <Buttons
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

      <Inputfield
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
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  headStyle: {
    // color: COLORS.BLACK,
    fontSize: 22,
    fontStyle: FONTS.bold,
    alignItems: 'center',
  },
  typename: {
    color: COLORS.BLACK,
    fontSize: 18,
    fontStyle: FONTS.regular,
    alignItems: 'center',
  },
  firstname: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontStyle: FONTS.regular,
    marginVertical: '2%',
  },
  starStyle: {
    color: 'red',
    fontSize: 14,
    fontStyle: FONTS.regular,
  },
  viewStyle: {
    width: WIDTH * 0.9,
    marginVertical: '4%',
  },
});
export default Form1;
