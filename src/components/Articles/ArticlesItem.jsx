const ArticlesItem = ({ item }) => {
  return (
    <li>
      <a target='_blank' rel='noopener noreferrer' href={item.url}>
        {item.title}
      </a>
    </li>
  );
};
export default ArticlesItem;
