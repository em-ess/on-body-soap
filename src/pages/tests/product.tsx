import Product from "@/components/Product";

export default function ProductPage() {
  const products = [
    {
      id: "1",
      image: "https://source.unsplash.com/rKwgXnzsOmk",
      name: "Pretty In Pink",
      description: "Rose Geranium",
      ingredients: ["fat", "rose flavor", "lavender", "idk"],
      weight: 3.5
    },
    {
      id: "2",
      image: "https://source.unsplash.com/CwKXCHwxMoE",
      name: "Energize!",
      description: "Peppermint",
      ingredients: ["fat", "peppermint flavor", "more peppermint"],
      weight: 3.5
    },
    {
      id: "3",
      image: "https://source.unsplash.com/C3CKyfxc5Go",
      name: "Breathe Easy",
      description: "Eucalyptus",
      ingredients: ["fat", "eucalyptus flavor"],
      weight: 3.5
    }
  ]

  return (
    <div className="flex gap-8">
      {
        products.map(product => (
          <Product key={product.id}>
            <Product.Image src={product.image} />
            <Product.Name>{product.name}</Product.Name>
            <Product.Line>{product.description}</Product.Line>
            <Product.Line>ingredients</Product.Line>
            <Product.Line>{`net wt: ${product.weight} oz`}</Product.Line>
          </Product>
        ))
      }
    </div>
  )
}