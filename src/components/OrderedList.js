
const OrderedList = ({items}) => {
  let list = []
  items.forEach(items =>{
list.push (<li>{items}</li>)
  })
  return <ol>
    {list}
  </ol>
}


export default OrderedList;




