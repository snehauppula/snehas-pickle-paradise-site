
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'specials', name: 'Specials' },
    { id: 'biryanis', name: 'Biryanis' },
    { id: 'curries', name: 'Curries' },
    { id: 'non-veg', name: 'Non Veg' },
    { id: 'veg', name: 'Veg' },
    { id: 'pickles', name: 'Pickles' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Mango Pickle",
      description: "Traditional raw mango pickle with aromatic spices. A perfect blend of tangy and spicy flavors.",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      category: "pickles"
    },
    {
      id: 2,
      name: "Mixed Vegetable Pickle",
      description: "A delightful mix of seasonal vegetables pickled with our special spice blend.",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      category: "pickles"
    },
    {
      id: 3,
      name: "Lime Pickle",
      description: "Zesty lime pickle that adds a burst of flavor to any meal. Made with fresh limes and traditional spices.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      category: "pickles"
    },
    {
      id: 4,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice layered with tender chicken pieces and traditional spices.",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=400&q=80",
      category: "biryanis"
    },
    {
      id: 5,
      name: "Mutton Biryani",
      description: "Rich and flavorful mutton biryani with perfectly cooked rice and succulent meat.",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=400&q=80",
      category: "biryanis"
    },
    {
      id: 6,
      name: "Veg Biryani",
      description: "Fragrant vegetable biryani with seasonal vegetables and aromatic spices.",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=400&q=80",
      category: "biryanis"
    },
    {
      id: 7,
      name: "Butter Chicken",
      description: "Creamy and rich butter chicken curry made with tender chicken pieces.",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80",
      category: "non-veg"
    },
    {
      id: 8,
      name: "Paneer Butter Masala",
      description: "Creamy tomato-based curry with soft paneer cubes in rich gravy.",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
      category: "veg"
    },
    {
      id: 9,
      name: "Dal Tadka",
      description: "Traditional yellow lentil curry tempered with aromatic spices.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80",
      category: "veg"
    },
    {
      id: 10,
      name: "Fish Curry",
      description: "Authentic fish curry with coconut milk and traditional coastal spices.",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=400&q=80",
      category: "non-veg"
    },
    {
      id: 11,
      name: "Special Thali",
      description: "Complete meal with rice, dal, vegetables, curry, pickle, and dessert.",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80",
      category: "specials"
    },
    {
      id: 12,
      name: "Family Combo",
      description: "Perfect for 4 people - includes biryani, curry, dal, and pickles.",
      price: "₹1200",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80",
      category: "specials"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleOrderNow = (productName: string) => {
    const message = `Hi, I'm interested in ordering ${productName} from Sneha's Pickles!`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Delicious
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
              Food Collection
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic homemade food, from traditional pickles to aromatic biryanis and flavorful curries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {product.category === 'non-veg' ? 'Non Veg' : product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleOrderNow(product.name)}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
                  >
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
