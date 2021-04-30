
import React from 'react';
import LeftSide from '../LeftSide/LeftSide'
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contacts/Contacts';
import Showcase from '../Showcase/Showcase';
import {
    Switch,
    Route
} from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={Contact} />
                    <Route path={['/', '/recommended', '/discounts']}>
                        <LeftSide />
                        <Showcase
                            produtctsList={this.props.produtctsList} >
                        </Showcase>
                    </Route>
                </Switch>
            </>
        )
    }
};
export default Main