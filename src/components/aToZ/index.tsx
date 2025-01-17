import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { Container, Tab, Tabs, Typography } from "@mui/material";

import { getGenres } from "../../services/genre";
import { Loading } from "../core/loading";
import { useState } from "react";

export default () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const {
    isPending,
    error,
    data: genres,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      return await getGenres();
    },
  });

  if (isPending) return <Loading />;

  if (error || !genres.length)
    return "An error has occurred: " + error?.message;

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h2">A-Z</Typography>
      <Typography variant="h6">Browse all our scores.</Typography>
      <div style={{ marginTop: 10 }}>
        <Tabs
          value={selectedLetter}
          onChange={(_e, v) => setSelectedLetter(v)}
          aria-label="Letter select"
          scrollButtons
          variant="scrollable"
        >
          {alphabet.map((letter, idx) => (
            <Tab
              label={letter}
              value={letter}
              key={idx}
              style={{ width: 10 }}
            />
          ))}
        </Tabs>
      </div>
    </Container>
  );
};

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "0-9"];
