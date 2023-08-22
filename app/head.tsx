import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Aqualight mining</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Aqualight mining" />
      <link rel="icon" href="/logo-white.ico" />

      <Script
        src="//code.tidio.co/ecq2swrggafk3ukp9tgrlzpcxvlaaejn.js"
        async
      ></Script>
    </>
  );
}
