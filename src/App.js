import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInOut from './pages/sign-in-out/sign-in-out';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser  } from './redux/user/user.actions'


class App extends React.Component {


unsubscribeFromAuth = null

componentDidMount() {
  //const { setCurrentUser } = this.props;
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
    } else {
     // this.setState({currentUser: userAuth})
      this.props.setCurrentUser(userAuth)
    }
    //this.setState({ currentUser: user })
    //createUserProfileDocument(user);
    //console.log('USER: ', user)
    //console.log(createUserProfileDocument)
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInOut} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
