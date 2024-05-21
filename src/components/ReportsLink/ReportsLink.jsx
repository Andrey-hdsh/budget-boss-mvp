import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon';

export const ReportsLink = () => {
  return (
    <Link to="/reports">
      <p>Reports</p>
      <Icon
        iconid={'icon-scale'}
        width={14}
        height={14}
        fill={'var(--white-color-second)'}
      />
    </Link>
  );
};
