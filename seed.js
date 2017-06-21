const dotenv = require('dotenv');

dotenv.config({
  silent: true
});

const {
  PROD_URL,
  DEV_URL,
} = process.env;

var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called fcteste
mongoose.connect(DEV_URL);
// Create a schema
var ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});
// Create a model based on the schema
var Product = mongoose.model('Product', ProductSchema);

const logDoc = (err, todo) => {
  if (err) console.log(err);
  else console.log('Product', todo.name,'created.');
}

console.log('\n\Seeding test db');

(async() => {
  await Product.create({
    name: "Martelo",
    price: 10,
    category: "Ferramentas"
  }, logDoc);

  await Product.create({
    name: "Maçarico",
    price: 375,
    category: "Ferramentas"
  }, logDoc);

  await Product.create({
    name: "Chave de Fenda",
    price: 12,
    category: "Ferramentas"
  }, logDoc);

  await Product.create({
    name: "Celular",
    price: 999.99,
    category: "Eletrônicos"
  }, logDoc);

  await Product.create({
    name: "Notebook",
    price: 2000,
    category: "Eletrônicos"
  }, logDoc);

  await Product.create({
    name: "TV",
    price: 3500,
    category: "Eletrônicos"
  }, logDoc);

  await Product.create({
    name: "Batedeira",
    price: 190,
    category: "Utensílios"
  }, logDoc);

  await Product.create({
    name: "Liquidificador",
    price: 99,
    category: "Utensílios"
  }, logDoc);

  await Product.create({
    name: "Fogão",
    price: 500,
    category: "Utensílios"
  }, logDoc);

  process.exit()
})()
