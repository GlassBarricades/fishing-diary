import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import { Modal, Button, Group, TextInput, MultiSelect } from "@mantine/core";

const AdminPage = () => {
  const [reservoirs, setReservoirs] = useState([]);
  const [opened, setOpened] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [fish, setFish] = useState([]);
  const [img, setImg] = useState("");

  const data = [
    { value: "Окунь", label: "Окунь" },
    { value: "Щука", label: "Щука" },
    { value: "Плотва", label: "Плотва" },
    { value: "Карась", label: "Карась" },
    { value: "Линь", label: "Линь" },
    { value: "Лещ", label: "Лещ" },
    { value: "Красноперка", label: "Красноперка" },
  ];

  useEffect(() => {
    onValue(ref(db, `/reservoirs/`), (snapshot) => {
      setReservoirs([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((reservoir) =>
          setReservoirs((oldArray) => [...oldArray, reservoir])
        );
      }
    });
  }, []);

  const resetState = () => {
    setName("");
    setCity("");
    setFish([]);
    setImg("");
  };

  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/reservoirs/${uuid}`), {
      name,
      city,
      fish,
      img,
      uuid,
    });

    resetState();
    setOpened(false);
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Добавление водоёма"
      >
        <form onSubmit={writeToDatabase}>
          <TextInput
            label="Название"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextInput
            mt="md"
            label="Город"
            placeholder="Город"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <MultiSelect
            data={data}
            label="Рыба"
            placeholder="Рыба"
            value={fish}
            onChange={setFish}
          />
          <TextInput
              mt="lg"
              label="Картинка"
              placeholder="Картинка"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          <Button mt="md" type="submit">
            Отправить
          </Button>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
};
export default AdminPage;
