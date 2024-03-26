import { useState } from 'react'

import viteLogo from '/vite.svg'
import typescriptLogo from './assets/typescript.svg'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import shadcnLogo from './assets/shadcn.svg'

import { Button } from './components/ui/button'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-1">SPA Base</h1>
      <Button className="mt-8 max-w-min" onClick={() => setCount((prev) => prev + 1)}>
        Count is {count}
      </Button>
      <div className="flex gap-8 items-center m-8">
        <img src={viteLogo} className="w-24" alt="Vite logo" />
        <img src={reactLogo} className="w-24" alt="React logo" />
        <img src={typescriptLogo} className="w-24" alt="TypeScript logo" />
        <img src={tailwindLogo} className="w-24" alt="Tailwindcss logo" />
        <img src={shadcnLogo} className="w-24" alt="Shadcn/ui logo" />
      </div>
      <div className="text-sm">
        Base for a SPA project built with Vite, React, TypeScript, Tailwindcss and Shadcn/ui.
      </div>
    </main>
  )
}
