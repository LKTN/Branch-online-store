const initialState = {
  cart: [],
  countCartItems: 0,
  totalCountOfProducts: 12,
  showedItems: 6,
  showFilter: true,
  brands: [],
  checkedBrands: [],
  filterFrom: 0,
  filterTo: 100000
}

const storeApp = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      return {
        ...state,
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
        countCartItems: state.countCartItems + 1
      }

    case 'TOGGLE_FILTER':
      return {
        ...state,
        showedItems: action.showedItems
      };

    case 'ADD_INFO_PRODUCT_DATA':
      return {
        ...state,
        brands: action.brands
      };

    case 'APPLY_FILTER_FORM':
      return {
        ...state,
        showedItems: action.showedItems,
        checkedBrands: action.checkedBrands,
        filterFrom: action.filterFrom,
        filterTo: action.filterTo
      }

    case 'CHANGE_TOTAL_COUNT_OF_PRODUCTS':
      return {
        ...state,
        totalCountOfProducts: action.totalCountOfProducts
      }

    case 'UPDATE_CART_PRODUCTS':
      return {
        ...state,
        cart: action.cart
      }

    case 'DELETE_CART_PRODUCT':
      return {
        ...state,
        cart: action.cart,
        countCartItems: state.countCartItems - 1,
      }

    case 'DELETE_CART_PRODUCTS':
      return {
        ...state,
        cart: [],
        countCartItems: 0,
      }

    default:
      return state;
  }
}

export default storeApp;