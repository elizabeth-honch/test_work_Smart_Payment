import './App.scss';
import { MainActions } from './components/MainActions';
import { MainHeader } from './components/MainHeader';
import { MainInformation } from './components/MainInformation';

function App() {
  return (
    <>
      <MainHeader />

      <main className="main">
        <div className="main__container">
          <MainInformation />

          <MainActions />
        </div>
      </main>
    </>
  );
};

export default App;
