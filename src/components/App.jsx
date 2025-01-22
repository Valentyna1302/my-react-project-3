import ApplyForm from './Forms/ApplyForm';
import Header from './Header/Header';

const App = () => {
  const register = credentials => {
    console.log('Data received!');
    setTimeout(() => {
      console.log('Data processing....');
      setTimeout(() => {
        console.log(credentials);
        console.log('User was register successfully!');
      }, 2000);
    }, 1000);
  };
  return (
    <div>
      <Header />
      <ApplyForm register={register} />
    </div>
  );
};
export default App;
