import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDese,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  return (
        <ProductsContainer id='indian'>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDese>{product.desc}</ProductDese>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>

  );
};

export default Products;
