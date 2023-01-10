import React, { useState } from "react";
import InputBox from "../components/InputBox";
import ToDoItemList from "../components/ToDoItemList";
import styled from "styled-components";
import AllToDoitemList from "../components/AllToDoitemList";
import FilterButton from "../components/FilterButton";
import "../App.css";
const HomepageContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  transition: all 0.2s;
`;
function Home() {
  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      filter={filter}
    />
  ));

  const [todoList, setTodoList] = useState([]);

  return (
    <HomepageContainer>
      <InputBox
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
      <FilterButtonContainer> {filterList}</FilterButtonContainer>
      {filter === "All" ? (
        <AllToDoitemList
          title={"All To Do"}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false}
          filter="All"
          setFilter={setFilter}
        />
      ) : null}
      {filter === "Active" ? (
        <ToDoItemList
          title={"Active"}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false}
          setFilter={setFilter}
        />
      ) : null}
      {filter === "Completed" ? (
        <ToDoItemList
          title={"Completed"}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={true}
          filter="Completed"
          setFilter={setFilter}
        />
      ) : null}
      {/* <AllToDoitemList
      title={"All To Do"}
      todoList={todoList}
      setTodoList={setTodoList}
      checkedList={false}
      filter="All"
      setFilter={setFilter}
    />
    <ToDoItemList
      title={"Active"}
      todoList={todoList}
      setTodoList={setTodoList}
      checkedList={false}
      filter="Active"
      setFilter={setFilter}
    />
    <ToDoItemList
      title={"Completed"}
      todoList={todoList}
      setTodoList={setTodoList}
      checkedList={true}
      filter="Completed"
      setFilter={setFilter}
    /> --> */}
    </HomepageContainer>
  );
}

export default Home;
