
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Mango Pickle",
      description: "Traditional raw mango pickle with aromatic spices. A perfect blend of tangy and spicy flavors.",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Mixed Vegetable Pickle",
      description: "A delightful mix of seasonal vegetables pickled with our special spice blend.",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Lime Pickle",
      description: "Zesty lime pickle that adds a burst of flavor to any meal. Made with fresh limes and traditional spices.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Garlic Pickle",
      description: "Robust garlic pickle with a perfect balance of heat and flavor. A must-try for garlic lovers.",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Amla Pickle",
      description: "Healthy and tangy amla pickle packed with vitamin C and traditional spices.",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Chili Pickle",
      description: "Fiery green chili pickle for those who love extra heat. Made with fresh chilies and special masala.",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    }
  ];

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
              Pickle Collection
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic homemade pickles, each crafted with care using traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
