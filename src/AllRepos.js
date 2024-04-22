import ExamplePagination from "./components/pagination"

const AllRepos = () => {
    return <div className="App">
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
            <ExamplePagination items={['Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah', 'Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah', 'Abdullah', 'Issa', 'Mubarak', 'Ibrahim', 'Rasak', 'Tunde', 'Aleem', 'Abdullah',]} />
        </body>
    </div>
}

export default AllRepos