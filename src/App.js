import { HeaderSimple } from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ReservoirsPage from "./components/pages/ReservoirsPage";
import ReservoirsSinglePage from "./components/pages/ReservoirsSinglePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";
import AdminPage from "./components/pages/AdminPage";

function App() {
  const links = [
    {
      link: "/",
      label: "Главная",
    },
    {
      link: "/reservoirs",
      label: "Водоёмы",
    },
    {
      link: "/admin",
      label: "Админка",
    },
  ];

  const reservoirs = [
    {
      id: "1",
      label: "Жодинское водохранилище",
      city: "Жодино",
      fish: ["Карась", "Окунь", "Щука", "Густера"],
      depths: "1-5м",
      img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    },
    {
      id: "2",
      label: "Жодинское водохранилище",
      city: "Жодино",
      fish: ["Карась", "Окунь", "Щука", "Густера"],
      depths: "1-5м",
      img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    },
    {
      id: "3",
      label: "Жодинское водохранилище",
      city: "Жодино",
      fish: ["Карась", "Окунь", "Щука", "Густера"],
      depths: "1-5м",
      img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    },
    {
      id: "4",
      label: "Жодинское водохранилище",
      city: "Жодино",
      fish: ["Карась", "Окунь", "Щука", "Густера"],
      depths: "1-5м",
      img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSimple links={links} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/reservoirs"
              element={<ReservoirsPage data={reservoirs}/>}
            />
            <Route path="/reservoirs/:uuid" element={<ReservoirsSinglePage data={reservoirs}/>} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
