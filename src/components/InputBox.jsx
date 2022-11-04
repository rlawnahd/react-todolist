import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const TodoappInputbox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const TodoappInput = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px soild #f1f3f5;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
const TodoappInputboxAddBtn = styled.button`
  border: none;
  border-radius: 0;
  background-color: #d0ebff;
  color: #ic7ed6;
  height: 50px;
  width: 50px;
  font-weight: bold;
`;
function InputBox({ todoList, setTodoList }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    if (text.length < 1) {
      inputRef.current.focus();
      return;
    }
    setTodoList(nextTodoList);
    setText("");
    inputRef.current.focus();
  };
  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);
  return (
    <TodoappInputbox>
      <TodoappInput
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        onChange={onChangeInput}
        placeholder="할 일을 입력해주세요"
      ></TodoappInput>
      <TodoappInputboxAddBtn tpye="submit" onClick={onClickAddButton}>
        추가
      </TodoappInputboxAddBtn>
    </TodoappInputbox>
  );
}

export default InputBox;
