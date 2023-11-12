import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Index = () => {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState<Array<string>>([]);
  
  const addTodo = (e?: string) => {
    if(e && e === "Enter" || !e) {
      if(todoList.length < 10) {
        setTodoList(prev => [...prev, todo]);
        setTodo("");
      }
    }
    return todoList;
  };

  const deleteTodo = (index: number) => {
    setTodoList(todoList.filter((_, a) => a !== index))
  };

  React.useEffect(() => {
    console.log(todoList, todoList.length);
  }, [todoList]);

  return(
    <>
    <div className="w-screen h-screen flex flex-col items-center justify-center max-w-5xl m-auto">
      <h1 className="text-lg font-bold mb-4">At the moment, you are only allowed to add 10 todos due to free subscription.</h1>
      <div className="flex">
      <Input value={todo} onKeyDown={e => addTodo(e.code)} onChange={e => setTodo(e.target.value)} placeholder="Todo..." />
      <Button onClick={() => addTodo()}>Add Todo</Button>
      </div>
      <div className="w-full w-max-50 p-5">
        {todoList.length != 0 ? todoList.map((v, i) => {
          return(
            <div className="w-full flex py-2 rounded-xl text-center hover:bg-gray-500" key={i}>
              <p className="m-auto">{v}</p>
              <Button className="mr-4" onClick={() => deleteTodo(i)}>Delete</Button>
            </div>
          )
        }) : <p>No Todos!!!</p>}
      </div>
    </div>
    </>
  )
};

export default Index;