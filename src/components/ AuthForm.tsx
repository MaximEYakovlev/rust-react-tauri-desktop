// import React, { useState } from 'react';
// import { Dropdown, Form, Button } from 'semantic-ui-react';
// import VirtualKeyboard from './VirtualKeyboard';

// interface AuthFormProps {
//   onLogin: (credentials: { role: string; username?: string; password: string }) => void;
// }

// export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
//   const [role, setRole] = useState<string>('');
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [focusedField, setFocusedField] = useState<'username' | 'password'>('username');

//   const roleOptions = [
//     { key: 'admin', text: 'Admin', value: 'admin' },
//     { key: 'doctor', text: 'Doctor', value: 'doctor' },
//   ];

//   const handleLogin = () => {
//     onLogin({ role, username, password });
//   };

//   const handleKeyPress = (key: string) => {
//     if (focusedField === 'username') {
//       setUsername(username + key);
//     } else if (focusedField === 'password') {
//       setPassword(password + key);
//     }
//   };

//   const handleBackspace = () => {
//     if (focusedField === 'username') {
//       setUsername(username.slice(0, -1));
//     } else if (focusedField === 'password') {
//       setPassword(password.slice(0, -1));
//     }
//   };

//   return (
//     <Form>
//       <Dropdown
//         placeholder="Select Role"
//         fluid
//         selection
//         options={roleOptions}
//         onChange={(e, { value }) => setRole(value as string)}
//       />
//       {role === 'admin' && (
//         <Form.Input
//           fluid
//           label="Username"
//           placeholder="Username"
//           value={username}
//           onFocus={() => setFocusedField('username')}
//           readOnly
//         />
//       )}
//       <Form.Input
//         fluid
//         label="Password"
//         placeholder="Password"
//         type="password"
//         value={password}
//         onFocus={() => setFocusedField('password')}
//         readOnly
//       />
//       <VirtualKeyboard onKeyPress={handleKeyPress} onBackspace={handleBackspace} onEnter={handleLogin} />
//       <Button primary onClick={handleLogin}>
//         Login
//       </Button>
//     </Form>
//   );
// };

// import React, { useState } from 'react';
// import { Dropdown, Form, Button } from 'semantic-ui-react';
// import VirtualKeyboard from './VirtualKeyboard';

// interface AuthFormProps {
//   onLogin: (credentials: { role: string; username?: string; password: string }) => void;
// }

// export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
//   const [role, setRole] = useState<string>('');
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [focusedField, setFocusedField] = useState<'username' | 'password'>('username');

//   const roleOptions = [
//     { key: 'admin', text: 'Admin', value: 'admin' },
//     { key: 'doctor', text: 'Doctor', value: 'doctor' },
//   ];

//   const handleLogin = () => {
//     onLogin({ role, username, password });
//   };

//   const handleKeyPress = (key: string) => {
//     if (focusedField === 'username') {
//       setUsername(username + key);
//     } else if (focusedField === 'password') {
//       setPassword(password + key);
//     }
//   };

//   const handleBackspace = () => {
//     if (focusedField === 'username') {
//       setUsername(username.slice(0, -1));
//     } else if (focusedField === 'password') {
//       setPassword(password.slice(0, -1));
//     }
//   };

//   return (
//     <Form>
//       <Dropdown
//         placeholder="Select Role"
//         fluid
//         selection
//         options={roleOptions}
//         onChange={(e, { value }) => setRole(value as string)}
//       />
//       {role === 'admin' && (
//         <Form.Input
//           fluid
//           label="Username"
//           placeholder="Username"
//           value={username}
//           onFocus={() => setFocusedField('username')}
//           readOnly
//         />
//       )}
//       <Form.Input
//         fluid
//         label="Password"
//         placeholder="Password"
//         type="password"
//         value={password}
//         onFocus={() => setFocusedField('password')}
//         readOnly
//       />
//       <VirtualKeyboard onKeyPress={handleKeyPress} onBackspace={handleBackspace} onEnter={handleLogin} />
//       <Button primary onClick={handleLogin}>
//         Login
//       </Button>
//     </Form>
//   );
// };

import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { VirtualKeyboard } from './VirtualKeyboard';

interface AuthFormProps {
  role: 'admin' | 'doctor';
  onLogin: ({ username, password }: { username?: string; password: string }) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ role, onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [activeField, setActiveField] = useState<'username' | 'password' | null>(null);

  const handleKeyPress = (key: string) => {
    if (activeField === 'username') {
      setUsername(prev => prev + key);
    } else if (activeField === 'password') {
      setPassword(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    if (activeField === 'username') {
      setUsername(prev => prev.slice(0, -1));
    } else if (activeField === 'password') {
      setPassword(prev => prev.slice(0, -1));
    }
  };

  const handleEnter = () => {
    onLogin({ username, password });
  };

  return (
    <Form>
      {role === 'admin' && (
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            value={username}
            onFocus={() => setActiveField('username')}
            readOnly // Ensure input is from the virtual keyboard
          />
        </Form.Field>
      )}
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onFocus={() => setActiveField('password')}
          readOnly // Ensure input is from the virtual keyboard
        />
      </Form.Field>
      <Button type="submit" color="green" onClick={handleEnter}>
        Login
      </Button>

      <VirtualKeyboard 
        onKeyPress={handleKeyPress} 
        onBackspace={handleBackspace} 
        onEnter={handleEnter} 
      />
    </Form>
  );
};
