// import { Routes, Route, NavLink } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import './App.css';
// import CompStyle from './containers/styled/CompStyle';
// import CrudContainer from './containers/crud/CrudContainer';
import PageHome from './pages/PageHome';

// const StyledApp = styled.div`
//   /* https://styled-components.com/docs/basics#adapting-based-on-props */
//   ul > li {
//     display: inline-block;
//     padding: 20px 40px;
//     list-style: none;
//   }
//   ul > li a {
//     color: red;
//     text-deoration: none;
//     font-size: 24px;
//   }
// `;

function App() {
  return (
    <div>
      <PageHome></PageHome>
    </div>
  );
}

export default App;
