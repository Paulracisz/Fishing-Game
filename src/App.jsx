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
import IronRod from "./assets/ironRod.png";
import SteelRod from "./assets/SteelRod.png";
import Beach from "./assets/Beach.png";
import LakeIco from "./assets/lake-ico.png";
import Atlantis from "./assets/Atlantis.png";
import DefaultIco from "./assets/DefaultIco.png";

/** TODO: \
 * make record length functional in the gallery tab []
 * deploy the app as a github page []
 *
 * potential features:
 * user accounts that store your data []
 * aquarium that shows fish you have caught []
 * skill based slider QTE on fish action. []
 *
 * COMPLETE:
 * add descriptions of the fish and images modal that
 * pops up when the user clicks the boxes in the gallery [X]
 * make the steel rod more expensive [X]
 * make locales purchasable, and also add sidebar to equip different locales [X]
 * make locale image changing work for the content-box [X]
 * add X's out on items already purchased, and prevent user from purchasing twice. [X]
 * Add message explaining money calculation [X]
 * replace window.alert() with text box [X]
 * add color to the current coins text [X]
 * make rods in shop purchasable, [X]
 * add the rest of the fish [X]
 *
 *
 */

function App() {
  let [currentRod, setRod] = useState("wood");
  let galleryHidden = true;
  let infoWindowHidden = true;
  let [ownedLocales, setLocale] = useState(["default"]);
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
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a boot... Well, at least you caught something...";
        document.getElementsByClassName("calc-text")[0].innerHTML =
          "The Boot has no monetary value.";
        populateData("Boot");
        break;
      case 1:
        // MINNOWS
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught some minnows... Just small fry...";
        populateData("Minnows");
        break;
      case 2:
        // GOLDFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a goldfish... Maybe you can keep it as a pet...";
        populateData("Goldfish");
        break;
      case 3:
        // CLOWNFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a clownfish... What's so funny?";
        populateData("Clownfish");
        break;
      case 4:
        // TUNA
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Tuna... Now you just need a guitar!";
        populateData("Tuna");
        break;
      case 5:
        // PUFFERFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Pufferfish... I heard they are getting expensive... must be inflation!";
        populateData("Pufferfish");
        break;
      case 6:
        // KOI
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Koi... Make sure its the real thing, and not a deKoi!";
        populateData("Koi");
        break;
      case 7:
        // CARP
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Carp... don't hurt your wrists pulling it in, wouldn't want CARPAL tunnel!";
        populateData("Carp");
        break;
      case 8:
        // BASS
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Bass... don't drop it!";
        populateData("Bass");
        break;
      case 9:
        // SHARK
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Shark... We're gonna need a bigger boat...";
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
    document.getElementsByClassName("calc-text")[0].innerHTML =
      "Species Value: " +
      fishes[speciesOfFish].coinValue +
      " * Length Of Fish: " +
      lengthOfFish +
      " = " +
      fishes[speciesOfFish].coinValue * lengthOfFish;
  };

  const purchaseLocale = (localeType, localeCost) => {
    switch (localeType) {
      case "beach":
        if (coins >= localeCost && ownedLocales.includes("beach") == false) {
          window.alert("You have purchased the Beach Cost: -10000 Coins");
          document.getElementsByClassName("Beach")[0].src =
            "./src/assets/checked.png";
          setLocale((ownedLocales) => [...ownedLocales, "beach"]);
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.add("hasCaughtBox");
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.remove("selected");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/beachscene.png)";
          setCount((coins -= localeCost));
        }
        break;
      case "lake":
        if (coins >= localeCost && ownedLocales.includes("lake") == false) {
          window.alert("You have purchased the Lake Cost: -20000 Coins");
          document.getElementsByClassName("Lake")[0].src =
            "./src/assets/checked.png";
          setLocale((ownedLocales) => [...ownedLocales, "lake"]);
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.add("hasCaughtBox");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/lake2.png)";
          setCount((coins -= localeCost));
        }
        break;
      case "atlantis":
        if (coins >= localeCost && ownedLocales.includes("atlantis") == false) {
          window.alert("You have purchased Atlantis Cost: -50000 Coins");
          document.getElementsByClassName("Atlantis")[0].src =
            "./src/assets/checked.png";
          setLocale((ownedLocales) => [...ownedLocales, "atlantis"]);
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.add("hasCaughtBox");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/atlantisscene.png)";
          setCount((coins -= localeCost));
        }
        break;
    }
  };

  const equipLocale = (localeType) => {
    switch (localeType) {
      case "default":
        if (ownedLocales.includes("default")) {
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.remove("selected");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/lake.png)";
        }
        break;
      case "beach":
        if (ownedLocales.includes("beach")) {
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.remove("selected");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/beachscene.png)";
        }
        break;
      case "lake":
        if (ownedLocales.includes("lake")) {
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.add("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.remove("selected");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/lake2.png)";
        }
        break;
      case "atlantis":
        if (ownedLocales.includes("atlantis")) {
          document
            .getElementsByClassName("Beach-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Default-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Lake-Equip")[0]
            .classList.remove("selected");
          document
            .getElementsByClassName("Atlantis-Equip")[0]
            .classList.add("selected");
          document.getElementsByClassName(
            "content-box"
          )[0].style.backgroundImage = "url(./src/assets/atlantisscene.png)";
        }
        break;
    }
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
          document.getElementsByClassName("Iron")[0].src =
            "./src/assets/checked.png";
          document.getElementsByClassName("fishing-rod")[0].src =
            "./src/assets/ironRod.png";
        }
        break;
      case "steel":
        if (coins >= rodCost && currentRod !== "steel") {
          setRod("steel");
          setCount((coins -= rodCost));
          window.alert("You have purchased the Steel Rod Cost: -5000 Coins");
          document.getElementsByClassName("fishing-rod-text")[0].innerHTML =
            "Steel Rod";
          document.getElementsByClassName("Steel")[0].src =
            "./src/assets/checked.png";
          document.getElementsByClassName("fishing-rod")[0].src =
            "./src/assets/steelRod.png";
        }
        break;
    }
  };

  const toggleInfoWindow = (fishType) => {
    if (
      document
        .getElementsByClassName(fishType)[0]
        .classList.contains("hasCaughtBox")
    ) {
      switch (fishType) {
        case "Boot":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML = "BOOT";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Boots are various species of oily freshwater fish from the family Cyprinidae, a very large group of fish native to Europe and Asia. While boots are consumed in many parts of the world, they are generally considered an invasive species in parts of Africa, Australia and most of the United States.";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realboot.png";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Boot";
          break;
        case "Minnows":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML =
            "Minnows";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Minnow is the common name for a number of species of small freshwater fish, belonging to several genera of the families Cyprinidae and Leuciscidae. They are also known in Ireland as pinkeens. Smaller fish in the subfamily Leusciscidae are considered by anglers to be 'true' minnows.";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realminnow.png";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Minnow";
          break;
        case "Goldfish":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML =
            "Goldfish";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "The Goldfish (Carassius auratus) is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is commonly kept as a pet in indoor aquariums, and is one of the most popular aquarium fish. Goldfish released into the wild have become an invasive pest in parts of North America. Native to China, the goldfish is a relatively small member of the carp family (which also includes the Prussian carp and the crucian carp).";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realgoldfish.png";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Goldfish";
          break;
        case "Clownfish":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML =
            "Clownfish";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species of clownfish are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on the species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 17 cm (6+1⁄2 in), while the smallest barely achieve 7–8 cm (2+3⁄4–3+1⁄4 in).";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Clownfish";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realclownfish.png";
          break;
        case "Tuna":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML = "Tuna";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "A tuna is a saltwater fish that belongs to the tribe Thunnini, a subgrouping of the Scombridae (mackerel) family. The Thunnini comprise 15 species across five genera, the sizes of which vary greatly, ranging from the bullet tuna (max length: 50 cm or 1.6 ft, weight: 1.8 kg or 4 lb) up to the Atlantic bluefin tuna (max length: 4.6 m or 15 ft, weight: 684 kg or 1,508 lb), which averages 2 m (6.6 ft) and is believed to live up to 50 years.";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Tuna";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realtuna.png";
          break;
        case "Pufferfish":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML =
            "Pufferfish";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Tetraodontidae is a family of primarily marine and estuarine fish of the order Tetraodontiformes. The family includes many familiar species variously called pufferfish, puffers, balloonfish, blowfish, blowers, blowies, bubblefish, globefish, swellfish, toadfish, toadies, toadle, honey toads, sugar toads, and sea squab.They are morphologically similar to the closely related porcupinefish, which have large external spines (unlike the thinner, hidden spines of the Tetraodontidae, which are only visible when the fish have puffed up).";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Tetraodontidae";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realpufferfish.png";
          break;
        case "Koi":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML =
            "Koi Fish";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Koi (鯉, English: /ˈkɔɪ/, Japanese: [koꜜi]), or more specifically nishikigoi (錦鯉, Japanese: [ɲiɕi̥kiꜜɡoi], literally 'brocaded carp'), are colored varieties of the Amur carp (Cyprinus rubrofuscus) that are kept for decorative purposes in outdoor koi ponds or water gardens. Koi is an informal name for the colored variants of C. rubrofuscus kept for ornamental purposes. There are many varieties of ornamental koi, originating from breeding that began in Niigata, Japan in the early 19th century.";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Koi";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realkoi.png";
          break;
        case "Carp":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML = "Carp";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Carp are various species of oily freshwater fish from the family Cyprinidae, a very large group of fish native to Europe and Asia. While carp is consumed in many parts of the world, they are generally considered an invasive species in parts of Africa, Australia and most of the United States.";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Carp";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realcarp.png";
          break;
        case "Bass":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML = "Bass";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Bass (/bæs/) is a name shared by many species of fish. The term encompasses both freshwater and marine species, all belonging to the large order Perciformes, or perch-like fishes. The word bass comes from Middle English bars, meaning 'perch'.";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Bass_(fish)";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realbass.png";
          break;
        case "Shark":
          document.getElementsByClassName(
            "info-window-modal"
          )[0].hidden = false;
          document.getElementsByClassName("info-title")[0].innerHTML = "Shark";
          document.getElementsByClassName("info-text")[0].innerHTML =
            "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the Batoidea (rays and kin). Some sources extend the term 'shark' as an informal category including extinct members of Chondrichthyes (cartilaginous fish) with a shark-like morphology, such as hybodonts and xenacanths. Shark-like chondrichthyans such as Cladoselache and Doliodus first appeared in the Devonian Period (419-359 Ma), though some fossilized chondrichthyan-like scales are as old as the Late Ordovician (458-444 Ma). The oldest modern sharks (selachians) are known from the Early Jurassic, about 200 Ma.";
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Shark";
          document.getElementsByClassName("info-pic")[0].src =
            "./src/assets/realshark.png";
          break;
      }
    }
  };

  const closeInfoWindow = (e) => {
    document.getElementsByClassName("info-window-modal")[0].hidden = true;
    console.log(
      "hidden",
      document.getElementsByClassName("info-window-modal")[0].hidden
    );
  };

  return (
    <>
      <h1>Fishing Game</h1>
      <div className="content-box">
        <h1 className="catch-text"></h1>
        <h1 className="calc-text"></h1>
        <div className="fish-flex">
          <div className="fish-box">
            <p className="fish-text"></p>
            <p className="record-text"></p>
            <p className="length-text"></p>
            <img className="fish-ico"></img>
          </div>
        </div>
        <div hidden={true} className="info-window-modal">
          <div className="info-flex">
            <img className="info-pic"></img>
            <h2 className="info-title"></h2>
            <p className="info-text"></p>
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className="info-link"
            >
              Wikipedia Link
            </a>
            <div onClick={closeInfoWindow} className="button centered">
              CLOSE
            </div>
          </div>
        </div>
        <div hidden={true} className="gallery-modal">
          <h1>Gallery</h1>
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Boot <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Boot")}
                className="Boot Gallery"
                src={Boot}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Minnows <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Minnows")}
                className="Minnows Gallery"
                src={Minnows}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>Goldfish</p>
              <img
                onClick={() => toggleInfoWindow("Goldfish")}
                className="Goldfish Gallery"
                src={Goldfish}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>Clownfish</p>
              <img
                onClick={() => toggleInfoWindow("Clownfish")}
                className="Clownfish Gallery"
                src={Clownfish}
              ></img>
            </div>
            <div className="gallery-div">
              <p>
                Tuna
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Tuna")}
                className="Tuna Gallery"
                src={Tuna}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Pufferfish
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Pufferfish")}
                className="Pufferfish Gallery"
                src={Pufferfish}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Koifish
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Koi")}
                className="Koi Gallery"
                src={Koifish}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Carp
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Carp")}
                className="Carp Gallery"
                src={Carp}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Bass
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Bass")}
                className="Bass Gallery"
                src={Bass}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Shark
                <br />
              </p>
              <img
                onClick={() => toggleInfoWindow("Shark")}
                className="Shark Gallery"
                src={Shark}
              ></img>{" "}
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
                Steel Rod <br /> Cost: 5000 Coins
              </p>
              <img
                onClick={() => purchaseRod("steel", 5000)}
                className="Steel Rod hasCaughtBox"
                src={SteelRod}
              ></img>{" "}
            </div>
          </div>
          <h2>Locale</h2>
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Beach <br /> Cost: 10,000
              </p>
              <img
                onClick={() => purchaseLocale("beach", 10000)}
                className="Beach hasCaughtBox"
                src={Beach}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Lake <br /> Cost: 20,000
              </p>
              <img
                onClick={() => purchaseLocale("lake", 20000)}
                className="Lake hasCaughtBox"
                src={LakeIco}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Atlantis <br /> Cost: 50,000
              </p>
              <img
                onClick={() => purchaseLocale("atlantis", 50000)}
                className="Atlantis hasCaughtBox"
                src={Atlantis}
              ></img>{" "}
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
          <div className="gallery-div">
            <img
              onClick={() => equipLocale("default")}
              className="hasCaughtBox selected Default-Equip Lower-Z-Index"
              src={DefaultIco}
            ></img>{" "}
          </div>
          <div className="gallery-div">
            <img
              onClick={() => equipLocale("beach")}
              className="Gallery Lower-Z-Index Beach-Equip"
              src={Beach}
            ></img>{" "}
          </div>
          <div className="gallery-div">
            <img
              onClick={() => equipLocale("lake")}
              className="Gallery Lower-Z-Index Lake-Equip"
              src={LakeIco}
            ></img>{" "}
          </div>
          <div className="gallery-div">
            <img
              onClick={() => equipLocale("atlantis")}
              className="Gallery Lower-Z-Index Atlantis-Equip"
              src={Atlantis}
            ></img>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
