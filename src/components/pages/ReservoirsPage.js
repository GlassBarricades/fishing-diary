import { SimpleGrid } from "@mantine/core";
import ReservoirsCard from "../ui/ReservoirsCard";

const ReservoirsPage = ({ data }) => {
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
        {data.map((item) => {
          return (
            <ReservoirsCard label={item.label} city={item.city} key={item.id} />
          );
        })}
      </SimpleGrid>
    </>
  );
};
export default ReservoirsPage;
