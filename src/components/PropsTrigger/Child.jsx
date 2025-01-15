const Child = ({ clicks }) => {
  console.log('CHILD COMPONENT WAS Updated');
  return (
    <div>
      <h2>{clicks}</h2>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus numquam, eos corrupti nobis quidem veniam velit nihil est labore, iste
      dignissimos, asperiores tempora. Suscipit officiis fuga nobis ea sed beatae.
    </div>
  );
};
export default Child;
