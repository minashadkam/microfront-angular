import { configureStore } from '@reduxjs/toolkit';


const DEFAULT_LOANS = [
  {
    amount: 15000000,
    startDate: '2022/02/01',
    finalDate: '2023/02/02'
  },
  {
    amount: 250000,
    startDate: '2021/02/01',
    finalDate: '2023/02/02'
  },
  {
    amount: 3000000,
    startDate: '2014/02/01',
    finalDate: '2023/02/02'
  },
]
function updateLoans(Loans: any[]){
  return {
    type: 'UPDATE_LOAN',
    payload: Loans,
  }
}

const bindUpdateLoans = (loans: any[]) => Store.dispatch(updateLoans(loans));

export function updateLoansList(loan: any[]) {
  bindUpdateLoans(loan);
}

export function getLoansState() {
  return Store.getState().Loans;
}

const Store = configureStore({ reducer: reducer_Loans_update });

function reducer_Loans_update(state = {Loans: DEFAULT_LOANS}, action: { type: any; payload: any[]; }){
  switch(action.type){
    case 'UPDATE_LOAN':
      return {...state, Loans: action.payload};
    default:
      return state;
  }
}

export default Store;
