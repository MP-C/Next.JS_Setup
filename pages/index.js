/*
//pages/index.js
const Index = () => {
  return (
    <div>
      <h1>Welcome to Next Application</h1>
    </div>
  );
}
export default Index;

*/
//pages/index.js => is also a router= localhost:3000/about
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
const Index = ({ drinks }) => {
  //console.log(drinks)
  return (
    <Layout>
      <div>
        <h1>Welcome to Next Application</h1>
        <h3>Drinks List</h3>
        {drinks === undefined ? null : drinks.map((item, i) => {
          return (
            <li key={i}>{item.strDrink}</li>
          )
        })}
      </div>
    </Layout>
  );
}
Index.getInitialProps = async function () {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
  const result = await response.json();
  //console.log(result);
  return { drinks: result.drinks }
}
export default Index;