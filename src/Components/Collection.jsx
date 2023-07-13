import React, { useState } from 'react';
import NavMenu from './NavMenu';
import FilterMenu from './FilterMenu';
import '../Styles/General.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Collection.css';
import CollectionPage from './CollectionPage';


function Collection() {

  
  const cardsData = [

    { title: 'Africa Blues', date: '2023', artist: 'Edoardo Delille & Giulia Piermartiri', image: require('../Images/Africa-Blues/afrcia1.jpg') },
    { title: 'Africa Blues', date: '2023', artist: 'Edoardo Delille & Giulia Piermartiri', image: require('../Images/Africa-Blues/africa2.jpg') },
    { title: 'Africa Blues', date: '2023', artist: 'Edoardo Delille & Giulia Piermartiri', image: require('../Images/Africa-Blues/africa3.jpg') },
    { title: 'Africa Blues', date: '2023', artist: 'Edoardo Delille & Giulia Piermartiri', image: require('../Images/Africa-Blues/africa4.jpg') },

    { title: 'Athen\'s Studio', date: '2017', artist: 'Diego Mayon', image: require('../Images/Athens-Studio/Brothel1.jpg') },
    { title: 'Athen\'s Studio', date: '2017', artist: 'Diego Mayon', image: require('../Images/Athens-Studio/Brothel2.jpg') },
    { title: 'Athen\'s Studio', date: '2017', artist: 'Diego Mayon', image: require('../Images/Athens-Studio/Brothel3.jpg') },
    { title: 'Athen\'s Studio', date: '2017', artist: 'Diego Mayon', image: require('../Images/Athens-Studio/Brothel4.jpg') },

    { title: 'Billions of Synchronous Fireflies Light up a Tiger Reserve', date: '2023', artist: 'Sriram Murali', image: require('../Images/Billions-Fireflies/fireflies1.jpg') },
    { title: 'Billions of Synchronous Fireflies Light up a Tiger Reserve', date: '2023', artist: 'Sriram Murali', image: require('../Images/Billions-Fireflies/fireflies2.jpg') },
    { title: 'Billions of Synchronous Fireflies Light up a Tiger Reserve', date: '2023', artist: 'Sriram Murali', image: require('../Images/Billions-Fireflies/fireflies3.jpg') },
    { title: 'Billions of Synchronous Fireflies Light up a Tiger Reserve', date: '2023', artist: 'Sriram Murali', image: require('../Images/Billions-Fireflies/fireflies4.jpg') },
  
    { title: 'Inheritor', date: '2021', artist: 'Yanan Li', image: require('../Images/Inheritor/inheritor1.jpg') },
    { title: 'Inheritor', date: '2021', artist: 'Yanan Li', image: require('../Images/Inheritor/inheritor2.jpg') },
    { title: 'Inheritor', date: '2021', artist: 'Yanan Li', image: require('../Images/Inheritor/inheritor3.jpg') },
    { title: 'Inheritor', date: '2021', artist: 'Yanan Li', image: require('../Images/Inheritor/inheritor4.jpg') },

    { title: 'Quarrie\'s Men', date: '2017', artist: 'Nader Saadallah', image: require('../Images/Quarrie\'s-men/quarrie1.jpg') },
    { title: 'Quarrie\'s Men', date: '2017', artist: 'Nader Saadallah', image: require('../Images/Quarrie\'s-men/quarrie2.jpg') },
    { title: 'Quarrie\'s Men', date: '2017', artist: 'Nader Saadallah', image: require('../Images/Quarrie\'s-men/quarrie3.jpg') },
    { title: 'Quarrie\'s Men', date: '2017', artist: 'Nader Saadallah', image: require('../Images/Quarrie\'s-men/quarrie4.jpg') },


  
  ];

  const filterMenusData = [
    {
      title: 'Photographer',
      options: ['Edoardo Delille','Yanan Li','Diego Mayon','Sriram Murali', 'Giulia Piermartiri', 'Nader Saadallah']
    },
    {
      title: 'Year',
      options: ['2017', '2021', '2023']
    },
    {
      title: 'Exhibition',
      options: [ 'Africa Blues','Athen\'s Studio','Billions of Synchronous Fireflies Light up a Tiger Reserve', 'Inheritor', 'Exhibition 3']
    }
  ];
  const rowsPerPage = 6;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(cardsData);
  const [selectedFilters, setSelectedFilters] = useState({
    Photographer: '',
    Year: '',
    Exhibition: '',
  });
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query, selectedFilters);
  };

  const filterData = (query, selectedFilters) => {
    const filtered = cardsData.filter((card) => {
      const matchesQuery =
        card.title.toLowerCase().includes(query.toLowerCase()) ||
        card.date.toLowerCase().includes(query.toLowerCase()) ||
        card.artist.toLowerCase().includes(query.toLowerCase());
  
      const matchesFilters = Object.entries(selectedFilters).every(
        ([filterType, selectedOption]) => {
          return selectedOption === '' || card[filterType] === selectedOption;
        }
      );
  
      return matchesQuery && matchesFilters;
    });
  
    setFilteredData(filtered);
    setCurrentPage(1);
  };
  

  const handleFilterSelection = (filterType, selectedOption) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedOption,
    }));
  };
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='inverse-page-setup'>
      <div className='page-content'>
        <h1 className='title'>COLLECTION</h1>
        <hr />
        <div className='row'>
          <div className='col-9'>
            <input
              className='search-bar'
              type='text'
              placeholder='Search Collection'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className='col-3'>
            <h2>Sort By:</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-container'>
              {filterMenusData.map((menu, index) => (
                <div key={index} className='menu-wrapper'>
                  <FilterMenu
                    title={menu.title}
                    options={menu.options}
                    handleFilterSelection={(selectedOption) =>
                      handleFilterSelection(menu.title, selectedOption)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='col-9'>
            <CollectionPage cardsData={currentPageData} />
            <div className='pagination'>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={currentPage === page ? 'active' : ''}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <NavMenu />
    </div>
  );
}

export default Collection;