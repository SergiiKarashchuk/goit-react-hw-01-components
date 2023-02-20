import { Profile } from './Profile/Profile';
import user from '../user.json';

import { StatisticsList } from './Statistics/StatisticsList';
import data from '../data.json';

import { FriendList } from './Friend/FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile item={user} />;
      <StatisticsList items={data} />;
      <FriendList items={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
