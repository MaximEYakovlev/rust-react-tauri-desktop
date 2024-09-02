import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
}

const keys: string[] = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress, onBackspace, onEnter }) => {
  return (
    <Grid columns={10} padded>
      {keys.map((key) => (
        <Grid.Column key={key}>
          <Button fluid onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        </Grid.Column>
      ))}
      <Grid.Column width={2}>
        <Button fluid color="red" onClick={onBackspace}>
          ⌫
        </Button>
      </Grid.Column>
      {/* <Grid.Column width={2}>
        <Button fluid color="green" onClick={onEnter}>
          Enter
        </Button>
      </Grid.Column> */}
    </Grid>
  );
};


