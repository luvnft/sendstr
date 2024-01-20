import React, { useState } from "react"
import Head from "next/head"

import { Header } from "../components/header"
import { Button } from "../components/button"
import { SendView } from "../views/send"
import { ReceiveView } from "../views/receive"
import { NostrKeysType } from "../types"

type HomeProps = {
  keys: NostrKeysType
}

export default function Home({ keys }: HomeProps) {
  const [clientType, setClientType] = useState("")

  const LandingView = () => (
    <div className="max-w-[64rem] m-auto">
      <div className="p-10">
        <h1 className="font-bold text-4xl md:text-7xl text-bold pb-10">
          x2x encrypted shared clipboard
        </h1>
        <p className="pb-10 leading-relaxed">
          X: Simple, secure end-to-end encrypted shared clipboard app powered by LUV NFT. 
          No login needed, new throwaway encryption keys are generated on page load, and 
          the default Nostr relay deletes messages after 1 hour. To get started open this 
          page on another device and choose one of the options below.
        </p>
        <div className="flex w-full justify-between gap-8">
          <Button className="w-1/2 shadow-lg" onClick={() => setClientType("send")}>
            Send
          </Button>
          <Button className="w-1/2 shadow-lg" onClick={() => setClientType("receive")}>
            Receive
          </Button>
        </div>
      </div>
    </div>
  )

  const Page = () => {
    switch (true) {
      case clientType === "send":
        return <SendView keys={keys} />
      case clientType === "receive":
        return <ReceiveView keys={keys} />
      default:
        return <LandingView />
    }
  }

  return (
    <>
      <Head>
        <title>X</title>
        <meta name="title" content="X" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="X: Simple, secure end-to-end encrypted shared clipboard app powered 
          by LUV NFT. No login needed, new throwaway encryption keys are generated on 
          page load, and the default Nostr relay deletes messages after 1 hour. To get 
          started open this page on another device and choose one of the options below."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://x.luvnft.com/" />
        <meta property="og:title" content="X" />
        <meta
          property="og:description"
          content="X: Simple, secure end-to-end encrypted shared clipboard app powered by LUV NFT. No login needed, new throwaway encryption keys are generated on page load, and the default Nostr relay deletes messages after 1 hour. To get started open this page on another device and choose one of the options below."
        />
        <meta property="og:image" content="/favicon-16x16.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.luvnft.com/" />
        <meta property="twitter:title" content="X" />
        <meta
          property="twitter:description"
          content="X: Simple, secure end-to-end encrypted shared clipboard app powered by LUV NFT. No login needed, new throwaway encryption keys are generated on page load, and the default Nostr relay deletes messages after 1 hour. To get started open this page on another device and choose one of the options below."
        />
        <meta property="twitter:image" content="/favicon-16x16.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      </Head>
      <div className="min-h-screen">
        <div className="p-5">
          <div className="max-w-[80rem] mx-auto">
            <Header />
          </div>
          <main className="max-w-2xl mx-auto px-4">
            <Page />
          </main>
        </div>
      </div>
    </>
  )
}
