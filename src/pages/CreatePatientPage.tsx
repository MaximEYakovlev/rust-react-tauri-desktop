import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export const CreatePatientPage: React.FC = () => {
  const [skinType, setSkinType] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('male');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      const newPatient = {
        id: Date.now(), // Use timestamp as a unique ID
        skinType,
        firstname,
        surname,
        birthdate,
        sex,
        comment,
        doctorId: JSON.parse(localStorage.getItem('currentDoctorId') || 'null'), // Associate patient with the current doctor
      };

      // Retrieve existing patients or initialize empty array
      const patients = JSON.parse(localStorage.getItem('patients') || '[]');
      patients.push(newPatient);
      localStorage.setItem('patients', JSON.stringify(patients));

      navigate('/doctor'); // Redirect to Doctor Dashboard
    } catch (err) {
      setError('Failed to create patient.');
    }
  };

  return (
    <div>
      <h1>Create New Patient</h1>
      {error && <Message negative>{error}</Message>}
      <Form>
        <Form.Input
          label="Skin Type"
          value={skinType}
          onChange={(e) => setSkinType(e.target.value)}
        />
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
        <Form.Select
          label="Sex"
          options={[
            { key: 'male', text: 'Male', value: 'male' },
            { key: 'female', text: 'Female', value: 'female' },
            { key: 'custom', text: 'Custom', value: 'custom' }
          ]}
          value={sex}
          onChange={(e, { value }) => setSex(value as string)}
        />
        <Form.TextArea
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button primary onClick={handleSubmit}>Create Patient</Button>
      </Form>
    </div>
  );
};
