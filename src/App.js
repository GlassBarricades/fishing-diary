import { HeaderSimple } from "./components/Header";
import HomePage from "./components/pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";

function App() {
  const links = [
    {
      link: "/",
      label: "Главная",
    },
    {
      link: "/statistics",
      label: "Статистика",
    },
    {
      link: "/admin",
      label: "Панель управления",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSimple links={links} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
