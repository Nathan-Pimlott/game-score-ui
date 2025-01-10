import moment from 'moment';
import { useNavigate } from 'react-router';
import { Container, Typography } from '@mui/material';

import { IScore } from '../../types';

interface IProps {
  score: IScore;
}

export function FeaturedScore({ score }: IProps) {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: 20 }}>
      <Container
        style={{
          border: '1px solid lightgrey',
          borderRadius: 10,
          overflow: 'hidden',
          padding: 0,
          cursor: 'pointer',
          backgroundColor: '#d0b6d4'
        }}
        onClick={() => {
          navigate(`/score/${score.id}`);
        }}>
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h4" style={{ flex: 1, margin: 'auto' }}>
              {score.name}
            </Typography>

            <div
              style={{
                backgroundColor:
                  score.score >= 8 ? 'green' : score.score >= 5 ? '#ccd914' : '#f25555',
                color: 'white',
                borderRadius: 100,
                width: 60,
                height: 60,
                display: 'flex'
              }}>
              <Typography variant="h4" style={{ margin: 'auto' }}>
                {score.score}
              </Typography>
            </div>
          </div>

          <div style={{ paddingTop: 10 }}>
            <Typography variant="body1">
              Played {moment(score.finishDate).format('Do MMMM YYYY')}
            </Typography>
          </div>

          <div style={{ paddingTop: 10 }}>
            {score.playedConsoles.map((console, idx) => (
              <img
                src={`/src/assets/images/${console}Logo.png`}
                style={{ height: 40, width: 40, paddingLeft: idx > 0 ? 10 : 0 }}
                key={idx}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
