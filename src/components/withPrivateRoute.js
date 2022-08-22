import Router from "next/router";
import React from "react";

const login = "/";
const checkUserAuthentication = () => {
  return { auth: null }; // change null to { isAdmin: true } for test it.
};

const withPrivateRoute = (Component) => {
  const hocComponent = ({ ...props }) => <Component {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.push(login);
      }
    } else if (Component.getInitialProps) {
      const wrappedProps = await Component.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default withPrivateRoute;
