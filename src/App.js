import { Button, Input, Textarea, Container, Stack, Grid } from "@mantine/core";
import { useState } from "react";
import "./App.css";
import CardCompnent from "./Card";

function App() {
  const [arr, setArr] = useState([]);

  const [inputs, setInputs] = useState({ title: "", description: "" });
  const click = () => {
    const { title, description } = inputs;
    const obj = {
      title,
      description,
      s,
    };
    console.log(obj);
    if (inputs.title && inputs.description) {
      setArr([...arr, obj]);
      setInputs({ title: "", description: "" });
    }
  };
  const deleteItem = (index) => {
    let copyArr = [...arr];
    copyArr.splice(index, 1);
    setArr(copyArr);
    console.log("succes");
  };

  return (
    <Container>
      <h1>Kart Oluştur</h1>
      <Stack>
        <Input
          placeholder="Başlık Yazınız"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <Textarea
          placeholder="Your comment"
          value={inputs.description}
          onChange={(e) =>
            setInputs((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
        />
        <Button variant="light" color="dark" size="md" onClick={click}>
          Ekle
        </Button>
      </Stack>
      <h2>Kartlar:</h2>
      <div className="Cards">
        <Grid grow>
          {arr.map((item, index) => {
            return (
              <Grid.Col span={3} key={index}>
                {" "}
                <CardCompnent
                  title={item.title}
                  description={item.description}
                  index={index}
                  deleteItem={deleteItem}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default App;
