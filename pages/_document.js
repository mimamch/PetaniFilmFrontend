import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* Bootstrap Css */}
        <link
          href="assets/css/bootstrap.min.css"
          id="bootstrap-style"
          rel="stylesheet"
          type="text/css"
        />
        {/* Icons Css */}
        <link
          href="assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* App Css*/}
        <link
          href="assets/css/app.min.css"
          id="app-style"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="/assets/libs/jquery/jquery.min.js"></script>
        <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="/assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="/assets/libs/node-waves/waves.min.js"></script>
        <script src="/assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="/assets/libs/apexcharts/apexcharts.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
