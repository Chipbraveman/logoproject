import Head from "next/head";
import "../styles/globals.css";
import "../styles/scss/global.scss";
import Header from "../components/Header/Header";
import ThemeWrapper from "../components/ThemeWrapper/ThemeWrapper.js";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Script from "next/script";
import Route from "../components/Route";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
        {/* <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" /> */}
        <link rel="icon" href="/images/favicon.ico" type="image/png" />

        {/* Favicon */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/images/favicon-16x16.png"
        /> */}
        {/* <link rel="manifest" href="/public/images/site.webmanifest" /> */}

        {/* <link rel="shortcut icon" href="/static/apple-touch-icon.ico" /> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>

        {/* <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
          integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <Provider store={store}>
        <Route>
          <ThemeWrapper>
            {/* <Header /> */}
            <Component {...pageProps} />
            <Script id="tawk" strategy="lazyOnload">
              {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/630fb70337898912e96679b1/1gbqm5ric';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
        `}
            </Script>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-17Y3ETKXRD"
            ></Script>

            <Script>
              {" "}
              {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-17Y3ETKXRD');
             `}
            </Script>
          </ThemeWrapper>
        </Route>
      </Provider>
    </>
  );
}
