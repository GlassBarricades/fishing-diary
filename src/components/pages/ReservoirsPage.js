import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { SimpleGrid } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const ReservoirsPage = () => {
  const [reservoirs, setReservoirs] = useState([]);

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

  return (
    <>
      <h1>Водоёмы</h1>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {reservoirs.map((item) => {
          return (
            <Card key={item.uuid} shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={item.img}
                  height={160}
                  alt={item.name}
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{item.name}</Text>
                <Badge color="pink" variant="light">
                  {item.city}
                </Badge>
              </Group>

              <Button
                component={Link}
                to={`/reservoirs/${item.uuid}`}
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Подробнее
              </Button>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
};
export default ReservoirsPage;
