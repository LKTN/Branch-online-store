export const toggleFilter = (displayed) => {
    return {
      type: 'TOGGLE_FILTER',
      showedItems: displayed
    }
  }

export const addToCart = (name, price, brand, slug) => {
    return {
      type: 'ADD_TO_CART',
      name: name,
      price: price,
      brand: brand,
      slug: slug
    }
  }

export const addInfoProductData = (brands) => {
  return {
    type: 'ADD_INFO_PRODUCT_DATA',
    brands: brands
  }
}

export const applyFilterForm = (filterFrom, filterTo, checkedBrands) => {
  return {
    type: 'APPLY_FILTER_FORM',
    filterFrom: filterFrom,
    filterTo: filterTo,
    checkedBrands: checkedBrands,
    showedItems: 6
  }
}

export const changeTotalCountOfProducts = (totalCountOfProducts) => {
  return {
    type: 'CHANGE_TOTAL_COUNT_OF_PRODUCTS',
    totalCountOfProducts: totalCountOfProducts
  }
}

export const changeCountOfCartProduct = (cart) => {
  return {
    type: 'CHANGE_COUNT_OF_CUT_PRODUCT',
    cart: cart
  }
}

export const deleteCartProduct = (cart) => {
  return {
    type: 'DELETE_CART_PRODUCT',
    cart: cart
  }
}