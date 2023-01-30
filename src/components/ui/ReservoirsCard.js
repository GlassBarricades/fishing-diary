import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const ReservoirsCard = ({ data }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt={data.label}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.label}</Text>
        <Badge color="pink" variant="light">
          {data.city}
        </Badge>
      </Group>

      <Button
        component={Link}
        to={`/reservoirs/${data.id}`}
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
};
export default ReservoirsCard;
