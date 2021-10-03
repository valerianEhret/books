import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {RouterNames, routes} from "../../routes/routes";

export const AppRouter: React.FC = () => {
    return (
        <Switch>
            {
                routes.map(route=>{
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                })
            }
            {/*<Redirect to={RouterNames.MAIN}/>*/}
        </Switch>
    )
}