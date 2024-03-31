import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const basketContext = createContext(null);

const defaultBasket = {};

function useCreateBasketContext() {
  const [loaded, setLoaded] = useState(false);
  const [basket, setBasket] = useState(defaultBasket);

  useEffect(() => {
    if (!loaded) {
      const basket = sessionStorage.getItem("basket");
      if (!basket) {
        setBasket({});
      } else {
        setBasket(JSON.parse(basket));
      }

      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const calculateSummary = () => {
    return Object.values(basket).reduce((sum, item) => {
      console.log(basket);
      return sum + item.price * item.count;
    }, 0);
  };

  const addItem = (product) => {
    setBasket((prevState) => {
      return { ...prevState, [product.id]: { ...product, count: 1 } };
    });
  };
  const deleteItem = (itemId) => {
    setBasket((prevState) => {
      return Object.keys(prevState)
        .filter((key) => prevState[key].id !== itemId)
        .reduce((res, key) => ((res[key] = prevState[key]), res), {});
    });
  };
  const updateItemCount = (newNumber, itemId) => {
    setBasket((prevState) => {
      return {
        ...prevState,
        [itemId]: { ...prevState[itemId], count: newNumber },
      };
    });
  };

  const increaseNumber = (itemId) => {
    updateItemCount(basket[itemId].count + 1, itemId);
  };
  const decreaseNumber = (itemId) => {
    if (basket[itemId].count > 1) {
      updateItemCount(basket[itemId].count - 1, itemId);
    } else {
      deleteItem(itemId);
    }
  };
  const summary = useCallback(calculateSummary, [
    setBasket,
    updateItemCount,
    increaseNumber,
    decreaseNumber,
    addItem,
    deleteItem,
  ]);

  const itemsCount = useCallback(
    (sum) => Object.values(basket).reduce((sum, item) => sum + item.count, 0),
    [
      setBasket,
      updateItemCount,
      increaseNumber,
      decreaseNumber,
      addItem,
      deleteItem,
    ],
  );

  return {
    basket,
    summary,
    addItem,
    increaseNumber,
    decreaseNumber,
    deleteItem,
    itemsCount,
  };
}

export function BasketContext({ children }) {
  const context = useCreateBasketContext();
  return (
    <basketContext.Provider value={context}>{children}</basketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(basketContext);
  if (!context) throw new Error("Use app context within provider!");
  return context;
}
