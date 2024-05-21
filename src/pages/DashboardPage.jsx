import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';
import { Balance } from 'components/Balance/Balance';
import { Icon } from 'components/Icon';
import { SummaryListDashboard } from 'components/SummaryListDashboard/SummaryListDashboard';
import { TableDashboard } from 'components/TableDashboard/TableDashboard';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <div>
        <Balance />
        <Link to="/reports">
          <Icon />
          <p>Reports</p>
        </Link>
      </div>
      <div>
        <AddTransactionForm />
        <div>
          <TableDashboard />
          <SummaryListDashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
