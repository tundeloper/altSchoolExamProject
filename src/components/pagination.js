import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const itemsPerPage = 5;

const ExamplePagination = ({ items, searchVal, submit }) => {
  //   const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);
  let Render = displayedItems.map((item, index) => (
    <a href={`/${item.name}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
      <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', padding: '1rem', marginBottom: '1rem' }}>
      <div>{item.name}</div>
    </li>
    </a>
  ))

  if(searchVal && submit) {
    const searchedRepo = items.find((val) => val.name === searchVal)
    // console.log(searchedRepo)
    Render = searchedRepo && <a href={`/${searchedRepo.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', padding: '1rem', marginBottom: '1rem' }}>
    <div>{searchedRepo.name}</div>
  </li>
  </a>
  } else {
    Render = displayedItems.map((item, index) => (
      <a href={`/${item.name}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', padding: '1rem', marginBottom: '1rem' }}>
        <div>{item.name}</div>
      </li>
      </a>
    ))
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <ul style={{ listStyle: 'none', height: '25rem', width: '100%' }}>
        {Render}
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