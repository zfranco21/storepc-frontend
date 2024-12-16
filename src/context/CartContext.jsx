import React, { createContext, useContext, useReducer } from "react";
import { useAuth } from "./UserAuthContext"; // Importar el contexto de autenticación

// Crear el contexto del carrito
const CartContext = createContext();

// Estado inicial del carrito
const initialState = {
    user: null, // ID del usuario, se obtiene del contexto de autenticación
    items: [], // Lista de productos en el carrito
    totalPrice: 0, // Precio total de los productos
    adress: "", // Dirección del usuario
    telephone: "", // Teléfono del usuario
    comment: "", // Comentarios adicionales
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };

        case "ADD_TO_CART": {
            const { product, quantity } = action.payload;

            // Verificar si el producto ya está en el carrito
            const existingItem = state.items.find((item) => item.product.id === product.id);

            let updatedItems;
            if (existingItem) {
                // Actualizar la cantidad del producto existente
                updatedItems = state.items.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Agregar un nuevo producto al carrito
                updatedItems = [...state.items, { product, quantity, price: product.price }];
            }

            // Recalcular el precio total
            const totalPrice = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return { ...state, items: updatedItems, totalPrice };
        }

        case "REMOVE_FROM_CART": {
            const updatedItems = state.items.filter(
                (item) => item.product.id !== action.payload
            );

            // Recalcular el precio total
            const totalPrice = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return { ...state, items: updatedItems, totalPrice };
        }

        case "UPDATE_QUANTITY": {
            const { id, quantity } = action.payload;

            const updatedItems = state.items.map((item) =>
                item.product.id === id ? { ...item, quantity } : item
            );

            // Recalcular el precio total
            const totalPrice = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return { ...state, items: updatedItems, totalPrice };
        }

        case "SET_ADRESS":
            return { ...state, adress: action.payload };

        case "SET_TELEPHONE":
            return { ...state, telephone: action.payload };

        case "SET_COMMENT":
            return { ...state, comment: action.payload };

        case "CLEAR_CART":
            return { ...initialState, user: state.user }; // Mantener el usuario al limpiar el carrito

        default:
            throw new Error(`Acción desconocida: ${action.type}`);
    }
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const { user } = useAuth(); // Obtener el usuario logueado del contexto de autenticación

    // Configurar el estado inicial del carrito con el ID del usuario logueado
    const initialStateWithUser = { ...initialState, user: user?.id || null };

    const [state, dispatch] = useReducer(cartReducer, initialStateWithUser);

    // Sincronizar el usuario logueado en caso de cambios
    React.useEffect(() => {
        dispatch({ type: "SET_USER", payload: user?.id || null });
    }, [user]);

    return (
        <CartContext.Provider value={{ cart: state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
    return useContext(CartContext);
};
