/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hRI920Noqtw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Fraunces } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

fraunces({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SVGProps, useState } from "react"

export function Regalos() {
  const products = [
    {
      id: 1,
      image: "9.jpg",
      title: "Mini picnic",
      description: "30.000",
    },
    {
      id: 2,
      image: "5.jpg",
      title: "Caja decorativa",
      description: "10.000",
    },
    {
      id: 3,
      image: "6.jpg",
      title: "Ancheta 1",
      description: "45.000",
    },
    {
      id: 4,
      image: "7.jpg",
      title: "Ancheta 2",
      description: "50.000",
    },
    {
      id: 5,
      image: "8.jpg",
      title: "Ancheta 3",
      description: "50.000",
    },
    {
      id: 6,
      image: "9.jpg",
      title: "Ancheta 4",
      description: "50.000",
    },
    {
      id: 7,
      image: "10.jpg",
      title: "Ancheta 5",
      description: "55.000",
    },
    {
      id: 8,
      image: "Caja_de_Regalo_Decorativa.jpg",
      title: "Caja de Regalo Decorativa",
      description: "5.000",
    },
    {
      id: 9,
      image: "Taza_Personalizada.jpg",
      title: "Taza Personalizada",
      description: "15.000",
    },
    {
      id: 10,
      image: "Portarretratos.webp",
      title: "Portarretratos",
      description: "30.000",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
    setShowAlert(true) // Mostrar alerta cuando se agrega al carrito
  }

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold flex items-center" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            Catálogo de Productos
          </Link>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-primary-foreground text-primary rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
            />
          </div>
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="relative" onClick={handleAddToCart}>
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full px-2 py-1 text-xs font-medium">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
            {showAlert && cartCount > 0 && (
              <Alert variant="default" className="ml-4 hidden sm:flex">
                <CircleCheckIcon className="h-5 w-5 mr-2" />
                <AlertDescription>{cartCount} producto(s) agregado(s) al carrito.</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </header>
      <main className="container mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-background rounded-lg shadow-md overflow-hidden">
            <img
              src={`/${product.image}`} // Usar el nombre de archivo del producto
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-muted-foreground mt-2">{product.description}</p>
              <Button className="mt-4 w-full" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-black text-white p-4 md:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Métodos de Pago</h3>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/placeholder.svg"
                alt="Visa"
                width={80}
                height={50}
                className="object-contain"
                style={{ aspectRatio: "80/50", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                alt="Mastercard"
                width={80}
                height={50}
                className="object-contain"
                style={{ aspectRatio: "80/50", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                alt="American Express"
                width={80}
                height={50}
                className="object-contain"
                style={{ aspectRatio: "80/50", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
            <ul className="space-y-1">
              <li>Teléfono: 3105751123</li>
              <li>Instagram: <a href="https://www.instagram.com/detalles.omega?igsh=MXVvM3lxMTViY2tzMw==" className="underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>Dirección: Carrera 100 #139, Bogotá, Colombia</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Información Legal</h3>
            <ul className="space-y-1">
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
              <li>Aviso de Cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}