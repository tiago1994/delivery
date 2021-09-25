import { Switch, Route } from "react-router-dom";
import { Login, Register } from "../../pages";

export const UserRoutes = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    )
}