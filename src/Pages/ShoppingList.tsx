import {Items} from '../Assets/Database'
import ProductCard from '../Components/ProductCard'
const ShoppingList = () => {
  return (
    <main className='flex flex-row flex-wrap mx-auto max-w-7xl  justify-center p-16 gap-x-4 gap-y-12'>
      {
        [...Items,...Items.reverse()].map(item => <ProductCard Item={item}/>)
      }
    </main>
  )
}

export default ShoppingList