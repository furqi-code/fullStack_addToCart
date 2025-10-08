CREATE DATABASE addToCart;
USE addToCart;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  MRP INT,
  discount INT,
  stock INT,
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



SELECT * FROM products;

DROP DATABASE addToCart;