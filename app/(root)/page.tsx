import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'Amandi', lastName: 'Nwankwo', email: 'amadonlinkserv@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="welcome"
            subtext="Access and manage your account and transactions effeciently"
            user={loggedIn?.firstName || 'Guest'}
            />
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
          RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[ {currentBalance: 123.50}, {currentBalance: 234.30}]} 
       />
    </section>
  )
}

export default Home