import React from 'react';
import {Button, Icon, Layout} from '@ui-kitten/components';

const HomeScreen = () => {
  const FacebookIcon = <Icon name="facebook" />;

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    </Layout>
  );
};

export default HomeScreen;
