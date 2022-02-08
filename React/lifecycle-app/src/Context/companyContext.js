import React from 'react';

const CompanyContext = React.createContext("GGK Tech");

const CompanyProvider = CompanyContext.Provider;
const CompanyConsumer = CompanyContext.Consumer;

export {CompanyProvider, CompanyConsumer};
export default CompanyContext;