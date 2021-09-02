import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';

function Provider({ children }) {
  const contextValue = {};
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
