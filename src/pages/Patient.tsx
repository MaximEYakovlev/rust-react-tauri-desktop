import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Input, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const sexOptions = [
  { key: 'male', text: 'Male', value: 'male' },
  { key: 'female', text: 'Female', value: 'female' },
  { key: 'custom', text: 'Custom', value: 'custom' },
];

const PatientForm = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    const patientData = {
      firstname,
      surname,
      birthdate,
      sex,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    console.log('Patient Data:', patientData);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Enter Patient Information
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Field>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
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
            <Form.Field>
              <Dropdown
                fluid
                selection
                options={sexOptions}
                placeholder="Select Sex"
                value={sex}
                onChange={(e, { value }) => setSex(value)}
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

export default PatientForm;
