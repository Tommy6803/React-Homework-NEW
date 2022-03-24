import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Provider } from 'react-redux'
import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Animals } from './routes/Animals';



export const Homework = () => {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <AppBar position="static">
                        <Toolbar>
                            <Button to="/" component={Link} color="inherit">
                                Home
                            </Button>
                            <Button to="/profile" component={Link} color="inherit">
                                Profile
                            </Button>
                            <Button to="/chats" component={Link} color="inherit">
                                Chats
                            </Button>
                            <Button to="/animals" component={Link} color="inherit">
                                Animals
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route component={Animals} path="/animals" />
                        <Route component={Chats} path="/chats" />
                        <Route component={Profile} path="/profile" />
                        <Route component={Home} path="/" />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};