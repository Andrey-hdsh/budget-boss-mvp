import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';
import { Balance } from 'components/Balance/Balance';
import { Icon } from 'components/Icon';
import { ReportsLink } from 'components/ReportsLink/ReportsLink';
import { SummaryListDashboard } from 'components/SummaryListDashboard/SummaryListDashboard';
import { TableDashboard } from 'components/TableDashboard/TableDashboard';

function DashboardPage() {
  return (
    <div>
      <div>
        <button>
          <Icon iconid={'icon-plus'} width={24} height={24} />
          <p>ADD TRANSACTION</p>
        </button>
        <ReportsLink />
        <Balance />
        <div>
          <p>Hello! To get started, enter the current balance of your account!</p>
          <p>You can't spend money until you have it :)</p>
        </div>
      </div>
      {/* <div>
        <AddTransactionForm />
        <div>
          <TableDashboard />
          <SummaryListDashboard />
        </div>
      </div> */}
      <div>
        <button>EXPENSES</button>
        <button>INCOME</button>
      </div>
    </div>
  );
}

export default DashboardPage;
