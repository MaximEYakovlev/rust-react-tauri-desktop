import React, { useEffect, useState } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  firstname: string;
  surname: string;
  birthdate: string;
}

export const DoctorsListPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = () => {
    try {
      // Retrieve doctors from localStorage
      const data = JSON.parse(localStorage.getItem('doctors') || '[]');
      setDoctors(data);
    } catch (err) {
      setError('Failed to load doctors.');
    }
  };

  useEffect(() => {
    fetchDoctors(); // Fetch doctors on mount
  }, []);

  return (
    <div>
      <h1>List of Doctors</h1>
      {error && <Message negative>{error}</Message>}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Surname</Table.HeaderCell>
            <Table.HeaderCell>Birthdate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {doctors.map((doctor) => (
            <Table.Row key={doctor.id}>
              <Table.Cell>{doctor.id}</Table.Cell>
              <Table.Cell>{doctor.firstname}</Table.Cell>
              <Table.Cell>{doctor.surname}</Table.Cell>
              <Table.Cell>{doctor.birthdate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Link to="/admin">
        <Button primary>Back to Admin Dashboard</Button>
      </Link>
    </div>
  );
};
