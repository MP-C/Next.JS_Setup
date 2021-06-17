//which includes navigation menu for the project and also include bootstrap CDN for better design
//styles are available only in the component we are doing it

//components/navbar.js

import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
      <style jsx>{`
                ul {
                    background: #333;
                    color: #fff;
                    list-style: none;
                    display: flex;
                }
ul li {
                    font-size: 22px;
                    margin-right: 50px;
                }
ul li a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
    </div>
  );
}
export default Navbar;