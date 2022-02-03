import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInOut from './pages/sign-in-out/sign-in-out';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser  } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { sellecColectionForPreview } from './redux/shop/shop.selector';

class App extends React.Component {


unsubscribeFromAuth = null

componentDidMount() {
  const { setCurrentUser, collectionsArray } = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        })

        // replaced by redux
        // this.setState({
        //   currentUser: {
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   }
        // })
      })
    } 
     // this.setState({currentUser: userAuth})
      setCurrentUser(userAuth)
    
    //createUserProfileDocument(user);
  })
  
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ? 
            <Redirect to="/" /> 
            : <SignInOut />}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: sellecColectionForPreview(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
