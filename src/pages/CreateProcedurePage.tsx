import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export const CreateProcedurePage: React.FC = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name) {
      setError('Procedure name is required.');
      return;
    }

    // Mock saving procedure
    const procedures = JSON.parse(localStorage.getItem('procedures') || '[]');
    procedures.push({ name });
    localStorage.setItem('procedures', JSON.stringify(procedures));

    navigate('/admin');
  };

  return (
    <div>
      <h1>Create New Procedure</h1>
      <Form>
        <Form.Field>
          <label>Procedure Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        {error && <Message negative>{error}</Message>}
        <Button onClick={handleSubmit} primary>
          Save
        </Button>
      </Form>
    </div>
  );
};
