import express from "express";
import { ProductDAODatabase } from "./infra/repository/ProductDAO";
const app = express();
app.use(express.json());

app.get("/", async function (req, res) {
	try {
		const productDAO = new ProductDAODatabase();
		const output = await productDAO.listProduct()
		res.json(output);
	} catch (error: any) {
		res.status(422).json({
			message: error.message
		});
	}
});
app.listen(3000);