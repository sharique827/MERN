import './App.css';
import Main from "./Components/Main"
import CartContextProvider from "./Store/CartContextProvider";
import ProductContextProvider from './Store/ProductContextProvider';
import WishlistContextProvider from './Store/WishlistContextProvider';
import CheckoutContextProvider from './Store/CheckoutContextProvider';
import MaincategoryContextProvider from './Store/MaincategoryContextProvider';
import SubcategoryContextProvider from './Store/SubcategoryContextProvider';
import BrandContextProvider from './Store/BrandContextProvider';
import UserContextProvider from './Store/UserContextProvider';
import NewslatterContextProvider from './Store/NewslatterContextProvider';
import ContactContextProvider from './Store/ContactContextProvider';
function App() {
  return (
    <>
    
    <ProductContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <CheckoutContextProvider>
            <MaincategoryContextProvider>
              <SubcategoryContextProvider>
                <BrandContextProvider>
                <UserContextProvider>
                  <NewslatterContextProvider>
                    <ContactContextProvider>
                    <Main/>
                    </ContactContextProvider>
                  </NewslatterContextProvider>
                </UserContextProvider>
                </BrandContextProvider>
              </SubcategoryContextProvider>
            </MaincategoryContextProvider>
          </CheckoutContextProvider> 
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
    </>
  );
}

export default App;
