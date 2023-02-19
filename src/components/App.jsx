import { Profile } from './Profile';
import user from '../user.json';

import { StatisticsList } from './StatisticsList';
import data from '../data.json';

import { FriendList } from './FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './TransactionHistory';
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
