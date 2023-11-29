import { useEffect, useState } from 'react';
import './App.css';
import { fetchAll, save, sign } from './api/petitionApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [petitions, setPetitions] = useState([]);
  const [refreshToggle, setRefreshToggle] = useState(false);

  useEffect(() => {
    const asyncFunction = async () => {
      const petitions = await fetchAll();
      console.log(petitions);
      console.log('refreshed');
      setPetitions(petitions?.content);
    };
    asyncFunction();
  }, [refreshToggle]);

  const data = [{ title: 'Title 1', description: 'Desc 1', numberOfSignatures: 10 }, { title: 'Title 2', description: 'Desc 2', numberOfSignatures: 12 }];
  const renderTable = () => {
    return sampleTable(petitions);
  };

  const onSubmit = () => {
    const requestObj = {
      title,
      description,
    };
    save(requestObj);
    console.log(refreshToggle);
    setRefreshToggle(!refreshToggle);
    console.log(refreshToggle);
  };

  const onSign = (row) => {
    console.log(row);
    sign(row.id);
    setRefreshToggle(!refreshToggle);
  };

  const sampleTable = rows => {
    return (
      <>
        <ThemeProvider theme={theme}>
          <TableContainer component={Paper}>
            <CssBaseline />
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Signatures</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.numberOfSignatures}</TableCell>
                    <TableCell align="left" onClick={() => onSign(row)}>👍</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </>
    );
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p style={{ 'font-size':'3vw' }}>Petitions</p>
          {renderTable()}
          <div>
            <p>Enter title</p>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <p>Enter Description</p>
            <input value={description} onChange={e => setDescription(e.target.value)}></input>
            <button onClick={onSubmit}>Submit</button>
            
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
