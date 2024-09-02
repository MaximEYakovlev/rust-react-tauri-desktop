import React, { useEffect, useState } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Patient {
  id: number;
  skinType: string;
  firstname: string;
  surname: string;
  birthdate: string;
  sex: string;
  comment: string;
}

export const PatientsListPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [doctorId, setDoctorId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPatients = () => {
      try {
        // Retrieve patients from localStorage
        const allPatients = JSON.parse(localStorage.getItem('patients') || '[]');
        const currentDoctorId = JSON.parse(localStorage.getItem('currentDoctorId') || 'null');
        const userPatients = allPatients.filter((p: any) => p.doctorId === currentDoctorId);
        setPatients(userPatients);
      } catch (err) {
        setError('Failed to load patients.');
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h1>List of Patients</h1>
      {error && <Message negative>{error}</Message>}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Skin Type</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Surname</Table.HeaderCell>
            <Table.HeaderCell>Birthdate</Table.HeaderCell>
            <Table.HeaderCell>Sex</Table.HeaderCell>
            <Table.HeaderCell>Comment</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {patients.map((patient) => (
            <Table.Row key={patient.id}>
              <Table.Cell>{patient.id}</Table.Cell>
              <Table.Cell>{patient.skinType}</Table.Cell>
              <Table.Cell>{patient.firstname}</Table.Cell>
              <Table.Cell>{patient.surname}</Table.Cell>
              <Table.Cell>{patient.birthdate}</Table.Cell>
              <Table.Cell>{patient.sex}</Table.Cell>
              <Table.Cell>{patient.comment}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Link to="/doctor">
        <Button primary>Back to Doctor Dashboard</Button>
      </Link>
    </div>
  );
};
