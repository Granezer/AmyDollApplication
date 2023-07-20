import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getAllProducts } from '../../api/Api';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getAllProducts);
        if (response.status === 200) {
          const data = response.data.response.data;
          setProducts(data);
        } else {
          // Handle error
        }
        setLoading(false);
      } catch (error) {
        // Handle error
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
