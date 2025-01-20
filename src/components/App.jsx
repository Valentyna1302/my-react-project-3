import ControlledForm from './Forms/ControlledForm';
import UncontrolledForm from './Forms/UncontrolledForm';
import Header from './Header/Header';
import UseIdExample from './UseIdExample/UseIdExample';

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
      <UseIdExample />
      {/* <ControlledForm register={register} /> */}
    </div>
  );
};
export default App;
