import { AddFormDashboard } from 'components/AddFormDashboard/AddFormDashboard';
import { Icon } from 'components/Icon';
import { SummaryListDashboard } from 'components/SummaryListDashboard/SummaryListDashboard';
import { TableDashboard } from 'components/TableDashboard/TableDashboard';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <div>
        <div>
          <p>Balance</p>
          <input type="text" />
          <button>CONFIRM</button>
        </div>
        <Link to="/reports">
          <Icon />
          <p>Reports</p>
        </Link>
      </div>
      <div>
        <AddFormDashboard />
        <div>
          <TableDashboard />
          <SummaryListDashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
