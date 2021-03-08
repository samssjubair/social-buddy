import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from './Components/AllPosts/AllPosts';
import Users from './Components/Users/Users';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Comments from './Components/Comments/Comments';
import UserAllPost from './Components/UserAllPost/UserAllPost';

function App() {

  return (
      <Router>
        <div >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
      </div>
      <Switch>
          <Route path="/posts">
            <AllPosts></AllPosts>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
          <Route  path="/post/:postId">
            <PostDetail />
          </Route>
          <Route  path="/user/:userId">
            <UserAllPost />
          </Route>
          <Route  path="/comment/:pId">
            <Comments />
          </Route>
          <Route  path="*">
            <NotFound />
          </Route>
      </Switch>


    </Router>
  );
}

export default App;
