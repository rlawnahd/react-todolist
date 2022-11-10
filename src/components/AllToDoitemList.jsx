import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const AllTodoappList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const AllTodoappListTit = styled.p`
  font-weight: bold;
  margin: 0 auto;
`;
const AllTodoappListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

function AllToDoitemList({ title, todoList, setTodoList, checkedList }) {
  return (
    <AllTodoappList>
      <AllTodoappListTit>{title}</AllTodoappListTit>
      <AllTodoappListUl>
        {todoList &&
          todoList.map((todoItem) => {
            if (todoItem.deleted) return null;
            // if (checkedList !== todoItem.checked) return null;
            return (
              <ToDoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
      </AllTodoappListUl>
    </AllTodoappList>
  );
}

export default AllToDoitemList;
