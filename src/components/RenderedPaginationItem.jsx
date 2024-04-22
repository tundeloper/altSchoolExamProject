import { Link } from "react-router-dom"

const RenderedPaginationItem = (displayedItems = [], serched) => {
    console.log(displayedItems)
    return displayedItems.m((item, index) => (
      <Link to={`/${item.name}`} style={{ textDecoration: 'none', color: 'inherit' }}><li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.2rem' }}>{item.name}</div>
      </li>
      </Link>
    ))
}

// export default RenderedPaginationItem