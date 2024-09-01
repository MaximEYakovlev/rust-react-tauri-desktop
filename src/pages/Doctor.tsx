import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    const doctorData = {
      name,
      surname,
      birthdate,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    console.log('Doctor Data:', doctorData);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Enter Doctor Information
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Field>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Birthdate (MM/DD/YYYY)"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Field>

            <Button color="teal" fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default DoctorForm;
