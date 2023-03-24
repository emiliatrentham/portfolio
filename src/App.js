import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

import {
 useState,
} from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink =
  createHttpLink({
    uri: "/graphql",
  });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext(
  (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token =
      localStorage.getItem(
        "id_token"
      );
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token
          ? `Bearer ${token}`
          : "",
      },
    };
  }
);

const client =
  new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(
      httpLink
    ),
    cache:
      new InMemoryCache(),
  });

function App() {
  const [
    currentPage,
    setCurrentPage,
  ] = useState("about me");

  // const [
  //   { theme, isDark },
  //   toggleTheme,
  // ] = useContext(
  //   ThemeContext
  // );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;

      default:
        return <p>error</p>;
    }
  };
  return (
    <ApolloProvider
      client={client}
    >
      <div
        name="App"
        className="flex h-screen flex-col transition duration-300 "
      >
          <NavBar
            setCurrentPage={
              setCurrentPage
            }
        />
        
          <div className="flex-1 bg-gradient-to-b from-lime-300 via-emerald-300 to-cyan-300 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-zinc-900 ">
            {renderPage()}
            <Footer />
          </div>
        </div>
    
    </ApolloProvider>
  );
}

export default App;
