import { useContext } from 'react';
import { multiStepContext } from '../StepContext';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <Table
          border="1"
          style={{ width: '20%', justifyContent: 'center' }}
          size="small"
          arial-label="caption table"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: 'green', color: 'blue' }}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>Postal Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lastname}</TableCell>
                <TableCell>{data.contact}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.district}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.landmark}</TableCell>
                <TableCell>{data.postcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
