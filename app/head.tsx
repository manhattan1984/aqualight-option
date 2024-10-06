import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Aqualight Option</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <meta name="description" content="Aqualight Option" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Tawk.to Script */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6702c671256fb1049b1e2139/1i9hdeccu';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </>
  );
}
