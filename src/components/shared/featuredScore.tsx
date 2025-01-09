import { Container, Typography } from '@mui/material';
import { IScore } from '../../types';

interface IProps {
  score: IScore;
}

export function FeaturedScore({ score }: IProps) {
  return (
    <div style={{ padding: '10px 0' }}>
      <Container style={{ border: '1px solid grey', padding: 0 }}>
        <img
          src="/src/assets/images/screenshot.jpg"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 350,
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: 10 }}>
          <Typography variant="h4">{score.name}</Typography>
        </div>
      </Container>
    </div>
  );
}
