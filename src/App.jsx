import "./App.css";
import "./index.css";
import fishingRodIcon1 from "./assets/fishing-rod.png";
import Boot from "./assets/boot.png";
import Minnows from "./assets/minnows.png";
import Goldfish from "./assets/goldfish.png";
import Clownfish from "./assets/clownfish.png";
import Tuna from "./assets/tuna.png";
import Pufferfish from "./assets/pufferfish.png";
import Koifish from "./assets/koifish.png";
import Carp from "./assets/carp.png";
import Bass from "./assets/bass.png";
import Shark from "./assets/shark.png";
import React, { useState } from "react";
import Coin from "./assets/coin.png";
import IronRod from "./assets/IronRod.png";
import SteelRod from "./assets/SteelRod.png";
import Beach from "./assets/Beach.png";
import LakeIco from "./assets/lake-ico.png";
import Atlantis from "./assets/Atlantis.png";

function App() {
  let [currentRod, setRod] = useState("wood");
  let galleryHidden = true;
  let currentLength = 0;
  let shopHidden = true;
  let [coins, setCount] = useState(0);
  let fishes = {
    Boot: {
      hasCaught: false,
      coinValue: 0,
      recordLength: 0,
    },
    Minnows: {
      hasCaught: false,
      coinValue: 1,
      recordLength: 0,
    },
    Goldfish: {
      hasCaught: false,
      coinValue: 2,
      recordLength: 0,
    },
    Clownfish: {
      hasCaught: false,
      coinValue: 3,
      recordLength: 0,
    },
    Tuna: {
      hasCaught: false,
      coinValue: 4,
      recordLength: 0,
    },
    Pufferfish: {
      hasCaught: false,
      coinValue: 5,
      recordLength: 0,
    },
    Koi: {
      hasCaught: false,
      coinValue: 6,
      recordLength: 0,
    },
    Carp: {
      hasCaught: false,
      coinValue: 7,
      recordLength: 0,
    },
    Bass: {
      hasCaught: false,
      coinValue: 8,
      recordLength: 0,
    },
    Shark: {
      hasCaught: false,
      coinValue: 9,
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
      case 4:
        // TUNA
        window.alert("You caught a Tuna... Now you just need a guitar!");
        populateData("Tuna");
        break;
      case 5:
        // PUFFERFISH
        window.alert(
          "You caught a Pufferfish... I heard they are getting expensive... must be inflation!"
        );
        populateData("Pufferfish");
        break;
      case 6:
        // KOI
        window.alert(
          "You caught a Koi... Make sure its the real thing, and not a deKoi!"
        );
        populateData("Koi");
        break;
      case 7:
        // CARP
        window.alert(
          "You caught a Carp... don't hurt your wrists pulling it in, wouldn't want CARPAL tunnel!"
        );
        populateData("Carp");
        break;
      case 8:
        // BASS
        window.alert("You caught a Bass... don't drop it!");
        populateData("Bass");
        break;
      case 9:
        // SHARK
        window.alert("You caught a Shark... We're gonna need a bigger boat...");
        populateData("Shark");
        break;
    }
  };

  const toggleGallery = (e) => {
    e.preventDefault();
    galleryHidden = !galleryHidden;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
    if (shopHidden == false) {
      shopHidden = true;
      document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
    }
  };

  const closeGallery = (e) => {
    galleryHidden = true;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
  };

  const closeShop = (e) => {
    shopHidden = true;
    document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
  };

  const toggleShop = (e) => {
    e.preventDefault();
    shopHidden = !shopHidden;
    if (galleryHidden == false) {
      galleryHidden = true;
      document.getElementsByClassName("gallery-modal")[0].hidden =
        galleryHidden;
    }
    document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
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
        calculateCoins("Minnows", currentLength);
        break;
      case "Goldfish":
        currentLength = Math.floor(Math.random() * (14 - 1) + 1);
        document.getElementsByClassName("fish-ico")[0].src = Goldfish;
        calculateCoins("Goldfish", currentLength);
        break;
      case "Clownfish":
        currentLength = Math.floor(Math.random() * (10 - 6) + 6);
        document.getElementsByClassName("fish-ico")[0].src = Clownfish;
        calculateCoins("Clownfish", currentLength);
        break;
      case "Tuna":
        currentLength = Math.floor(Math.random() * (149 - 130) + 130);
        document.getElementsByClassName("fish-ico")[0].src = Tuna;
        calculateCoins("Tuna", currentLength);
        break;
      case "Pufferfish":
        currentLength = Math.floor(Math.random() * (60 - 2) + 2);
        document.getElementsByClassName("fish-ico")[0].src = Pufferfish;
        calculateCoins("Pufferfish", currentLength);
        break;
      case "Koi":
        currentLength = Math.floor(Math.random() * (38 - 30) + 30);
        document.getElementsByClassName("fish-ico")[0].src = Koifish;
        calculateCoins("Koi", currentLength);
        break;
      case "Carp":
        currentLength = Math.floor(Math.random() * (63 - 30) + 30);
        document.getElementsByClassName("fish-ico")[0].src = Carp;
        calculateCoins("Carp", currentLength);
        break;
      case "Bass":
        currentLength = Math.floor(Math.random() * (96 - 40) + 40);
        document.getElementsByClassName("fish-ico")[0].src = Bass;
        calculateCoins("Bass", currentLength);
        break;
      case "Shark":
        currentLength = Math.floor(Math.random() * (99 - 17) + 17);
        document.getElementsByClassName("fish-ico")[0].src = Shark;
        calculateCoins("Shark", currentLength);
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

  const calculateCoins = (speciesOfFish, lengthOfFish) => {
    setCount((coins += fishes[speciesOfFish].coinValue * lengthOfFish));
  };

  const purchaseRod = (rodType, rodCost) => {
    switch (rodType) {
      case "iron":
        if (
          coins >= rodCost &&
          currentRod !== "iron" &&
          currentRod !== "steel"
        ) {
          setRod("iron");
          setCount((coins -= rodCost));
          window.alert("You have purchased the Iron Rod Cost: -500 Coins");
          document.getElementsByClassName("fishing-rod-text")[0].innerHTML =
            "Iron Rod";
          document.getElementsByClassName("fishing-rod")[0].src =
            "./src/assets/ironRod.png";
        }
        break;
      case "steel":
        if (coins >= rodCost && currentRod !== "steel") {
          setRod("steel");
          setCount((coins -= rodCost));
          window.alert("You have purchased the Steel Rod Cost: -1000 Coins");
          document.getElementsByClassName("fishing-rod-text")[0].innerHTML =
            "Steel Rod";
          document.getElementsByClassName("fishing-rod")[0].src =
            "./src/assets/steelRod.png";
        }
        break;
    }
  };

  /** TODO: \
   * Add message explaining money calculation []
   * make rods in shop purchasable, [X]
   * make locales purchasable, and also add sidebar to equip different locales []
   * add X's out on items already purchased, and prevent user from purchasing twice. []
   * make record length functional in the gallery tab []
   * replace window.alert() with text box []
   *
   * potential features:
   * make gallery icons clickable and show real picture of fish and description
   * user accounts that store your data
   * aquarium that shows fish you have caught
   * skill based slider QTE on fish action.
   *
   */

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
                Boot <br />
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
            <div className="gallery-div">
              <p>
                 Tuna<br />
              </p>
              <img className="Tuna Gallery" src={Tuna}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                 Pufferfish<br />
              </p>
              <img className="Pufferfish Gallery" src={Pufferfish}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                 Koifish<br />
              </p>
              <img className="Koi Gallery" src={Koifish}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                 Carp<br />
              </p>
              <img className="Carp Gallery" src={Carp}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                 Bass<br />
              </p>
              <img className="Bass Gallery" src={Bass}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                 Shark<br />
              </p>
              <img className="Shark Gallery" src={Shark}></img>{" "}
            </div>
          </div>
          <div className="gallery-button-flex">
            <div onClick={closeGallery} className="button centered">
              Close
            </div>
          </div>
        </div>
        <div hidden={true} className="shop-modal">
          <h1>Shop</h1>
          <div className="current-coins">
            <img className="coin-ico" src={Coin} />
            Current Coins: {coins}
          </div>
          <h2>Fishing Rods</h2>
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Iron Rod <br /> Cost: 500 Coins
              </p>
              <img
                onClick={() => purchaseRod("iron", 500)}
                className="Iron Rod hasCaughtBox"
                src={IronRod}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Steel Rod <br /> Cost: 1000 Coins
              </p>
              <img
                onClick={() => purchaseRod("steel", 1000)}
                className="Steel Rod hasCaughtBox"
                src={SteelRod}
              ></img>{" "}
            </div>
          </div>
          <h2>Locale</h2>
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Beach <br /> Cost:
              </p>
              <img className="Iron Rod hasCaughtBox" src={Beach}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Lake <br /> Cost:
              </p>
              <img className="Iron Rod hasCaughtBox" src={LakeIco}></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Atlantis <br /> Cost:
              </p>
              <img className="Iron Rod hasCaughtBox" src={Atlantis}></img>{" "}
            </div>
          </div>
          <div className="gallery-button-flex">
            <div onClick={closeShop} className="button centered">
              Close
            </div>
          </div>
        </div>
        <div className="fishing-rod-box">
          <h1 className="fishing-rod-text">Wooden Pole Rod</h1>
          <img className="fishing-rod" src={fishingRodIcon1}></img>
        </div>
        <div className="current-coins">
          <img className="coin-ico" src={Coin} />
          Current Coins: {coins}
        </div>
        <div className="button-flex">
          <div onClick={fish} className="button">
            FISH
          </div>
          <div onClick={toggleShop} className="button">
            SHOP
          </div>
          <div onClick={toggleGallery} className="button">
            GALLERY
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
