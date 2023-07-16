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
import TodoHeader from './components/TodoHeader.js';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput.js';

const StyledTodoContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  & * {
    box-sizing: border-box;
  }
  & {
    text-align: center;
    /* background-color: #f6f6f8;*/
  }
`;

// const {...props} = props;
function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: '영화보기', done: false },
    { id: 2, todo: '주말 산책', done: true },
    { id: 3, todo: 'ES6 학습', done: false },
    { id: 4, todo: '잠실 야구장', done: false },
  ]);

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('TodoContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('TodoContainer >> componentDidMount');
        refIsMounted.current = true;
        document.body.style.backgroundColor = '#f6f6f8';
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('TodoContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.

  const callbackClearAll = useCallback(
    (param) => {
      // state 변경
      // 직접 코드를 완성하시오.
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      // todoItems = [];
      setTodoItems([]);
    },
    [todoItems],
  );
  const callbackDoneToggle = useCallback(
    (id) => {
      // state 변경 코드를 완성하시오.
      const newTodos =
        todoItems &&
        todoItems.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });

      setTodoItems(newTodos); // todoItems = newTodos;
    },
    [todoItems],
  );
  const callbackRemoveTodo = useCallback(
    (id) => {
      // state 변경 코드를 완성하시오.

      // filter 메서드를 이용한 삭제 방법 실습.
      const newTodos =
        todoItems &&
        todoItems.filter((item) => {
          if (item.id === id) {
            return false;
          }
          return true;
        });

      setTodoItems(newTodos);
    },
    [todoItems],
  );
  const callbackAddTodo = useCallback(
    (value) => {
      // ap03-11.객체배열.html 참조
      // map과 reduce 를 사용하여 max id 구하기 ==> newid 만들기
      // todoItems 추가할 객체 만들기
      // 배열에 추가. todoItems = [...todoItems, newTodo];
      const maxid =
        todoItems &&
        todoItems
          .map((item) => item.id) // [1,2,3,4]
          .reduce((pvalue, cvalue) => {
            // 큰값 반환하기
            if (pvalue > cvalue) return pvalue;
            else return cvalue;
          }, 0); // 최대값 찾기

      const newTodo = {
        id: maxid + 1,
        todo: value,
        done: false,
      };

      // todoItems.push(newItem);
      // todoItems = [...todoItems, newTodo];
      setTodoItems([...todoItems, newTodo]); // todoItems = [...todoItems, newTodo];
    },
    [todoItems],
  );
  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <TodoHeader></TodoHeader>

      <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>

      <TodoList
        todoItems={todoItems}
        callbackDoneToggle={callbackDoneToggle}
        callbackRemoveTodo={callbackRemoveTodo}
      ></TodoList>

      <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default TodoContainer; // React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
