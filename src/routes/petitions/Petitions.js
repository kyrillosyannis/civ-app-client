import { useEffect, useState } from 'react';
import '../../App.css';
import { fetchAll, save, sign } from '../../api/petitionsApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import PetitionCommentModal from './PetitionCommentModal';
import { setSelectedPetitionId } from '../../redux/reducers/petitionsReducer';
import { Button, Typography } from '@mui/material';
import { getPetitions } from '../../redux/actions/petitionsActions';
import CreatePetitionModal from './CreatePetitionModal';

function Petitions() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [toggleCommentModal, setToggleCommentModal] = useState(false);
  const [toggleCreateModal, setToggleCreateModal] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector(state => state?.authentication?.value?.id);
  const petitions = useSelector(state => state?.petitions?.petitions);

  useEffect(() => {
    const asyncFunction = async () => {
      dispatch(getPetitions());
      console.log('refreshed');
    };
    asyncFunction();
  }, [refreshToggle]);

  const data = [{ title: 'Title 1', description: 'Desc 1', numberOfSignatures: 10 }, { title: 'Title 2', description: 'Desc 2', numberOfSignatures: 12 }];
  const renderTable = () => {
    return sampleTable(petitions);
  };

  const onSign = (row) => {
    console.log(row);
    sign(row.id);
    setRefreshToggle(!refreshToggle);
  };

  const sampleTable = rows => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, backgroundColor: '#282c34' }} aria-label="simple table">
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
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell style={{color: 'white', width: '20vw'}} align="left">{row.title}</TableCell>
                  {/* <Typography variant="body1" sx={{ whiteSpace: 'normal' }}> */}
                    <TableCell style={{ color: 'white', width: '60vw', whiteSpace: 'normal' }} align="left">{row.description}</TableCell>
                  {/* </Typography> */}
                  <TableCell style={{color: 'white', width: '10vw' }} align="left">{row.numberOfSignatures}</TableCell>
                  <TableCell style={{ cursor: userId === row.userId ? 'not-allowed' : 'pointer', width: '5vw'}} align="left"
                    onClick={userId === row.userId ? () => {} : () => onSign(row)}>👍</TableCell>
                  <TableCell style={{ cursor: 'pointer', width: '5vw' }} align="left"
                    onClick={() => {
                      dispatch(setSelectedPetitionId(row.id));
                      setToggleCommentModal(true);
                    }}>🗪</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Typography sx={{ 'fontSize': '3vw', color: '#7A9FCE' }}
            >Petitions
          </Typography>
          {renderTable()}
          {/* <div>
            <p>Enter title</p>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <p>Enter Description</p>
            <input value={description} onChange={e => setDescription(e.target.value)}></input>
            <button onClick={onSubmit}>Submit</button>
            
          </div> */}
          <Button onClick={() => setToggleCreateModal(true)}>
            <Typography variant="h6" sx={{ flexGrow: 1, padding: '0.3vw', backgroundColor: '#36454F', color: '#7A9FCE', border: 'solid', borderRadius: '20%' }}>
              Create Yours
            </Typography>
            </Button>
        </header>
        <PetitionCommentModal open={toggleCommentModal} 
          close={() => setToggleCommentModal(false)}/>
        <CreatePetitionModal open={toggleCreateModal} close={() => setToggleCreateModal(false)}/>
      </div>
    </>
  );
}

export default Petitions;
