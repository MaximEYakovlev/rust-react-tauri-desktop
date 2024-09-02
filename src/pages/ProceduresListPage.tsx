import React, { useEffect, useState } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Procedure {
  name: string;
}

export const ProceduresListPage: React.FC = () => {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        // Replace with your API endpoint
        const response = JSON.parse(localStorage.getItem('procedures') || '[]');
        setProcedures(response);
      } catch (err) {
        setError('Failed to load procedures.');
      }
    };

    fetchProcedures();
  }, []);

  return (
    <div>
      <h1>List of Procedures</h1>
      {error && <Message negative>{error}</Message>}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {procedures.map((procedure, index) => (
            <Table.Row key={index}>
              <Table.Cell>{procedure.name}</Table.Cell>
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
