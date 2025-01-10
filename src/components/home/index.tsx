import _ from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { Container, Typography } from '@mui/material';

import { getFeaturedScores } from '../../services/score';
import { FeaturedScore } from '../shared/featuredScore';
import { FeaturedScoreSkeleton } from '../shared/featuredScoreSkeleton';

export default () => {
  const {
    isPending,
    error,
    data: featuredScores
  } = useQuery({
    queryKey: ['featuredScores'],
    queryFn: async () => {
      return await getFeaturedScores();
    }
  });

  if (isPending)
    return (
      <>
        {_.times(3, () => (
          <FeaturedScoreSkeleton />
        ))}
      </>
    );

  if (error || !featuredScores.length) return 'An error has occurred: ' + error?.message;

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h2">Featured Scores</Typography>
      <Typography variant="h6">Check out some of the games I've been playing recently.</Typography>
      <div style={{ marginTop: 10 }}>
        {featuredScores.map((featuredScore, idx) => {
          return <FeaturedScore score={featuredScore} key={idx} />;
        })}
      </div>
    </Container>
  );
};
