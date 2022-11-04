import React, { useState } from "react";
import InputBox from "../components/InputBox";
import ToDoItemList from "../components/ToDoItemList";
import styled from "styled-components";
import "../App.css";

const HomepageContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

function Home() {
  const [todoList, setTodoList] = useState([]);
  return (
    <HomepageContainer>
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <ToDoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />

      <ToDoItemList
        title={"완료한 항목"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </HomepageContainer>
  );
}

export default Home;
