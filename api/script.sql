CREATE DATABASE addToCart;
USE addToCart;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  MRP INT,
  discount INT,   /* random number */
  stock INT,      /* random number */
  quantity INT,
  img TEXT
);

INSERT INTO products (name, description, category, MRP, discount, stock, quantity, img) VALUES
('Watch', 'OLEVS Mens Chronograph Watch Gold Silver Stainless Steel Chain Quartz Wrist Watches Business Dress Waterproof Luminous Date Watch.', 'General', 3900, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://rukminim2.flixcart.com/image/480/640/xif0q/watch/g/w/j/analog-stainless-steel-chain-wrist-watches-for-boy-and-men-watch-original-imagvhn9zwwfzzgn.jpeg?q=90'),
('Desk Lamp', 'WEIRD WOLF 3 Colour Mode LED Study/Table/Desk Lamp with Pen Holder, 6 Month Warranty(Plastic, White, Pack of 1)', 'General', 22, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg'),
('Sunglasses', 'ELEGANTE Sunglasses for Women Fashion Ladies Shades Wrap Frame Trendy Stylish Sun Glasses UV Protection.', 'General', 1299, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/3/b3a68c5NHY_TEDSM00001019_1.jpg?rnd=20200526195200&tr=w-512'),
('Water Bottle', 'CELLO H2O Glass Fridge Water Bottle with Plastic Cap Set of 3, 920ml, Blue | Leakproof & Durable | Wide Mouth, Easy To Clean | Multi Set Glass for Kitchen, Home, Office, Gym, Travel', 'General', 12, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://sc04.alicdn.com/kf/H6a6a2ef146a24a7aaa34e2c698a7ed23m.jpg'),
('Hiking Bag', 'Impulse 5 Compartment Rucksack Bag 60 Litres Travel Bag For Travel Backpack For Hiking Trekking Tourist Bag For Men Camping Keep Discovering Light Blue With 1 Year Warranty', 'General', 1300, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://images.jdmagicbox.com/quickquotes/images_main/hiker-s-way-80-ltrs-farpoint-red-black-internal-frame-rucksack-bags-backpacks-travel-bag-hiking-bag-camping-bag-trekking-bags-for-men-and-women-with-waterproof-compartment-and-rain-cover-hw-8001-red-179318202-qo0ax.jpg'),
('Audi r8', 'Audi R8 is a 2 seater Coupe with the last recorded MRP of Rs. 2.30 - 2.72 Crore. It is available in 2 variants, 5204 cc engine option and 2 transmission options : Manual and Automatic. The R8 is available in 10 colours. Audi R8 mileage is 6.71 kmpl.', 'General', 79245, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://cdn.motor1.com/images/mgl/vxoJ0Y/s3/2023-audi-r8-v10-gt-rwd.jpg'),
('Plant stand', 'ORILEY 4 Pcs Round Plant Stand Galvanised Metal Flower Pot Holder Rust Resistant Gamla Support Corner Rack Outdoor Display Shelf for Home Garden Balcony Decoration (Black)', 'General', 399, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://m.media-amazon.com/images/I/61t9NUZRGRL._SX679_.jpg'),
('Football', 'Nivia Storm Football, Size 5, Rubberized with perfect grip and durability, ideal for training and match.', 'Sports', 18, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://www.englishclub.com/images/vocabulary/sports/fifa-brazil-2014-ball.jpg'),
('Badminton Racket', 'Yonex Nanoray Light 18i Graphite Badminton Racquet, lightweight, high-tension, suited for advanced players.', 'Sports', 29, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7f80umB2vgtlHUk-EVRdBHIMheNnkiRcLQ&s'),
('Cricket Bat', 'SG RSD Spark English Willow Cricket Bat, full size for adults, high-quality wood for powerful shots.', 'Sports', 65, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://www.prodirectsport.com/-/media/article-content/cricket/buying-advice/cricket-bat-size-guide/article-bb-cricket-product-advice-articles-1.jpg'),
('Table Tennis Set', 'GKI Fasto Table Tennis Bat Set with two bats, three balls, convenient carrying cover.', 'Sports', 15, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFJ9WZJQS2IPT7IEW6lNrle1p1UQaTwfOdw&s'),
('Skipping Rope', 'Vector X Skipping Rope for Men and Women, adjustable length, foam handles for better grip.', 'Sports', 6, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://contents.mediadecathlon.com/p1899141/682c88daaeb6785c264ccc027406ea84/p1899141.jpg'),
('Basketball', 'Cosco Dribble Basketball Size 6, Synthetic rubber, strong grip, suitable for indoor and outdoor play.', 'Sports', 22, ROUND(RAND() * 77), ROUND(RAND() * 14), 1, 'https://media.istockphoto.com/id/165960691/vector/basketball-arts.jpg?s=612x612&w=0&k=20&c=iTpussHsVcCBTYBNVUkHq6KgUOczhZhgKPdOy1cr3wA='),



SELECT * FROM products;

DROP DATABASE addToCart;