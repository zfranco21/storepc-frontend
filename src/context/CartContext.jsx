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

const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };

        case "ADD_TO_CART": {
            const { product, quantity } = action.payload;

            // Usar _id como identificador único del producto
            const existingItem = state.items.find((item) => item.product._id === product._id);
            let updatedItems;

            if (existingItem) {
                // Si el producto ya existe, actualizar la cantidad
                updatedItems = state.items.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Si no existe, agregarlo como un nuevo producto
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
                (item) => item.product._id !== action.payload
            );
            const totalPrice = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );


            return { ...state, items: updatedItems, totalPrice };
        }

        case "UPDATE_QUANTITY": {
            const { id, quantity } = action.payload;

            const updatedItems = state.items.map((item) =>
                item.product._id === id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );

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
            return { ...initialState, user: state.user };

        default:
            console.error(`Unknown action type: ${action.type}`); // Log de error para acciones desconocidas
            throw new Error(`Acción desconocida: ${action.type}`);
    }
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const initialStateWithUser = { ...initialState, user: user?.id || null };

    const [state, dispatch] = useReducer(cartReducer, initialStateWithUser);

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
