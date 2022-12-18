import {Items} from '../Assets/Database'
import ProductCard from '../Components/ProductCard'
const ShoppingList = () => {
  return (
    <main className='flex flex-row flex-wrap mx-auto max-w-7xl items-center justify-center p-8 gap-2'>
      {
        [...Items,...Items.reverse()].map(item => <ProductCard Item={item}/>)
      }
    </main>
  )
}

export default ShoppingList