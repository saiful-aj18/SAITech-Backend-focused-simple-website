import express from "express";
import path from "node:path";
import { dirname } from 'node:path';
import { title } from "node:process";
const app = express();

app.set("view engine", "ejs");
app.set('views', path.join(import.meta.dirname, "views"))
app.use(express.urlencoded({ extended: true }));
const products = [
    { id: 1, name: 'Wireless Headphones', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', description: 'Experience pure sound with these high-quality noise-canceling headphones.' },
    { id: 2, name: 'Minimalist Smartwatch', price: 199.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', description: 'Sleek design combined with ultimate health and fitness tracking features.' },
    { id: 3, name: 'Mechanical Keyboard', price: 129.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80', description: 'Tactile switches and fully customizable RGB lighting for the ultimate setup.' },
    { id: 4, name: 'Ergonomic Office Chair', price: 349.99, image: 'https://99grid.com/cdn/shop/files/Fern-1-whitesweep-haworth_1800x1800.jpg?v=1722596880', description: 'Designed for maximum comfort and posture support during long working hours.' },
    { id: 5, name: '4K Ultra HD Monitor', price: 450.00, image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=80', description: 'Crystal clear display for precise creative work and immersive gaming.' },
    { id: 6, name: 'Portable Power Bank', price: 49.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80', description: 'High-capacity fast charging battery pack to ensure you are never out of power.' }
];

app.get("/", (req, res) => {
    res.render("index", { title: "Home | TechStore" });
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us | SAITech",
    content:
      "SAITech is a forward-thinking technology company dedicated to creating innovative digital solutions. We combine modern software development, cutting-edge technology, and customer-focused services to help businesses and individuals thrive in a rapidly evolving digital world."
  });
});

app.get("/shop", (req, res) => {
    res.render("shop", { title: "Shop | TechStore", products });
})

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact | TechStore" });
})

app.post("/contact", (req, res) => {

    const { name , email , message } = req.body;

    console.log(`\n===================================`);
    console.log(`=== New Contact Form Submission ===`);
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Message: ${message}`);
    console.log(`===================================\n`);

    res.render("contact", { title: "Contact | TechStore", success: true });
})


app.listen(3000, () => {
    console.log("listening on port 3000");
});