import React from "react";
import Layout from "../../components/layout";
import Cart from "../../components/cart";

export default function ViewCartPage() {
  return (
    <Layout title="Items in my cart">
      <Cart stripeToken="pk_test_51Grs4yDf4kpKOAVlQDODYdHEKNj3aPMUYBKQDWv4Ve6FNouycrdyYLO7DLU7mXSbRnHtCkCnWucrqV4qTgjQ1tfJ00ucvANJUu" />
    </Layout>
  );
}
