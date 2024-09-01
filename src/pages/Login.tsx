

// export const Login:React.FC = () => {
//     return (
//         <div>login</div>
//     )
// }

import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Password:', password);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Field>
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
