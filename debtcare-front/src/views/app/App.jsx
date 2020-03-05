import React, { Suspense } from "react";
import Router from "~/components/app/routes/router";
import BaseLayout from "~/components/app/baseLayout/BaseLayout";
import "./App.scss";

const App = () => {
  return (
    <>
      <Suspense fallback="loading">
        <BaseLayout>
          <Router.Anonymous />
        </BaseLayout>
      </Suspense>
    </>
  );
};
export default App;
