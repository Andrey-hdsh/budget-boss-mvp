import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon';
import { Container, Text } from './ReportsLink.styled';

export const ReportsLink = () => {
  return (

    <Link to="/reports">
            <Container>
      <Text>Reports</Text>
      <Icon
        iconid={'icon-scale'}
        width={14}
        height={14}
        fill={'var(--white-color-second)'}
      />
          </Container>
    </Link>

  );
};
