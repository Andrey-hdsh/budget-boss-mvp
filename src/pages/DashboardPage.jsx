import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';
import { Balance } from 'components/Balance/Balance';
import { ReportsLink } from 'components/ReportsLink/ReportsLink';
import { SummaryListDashboard } from 'components/SummaryListDashboard/SummaryListDashboard';
import { TableDashboard } from 'components/TableDashboard/TableDashboard';

function DashboardPage() {
  return (
    <div>
      <div>
        <Balance />
        <ReportsLink />
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
