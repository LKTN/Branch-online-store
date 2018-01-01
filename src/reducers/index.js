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
        brands: state.brands,
        checkedBrands: state.checkedBrands,
        filterFrom: state.filterFrom,
        filterTo: state.filterTo
      }

    case 'TOGGLE_FILTER':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: action.showedItems,
        brands: state.brands,
        checkedBrands: state.checkedBrands,
        filterFrom: state.filterFrom,
        filterTo: state.filterTo
      };

    case 'ADD_INFO_PRODUCT_DATA':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: state.showedItems,
        brands: action.brands,
        checkedBrands: state.checkedBrands,
        filterFrom: state.filterFrom,
        filterTo: state.filterTo
      };

    case 'APPLY_FILTER_FORM':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: action.showedItems,
        brands: state.brands,
        checkedBrands: action.checkedBrands,
        filterFrom: action.filterFrom,
        filterTo: action.filterTo
      }

    case 'CHANGE_TOTAL_COUNT_OF_PRODUCTS':
      return {
        cart: state.cart,
        countCartItems: state.countCartItems,
        totalCountOfProducts: state.totalCountOfProducts,
        showedItems: state.showedItems,
        brands: state.brands,
        checkedBrands: state.checkedBrands,
        filterFrom: state.filterFrom,
        filterTo: state.filterTo,
        totalCountOfProducts: action.totalCountOfProducts
      }

    default:
      return state;
  }
}

export default storeApp;