import React, { useEffect, useState } from 'react';
import './SearchPage.css'
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import CardContainer from '../../Components/Cardcontainer/CardContainer';
import PaginationControls from '../../Components/Pagenation/Pagenation';
import { fetchData } from '../../Helpers/fetchapi';
import Filterbar from '../../Components/Filter/Filterbar';
import MobileFilterButton from '../../Components/MobileFilter/Filtersmall';

const SearchPage = () => {

  const [data, setData] = useState([]);
  const [totalPages,setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query,setQuery] = useState("*");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetchData(query, currentPage)
      .then(result => {
        setData(result.details); 
        setTotalPages(result.total/12+1)
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [currentPage,search]);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <Filterbar/>
      <MobileFilterButton/>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" onChange={(e)=>e.target.value.length>0?setQuery(e.target.value):setQuery("*")}/>
        <button onClick={()=>search==true?setSearch(false):setSearch(true)} className="search-button">Search</button>
      </div>
      <CardContainer>
        {data.length>0?data.map((item) => (
          <Card
            key={item.__id}
            name={item.name}
            image={item.image_url}
            price={item.price}
            discount={item.discount_amount}
          />
        )):
        <h1 className='no-products-found'>No products Found</h1>
        }
      </CardContainer>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default SearchPage;
