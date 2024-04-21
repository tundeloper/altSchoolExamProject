import logo from './logo.svg';
import './App.css';
import { Box, TextField } from '@mui/material';
import PaginationOutlined from './components/pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allReps, setAllRepos] = useState([])

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get('api.github.com/users/tundeloper/repos')
        console.log(response.data)
        // setAllRepos((fetched))
        throw Error('no fetched data')
      } catch (error) {
        console.log(error)
      }
    }
    return fetchRepo
  }, [allReps])

  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Babatunde Isiaka repo </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Search repository" variant="standard" size='big' fullWidth />
        </Box> */}
        <div>
          <input placeholder='search repository' />
          <button>search</button>
          </div>
        <div>github</div>
      </header>
      <body className='App-body'>
        <PaginationOutlined items={['Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah', 'Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah', 'Abdullah', 'Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah',]} />
      </body>
    </div>
    </>
  );
}

export default App;