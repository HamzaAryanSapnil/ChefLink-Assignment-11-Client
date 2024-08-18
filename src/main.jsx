import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Routes.jsx";
import AuthProvider from "./Auth_Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

// axios default credentials
// Axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
);
