const initialState = {
  cart: [],
  countCartItems: 0,
  totalCountOfProducts: 0,
  showedItems: 6,
  showFilter: true,
  brands: []
}

const storeApp = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      return {
        cart: [
          ...state.cart,
          {
            name: action.name,
            price: action.price,
            brand: action.brand,
            slug: action.slug,
            count: 1
          }
        ],
        countCartItems: state.countCartItems + 1,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: state.showedItems,
        brands: state.brands
      }

    case 'TOGGLE_FILTER':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: action.showedItems,
        brands: state.brands
      };

    case 'ADD_INFO_PRODUCT_DATA':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: action.totalCountOfProducts,
        showedItems: state.showedItems,
        brands: action.brands
      }

    default:
      return state;
  }
}

export default storeApp;