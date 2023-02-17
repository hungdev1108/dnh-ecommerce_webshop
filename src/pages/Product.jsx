import React, { useEffect } from "react";

import Helmet from "./../components/Helmet";

import productsData from "./../assets/fake-data/products";
import Grid from "./../components/Grid";
import ProductCard from "./../components/ProductCard";
import Section, { SectionBody, SectionTitle } from "./../components/Section";

import ProductView from "../components/ProductView";

const Product = (props) => {
  const product = productsData.getProductBySlug(props.match.params.slug);

  const relatedProduct = productsData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relatedProduct.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Section>
    </Helmet>
  );
};

export default Product;
