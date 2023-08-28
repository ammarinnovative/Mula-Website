import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { add,clear} from './reducers/CartReducer';
import { loadUser } from './reducers/useReducers';
import { useDispatch } from 'react-redux';
import { Global, css } from '@emotion/react';
import Cookies from 'js-cookie';

function App() {
  const customScrollbarStyles = css`
    /* Custom scrollbar width and color */
    ::-webkit-scrollbar {
      width: 12px;
      background-color: #00000f;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;

  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('user') !== null) {
        let user = JSON.parse(localStorage.getItem('user') ?? '{}');
        dispatch(loadUser(user));
      } else if (Cookies.get('user') !== undefined) {
        let user = JSON.parse(Cookies.get('user') ?? '{}');
        dispatch(loadUser(user));
      }
      if (localStorage.getItem('product') !== null) {
        let product = JSON.parse(localStorage.getItem('product') ?? '{}');
        dispatch(clear());
        for(let i=0;i<product.length;i++){
          dispatch(add(product[i]));
        }
      }
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Global styles={customScrollbarStyles} />
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
