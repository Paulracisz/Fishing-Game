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
  let currentLength = 0;
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
    switch (RNG) {
      case 0:
        // BOOT
        window.alert(
          "You caught a boot... Well, at least you caught something..."
        );
        populateData("Boot");
        break;
      case 1:
        // MINNOWS
        window.alert("You caught some minnows... Just small fry...");
        populateData("Minnows");
        break;
      case 2:
        // GOLDFISH
        window.alert(
          "You caught a goldfish... Maybe you can keep it as a pet..."
        );
        populateData("Goldfish");
        break;
      case 3:
        // CLOWNFISH
        window.alert("You caught a clownfish... What's so funny?");
        populateData("Clownfish");
        break;
    }
  };

  const toggleGallery = (e) => {
    e.preventDefault;
    galleryHidden = !galleryHidden;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
  };

  const populateData = (name) => {
    fishes[name].hasCaught = true;
    // get length, will be based on the fish
    switch (name) {
      case "Boot":
        currentLength = Math.floor(Math.random() * (30 - 15) + 15);
        document.getElementsByClassName("fish-ico")[0].src = Boot;
        break;
      case "Minnows":
        currentLength = Math.floor(Math.random() * (5 - 1) + 1);
        document.getElementsByClassName("fish-ico")[0].src = Minnows;
        break;
      case "Goldfish":
        currentLength = Math.floor(Math.random() * (14 - 1) + 1);
        document.getElementsByClassName("fish-ico")[0].src = Goldfish;
        break;
      case "Clownfish":
        currentLength = Math.floor(Math.random() * (10 - 6) + 6);
        document.getElementsByClassName("fish-ico")[0].src = Clownfish;
        break;
    }

    // Calculate if its a record length, and if it is, update the obj for the gallery
    if (fishes[name].recordLength < currentLength) {
      fishes[name].recordLength = currentLength;
    }

    // Populating the HTML
    document.getElementsByClassName("length-text")[0].innerHTML =
      "Length: " + currentLength + "CM";
    document.getElementsByClassName("record-text")[0].innerHTML =
      "Current Record: " + fishes[name].recordLength + "CM";
    document.getElementsByClassName("fish-text")[0].innerHTML = `${name}`;
    document.getElementsByClassName(name)[0].classList.add("hasCaughtBox");
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
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Boot <br /> Record Length: {fishes["Boot"].recordLength}
              </p>
              <img className="Boot Gallery" src={Boot}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Minnows <br />
              </p>
              <img className="Minnows Gallery" src={Minnows}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>Goldfish</p>
              <img className="Goldfish Gallery" src={Goldfish}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>Clownfish</p>
              <img className="Clownfish Gallery" src={Clownfish}></img>
            </div>
          </div>
          <div className="gallery-button-flex">
            <div onClick={toggleGallery} className="button centered">
              Close
            </div>
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
