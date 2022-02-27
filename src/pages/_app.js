import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider, useSession } from "next-auth/react";
import { StateMachineProvider, createStore } from "little-state-machine";

import theme from "styles/theme";

const myTheme = extendTheme(theme);

createStore({});

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <ChakraProvider theme={myTheme}>
      <StateMachineProvider>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </StateMachineProvider>
    </ChakraProvider>
  );
}

export default MyApp;
