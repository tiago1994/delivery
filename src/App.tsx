import { BrowserRouter as Router } from "react-router-dom";
import { UserRoutes } from "./routes/user"; 

export const App = () => {
  return (
    <Router>
      <UserRoutes />
    </Router>
  );
}
