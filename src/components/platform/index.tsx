import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { Container, Typography } from "@mui/material";

import { getPlatform } from "../../services/platform";
import { Loading } from "../core/loading";
import { useParams } from "react-router";
import { IScore } from "../../types";
import { CompactScore } from "../core/compactScore";

export default () => {
  const { platformId } = useParams();

  const {
    isPending,
    error,
    data: platform,
  } = useQuery({
    queryKey: [`platform-${platformId}`],
    queryFn: async () => {
      const platform = await getPlatform(platformId!);

      return platform;
    },
  });

  if (isPending) return <Loading />;

  if (error || !platform?.id) return "An error has occurred: " + error?.message;

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h4">{platform.name}</Typography>
      <Typography variant="h6">
        View our top picks below for {platform.name}.
      </Typography>
      <div style={{ marginTop: 10 }}>
        {/* <Grid container spacing={2}> */}
        {platform.scores.map((score: IScore, idx: number) => {
          return <CompactScore score={score} key={idx} />;
        })}
        {/* </Grid> */}
      </div>
    </Container>
  );
};
