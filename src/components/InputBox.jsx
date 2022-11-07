import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

const TodoappInputbox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const TodoappInput = styled.input`
  flex: 1;
  border-radius: 30px;
  border: 1px soild white;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
const TodoappInputboxAddBtn = styled.button`
  border: none;
  border-radius: 30px;
  background-color: #d0ebff;
  color: black;
  height: 50px;
  width: 50px;
  font-weight: bold;
  cursor: pointer;
`;
const HprogressBar = styled.div`
  background: #eee;
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  span {
    color: blue;
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 40px;
  }
`;
const HighLight = styled.div`
  background-color: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 30px;
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
  let count = 0;
  todoList.map((item, index) => {
    if (item.checked) {
      count++;
    }
  });

  // let checkCount = 0;
  // todoList.map((item,index)=>{
  //   if(item.checked){
  //     c
  //   }
  // })
  // console.log(todoList.checked && );
  return (
    <>
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
      <HprogressBar>
        <HighLight width={parseInt((count / todoList.length) * 100) + "%"}>
          <span>{parseInt(Math.floor((count / todoList.length) * 100))}%</span>
        </HighLight>
      </HprogressBar>
      <div>
        <span>
          {count} out of {todoList.length}completed
        </span>
      </div>
    </>
  );
}

export default InputBox;
