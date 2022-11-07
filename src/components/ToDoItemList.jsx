import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const TodoappList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const TodoappListTit = styled.p`
  font-weight: bold;
  margin: 0 auto;
`;
const TodoappListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

function ToDoItemList({ title, todoList, setTodoList, checkedList }) {
  return (
    <TodoappList>
      <TodoappListTit>{title}</TodoappListTit>
      <TodoappListUl>
        {todoList &&
          todoList.map((todoItem) => {
            if (todoItem.deleted) return null;
            if (checkedList !== todoItem.checked) return null;
            return (
              <ToDoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
      </TodoappListUl>
    </TodoappList>
  );
}

export default ToDoItemList;
