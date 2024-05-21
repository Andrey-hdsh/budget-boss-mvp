const incomeCategories = [
  "Salary",
  "Additional income"
];

const expenseCategories = [
  "Products",
  "Alcohol",
  "Entertainment",
  "Health",
  "Transport",
  "For home",
  "Technics",
  "Utilities",
  "Sports and hobby",
  "Education",
  "Other"
];

const isExpense = true;

export const AddTransactionForm = () => {

  const categories = isExpense ? expenseCategories : incomeCategories;

  return (
    <div>
      <input name='description' placeholder="Description" />
      <select name='category'>
      <option value="" disabled selected key='placeholder'>Category</option>
{categories.map(category => <option key={category}>{category}</option>)}
      </select>
    </div>
  );
};
