import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Landing Page</h1>
      <p>Click on the links below to navigate:</p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" }}>
            <Link href="/about-us">
              About Us
            </Link>
          </li>
          <li style={{ margin: "10px 0" }}>
            <Link href="/faq">
              FAQ
            </Link>
          </li>
          <li style={{ margin: "10px 0" }}>
            <Link href="/product">
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}