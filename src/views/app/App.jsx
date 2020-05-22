import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import Routers from "~/components/app/routers/Routers";
import BaseLayout from "~/components/app/baseLayout/BaseLayout";
import signupAction from "~/actions/authAction";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const VERSION = require("../../../package.json").version;

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signupAction.verifyCredentialsAuthentication(isAuthenticated));
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Suspense fallback="loading">
        <Helmet>
          <meta name="version" content={VERSION || "1.0.0"} />
        </Helmet>

        {isAuthenticated ? (
          <BaseLayout.Authenticated>
            <Routers.Authenticated />
          </BaseLayout.Authenticated>
        ) : (
          <BaseLayout.Anonymous>
            <Routers.Anonymous />
          </BaseLayout.Anonymous>
        )}
        <ToastContainer />
      </Suspense>
    </>
  );
};
export default App;
