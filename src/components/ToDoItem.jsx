import React, { useState } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import "../App.css";
const TodoappItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 36px;
  &:last-child {
    margin-bottom: 0;
  }
  input[type="checkbox"] {
    cursor: pointer;
    accent-color: skyblue;
  }
`;
const TodoappItemCheckbox = styled.input`
  border-radius: 100%;
`;
const TodoappItemCtx = styled.span`
  flex: 1;
  font-style: ${(todoItem) => todoItem.checked && "italic"};
  text-decoration: ${(todoItem) => todoItem.checked && "line-through"};
  color: ${(todoItem) => todoItem.checked && "#868e96"};
`;
const TodoappEditBtn = styled.button`
  border: none;
  border-radius: 0;
  height: 36px;
  width: 36px;
  background-color: inherit;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
    background-color: #d0ebff;
  }
`;
const TodoappItemDeleteBtn = styled.button`
  border: none;
  border-radius: 0;
  height: 36px;
  width: 36px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
    background-color: #d0ebff;
  }
`;
const TodoappItemEditInput = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 5px;
  font-size: 1em;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

function ToDoItem({ todoItem, todoList, setTodoList }) {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const onClickEditButton = () => {
    setEdited(true);
  };
  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };
  const onClickDeleteButton = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));
      setTodoList(nextTodoList);
      console.log(nextTodoList);
    }
  };
  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodoList(nextTodoList);
    setEdited(false);
  };
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };
  return (
    <TodoappItem>
      <TodoappItemCheckbox
        type="checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      {edited ? (
        <TodoappItemEditInput
          type="text"
          value={newText}
          onChange={onChangeEditInput}
        />
      ) : (
        <TodoappItemCtx checked={todoItem.checked}>
          {todoItem.text}
        </TodoappItemCtx>
      )}
      <TodoappEditBtn type="button">
        {!todoItem.checked ? (
          edited ? (
            <TodoappEditBtn type="button" onClick={onClickSubmitButton}>
              👌
            </TodoappEditBtn>
          ) : (
            <TodoappEditBtn type="button">
              <AiFillEdit onClick={onClickEditButton} />
            </TodoappEditBtn>
          )
        ) : null}
      </TodoappEditBtn>
      <TodoappItemDeleteBtn type="button" onClick={onClickDeleteButton}>
        <TiDelete />
      </TodoappItemDeleteBtn>
    </TodoappItem>
  );
}

export default ToDoItem;
