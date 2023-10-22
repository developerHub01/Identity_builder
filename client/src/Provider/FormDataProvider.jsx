import React, { createContext, useState } from "react";

export const FormDataContext = createContext(null);

const FormDataProvider = ({ children }) => {
  const [formDataState, setFormDataState] = useState({});
  return (
    <FormDataContext.Provider value={{ formDataState, setFormDataState }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
