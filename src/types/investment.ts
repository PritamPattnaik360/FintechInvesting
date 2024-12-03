export interface Investment {
  id: string;
  startupId: string;
  amount: number;
  shares: number;
  date: string;
}

export interface Portfolio {
  totalValue: number;
  investments: Investment[];
}