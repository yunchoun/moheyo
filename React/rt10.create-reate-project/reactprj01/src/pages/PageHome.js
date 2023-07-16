import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';

//import Compstyle from '../containers/styled/CompStyle';
import CrudContainer from '../containers/crud/CrudContainer';
import TodoContainer from '../containers/todo/TodoContainer';
import HomeContainer from '../containers/home/HomeContainer';

const StyledPageHome = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  & > ul > li {
    display: inline-block;
    padding: 20px 40px;
  }
  ul > li a {
    color: blue;
    text-deoration: none;
    font-size: 24px;
  }

  .active {
    background-color: aqua;
    color: white;
  }
`;

// const {...props} = props;
function PageHome({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledPageHome id="pa">
      <ul>
        <li>
          <NavLink to={'/home'}>home</NavLink>
        </li>
        <li>
          <NavLink to={'/style'}>style</NavLink>
        </li>
        <li>
          <NavLink to={'/crud'}>crud</NavLink>
        </li>
        <li>
          <NavLink to={'/todo'}>todo</NavLink>
        </li>
      </ul>
      <Routes>
        {/* <Route path={'/style'} element={<CompStyle />}></Route> */}
        <Route path={'/crud'} element={<CrudContainer />}></Route>
        <Route path={'/todo'} element={<TodoContainer />}></Route>
        <Route path={'/'} element={<HomeContainer />}></Route>
        <Route path={'*'} to={'/'}></Route>
      </Routes>
    </StyledPageHome>
  );
}

PageHome.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
PageHome.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default PageHome; // React.memo(PageHome); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
