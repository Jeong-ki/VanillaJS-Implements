import CartPage from "./page/CartPage";
import ProductDetailPage from "./page/ProductDetailPage";
import ProductListPage from "./page/ProductListPage";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';

    console.log(pathname);

    if (pathname === '/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf('/products/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({
        $target,
        productId,
      }).render();
    } else if (pathname === '/cart') {
      new CartPage({
        $target,
      }).render();
    }
  }

  this.route();
}