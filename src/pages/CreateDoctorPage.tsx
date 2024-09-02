// import React, { useState } from 'react';
// import { Form, Button, Message } from 'semantic-ui-react';
// import { useNavigate } from 'react-router-dom';

// export const CreateDoctorPage: React.FC = () => {
//   const [firstname, setFirstname] = useState<string>('');
//   const [surname, setSurname] = useState<string>('');
//   const [birthdate, setBirthdate] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple validation
//     if (!firstname || !surname || !birthdate || !password) {
//       setError('All fields are required.');
//       return;
//     }

//     // Simulate API call
//     try {
//       // Add your API call here to create a new doctor
//       console.log({ firstname, surname, birthdate, password });
//       // Navigate back to the admin page or show a success message
//       navigate('/admin');
//     } catch (err) {
//       setError('An error occurred while creating the doctor.');
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Doctor</h1>
//       {error && <Message negative>{error}</Message>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Field>
//           <label>First Name</label>
//           <input
//             placeholder="First Name"
//             value={firstname}
//             onChange={(e) => setFirstname(e.target.value)}
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Surname</label>
//           <input
//             placeholder="Surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Birthdate</label>
//           <input
//             type="date"
//             placeholder="Birthdate"
//             value={birthdate}
//             onChange={(e) => setBirthdate(e.target.value)}
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Field>
//         <Button type="submit" primary>
//           Create Doctor
//         </Button>
//       </Form>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export const CreateDoctorPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      const newDoctor = {
        id: Date.now(), // Use timestamp as a unique ID
        firstname,
        surname,
        birthdate,
        password,
      };

      // Retrieve existing doctors or initialize empty array
      const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
      doctors.push(newDoctor);
      localStorage.setItem('doctors', JSON.stringify(doctors));

      navigate('/doctors-list'); // Redirect to DoctorsListPage
    } catch (err) {
      setError('Failed to create doctor.');
    }
  };

  return (
    <div>
      <h1>Create New Doctor</h1>
      {error && <Message negative>{error}</Message>}
      <Form>
        <Form.Input
          label="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Form.Input
          label="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Form.Input
          label="Birthdate (MM/DD/YYYY)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary onClick={handleSubmit}>Create Doctor</Button>
      </Form>
    </div>
  );
};
