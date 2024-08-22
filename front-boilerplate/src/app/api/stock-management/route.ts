export async function GET() {
  const rows = [
    {
      id: 1,
      product: "Produto 1",
      supplier: "Fornecedor 1",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 2,
      product: "Produto 2",
      supplier: "Fornecedor 2",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 3,
      product: "Produto 3",
      supplier: "Fornecedor 3",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 4,
      product: "Produto 4",
      supplier: "Fornecedor 4",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 5,
      product: "Produto 5",
      supplier: "Fornecedor 5",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 6,
      product: "Produto 6",
      supplier: "Fornecedor 6",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 7,
      product: "Produto 7",
      supplier: "Fornecedor 7",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 8,
      product: "Produto 8",
      supplier: "Fornecedor 8",
      quantity: 1,
      price: 1.99,
    },
    {
      id: 9,
      product: "Produto 9",
      supplier: "Fornecedor 9",
      quantity: 1,
      price: 1.99,
    },
  ];
  return Response.json({ data: rows });
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   // Lógica para tratar POST
//   const usuario = req.body; // Certifique-se de tratar e validar os dados de entrada
//   return Response.json({ mensagem: "Usuário criado", usuario });
// }