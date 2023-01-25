import poster1 from "./images/29.jpg";
import poster2 from "./images/28.jpg";
import poster3 from "./images/26.jpg";
import poster4 from "./images/27.jpg";
import Card from "./components/Card";
import "./App.css";

function App() {
  const data = [
    {
      layoutId: 5010,
      image: poster1,
      title: "95% Match",
      pragraph: "Action • Mystery",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    },
    {
      layoutId: 5020,
      image: poster2,
      title: "92% Match",
      pragraph: "Adventure • Mystery • Drama",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      layoutId: 5030,
      image: poster3,
      title: "98% Match",
      pragraph: "Action • Comedy • Animation",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      layoutId: 5040,
      image: poster4,
      title: "90% Match",
      pragraph: "Adventure • Drama",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((card) => (
          <Card
            key={card.layoutId}
            layoutId={card.layoutId}
            image={card.image}
            title={card.title}
            pragraph={card.pragraph}
            video={card.videoUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App;
