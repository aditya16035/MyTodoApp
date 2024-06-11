import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Nav";
// import { useContext } from "react";
// import { counterContext } from "../context/contextapi";

const MyTodoApp = () => {
    const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFinished, setshowFinished] = useState(true);
  const [isRotated, setIsRotated] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  // const counter = useContext(counterContext);

  const saveToLS = () => {
    if (!isLoading) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    saveToLS();
  }, [todos, isLoading]);

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    handleAdd();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };
  return (
    <>
      <div className="container w-full ">
      <Navbar />
      <div className="md:w-1/2  md:min-h-[80vh] h-[100vh] bg-violet-500 text-white mx-auto md:px-2 md:py-2 px-2 md:my-4 md:rounded-lg">
        <div className="tasks">
          <h2 className="font-bold text-lg">Add Your Task-</h2>
          <div>
            <form className="inp flex md:flex-row flex-col gap-3" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={todo}
                className="border text-black border-black rounded-md md:w-3/4 w-full px-2"
                type="text"
                placeholder="Enter Your Task Here"
              />
              <button
                onClick={handleSubmit}
                disabled={todo.length <= 3}
                className="border border-black rounded-md px-2 w-full md:w-16  active:font-bold disabled:bg-slate-500 disabled:cursor-not-allowed disabled:font-bold"
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="yourtodo mt-4 min-h-[144px] md:w-full ">
          <h2 className="font-bold text-lg">Your Todo-</h2>
          {todos.filter((item) => item.isCompleted===false).length === 0 && (
            <div className="text-sm">No Tasks To Be Done</div>
          )}
          {Array.isArray(todos) &&
            todos
              .filter((item) => item.isCompleted === false)
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="tasks flex justify-between items-center w-full"
                  >
                    <div className="flex gap-4 items-center">
                      <input
                        name={item.id}
                        onChange={handleCheck}
                        type="checkbox"
                        checked={item.isCompleted}
                        id=""
                      />
                      <div>
                        <span className="text-sm">{item.todo}</span>
                      </div>
                    </div>
                    <div className="btns flex gap-6">
                      <button
                        className=""
                        onClick={(e) => {
                          handleEdit(e, item.id);
                        }}
                      >
                        <span><FaEdit /></span>
                      </button>
                      <button
                        className=""
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                      >
                        <span className="material-symbols-outlined text-xl hover:font-semibold">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}

          </div>
          <div className="finishedTasks">
            <div className="flex gap-3 font-bold mt-14 items-center">
              <div
                onClick={() => {
                  setIsRotated(!isRotated);
                  toggleFinished();
                }}
                className="flex items-center cursor-pointer"
              >
                <span className={`${isRotated ? "rotate-180" : ""}`}>
                  <IoIosArrowUp />
                </span>
                <span>Show Finsihed Task-</span>
              </div>
            </div>
            <div className="finishedtasks">
              {showFinished &&
                todos
                  .filter((item) => item.isCompleted)
                  .map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="tasks flex justify-between items-center"
                      >
                        <div className="flex gap-4 items-center">
                          <input
                            name={item.id}
                            onChange={handleCheck}
                            type="checkbox"
                            checked={item.isCompleted}
                            id=""
                          />
                          <div
                            
                          >
                            <span className="text-sm">{item.todo}</span>
                          </div>
                        </div>
                        <div className="btns flex gap-6">
                          <button
                            className=""
                            onClick={(e) => {
                              handleEdit(e, item.id);
                            }}
                          >
                              <span><FaEdit /></span>
                          </button>
                          <button
                            className=""
                            onClick={(e) => {
                              handleDelete(e, item.id);
                            }}
                          >
                            <span className="material-symbols-outlined text-xl hover:font-semibold">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        
      </div>
      </div>
    </>
  )
}

export default MyTodoApp
