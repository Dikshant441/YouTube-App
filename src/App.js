import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";

const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
     {
      path : "/",
      element : <MainContainer/>,
     },
     {
     path : "watch",
     element : <WatchPage/>,
     }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRoter} />
      </div>
    </Provider>
  );
}

export default App;
