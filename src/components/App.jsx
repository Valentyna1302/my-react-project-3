import Header from './Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        <img src='https://miro.medium.com/v2/resize:fit:1200/1*MU6RT2oUkgZ4YqGcmv5ohQ.png' width={1000} height={500} />
      </div>
    </>
  );
};
export default App;
