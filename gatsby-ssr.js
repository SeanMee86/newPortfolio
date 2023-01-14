import React from 'react';
import { Partytown } from "@builder.io/partytown/react"

const gtmScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5QR68H');
`

const gtmPixel = `
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5QR68H"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`

export const onRenderBody = ({
  setPostBodyComponents,
  setHeadComponents
}) => {
  const headComponents = [
    <script
      type={'text/partytown'}
      key={'google-tag-manager'}
      dangerouslySetInnerHTML={{__html: gtmScript}}
    />,
    <Partytown
      resolveUrl={(url => {
        const proxyDomains = [
          "www.googletagmanager.com"
        ]
        if(proxyDomains.includes(url)) {
          const proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api")
          proxyUrl.searchParams.append("url", url);
          return proxyUrl
        }
      })}
      forward={[
        "dataLayer.push"
      ]}
      debug={true}
      key={'partytown'}
    />
  ]
  const postBodyComponents = [
    <script
      key={'gtm-pixel'}
      dangerouslySetInnerHTML={{__html: gtmPixel}}
    />
  ]
  setHeadComponents(headComponents);
  setPostBodyComponents(postBodyComponents)
}
