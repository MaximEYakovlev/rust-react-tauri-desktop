import React, { useState } from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export const NumericKeypad = ({ onSubmit, onCancel }) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleBackspace = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  const handleCancel = () => {
    setInputValue('');
    onCancel();
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Enter Data
        </Header>
        <Segment stacked>
          <div style={{ fontSize: '2em', marginBottom: '20px' }}>{inputValue || ' '}</div>

          <Grid columns={3} stackable>
            {['1', '2', '3'].map((num) => (
              <Grid.Column key={num}>
                <Button fluid size="huge" onClick={() => handleButtonClick(num)}>
                  {num}
                </Button>
              </Grid.Column>
            ))}
            {['4', '5', '6'].map((num) => (
              <Grid.Column key={num}>
                <Button fluid size="huge" onClick={() => handleButtonClick(num)}>
                  {num}
                </Button>
              </Grid.Column>
            ))}
            {['7', '8', '9'].map((num) => (
              <Grid.Column key={num}>
                <Button fluid size="huge" onClick={() => handleButtonClick(num)}>
                  {num}
                </Button>
              </Grid.Column>
            ))}
            <Grid.Column>
              <Button fluid size="huge" color="grey" onClick={handleBackspace}>
                ⌫
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid size="huge" onClick={() => handleButtonClick('0')}>
                0
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid size="huge" color="red" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid.Column>
          </Grid>

          <Button color="teal" fluid size="huge" style={{ marginTop: '20px' }} onClick={handleSubmit}>
            OK
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const App = () => {
  const handleDataSubmit = (data) => {
    console.log('Submitted Data:', data);
    // Add your form submission logic here
  };

  const handleCancel = () => {
    console.log('Input canceled.');
    // Add your cancel logic here
  };

  return <NumericKeypad onSubmit={handleDataSubmit} onCancel={handleCancel} />;
};

export default App;
