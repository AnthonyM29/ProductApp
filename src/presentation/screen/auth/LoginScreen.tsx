import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MyIcon from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigation';
import {API_URL, STAGE} from '@env';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

const LoginScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  console.log({apiUrl: API_URL, stage: STAGE});
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h2">Login</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
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
          <Text category="p1">No tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('RegisterScreen')}>
            {' '}
            crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default LoginScreen;
