/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';
import { StackPages } from '../common/stack';

export default function SignIn({ navigation }: any) {
  const homepage = () => {
    navigation.navigate(StackPages.HOME);
  };
  return (
    <View style={[styles.bgWhite, styles.height100]}>
      <Image
        source={require('../images/welcome.png')}
        style={styles.image}
      />
      <View style={[styles.container, styles.mt20]}>
        <View>
          <TouchableOpacity style={styles.signupButton} onPress={homepage}>
            <Text style={[styles.textWhite, styles.textMd, styles.extremeBold]}>Create new Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.emailButton, styles.flex, styles.justifyCenter]} onPress={homepage}>
            <Text style={[styles.textBlack, styles.textMd, styles.textCenter, styles.extremeBold]}>Continue with Email</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.flex, styles.mt20]}>
          <Text style={[styles.textBlack, styles.extremeBold ]}>By signing up, you agree to our </Text>
          <TouchableOpacity>
            <Text style={[styles.link, styles.extremeBold]}>Terms of Service</Text>
            </TouchableOpacity>
          <Text style={[styles.textBlack, styles.extremeBold]}> & </Text>
            <TouchableOpacity>
            <Text style={[styles.link, styles.extremeBold]}> Privacy Policy</Text>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={homepage}>
            <Text style={[styles.mt50, styles.textMd, styles.link, styles.textCenter, styles.underline, styles.extremeBold]}>Sign up later</Text>
          </TouchableOpacity>
          <View style={[styles.mt50, styles.flex,styles.justifyCenter]}>
            <Text style={[styles.textBlack, styles.extremeBold]}>Already have an account? </Text>
            <TouchableOpacity onPress={homepage}>
              <Text style={[styles.link, styles.textSm, styles.extremeBold]}> Log in</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    </View>
  );
}


