import { Item } from "./Item"

export const ItemList = ({ itemList }) => {
  return (
    <div className="item-list">
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}