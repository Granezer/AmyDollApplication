const baseUrl = "https://amy-doll-backend.onrender.com/api/v1/amy-doll"
// const baseUrl = "http://localhost:8000/api/v1/amy-doll"

// Auth
export const loginUrl = `${baseUrl}/auth/login`
export const registerUrl = `${baseUrl}/auth/register`

// product
export const createProductUrl = `${baseUrl}/product/create`
export const getAllProducts = `${baseUrl}/product/all`;
export const getProductUrl = (id) => `${baseUrl}/product/:${id}`;
export const updateProductUrl = (id) => `${baseUrl}/product/:${id}`;
export const deleteProducturl =  (id) => `${baseUrl}/product/:${id}`;

// Cart
export const createCartUrl =(sessionId)=>`${baseUrl}/cart/create/:${sessionId}`;
export const addToCartUrl = `${baseUrl}/cart/addItem`;
export const updateCartItemUrl = (itemId) => `${baseUrl}/cart/:${itemId}`;
export const getAllCartItemsUrl = (sessionId, cartId) => `${baseUrl}/cart/${cartId}/all/${sessionId}`;
export const getCartBySessionIdUrl = (sessionId) => `${baseUrl}/cart/:${sessionId}`;
export const deleteCartItemUrl = (productId, sessionId, cartId) => `${baseUrl}/cart/${cartId}/${sessionId}/${productId}`;
export const deleteAllCartItemsUrl = (sessionId, cartId) => `${baseUrl}/cart/carts/${cartId}/all/${sessionId}`

// Payment
export const initiatePaymentUrl = `${baseUrl}/payment/initialize-payment`;
export const getPaymentVerificationUrl = (reference) => `${baseUrl}/payment/verify-payment/${reference}`;

// Session
export const createSessionUrl = `${baseUrl}/session`;
export const getAllSessionUrl = `${baseUrl}/session/all`;
export const getSessionBySessionIdUrl = (id) => `${baseUrl}/session/:${id}`;
export const deleteSessionBySessionId = (id) => `${baseUrl}/session/:${id}`

// Order
export const createOrderUrl = (sessionId, cartId) => `${baseUrl}/orders/:${sessionId}/:${cartId}`;
export const getAllOrdersUrl = `${baseUrl}/orders`
export const deleteAllOrdersUrl = `${baseUrl}/orders`
export const updateOrdersUrl =(orderId)=> `${baseUrl}/orders/${orderId}`
export const getOrderBySessionIdAndCartId = (sessionId, cartId) => `${baseUrl}/orders/${sessionId}/${cartId}`;
export const deleteOrderByOrderId = (orderId) => `${baseUrl}/orders/${orderId}`;

// Subscribe

export const createSubscribeUrl = `${baseUrl}/subscribe`;