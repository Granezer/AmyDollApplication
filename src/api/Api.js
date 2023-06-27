const baseUrl = "/api/amy-doll"

// product

export const createProductUrl = `${baseUrl}/ product/create/`
export const getAllProducts = `${baseUrl}/product/all`;
export const getProductUrl = (id) => `${baseUrl}/product/:${id}`;
export const updateProductUrl = (id) => `${baseUrl}/product/:${id}`;
export const deleteProducturl =  (id) => `${baseUrl}/product/:${id}`;

// Cart

export const addToCartUrl = `${baseUrl}/cart/addItem`;
export const updateCartItemUrl = (itemId) => `${baseUrl}/cart/:${itemId}`;
export const getAllCartItemsUrl = `${baseUrl}/cart`;
export const deleteCartItemUrl = (itemId) => `${baseUrl}/cart/:${itemId}`;


// Payment
export const initiatePaymentUrl = `${baseUrl}/payment/initialize-payment`;
export const getPaymentVerificationUrl = (reference) => `${baseUrl}/payment/verify-payment/:${reference}`;

// Session

export const createSessionUrl = `${baseUrl}/session`;
