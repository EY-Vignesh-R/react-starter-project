import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("../../pages/ProductList"));
const FifthTask = lazy(() => import("../FifthTask/FifthTask"));
const FirstTask = lazy(() => import("../FirstTask/FirstTask"));
const FourthTask = lazy(() => import("../FourthTask/FourthTask"));
const SecondTask = lazy(() => import("../SecondTask/SecondTask"));
const ThirdTask = lazy(() => import("../ThirdTask/ThirdTask"));
const Cart = lazy(() => import("../../pages/Cart"));
const Payment = lazy(() => import("../../pages/Payment"));
const OrderConfirmation = lazy(() => import("../../pages/OrderConfirmation"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/firstTask"
        element={
          <Suspense fallback={<>Loading...</>}>
            <FirstTask />
          </Suspense>
        }
      />
      <Route
        path="/secondTask"
        element={
          <Suspense fallback={<>Loading...</>}>
            <SecondTask />
          </Suspense>
        }
      />
      <Route
        path="/thirdTask"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ThirdTask />
          </Suspense>
        }
      />
      <Route
        path="/fourthTask"
        element={
          <Suspense fallback={<>Loading...</>}>
            <FourthTask />
          </Suspense>
        }
      />
      <Route
        path="/fifthTask"
        element={
          <Suspense fallback={<>Loading...</>}>
            <FifthTask />
          </Suspense>
        }
      />
      <Route
        path="/productList"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ProductList />
          </Suspense>
        }
      />
      <Route
        path="/cartItems"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="/paymentType"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="/orderConfirmation"
        element={
          <Suspense fallback={<>Loading...</>}>
            <OrderConfirmation />
          </Suspense>
        }
      />
    </Routes>
  );
};
export default Routing;
