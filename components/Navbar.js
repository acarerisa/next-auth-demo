import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <div className="banner">
        <Image src="/banner.png" width={966} height={120} />
      </div>
      <nav>
      
        <h1 className="logo">Web Dev Senior</h1>
        
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user && (<li className="dropdown">
            <button className="dropbtn">Learn</button>
            <div className="dropdown-content">
              <Link href="/learn/javascript"><a>Javascript</a></Link>
              <Link href='/learn/react' ><a>React</a></Link>
              <Link href="/learn/angular" ><a>Angular</a></Link>
              <Link href="/learn/nextjs" ><a>NextJs</a></Link>
              
              
            </div>
          </li>)}
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
          {!user && (
            <li onClick={login} className="btn">
              Login/Sign Up
            </li>
          )}
          {user && <li style={{ color: "red" }}>{user.email}</li>}
          {user && (
            <li onClick={logout} className="btn">
              Logout
            </li>
          )}
        </ul>
      </nav>
      
    </div>
  );
}
