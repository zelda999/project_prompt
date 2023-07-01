import React from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";

export const metadata = {
  title: "NextJs",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis hic pariatur amet, dolores consequatur vero quam voluptate nobis nihil nesciunt at officia optio, fugiat, eligendi non est obcaecati. Eligendi.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
