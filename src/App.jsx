// stylesheets
import "./index.css";

// sound
import sound from "./assets/crabparty.mp3";

// libraries
import html2canvas from "html2canvas";
import React, { useState } from "react";

// images
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
import Coin from "./assets/coin.png";
import IronRod from "./assets/ironRod.png";
import SteelRod from "./assets/steelRod.png";
import Beach from "./assets/beach.png";
import LakeIco from "./assets/lake-ico.png";
import Atlantis from "./assets/atlantis.png";
import DefaultIco from "./assets/defaultIco.png";
import Checked from "./assets/checked.png";
import Lake from "./assets/lake.png";
import BeachScene from "./assets/beachscene.png";
import LakeScene from "./assets/lake2.png";
import AtlantisScene from "./assets/atlantisscene.png";
import Crab from "./assets/crab.png";
import Turtle from "./assets/turtle.png";
import Mermaid from "./assets/mermaid.png";

// these are not implicitly referenced in the code, but are checked dynamically, so therefore must be present.
import RealBoot from "./assets/realboot.png";
import RealMinnows from "./assets/realminnow.png";
import RealGoldfish from "./assets/realgoldfish.png";
import RealClownfish from "./assets/realclownfish.png";
import RealTuna from "./assets/realtuna.png";
import RealPufferfish from "./assets/realpufferfish.png";
import RealKoi from "./assets/realkoi.png";
import RealCarp from "./assets/realcarp.png";
import RealBass from "./assets/realbass.png";
import RealShark from "./assets/realshark.png";

/** TODO: \
 *
 * COMPLETE:
 * Get rid of redundant code in as many places as possible [X]
 * refactor the pet ifs in fish RNG to make it dynamic [X]
 * Dynamically display record lengths in JSX instead of hardcoded indexes [X]
 * Different fish in different locales
 * Beach - Crab [X], Lake 2 - Turtle [X], Atlantis - Mermaid [X]
 * Update README when the project is done with finished pictures [X]
 * Add more comments to the code explaining what different things do [X]
 * Fix bug with obtaining the crab twice [X]
 * Skill based slider QTE on fish action. [X]
 * Aquarium that shows fish you have caught [X]
 * Screenshot function for the aquarium [X]
 * Aqaurium: Make 9 different keyframe animations so all the fish move differently [X]
 * Aquarium: Make keyframe animations work on mobile too [X]
 * Clean up and organize CSS files [X]
 * Sort imports [X]
 * Make dynamic stylings with flexboxes, so it will look good on mobile devices and smaller screens [X]
 * Make the info window a little more stylish [X]
 * Fix content moving with more text [X]
 * Make record length functional in the gallery tab [X]
 * Add header that says equip locales for the locale boxes [X]
 * Change all image sources to imported pictures so it will work on the deployed website [x]
 * Deploy the app as a github page [X]
 * Add descriptions of the fish and images modal that
 * Pops up when the user clicks the boxes in the gallery [X]
 * Make the steel rod more expensive [X]
 * Make locales purchasable, and also add sidebar to equip different locales [X]
 * Make locale image changing work for the content-box [X]
 * Add X's out on items already purchased, and prevent user from purchasing twice. [X]
 * Add message explaining money calculation [X]
 * Replace window.alert() with text box [X]
 * Add color to the current coins text [X]
 * Make rods in shop purchasable, [X]
 * Add the rest of the fish [X]
 *
 */

