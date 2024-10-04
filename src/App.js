import { Image } from "react-bootstrap";
import imgBg from "../src/images/bg-02.jpg";
import "./App.css";
import imgPerson from '../src/images/person-02.jpg'
function App() {
  const data = [
    {
      title: "Tiktok",
      url: "www.tiktok.com",
    },
    {
      title: "Facebook",
      url: "www.facebook.com",
    },
    {
      title: "Instagrams",
      url: "www.instagrams.com",
    },
    {
      title: "Line OA",
      url: "www.line.com",
    },
  ];
  return (
 <div
 style={{
  backgroundImage: `url(${imgBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}}
 >
  <Image
  src={imgPerson}
  className="img-personal mb-2"/>
  <h2>Marien Lasonce</h2>
  {data.map((d, i)=> (
    <a href={d.url}  className="text-link">
      <div className="social-box">{d.title}</div>
    </a>
  ))}

 </div>
  );
}

export default App;
