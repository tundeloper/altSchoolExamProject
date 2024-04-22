import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const itemsPerPage = 5;

const ExamplePagination = ({ items }) => {
  //   const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {/* <Typography variant="h6" gutterBottom>
        Babatunde
      </Typography> */}
      <ul style={{ listStyle: 'none', height: '25rem', width: '20rem' }}>
        {displayedItems.map((item, index) => (
          <Link to={`/${item}`} style={{ textDecoration: 'none', color: 'inherit' }}><li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', padding: '1rem', marginBottom: '1rem' }}>
            <div>{item}</div>
            <div>
              star 1
            </div>
          </li>
          </Link>
        ))}
      </ul>
      <Stack spacing={2} justifyContent="center" fontWeight='bold'>
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
      {/* <button>create repo</button> */}
    </div>
  );
};

export default ExamplePagination;