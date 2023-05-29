// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';



// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
import { createSlice } from "@reduxjs/toolkit"
export const incedecSlice = createSlice({
name: 'incdec',
initialState: 0,
reducers:{
  Inc: (state, action)=>{
    return state += action.payload
  },
  Dec:(state, action)=>{
    return state -= action.payload
  }
}

})

export const {Inc, Dec} = incedecSlice.actions;
export default incedecSlice.reducer;