// src/components/ProductCard.js
const ProductCard = ({ products }) => {
    return (
        <>
        {products?.map((product, index) => (
            <div key={index} className="bg-skinn shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="mt-2">
                <span className="font-bold">Price: </span>${product.price}
              </p>
              <p>
                <span className="font-bold">Description: </span>{product.description}
              </p>
              <p>
                <span className="font-bold">Quantity: </span>{product.quantity}
              </p>
              {/* <p>
                <span className="font-bold">Category ID: </span>{product.category}
              </p>
              <p className="font-bold">
                <span className="font-bold">Created At: </span>{new Date(product.createdAt).toLocaleDateString()}
              </p>
              <p className="font-bold">
                <span className="font-bold">Updated At: </span>{new Date(product.updatedAt).toLocaleDateString()}
              </p> */}
            </div>
          </div>
          ))}
      
      </>
    );
  };
  
  export default ProductCard;
  