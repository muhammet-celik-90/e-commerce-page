import MainBar from '@/app/components/mainBar/MainBar';
import Sidebar from '@/app/components/sidebar/Sidebar'
import { getCategories, getProducts } from '@/app/server/getProductsData';


export default async function Home() {

  const products = await getProducts();
  const categories = await getCategories();

  const sidebarWidth = 300;
  
  return (
    <div className='home-page'>
      <Sidebar products={products} categories={categories} width={sidebarWidth}/>
      <MainBar width={sidebarWidth} products={products}/>
    </div>
  )
}
