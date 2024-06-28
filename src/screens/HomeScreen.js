import React, { useEffect } from "react";
import "./HomeScreen.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

// Components
import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="homescreen__content">
        <div className="homescreen__text">
          <h2 className="homescreen__title">Aprenda a programar na prática!</h2>
          <p className="hero__subtitle">
            Cursos de programação desde o nível básico ao avançado com projetos
            que serão desenvolvidos para você praticar e alcançar seu objetivo
            de carreira.
          </p>
        </div>
        <img
          className="homescreen__image"
          src="https://static.wixstatic.com/media/924126_6731bf9826694b43b06b3de61bce1f25~mv2.png/v1/crop/x_446,y_0,w_388,h_384/fill/w_306,h_356,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/boneco_codigocerto.png"
          alt="Logo Codigo Certo"
        />
      </div>

      <div className="homescreen__products">
        {loading ? (
          <h2>Carregando...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