function App() {
  let [currentRod, setRod] = useState("wood"); // current fishing rod
  let [currentMultiplier, setMultiplier] = useState(1); // multiplier for coins earned based on QTE
  let [noFishing, setNoFish] = useState(false); // used to stop the user from hitting the fish button if the QTE is running.
  let [hasCrab, setHasCrab] = useState(false); // if the user has the crab pet
  let [hasTurtle, setHasTurtle] = useState(false); // if the user has the turtle pet
  let [hasMermaid, setHasMermaid] = useState(false); // if the user has the mermaid pet
  let galleryHidden = true; // used to show or hide the gallery or aquarium modals
  let aquariumHidden = true;
  // used to determine which locales the user has.
  let [ownedLocales, setLocale] = useState(["default"]);
  let currentLength = 0; // current length of fish
  let shopHidden = true;
  let [coins, setCount] = useState(0); // current coins
  const audio = new Audio(sound); // used to play the easter egg song
  // used to store the record lengths for each fish
  const [fishObj, setFish] = useState({
    Boot: {
      type: "Boot",
      recordLength: 0,
      maxLengthValue: 30,
      minLengthValue: 15,
      coinValue: 0,
      catchText: "You caught a boot... Well, at least you caught something...",
      infoWindowText:
        "Boots are various species of oily freshwater fish from the family Cyprinidae, a very large group of fish native to Europe and Asia. While boots are consumed in many parts of the world, they are generally considered an invasive species in parts of Africa, Australia and most of the United States.",
    },
    Minnows: {
      type: "Minnows",
      recordLength: 0,
      maxLengthValue: 5,
      minLengthValue: 1,
      coinValue: 1,
      path: Minnows,
      catchText: "You caught some minnows... Just small fry...",
      infoWindowText:
        "Minnow is the common name for a number of species of small freshwater fish, belonging to several genera of the families Cyprinidae and Leuciscidae. They are also known in Ireland as pinkeens. Smaller fish in the subfamily Leusciscidae are considered by anglers to be 'true' minnows.",
    },
    Goldfish: {
      type: "Goldfish",
      recordLength: 0,
      maxLengthValue: 14,
      minLengthValue: 1,
      coinValue: 2,
      catchText: "You caught a goldfish... Maybe you can keep it as a pet...",
      infoWindowText:
        "The Goldfish (Carassius auratus) is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is commonly kept as a pet in indoor aquariums, and is one of the most popular aquarium fish. Goldfish released into the wild have become an invasive pest in parts of North America. Native to China, the goldfish is a relatively small member of the carp family (which also includes the Prussian carp and the crucian carp).",
    },
    Clownfish: {
      type: "Clownfish",
      recordLength: 0,
      maxLengthValue: 10,
      minLengthValue: 6,
      coinValue: 3,
      catchText: "You caught a clownfish... What's so funny?",
      infoWindowText:
        "Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species of clownfish are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on the species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 17 cm (6+1⁄2 in), while the smallest barely achieve 7–8 cm (2+3⁄4–3+1⁄4 in).",
    },
    Tuna: {
      type: "Tuna",
      recordLength: 0,
      maxLengthValue: 149,
      minLengthValue: 130,
      coinValue: 4,
      catchText: "You caught a Tuna... Now you just need a guitar!",
      infoWindowText:
        "A tuna is a saltwater fish that belongs to the tribe Thunnini, a subgrouping of the Scombridae (mackerel) family. The Thunnini comprise 15 species across five genera, the sizes of which vary greatly, ranging from the bullet tuna (max length: 50 cm or 1.6 ft, weight: 1.8 kg or 4 lb) up to the Atlantic bluefin tuna (max length: 4.6 m or 15 ft, weight: 684 kg or 1,508 lb), which averages 2 m (6.6 ft) and is believed to live up to 50 years.",
    },
    Pufferfish: {
      type: "Pufferfish",
      recordLength: 0,
      maxLengthValue: 60,
      minLengthValue: 2,
      coinValue: 5,
      catchText:
        "You caught a Pufferfish... I heard they are getting expensive... must be inflation!",
      infoWindowText:
        "Tetraodontidae is a family of primarily marine and estuarine fish of the order Tetraodontiformes. The family includes many familiar species variously called pufferfish, puffers, balloonfish, blowfish, blowers, blowies, bubblefish, globefish, swellfish, toadfish, toadies, toadle, honey toads, sugar toads, and sea squab.They are morphologically similar to the closely related porcupinefish, which have large external spines (unlike the thinner, hidden spines of the Tetraodontidae, which are only visible when the fish have puffed up).",
    },
    Koi: {
      type: "Koi",
      recordLength: 0,
      maxLengthValue: 38,
      minLengthValue: 30,
      coinValue: 6,
      catchText:
        "You caught a Koi... Make sure its the real thing, and not a deKoi!",
      infoWindowText:
        "Koi (鯉, English: /ˈkɔɪ/, Japanese: [koꜜi]), or more specifically nishikigoi (錦鯉, Japanese: [ɲiɕi̥kiꜜɡoi], literally 'brocaded carp'), are colored varieties of the Amur carp (Cyprinus rubrofuscus) that are kept for decorative purposes in outdoor koi ponds or water gardens. Koi is an informal name for the colored variants of C. rubrofuscus kept for ornamental purposes. There are many varieties of ornamental koi, originating from breeding that began in Niigata, Japan in the early 19th century.",
    },
    Carp: {
      type: "Carp",
      recordLength: 0,
      maxLengthValue: 63,
      minLengthValue: 30,
      coinValue: 7,
      catchText:
        "You caught a Carp... don't hurt your wrists pulling it in, wouldn't want CARPAL tunnel!",
      infoWindowText:
        "Carp are various species of oily freshwater fish from the family Cyprinidae, a very large group of fish native to Europe and Asia. While carp is consumed in many parts of the world, they are generally considered an invasive species in parts of Africa, Australia and most of the United States.",
    },
    Bass: {
      type: "Bass",
      recordLength: 0,
      maxLengthValue: 96,
      minLengthValue: 40,
      coinValue: 8,
      catchText: "You caught a Bass... don't drop it!",
      infoWindowText:
        "Bass (/bæs/) is a name shared by many species of fish. The term encompasses both freshwater and marine species, all belonging to the large order Perciformes, or perch-like fishes. The word bass comes from Middle English bars, meaning 'perch'.",
    },
    Shark: {
      type: "Shark",
      recordLength: 0,
      maxLengthValue: 99,
      minLengthValue: 17,
      coinValue: 9,
      catchText: "You caught a Shark... We're gonna need a bigger boat...",
      infoWindowText:
        "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the Batoidea (rays and kin). Some sources extend the term 'shark' as an informal category including extinct members of Chondrichthyes (cartilaginous fish) with a shark-like morphology, such as hybodonts and xenacanths. Shark-like chondrichthyans such as Cladoselache and Doliodus first appeared in the Devonian Period (419-359 Ma), though some fossilized chondrichthyan-like scales are as old as the Late Ordovician (458-444 Ma). The oldest modern sharks (selachians) are known from the Early Jurassic, about 200 Ma.",
    },
  });

  // code for screenshot functionality in aquarium
  var Canvas2Image = (function () {
    // check if support sth.
    var $support = (function () {
      var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

      return {
        canvas: !!ctx,
        imageData: !!ctx.getImageData,
        dataURL: !!canvas.toDataURL,
        btoa: !!window.btoa,
      };
    })();

    var downloadMime = "image/octet-stream";

    function scaleCanvas(canvas, width, height) {
      var w = canvas.width,
        h = canvas.height;
      if (width == undefined) {
        width = w;
      }
      if (height == undefined) {
        height = h;
      }

      var retCanvas = document.createElement("canvas");
      var retCtx = retCanvas.getContext("2d");
      retCanvas.width = width;
      retCanvas.height = height;
      retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
      return retCanvas;
    }

    function getDataURL(canvas, type, width, height) {
      canvas = scaleCanvas(canvas, width, height);
      return canvas.toDataURL(type);
    }

    function saveFile(strData, filename) {
      var save_link = document.createElement("a");
      save_link.href = strData;
      save_link.download = filename;
      var event = new MouseEvent("click", {
        bubbles: false,
        cancelable: false,
      });
      save_link.dispatchEvent(event);
    }

    function genImage(strData) {
      var img = document.createElement("img");
      img.src = strData;
      return img;
    }
    function fixType(type) {
      type = type.toLowerCase().replace(/jpg/i, "jpeg");
      var r = type.match(/png|jpeg|bmp|gif/)[0];
      return "image/" + r;
    }
    function encodeData(data) {
      if (!window.btoa) {
        throw "btoa undefined";
      }
      var str = "";
      if (typeof data == "string") {
        str = data;
      } else {
        for (var i = 0; i < data.length; i++) {
          str += String.fromCharCode(data[i]);
        }
      }

      return btoa(str);
    }
    function getImageData(canvas) {
      var w = canvas.width,
        h = canvas.height;
      return canvas.getContext("2d").getImageData(0, 0, w, h);
    }
    function makeURI(strData, type) {
      return "data:" + type + ";base64," + strData;
    }

    /**
     * create bitmap image
     * 按照规则生成图片响应头和响应体
     */
    var genBitmapImage = function (oData) {
      //
      // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
      // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
      //

      var biWidth = oData.width;
      var biHeight = oData.height;
      var biSizeImage = biWidth * biHeight * 3;
      var bfSize = biSizeImage + 54; // total header size = 54 bytes

      //
      //  typedef struct tagBITMAPFILEHEADER {
      //  	WORD bfType;
      //  	DWORD bfSize;
      //  	WORD bfReserved1;
      //  	WORD bfReserved2;
      //  	DWORD bfOffBits;
      //  } BITMAPFILEHEADER;
      //
      var BITMAPFILEHEADER = [
        // WORD bfType -- The file type signature; must be "BM"
        0x42,
        0x4d,
        // DWORD bfSize -- The size, in bytes, of the bitmap file
        bfSize & 0xff,
        (bfSize >> 8) & 0xff,
        (bfSize >> 16) & 0xff,
        (bfSize >> 24) & 0xff,
        // WORD bfReserved1 -- Reserved; must be zero
        0,
        0,
        // WORD bfReserved2 -- Reserved; must be zero
        0,
        0,
        // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
        54,
        0,
        0,
        0,
      ];

      //
      //  typedef struct tagBITMAPINFOHEADER {
      //  	DWORD biSize;
      //  	LONG  biWidth;
      //  	LONG  biHeight;
      //  	WORD  biPlanes;
      //  	WORD  biBitCount;
      //  	DWORD biCompression;
      //  	DWORD biSizeImage;
      //  	LONG  biXPelsPerMeter;
      //  	LONG  biYPelsPerMeter;
      //  	DWORD biClrUsed;
      //  	DWORD biClrImportant;
      //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
      //
      var BITMAPINFOHEADER = [
        // DWORD biSize -- The number of bytes required by the structure
        40,
        0,
        0,
        0,
        // LONG biWidth -- The width of the bitmap, in pixels
        biWidth & 0xff,
        (biWidth >> 8) & 0xff,
        (biWidth >> 16) & 0xff,
        (biWidth >> 24) & 0xff,
        // LONG biHeight -- The height of the bitmap, in pixels
        biHeight & 0xff,
        (biHeight >> 8) & 0xff,
        (biHeight >> 16) & 0xff,
        (biHeight >> 24) & 0xff,
        // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
        1,
        0,
        // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
        // has a maximum of 2^24 colors (16777216, Truecolor)
        24,
        0,
        // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
        0,
        0,
        0,
        0,
        // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
        biSizeImage & 0xff,
        (biSizeImage >> 8) & 0xff,
        (biSizeImage >> 16) & 0xff,
        (biSizeImage >> 24) & 0xff,
        // LONG biXPelsPerMeter, unused
        0,
        0,
        0,
        0,
        // LONG biYPelsPerMeter, unused
        0,
        0,
        0,
        0,
        // DWORD biClrUsed, the number of color indexes of palette, unused
        0,
        0,
        0,
        0,
        // DWORD biClrImportant, unused
        0,
        0,
        0,
        0,
      ];

      var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

      var aImgData = oData.data;

      var strPixelData = "";
      var biWidth4 = biWidth << 2;
      var y = biHeight;
      var fromCharCode = String.fromCharCode;

      do {
        var iOffsetY = biWidth4 * (y - 1);
        var strPixelRow = "";
        for (var x = 0; x < biWidth; x++) {
          var iOffsetX = x << 2;
          strPixelRow +=
            fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
            fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
            fromCharCode(aImgData[iOffsetY + iOffsetX]);
        }

        for (var c = 0; c < iPadding; c++) {
          strPixelRow += String.fromCharCode(0);
        }

        strPixelData += strPixelRow;
      } while (--y);

      var strEncoded =
        encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) +
        encodeData(strPixelData);

      return strEncoded;
    };

    /**
     * [saveAsImage]
     * @param  {[obj]} canvas   [canvasElement]
     * @param  {[Number]} width    [optional] png width
     * @param  {[Number]} height   [optional] png height
     * @param  {[String]} type     [image type]
     * @param  {[String]} filename [image filename]
     * @return {[type]}          [description]
     */
    var saveAsImage = function (canvas, width, height, type, filename) {
      if ($support.canvas && $support.dataURL) {
        if (typeof canvas == "string") {
          canvas = document.getElementById(canvas);
        }
        if (type == undefined) {
          type = "png";
        }
        filename =
          filename == undefined || filename.length === 0
            ? Date.now() + "." + type
            : filename + "." + type;
        type = fixType(type);

        if (/bmp/.test(type)) {
          var data = getImageData(scaleCanvas(canvas, width, height));
          var strData = genBitmapImage(data);

          saveFile(makeURI(strData, downloadMimedownloadMime), filename);
        } else {
          var strData = getDataURL(canvas, type, width, height);
          saveFile(strData.replace(type, downloadMime), filename);
        }
      }
    };

    var convertToImage = function (canvas, width, height, type) {
      if ($support.canvas && $support.dataURL) {
        if (typeof canvas == "string") {
          canvas = document.getElementById(canvas);
        }
        if (type == undefined) {
          type = "png";
        }
        type = fixType(type);

        if (/bmp/.test(type)) {
          var data = getImageData(scaleCanvas(canvas, width, height));
          var strData = genBitmapImage(data);
          return genImage(makeURI(strData, "image/bmp"));
        } else {
          var strData = getDataURL(canvas, type, width, height);
          return genImage(strData);
        }
      }
    };

    return {
      saveAsImage: saveAsImage,
      saveAsPNG: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, "png", fileName);
      },
      saveAsJPEG: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, "jpeg", fileName);
      },
      saveAsGIF: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, "gif", fileName);
      },
      saveAsBMP: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, "bmp", fileName);
      },

      convertToImage: convertToImage,
      convertToPNG: function (canvas, width, height) {
        return convertToImage(canvas, width, height, "png");
      },
      convertToJPEG: function (canvas, width, height) {
        return convertToImage(canvas, width, height, "jpeg");
      },
      convertToGIF: function (canvas, width, height) {
        return convertToImage(canvas, width, height, "gif");
      },
      convertToBMP: function (canvas, width, height) {
        return convertToImage(canvas, width, height, "bmp");
      },
    };
  })();

  // event handler to take a screenshot
  const takeScreenShot = (e) => {
    e.preventDefault();
    const screenshotTarget =
      document.body.getElementsByClassName("aquarium")[0];
    html2canvas(screenshotTarget).then((canvas) => {
      return Canvas2Image.saveAsPNG(canvas);
    });
  };

  // stops the slider for the QTE
  const sliderStop = (e) => {
    setNoFish(false);
    let sliderModal = document.getElementsByClassName("slider-modal")[0];
    e.preventDefault();
    let sliderTick = document.getElementsByClassName("slider-tick")[0];
    calculateSlider();
    sliderTick.style.animationPlayState = "paused";
    setTimeout(() => {
      sliderModal.hidden = true;
      setNoFish(false);
      sliderTick.style.animationPlayState = "running";
      sliderTick.style.borderColor = "white";
    }, "1000");
  };

  // determines the multiplier for the QTE based on the position of the slider tick, and changes tick color
  const calculateSlider = (e) => {
    let sliderTick = document.getElementsByClassName("slider-tick")[0];
    let sliderTickPos = sliderTick.offsetLeft;
    // these are positions inside of the green
    if (sliderTickPos < 140 && sliderTickPos > 86) {
      // if its in the green return multiplier of 2 for coins earned
      sliderTick.style.borderColor = "green";
      setMultiplier(2);
    }
    // if its not, do not multiply coins earned
    else {
      sliderTick.style.borderColor = "red";
      setMultiplier(1);
    }
  };

  // calls fishRNG to get a number and based on that number displays information about which fish was caught
  const fish = (e) => {
    if (noFishing) return;
    setNoFish(true);
    let sliderModal = document.getElementsByClassName("slider-modal")[0];
    sliderModal.hidden = false;
    e.preventDefault();
    let RNG = fishRNG(currentRod);
    let fishFromObj = fishObj[Object.keys(fishObj)[RNG]];
    document.getElementsByClassName("catch-text")[0].innerHTML =
      fishFromObj.catchText;
    document.getElementsByClassName(`aq-${fishFromObj.type}`)[0].hidden = false;
    populateData(`${fishFromObj.type}`);
  };

  // toggles the gallery modal which closes other modals
  const toggleGallery = (e) => {
    e.preventDefault();
    galleryHidden = !galleryHidden;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
    if (shopHidden == false) {
      shopHidden = true;
      document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
    }
  };

  // toggles the aquarium modal which closes other modals
  const toggleAquarium = (e) => {
    e.preventDefault();
    aquariumHidden = !aquariumHidden;
    document.getElementsByClassName("aquarium-modal")[0].hidden =
      aquariumHidden;
    if (shopHidden == false || galleryHidden == false) {
      shopHidden = true;
      galleryHidden = true;
      document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
      document.getElementsByClassName("gallery-modal")[0].hidden =
        galleryHidden;
    }
  };

  // toggles the shop modal which closes other modals
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

  // close button for gallery
  const closeGallery = (e) => {
    galleryHidden = true;
    document.getElementsByClassName("gallery-modal")[0].hidden = galleryHidden;
  };

  // close button for shop
  const closeShop = (e) => {
    shopHidden = true;
    document.getElementsByClassName("shop-modal")[0].hidden = shopHidden;
  };

  // populates image of fish and grabs the current length based on type of fish
  const populateData = (name) => {
    // // get length, will be based on the fish
    document.getElementsByClassName("fish-ico")[0].src = evalString(name);
    currentLength = Math.floor(
      Math.random() *
        (fishObj[name].maxLengthValue - fishObj[name].minLengthValue) +
        fishObj[name].minLengthValue
    );
    calculateCoins(`${name}`, currentLength);
    // Calculate if its a record length, and if it is, update the obj for the gallery
    const tempObj = { ...fishObj }; // get a temp obj of the fish
    if (tempObj[name].recordLength < currentLength) {
      tempObj[name].recordLength = currentLength;
      setFish(tempObj);
    }
    // Populating the HTML
    document.getElementsByClassName("length-text")[0].innerHTML =
      "Length: " + currentLength + "CM";
    document.getElementsByClassName("fish-text")[0].innerHTML = `${name}`;
    document.getElementsByClassName(name)[0].classList.add("hasCaughtBox");
  };

  // easter egg, clicking the crab plays a crab song.
  const crabParty = (e) => {
    e.preventDefault();
    if (audio.paused) {
      audio.play();
      window.alert("Crab Party");
    } else {
      audio.pause();
    }
  };

  // evaluates a string as javascript, moved this into a function instead of using eval() directly for safety.
  const evalString = (string) => {
    return eval(`(${string})`);
  };

  const fishRNG = (rodType) => {
    // check to see if beach is the current locale.
    let diceRoll = Math.floor(Math.random() * 10);
    if (diceRoll === 9) {
      if (
        document
          .getElementsByClassName("Beach-Equip")[0]
          .classList.contains("selected") &&
        !hasCrab
      ) {
        document.getElementsByClassName("crab")[0].hidden = false;
        window.alert("You have obtained the crab! Check your aquarium!");
        setHasCrab(true);
      }
      if (
        document
          .getElementsByClassName("Lake-Equip")[0]
          .classList.contains("selected") &&
        !hasTurtle
      ) {
        document.getElementsByClassName("turtle")[0].hidden = false;
        window.alert("You have obtained the turtle! Check your aquarium!");
        setHasTurtle(true);
      }
      if (
        document
          .getElementsByClassName("Lake-Equip")[0]
          .classList.contains("selected") &&
        !hasTurtle
      ) {
        document.getElementsByClassName("turtle")[0].hidden = false;
        window.alert("You have obtained the turtle! Check your aquarium!");
        setHasTurtle(true);
      }
      if (
        document
          .getElementsByClassName("Atlantis-Equip")[0]
          .classList.contains("selected") &&
        !hasMermaid
      ) {
        document.getElementsByClassName("mermaid")[0].hidden = false;
        window.alert("You have obtained the mermaid! Check your aquarium!");
        setHasMermaid(true);
      }
    }

    // based on Rod Type, pick a number, 0-4 is wood, 0-7 Iron and 0-10 Steel.
    switch (rodType) {
      case "wood":
        return Math.floor(Math.random() * 4);
      case "iron":
        return Math.floor(Math.random() * 7);
      case "steel":
        return Math.floor(Math.random() * 10);
    }
  };

  // calculate coins earned based on species of fish, length and multiplier from QTE, and then update HTML for the calculation.
  const calculateCoins = (speciesOfFish, lengthOfFish) => {
    let result =
      fishObj[speciesOfFish].coinValue * lengthOfFish * currentMultiplier;
    setCount(
      (coins +=
        fishObj[speciesOfFish].coinValue * lengthOfFish * currentMultiplier)
    );
    if (speciesOfFish === "Boot") {
      document.getElementsByClassName("calc-text")[0].innerHTML =
        "The Boot has no monetary value.";
    } else {
      document.getElementsByClassName("calc-text")[0].innerHTML =
        "Species Value: " +
        fishObj[speciesOfFish].coinValue +
        " * Length Of Fish: " +
        lengthOfFish +
        " * " +
        "Current Multipler: " +
        currentMultiplier +
        " = " +
        result;
    }
  };

  // gets called with the localeType to be purchased and the cost, check if user doesn't already have the locale and can afford it, then switch the equipped locale.
  const purchaseLocale = (localeType, localeCost) => {
    switch (localeType) {
      case "beach":
        if (coins >= localeCost && ownedLocales.includes("beach") == false) {
          window.alert("You have purchased the Beach Cost: -10000 Coins");
          document.getElementsByClassName("Beach")[0].src = Checked;
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
          )[0].style.backgroundImage = `url(${BeachScene})`;
          setCount((coins -= localeCost));
        }
        break;
      case "lake":
        if (coins >= localeCost && ownedLocales.includes("lake") == false) {
          window.alert("You have purchased the Lake Cost: -20000 Coins");
          document.getElementsByClassName("Lake")[0].src = Checked;
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
          )[0].style.backgroundImage = `url(${LakeScene})`;
          setCount((coins -= localeCost));
        }
        break;
      case "atlantis":
        if (coins >= localeCost && ownedLocales.includes("atlantis") == false) {
          window.alert("You have purchased Atlantis Cost: -50000 Coins");
          document.getElementsByClassName("Atlantis")[0].src = Checked;
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
          )[0].style.backgroundImage = `url(${AtlantisScene})`;
          setCount((coins -= localeCost));
        }
        break;
    }
  };

  // checks if the locale to switch to is owned, and then switches which one is selected, as well as the background.
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
          )[0].style.backgroundImage = `url(${Lake})`;
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
          )[0].style.backgroundImage = `url(${BeachScene})`;
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
          )[0].style.backgroundImage = `url(${LakeScene})`;
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
          )[0].style.backgroundImage = `url(${AtlantisScene})`;
        }
        break;
    }
  };

  // switches rod based on the type and cost if user can afford it, and also checks to see if the user already has the rod.
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
          document.getElementsByClassName("Iron")[0].src = Checked;
          document.getElementsByClassName("fishing-rod")[0].src = IronRod;
        }
        break;
      case "steel":
        if (coins >= rodCost && currentRod !== "steel") {
          setRod("steel");
          setCount((coins -= rodCost));
          window.alert("You have purchased the Steel Rod Cost: -5000 Coins");
          document.getElementsByClassName("fishing-rod-text")[0].innerHTML =
            "Steel Rod";
          document.getElementsByClassName("Steel")[0].src = Checked;
          document.getElementsByClassName("fishing-rod")[0].src = SteelRod;
        }
        break;
    }
  };

  // toggles the window showing information about fish from the gallery and populates based on what fish is clicked on.
  const toggleInfoWindow = (fishType) => {
    if (
      document
        .getElementsByClassName(fishType)[0]
        .classList.contains("hasCaughtBox")
    ) {
      document.getElementsByClassName("info-window-modal")[0].hidden = false;
      document.getElementsByClassName(
        "info-title"
      )[0].innerHTML = `${fishType}`;
      document.getElementsByClassName("info-text")[0].innerHTML =
        fishObj[fishType].infoWindowText;
      document.getElementsByClassName("info-pic")[0].src = evalString(
        `Real${fishType}`
      );
      document.getElementsByClassName(
        "info-link"
      )[0].href = `https://en.wikipedia.org/wiki/${fishType}`;
      switch (fishType) {
        // edge cases where the wikipedia link does not match the exact name of the fish
        case "Pufferfish":
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Tetraodontidae";
          break;
        case "Bass":
          document.getElementsByClassName("info-link")[0].href =
            "https://en.wikipedia.org/wiki/Bass_(fish)";
          break;
      }
    }
  };

  // close info window
  const closeInfoWindow = (e) => {
    document.getElementsByClassName("info-window-modal")[0].hidden = true;
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
              Close
            </div>
          </div>
        </div>

        <div hidden={true} className="slider-modal">
          <div className="slider-flex">
            <p>
              Land the white marker in the green area to recieve a 2x Multiplier
              towards the coin value of your next catch!
            </p>
            <div className="slider">
              <div className="slider-tick"></div>
            </div>
            <div className="button" onClick={sliderStop}>
              Catch!
            </div>
          </div>
        </div>

        <div hidden={true} className="aquarium-modal">
          <h1>Aquarium</h1>
          <div className="aquarium">
            <img
              hidden={true}
              src={Crab}
              onClick={crabParty}
              className="crab"
            ></img>
            <img hidden={true} src={Mermaid} className="crab mermaid"></img>
            <img hidden={true} src={Turtle} className="crab turtle"></img>
            <img hidden={true} src={Boot} className="aq-Boot"></img>
            <img hidden={true} src={Minnows} className="aq-Minnows"></img>
            <img hidden={true} src={Goldfish} className="aq-Goldfish"></img>
            <img hidden={true} src={Clownfish} className="aq-Clownfish"></img>
            <img hidden={true} src={Tuna} className="aq-Tuna"></img>
            <img hidden={true} src={Pufferfish} className="aq-Pufferfish"></img>
            <img hidden={true} src={Koifish} className="aq-Koifish"></img>
            <img hidden={true} src={Carp} className="aq-Carp"></img>
            <img hidden={true} src={Bass} className="aq-Bass"></img>
            <img hidden={true} src={Shark} className="aq-Shark"></img>
          </div>
          <div className="gallery-button-flex">
            <div className="button screensh" onClick={takeScreenShot}>
              Screenshot
            </div>
          </div>
        </div>
        <div hidden={true} className="gallery-modal">
          <h1>Gallery</h1>
          <div className="gallery-flex gallery-style">
            <div className="gallery-div">
              <p>
                Boot <br />
                Record Length: <br />
                {fishObj["Boot"].recordLength}cm
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
                Record Length: <br />
                {fishObj["Minnows"].recordLength}cm
              </p>
              <img
                onClick={() => toggleInfoWindow("Minnows")}
                className="Minnows Gallery"
                src={Minnows}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Goldfish
                <br />
                Record Length: <br />
                {fishObj["Goldfish"].recordLength}cm
              </p>
              <img
                onClick={() => toggleInfoWindow("Goldfish")}
                className="Goldfish Gallery"
                src={Goldfish}
              ></img>{" "}
            </div>
            <div className="gallery-div">
              <p>
                Clownfish
                <br />
                Record Length:
                <br /> {fishObj["Clownfish"].recordLength}cm
              </p>
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
                Record Length: <br />
                {fishObj["Tuna"].recordLength}cm
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
                Record Length: <br />
                {fishObj["Pufferfish"].recordLength}cm
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
                Record Length: <br />
                {fishObj["Koi"].recordLength}cm
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
                Record Length:
                <br /> {fishObj["Carp"].recordLength}cm
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
                Record Length:
                <br /> {fishObj["Bass"].recordLength}cm
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
                Record Length: <br />
                {fishObj["Shark"].recordLength}cm
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
          </div>{" "}
          <div onClick={toggleAquarium} className="button">
            AQUARIUM
          </div>
          <div className="locale-parent-flex">
            <div className="equip-header-flex">
              <h2 className="equip-header">
                Equip <br />
                Locale:
              </h2>
            </div>
            <div className="equip-flex">
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
        </div>
      </div>
    </>
  );
}

export default App;
