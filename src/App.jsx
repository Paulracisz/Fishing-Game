// stylesheets

import "./index.css";

// libraries
import html2canvas from 'html2canvas';

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
import React, { useState } from "react";
import Coin from "./assets/coin.png";
import IronRod from "./assets/ironRod.png";
import SteelRod from "./assets/steelRod.png";
import Beach from "./assets/beach.png";
import LakeIco from "./assets/lake-ico.png";
import Atlantis from "./assets/atlantis.png";
import DefaultIco from "./assets/defaultIco.png";
import Checked from "./assets/checked.png";
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
import Lake from "./assets/lake.png";
import BeachScene from "./assets/beachscene.png";
import LakeScene from "./assets/lake2.png";
import AtlantisScene from "./assets/atlantisscene.png";

/** TODO: \
 *
 * FEATURES:
 * Update README when the project is done with finished pictures []
 *
 * POTENTIAL FEATURES:
 * User accounts that store your data []
 * Skill based slider QTE on fish action. []
 * Add color schemes []
 * Different fish in different locales 
 * Beach - Crab, Lake 2 - Turtle, Atlantis - Mermaid []
*
* REFCATORS:
* Get rid of redundant code in as many places as possible []
* Possibly break different JSX fragments into different components []
* Add more comments to the code explaining what different things do []
* Dynamically display record lengths in JSX instead of hardcoded indexes []
*
* COMPLETE:
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
  let [currentRod, setRod] = useState("wood");
  let [currentMultiplier, setMultiplier] = useState(1)
  let [noFishing, setNoFish] = useState(false)
  let galleryHidden = true;
  let aquariumHidden = true;
  const [fishObj, setFish] = useState([
    {
      type: "Boot",
      recordLength: 0,
    },
    {
      type: "Minnows",
      recordLength: 0,
    },
    {
      type: "Goldfish",
      recordLength: 0,
    },
    {
      type: "Clownfish",
      recordLength: 0,
    },
    {
      type: "Tuna",
      recordLength: 0,
    },
    {
      type: "Pufferfish",
      recordLength: 0,
    },
    {
      type: "Koi",
      recordLength: 0,
    },
    {
      type: "Carp",
      recordLength: 0,
    },
    {
      type: "Bass",
      recordLength: 0,
    },
    {
      type: "Shark",
      recordLength: 0,
    },
  ]);
  
  var Canvas2Image = function () {

    // check if support sth.
    var $support = function () {
      var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
  
      return {
        canvas: !!ctx,
        imageData: !!ctx.getImageData,
        dataURL: !!canvas.toDataURL,
        btoa: !!window.btoa
      };
    }();
  
    var downloadMime = 'image/octet-stream';
  
    function scaleCanvas (canvas, width, height) {
      var w = canvas.width,
        h = canvas.height;
      if (width == undefined) {
        width = w;
      }
      if (height == undefined) {
        height = h;
      }
  
      var retCanvas = document.createElement('canvas');
      var retCtx = retCanvas.getContext('2d');
      retCanvas.width = width;
      retCanvas.height = height;
      retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
      return retCanvas;
    }
  
    function getDataURL (canvas, type, width, height) {
      canvas = scaleCanvas(canvas, width, height);
      return canvas.toDataURL(type);
    }
  
    function saveFile (strData,filename) {
      var save_link = document.createElement('a');
      save_link.href = strData;
      save_link.download = filename;
      var event = new MouseEvent('click',{"bubbles":false, "cancelable":false});
      save_link.dispatchEvent(event);
  
    }
  
    function genImage(strData) {
      var img = document.createElement('img');
      img.src = strData;
      return img;
    }
    function fixType (type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg');
      var r = type.match(/png|jpeg|bmp|gif/)[0];
      return 'image/' + r;
    }
    function encodeData (data) {
      if (!window.btoa) { throw 'btoa undefined' }
      var str = '';
      if (typeof data == 'string') {
        str = data;
      } else {
        for (var i = 0; i < data.length; i ++) {
          str += String.fromCharCode(data[i]);
        }
      }
  
      return btoa(str);
    }
    function getImageData (canvas) {
      var w = canvas.width,
        h = canvas.height;
      return canvas.getContext('2d').getImageData(0, 0, w, h);
    }
    function makeURI (strData, type) {
      return 'data:' + type + ';base64,' + strData;
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
  
      var biWidth  = oData.width;
      var biHeight	= oData.height;
      var biSizeImage = biWidth * biHeight * 3;
      var bfSize  = biSizeImage + 54; // total header size = 54 bytes
  
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
        0x42, 0x4D,
        // DWORD bfSize -- The size, in bytes, of the bitmap file
        bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
        // WORD bfReserved1 -- Reserved; must be zero
        0, 0,
        // WORD bfReserved2 -- Reserved; must be zero
        0, 0,
        // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
        54, 0, 0, 0
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
        40, 0, 0, 0,
        // LONG biWidth -- The width of the bitmap, in pixels
        biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
        // LONG biHeight -- The height of the bitmap, in pixels
        biHeight & 0xff, biHeight >> 8  & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
        // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
        1, 0,
        // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
        // has a maximum of 2^24 colors (16777216, Truecolor)
        24, 0,
        // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
        0, 0, 0, 0,
        // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
        biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
        // LONG biXPelsPerMeter, unused
        0,0,0,0,
        // LONG biYPelsPerMeter, unused
        0,0,0,0,
        // DWORD biClrUsed, the number of color indexes of palette, unused
        0,0,0,0,
        // DWORD biClrImportant, unused
        0,0,0,0
      ];
  
      var iPadding = (4 - ((biWidth * 3) % 4)) % 4;
  
      var aImgData = oData.data;
  
      var strPixelData = '';
      var biWidth4 = biWidth<<2;
      var y = biHeight;
      var fromCharCode = String.fromCharCode;
  
      do {
        var iOffsetY = biWidth4*(y-1);
        var strPixelRow = '';
        for (var x = 0; x < biWidth; x++) {
          var iOffsetX = x<<2;
          strPixelRow += fromCharCode(aImgData[iOffsetY+iOffsetX+2]) +
                   fromCharCode(aImgData[iOffsetY+iOffsetX+1]) +
                   fromCharCode(aImgData[iOffsetY+iOffsetX]);
        }
  
        for (var c = 0; c < iPadding; c++) {
          strPixelRow += String.fromCharCode(0);
        }
  
        strPixelData += strPixelRow;
      } while (--y);
  
      var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
  
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
    var saveAsImage = function (canvas, width, height, type,filename) {
      if ($support.canvas && $support.dataURL) {
        if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
        if (type == undefined) { type = 'png'; }
        filename = filename == undefined||filename.length === 0 ?Date.now()+'.'+type: filename+'.'+type
        type = fixType(type);
  
        if (/bmp/.test(type)) {
          var data = getImageData(scaleCanvas(canvas, width, height));
          var strData = genBitmapImage(data);
  
          saveFile(makeURI(strData, downloadMimedownloadMime),filename);
        } else {
          var strData = getDataURL(canvas, type, width, height);
          saveFile(strData.replace(type, downloadMime),filename);
        }
      }
    };
  
    var convertToImage = function (canvas, width, height, type) {
      if ($support.canvas && $support.dataURL) {
        if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
        if (type == undefined) { type = 'png'; }
        type = fixType(type);
  
        if (/bmp/.test(type)) {
          var data = getImageData(scaleCanvas(canvas, width, height));
          var strData = genBitmapImage(data);
          return genImage(makeURI(strData, 'image/bmp'));
        } else {
          var strData = getDataURL(canvas, type, width, height);
          return genImage(strData);
        }
      }
    };
  
  
    return {
      saveAsImage: saveAsImage,
      saveAsPNG: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, 'png',fileName);
      },
      saveAsJPEG: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, 'jpeg',fileName);
      },
      saveAsGIF: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, 'gif',fileName);
      },
      saveAsBMP: function (canvas, width, height, fileName) {
        return saveAsImage(canvas, width, height, 'bmp',fileName);
      },
  
      convertToImage: convertToImage,
      convertToPNG: function (canvas, width, height) {
        return convertToImage(canvas, width, height, 'png');
      },
      convertToJPEG: function (canvas, width, height) {
        return convertToImage(canvas, width, height, 'jpeg');
      },
      convertToGIF: function (canvas, width, height) {
        return convertToImage(canvas, width, height, 'gif');
      },
      convertToBMP: function (canvas, width, height) {
        return convertToImage(canvas, width, height, 'bmp');
      }
    };
  }();

  const takeScreenShot = (e) => {
    e.preventDefault();
    const screenshotTarget =
      document.body.getElementsByClassName("aquarium")[0];
      html2canvas(screenshotTarget).then((canvas) => {
        return Canvas2Image.saveAsPNG(canvas);
    });
  };

  let [ownedLocales, setLocale] = useState(["default"]);
  let currentLength = 0;
  let shopHidden = true;

  let [coins, setCount] = useState(0);
  let fishes = {
    Boot: {
      coinValue: 0,
    },
    Minnows: {
      coinValue: 1,
    },
    Goldfish: {
      coinValue: 2,
    },
    Clownfish: {
      coinValue: 3,
    },
    Tuna: {
      coinValue: 4,
    },
    Pufferfish: {
      coinValue: 5,
    },
    Koi: {
      coinValue: 6,
    },
    Carp: {
      coinValue: 7,
    },
    Bass: {
      coinValue: 8,
    },
    Shark: {
      coinValue: 9,
    },
  };

  
  const sliderStop = (e) => {
    setNoFish(false);
    let sliderModal = document.getElementsByClassName("slider-modal")[0]
    e.preventDefault();
    let sliderTick = document.getElementsByClassName("slider-tick")[0]
    calculateSlider();
    sliderTick.style.animationPlayState = 'paused'
    setTimeout(() => {
      sliderModal.hidden = true;
      sliderTick.style.animationPlayState = 'running' 
      sliderTick.style.borderColor = "white"
    }, "1000"); 
  }
  
  const calculateSlider = (e) => {
    let sliderTick = document.getElementsByClassName("slider-tick")[0]
    let sliderTickPos = sliderTick.offsetLeft
    // these are positions inside of the green 
    if (sliderTickPos < 140 && sliderTickPos > 86) {
      // if its in the green return multiplier of 2 for coins earned
      sliderTick.style.borderColor = "green"
      setMultiplier(2)
    }
    // if its not, do not multiply coins earned
    
    else  {
      sliderTick.style.borderColor = "red"
    setMultiplier(1)
    }
  }

  const fish = (e) => {
    if (noFishing) return
    setNoFish(true);
    let sliderModal = document.getElementsByClassName("slider-modal")[0]
    sliderModal.hidden = false;
    e.preventDefault();
    let RNG = fishRNG(currentRod);
    switch (RNG) {
      case 0:
        // BOOT
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a boot... Well, at least you caught something...";
        document.getElementsByClassName("aq-boot")[0].hidden = false;
        document.getElementsByClassName("calc-text")[0].innerHTML =
          "The Boot has no monetary value.";
        populateData("Boot");
        break;
      case 1:
        // MINNOWS
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught some minnows... Just small fry...";
        document.getElementsByClassName("aq-minnows")[0].hidden = false;
        populateData("Minnows");
        break;
      case 2:
        // GOLDFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a goldfish... Maybe you can keep it as a pet...";
        document.getElementsByClassName("aq-goldfish")[0].hidden = false;
        populateData("Goldfish");
        break;
      case 3:
        // CLOWNFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a clownfish... What's so funny?";
        document.getElementsByClassName("aq-clownfish")[0].hidden = false;
        populateData("Clownfish");
        break;
      case 4:
        // TUNA
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Tuna... Now you just need a guitar!";
        document.getElementsByClassName("aq-tuna")[0].hidden = false;
        populateData("Tuna");
        break;
      case 5:
        // PUFFERFISH
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Pufferfish... I heard they are getting expensive... must be inflation!";
        document.getElementsByClassName("aq-pufferfish")[0].hidden = false;
        populateData("Pufferfish");
        break;
      case 6:
        // KOI
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Koi... Make sure its the real thing, and not a deKoi!";
        document.getElementsByClassName("aq-koifish")[0].hidden = false;
        populateData("Koi");
        break;
      case 7:
        // CARP
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Carp... don't hurt your wrists pulling it in, wouldn't want CARPAL tunnel!";
        document.getElementsByClassName("aq-carp")[0].hidden = false;
        populateData("Carp");
        break;
      case 8:
        // BASS
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Bass... don't drop it!";
        document.getElementsByClassName("aq-bass")[0].hidden = false;
        populateData("Bass");
        break;
      case 9:
        // SHARK
        document.getElementsByClassName("catch-text")[0].innerHTML =
          "You caught a Shark... We're gonna need a bigger boat...";
        document.getElementsByClassName("aq-shark")[0].hidden = false;
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
    // get length, will be based on the fish
    calculateCoins(name, currentLength);
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
    const tempArray = [...fishObj]; // get a temp array of the fish state array
    const fishIndex = tempArray.findIndex((x) => x.type === name); // find the fish in question, and get its index
    if (tempArray[fishIndex].recordLength < currentLength) {
      tempArray[fishIndex].recordLength = currentLength; // set the new record length
      setFish(tempArray);
    }

    // Populating the HTML
    document.getElementsByClassName("length-text")[0].innerHTML =
      "Length: " + currentLength + "CM";
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
    let result = fishes[speciesOfFish].coinValue * lengthOfFish * currentMultiplier
    setCount((coins += fishes[speciesOfFish].coinValue * lengthOfFish * currentMultiplier));
    document.getElementsByClassName("calc-text")[0].innerHTML =
      "Species Value: " +
      fishes[speciesOfFish].coinValue +
      " * Length Of Fish: " +
      lengthOfFish +
      " * " +
      "Current Multipler: " + currentMultiplier + " = " + result
  };

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
          document.getElementsByClassName("info-pic")[0].src = RealBoot;
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
          document.getElementsByClassName("info-pic")[0].src = RealMinnows;
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
          document.getElementsByClassName("info-pic")[0].src = RealGoldfish;
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
          document.getElementsByClassName("info-pic")[0].src = RealClownfish;
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
          document.getElementsByClassName("info-pic")[0].src = RealTuna;
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
          document.getElementsByClassName("info-pic")[0].src = RealPufferfish;
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
          document.getElementsByClassName("info-pic")[0].src = RealKoi;
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
          document.getElementsByClassName("info-pic")[0].src = RealCarp;
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
          document.getElementsByClassName("info-pic")[0].src = RealBass;
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
          document.getElementsByClassName("info-pic")[0].src = RealShark;
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
              Close
            </div>
          </div>
        </div>
        
        <div hidden={true} className="slider-modal">
          <div className="slider-flex">
          <div className="slider">
            <div className="slider-tick"></div>
          </div>
          <div className="button" onClick={sliderStop}>Catch!</div>
          </div>
        </div>

        <div hidden={true} className="aquarium-modal">
          <h1>Aquarium</h1>
          <div className="aquarium">
            <img hidden={true} src={Boot} className="aq-boot"></img>
            <img hidden={true} src={Minnows} className="aq-minnows"></img>
            <img hidden={true} src={Goldfish} className="aq-goldfish"></img>
            <img hidden={true} src={Clownfish} className="aq-clownfish"></img>
            <img hidden={true} src={Tuna} className="aq-tuna"></img>
            <img hidden={true} src={Pufferfish} className="aq-pufferfish"></img>
            <img hidden={true} src={Koifish} className="aq-koifish"></img>
            <img hidden={true} src={Carp} className="aq-carp"></img>
            <img hidden={true} src={Bass} className="aq-bass"></img>
            <img hidden={true} src={Shark} className="aq-shark"></img>
          </div>
          <div className="gallery-button-flex">
          <div className="button screensh" onClick={takeScreenShot}>Screenshot</div>
          </div>
        </div>
        <div hidden={true} className="gallery-modal">
          <h1>Gallery</h1>
          <div className="gallery-flex">
            <div className="gallery-div">
              <p>
                Boot <br />
                Record Length: <br />
                {fishObj[0].recordLength}cm
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
                {fishObj[1].recordLength}cm
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
                {fishObj[2].recordLength}cm
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
                <br /> {fishObj[3].recordLength}cm
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
                {fishObj[4].recordLength}cm
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
                {fishObj[5].recordLength}cm
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
                {fishObj[6].recordLength}cm
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
                <br /> {fishObj[7].recordLength}cm
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
                <br /> {fishObj[8].recordLength}cm
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
                {fishObj[9].recordLength}cm
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
              <h2 className="equip-header">Equip <br/>Locale:</h2>
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
