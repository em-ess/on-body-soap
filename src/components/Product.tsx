import { createCtx } from "@/utils/context-helper"

// const [useProductContext, ProductContextProvider] = createCtx<IProductContext>()

function Product(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <div className="flex flex-col items-stretch uppercase font-bold">
      {children}
    </div>
  )
}


Product.Image = function ProductImage(props: React.HTMLProps<HTMLImageElement>) {
  return (
    <div className="w-96 h-80 overflow-clip flex items-center justify-center">
      <img className="object-fill" {...props}/>
    </div>
  )
}

Product.Name = function ProductName(props: { children: string }) {
  return <p className="text-3xl py-4 text-center">{props.children}</p>
}

Product.Line = function ProductLine(props: { children: string }) {
  return <p className="text-xl py-2 border-t">{props.children}</p>
}

export default Product;