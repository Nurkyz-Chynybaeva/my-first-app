const Wealth = ({ items }) => {
  let list = items.map((item) => {
    return <li>{item.name} - {list.wealth}</li>;
  });
  return {list};
}

export default Wealth;