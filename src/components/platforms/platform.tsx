import { Card, Grid2 as Grid, Typography } from "@mui/material";
import { IPlatform } from "../../types";
import { useNavigate } from "react-router";
import { theme } from "../../utils/theme";

interface IProps {
  platform: IPlatform;
}

export const Platform = ({ platform }: IProps) => {
  const navigate = useNavigate();

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
      style={{ margin: "20px 0 10px 0" }}
    >
      <Card
        variant="outlined"
        style={{
          height: "100%",
          borderRadius: 8,
          border: "none",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/platform/${platform.id}`);
        }}
      >
        <div style={{ padding: 10, margin: "auto" }}>
          <img
            src={`/src/assets/images/${platform.name}Logo.png`}
            style={{ height: 150, width: 150 }}
          />
        </div>
        <Typography
          variant="h4"
          style={{
            padding: 10,
            color: "white",
            backgroundColor: theme().primary,
            textAlign: "center",
          }}
        >
          {platform.name}
        </Typography>
      </Card>
    </Grid>
  );
};
