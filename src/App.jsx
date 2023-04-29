import "./App.css";
import "./index.css";
import fishingRodIcon1 from "./assets/fishing-rod.png";
import Boot from "./assets/boot.png";
import Minnows from "./assets/minnows.png";
import Goldfish from "./assets/goldfish.png";
import Clownfish from "./assets/clownfish.png";

function App() {
  let currentRod = "wood";
  let galleryHidden = true;
  let fishes = {
    Boot: {
      hasCaught: false,
      recordLength: 0,
    },
    Minnows: {
      hasCaught: false,
      recordLength: 0,
    },
    Goldfish: {
      hasCaught: false,
      recordLength: 0,
    },
    Clownfish: {
      hasCaught: false,
      recordLength: 0,
    },
  };
  const fish = (e) => {
    e.preventDefault();
    let RNG = fishRNG(currentRod);
    let currentLength = 0;
    switch (RNG) {
      case 0:
        // BOOT
        window.alert(
          "You caught a boot... Well, at least you caught something..."
        );
        fishes.Boot.hasCaught = true;
        currentLength = Math.floor(Math.random() * (365 - 182) + 182);
        if (fishes.Boot.recordLength < currentLength) {
          fishes.Boot.recordLength = currentLength;
        }
        document.getElementsByClassName("length-text")[0].innerHTML =
          "Length " + currentLength + "CM";
        document.getElementsByClassName("record-text")[0].innerHTML =
          "Current Record: " + fishes.Boot.recordLength + "CM";
        document.getElementsByClassName("fish-text")[0].innerHTML = "Boot";
        document.getElementsByClassName("fish-ico")[0].src = Boot;
        break;
      case 1:
        // MINNOWS
        window.alert("You caught some minnows... Just small fry...");
        fishes.Minnows.hasCaught = true;
        currentLength = Math.floor(Math.random() * (5 - 1) + 1);
        if (fishes.Minnows.recordLength < currentLength) {
          fishes.Minnows.recordLength = currentLength;
        }
        document.getElementsByClassName("record-text")[0].innerHTML =
          "Current Record: " + fishes.Minnows.recordLength + "CM";
        document.getElementsByClassName("length-text")[0].innerHTML =
          "Length: " + currentLength + "CM";
        document.getElementsByClassName("fish-text")[0].innerHTML = "Minnows";
        document.getElementsByClassName("fish-ico")[0].src = Minnows;
        break;
      case 2:
        // GOLDFISH
        window.alert(
          "You caught a goldfish... Maybe you can keep it as a pet..."
        );
        fishes.Goldfish.hasCaught = true;
        currentLength = Math.floor(Math.random() * (14 - 1) + 1);
        if (fishes.Goldfish.recordLength < currentLength) {
          fishes.Goldfish.recordLength = currentLength;
        }
        document.getElementsByClassName("length-text")[0].innerHTML =
          "Length: " + currentLength + "CM";
        document.getElementsByClassName("record-text")[0].innerHTML =
          "Current Record: " + fishes.Goldfish.recordLength + "CM";
        document.getElementsByClassName("fish-text")[0].innerHTML = "Goldfish";
        document.getElementsByClassName("fish-ico")[0].src = Goldfish;
        break;
      case 3:
        // CLOWNFISH
        window.alert("You caught a clownfish... What's so funny?");
        document.getElementsByClassName("fish-text")[0].innerHTML = "Clownfish";
        fishes.Clownfish.hasCaught = true;
        currentLength = Math.floor(Math.random() * (10 - 6) + 6);
        if (fishes.Clownfish.recordLength < currentLength) {
          fishes.Clownfish.recordLength = currentLength;
        }
        document.getElementsByClassName("length-text")[0].innerHTML =
          "Length: " + currentLength + "CM";
        document.getElementsByClassName("record-text")[0].innerHTML =
          "Current Record: " + fishes.Clownfish.recordLength + "CM";
        console.log(document.getElementsByClassName("fish-ico")[0]);
        document.getElementsByClassName("fish-ico")[0].src = Clownfish;
        break;
    }
    console.log(fishes);
  };

  const toggleGallery = (e) => {
    e.preventDefault;
    galleryHidden = !galleryHidden;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
  };

  const fishRNG = (rodType) => {
    switch (rodType) {
      case "wood":
        return Math.floor(Math.random() * 4);
      case "iron":
        return Math.floor(Math.random() * 7);
      case "steel":
        return Math.floor(Math.random() * 10);
    }
  };

  return (
    <>
      <h1>Fishing Game</h1>
      <div className="content-box">
        <div className="fish-flex">
          <div className="fish-box">
            <p className="fish-text"></p>
            <p className="record-text"></p>
            <p className="length-text"></p>
            <img className="fish-ico"></img>
          </div>
        </div>
        <div hidden={true} className="gallery-modal">
          <h1>Gallery</h1>
          <img
            className={
              fishes.Boot.hasCaught ? "hasCaughtBox" : "hasNotCaughtBox"
            }
            src={Boot}
          ></img>{" "}
          <img
            className={
              fishes.Minnows.hasCaught ? "hasCaughtBox" : "hasNotCaughtBox"
            }
            src={Minnows}
          ></img>{" "}
          <img
            className={
              fishes.Goldfish.hasCaught ? "hasCaughtBox" : "hasNotCaughtBox"
            }
            src={Goldfish}
          ></img>{" "}
          <img
            className={
              fishes.Clownfish.hasCaught ? "hasCaughtBox" : "hasNotCaughtBox"
            }
            src={Clownfish}
          ></img>
          <div onClick={toggleGallery} className="button centered">
            Close
          </div>
        </div>
        <div className="fishing-rod-box">
          <h1 className="fishing-rod-text">Wooden Pole Rod</h1>
          <img className="fishing-rod" src={fishingRodIcon1}></img>
        </div>
        <div className="button-flex">
          <div onClick={fish} className="button">
            FISH
          </div>
          <div className="button">SHOP</div>
          <div onClick={toggleGallery} className="button">
            GALLERY
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
