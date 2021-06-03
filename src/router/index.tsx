import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loading from '../components/Loading';
import NoFound from "../components/NoFound";

const Login = React.lazy(() => import("../components/Login"));
const MyLayout = React.lazy(() => import("../components/Layout/"));
//实现组件的按需加载
interface Iprops {
  name: String;
}

const App: React.FC<Iprops> = function (props) {
  return (
    <HashRouter>
      <Suspense fallback={<Loading></Loading>}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path='/' exact component={MyLayout}></Route>
          <Route path="/*" component={NoFound}></Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default App;
