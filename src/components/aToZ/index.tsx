import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { Container, Tab, Tabs, Typography } from "@mui/material";

import { Loading } from "../core/loading";
import { useState } from "react";
import { getScoresByLetter } from "../../services/score";
import { CompactScore } from "../core/compactScore";

export default () => {
  const [selectedLetter, setSelectedLetter] = useState("P");

  const {
    isPending,
    error,
    data: scoresByLetter,
  } = useQuery({
    // This needs to include the selected letter to refetch on change.
    queryKey: [`scores-by-letter-${selectedLetter}`],
    queryFn: async () => await getScoresByLetter(selectedLetter),
  });

  if (isPending) return <Loading />;

  if (error || !scoresByLetter.length)
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
              style={{ minWidth: 30 }}
            />
          ))}
        </Tabs>
      </div>
      <div>
        {scoresByLetter.map((score, idx) => (
          <CompactScore score={score} key={idx} />
        ))}
      </div>
    </Container>
  );
};

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "0-9"];
