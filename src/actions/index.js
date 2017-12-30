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

export const addInfoProductData = (totalCountOfProducts, brands) => {
  return {
    type: 'ADD_INFO_PRODUCT_DATA',
    totalCountOfProducts: totalCountOfProducts,
    brands: brands
  }
}
