import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MyIcon from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h2">Register</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            accessoryLeft={<MyIcon name="person-outline" />}
            placeholder="nombre de usuario"
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
          <Input
            accessoryLeft={<MyIcon name="email-outline" />}
            placeholder="correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
          <Input
            accessoryLeft={<MyIcon name="unlock-outline" />}
            placeholder="contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom: 10}}
          />
        </Layout>

        <Layout style={{height: 20}} />

        <Layout>
          <Button
            onPress={() => {}}
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
            Ingresar
          </Button>
        </Layout>

        <Layout style={{height: 20}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('LoginScreen')}>
            {' '}
            Ya tengo un cuenta{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default RegisterScreen;
