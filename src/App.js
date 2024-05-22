import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AromaticBarFeedbackForm from "./Pages/section1";
import FeedbackTable from "./Pages/section2";

function App() {
  // localStorage.removeItem("feedbackData");
  const router = createBrowserRouter([
    {
        path:"/", 
        element: <Navbar />,
        children:[
            { index:true, element: <AromaticBarFeedbackForm />},
            { path:"section2", element: <FeedbackTable />}
        ]
    }
  ]);

  return (<>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
