import React, {useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function ReportPenjualan() {
    const [reports, setReports] = useState([]);
  
    useEffect(() => {
        async function fetchReports() {
            fetch('http://localhost/penjualan/report.php')
            .then((res) => res.json())
            .then((res) => setReports(res.message));  
        }
        fetchReports();
    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.document_number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {report.document_code} - {report.document_number}
              </TableCell>
              <TableCell align="right">{report.user}</TableCell>
              <TableCell align="right">{report.total}</TableCell>
              <TableCell align="right">{report.date}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}