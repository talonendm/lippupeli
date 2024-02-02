var clicks = 0;
var timerValue = 0;
var value = 0;
var endclicks = 0;
var doublec = 0;
var movec = 0;
var ptimer;
var clicked = false, clickTimeout = 300;
var clicks2 = 0;
var doublec2 = 0;

let showDebug = false;

var x, y, vx, vy;

// let filePaths = ['ad.png','ae.png','af.png','ag.png','ai.png','al.png','am.png','ao.png','aq.png','ar.png','as.png','at.png','au.png','aw.png','ax.png','az.png','ba.png','bb.png','bd.png','be.png','bf.png','bg.png','bh.png','bi.png','bj.png','bl.png','bm.png','bn.png','bo.png','bq.png','br.png','bs.png','bt.png','bv.png','bw.png','by.png','bz.png','ca.png','cc.png','cd.png','cf.png','cg.png','ch.png','ci.png','ck.png','cl.png','cm.png','cn.png','co.png','cr.png','cu.png','cv.png','cw.png','cx.png','cy.png','cz.png','de.png','dj.png','dk.png','dm.png','do.png','dz.png','ec.png','ee.png','eg.png','eh.png','er.png','es.png','et.png','eu.png','fi.png','fj.png','fk.png','fm.png','fo.png','fr.png','ga.png','gb-eng.png','gb-nir.png','gb-sct.png','gb-wls.png','gb.png','gd.png','ge.png','gf.png','gg.png','gh.png','gi.png','gl.png','gm.png','gn.png','gp.png','gq.png','gr.png','gs.png','gt.png','gu.png','gw.png','gy.png','hk.png','hm.png','hn.png','hr.png','ht.png','hu.png','id.png','ie.png','il.png','im.png','in.png','io.png','iq.png','ir.png','is.png','it.png','je.png','jm.png','jo.png','jp.png','ke.png','kg.png','kh.png','ki.png','km.png','kn.png','kp.png','kr.png','kw.png','ky.png','kz.png','la.png','lb.png','lc.png','li.png','lk.png','lr.png','ls.png','lt.png','lu.png','lv.png','ly.png','ma.png','mc.png','md.png','me.png','mf.png','mg.png','mh.png','mk.png','ml.png','mm.png','mn.png','mo.png','mp.png','mq.png','mr.png','ms.png','mt.png','mu.png','mv.png','mw.png','mx.png','my.png','mz.png','na.png','nc.png','ne.png','nf.png','ng.png','ni.png','nl.png','no.png','np.png','nr.png','nu.png','nz.png','om.png','pa.png','pe.png','pf.png','pg.png','ph.png','pk.png','pl.png','pm.png','pn.png','pr.png','ps.png','pt.png','pw.png','py.png','qa.png','re.png','ro.png','rs.png','ru.png','rw.png','sa.png','sb.png','sc.png','sd.png','se.png','sg.png','sh.png','si.png','sj.png','sk.png','sl.png','sm.png','sn.png','so.png','sr.png','ss.png','st.png','sv.png','sx.png','sy.png','sz.png','tc.png','td.png','tf.png','tg.png','th.png','tj.png','tk.png','tl.png','tm.png','tn.png','to.png','tr.png','tt.png','tv.png','tw.png','tz.png','ua.png','ug.png','um.png','us.png','uy.png','uz.png','va.png','vc.png','ve.png','vg.png','vi.png','vn.png','vu.png','wf.png','ws.png','xk.png','ye.png','yt.png','za.png','zm.png','zw.png'];
// let filePaths = ['ad.png', 'ae.png', 'af.png', 'ag.png', 'ai.png', 'al.png', 'am.png', 'ao.png', 'aq.png', 'ar.png'];
let images = []; // Array to store loaded images
let selected_flag = 0;

//let cc = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar'];
// let cc = ['ad','ae','af','ag','ai','al','am','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','eu','fi','fj','fk','fm','fo','fr','ga','gb-eng','gb-nir','gb-sct','gb-wls','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy','hk','hm','hn','hr','ht','hu','id','ie','il','im','in','io','iq','ir','is','it','je','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mf','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz','tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','tz','ua','ug','um','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','xk','ye','yt','za','zm','zw'];
let cc = ['ad','ae','af','ag','ai','al','am','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be'];
let howmany = 5; // 3

let selectedCountry;
let randomCountries = [];

let countriesData;

let select_language = 'fi';


function preload() {

  // Load the JSON file
  countriesData = loadJSON('data/countrycapital.json');

  // Load images based on file names
  for (let i = 0; i < cc.length; i++) {
    let img = loadImage('flags/' + cc[i] + ".png");
    images.push(img);
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  setInterval(timeIt, 100); // https://editor.p5js.org/denaplesk2/sketches/ryIBFP_lG

  resetDrag();

  console.log(countriesData);

  // Display the list of PNG file names in the console
  //console.log('PNG file names:', filePaths);



  // Select a random country code
  selectedCountry = random(cc);



  let possibleChoices = cc.filter(code => code !== cc);


  // Select three other random country codes
  randomCountries = selectRandom(possibleChoices, howmany);


    // Display the selected country codes
    console.log("Selected Country:", selectedCountry);
    console.log("Random Countries:", randomCountries);


    console.log(getCapital("ae", "en"));

    console.log(getCountry("ae", select_language));

}


// Function to get the capital based on country code and language
function getCapital(countryCode, language) {
  const capital = countriesData[countryCode]?.[language]?.capital;
  return capital || "Capital not found for the specified country code and language";
}

function getCountry(countryCode, language) {
  const country = countriesData[countryCode]?.[language]?.country;
  return country || "Capital not found for the specified country code and language";
}

function draw() {
  background(value, 10, 10);




  vx = vx * 0.9;
  vy = vy * 0.9;

  x = x + vx;
  y = y + vy;


  if (x > width / 2 | x < -width / 2) {
    selected_flag = (selected_flag + 1) % 10;
    resetDrag();
  }


  image(images[selected_flag], width / 2 - images[selected_flag].width / 2 + x, 90 - images[selected_flag].height / 2 + y);


  if (showDebug) {

    rectMode(CENTER);
    fill(200, 60, 90);
    rect(width * 0.5, height * 0.5, 280, 72, 7);
    fill(0, 0, 100);
    textSize(27);
    textAlign(CENTER, CENTER);
    textFont('Avenir');
    let permin = round(clicks * 600 / timerValue);

    text('click: ' + clicks + " OR " + clicks2 + "TIME" + nfc(timerValue / 10, 1) + "\nperMin:" + permin, width * 0.5, height * 0.5 + 2);
    text('touch move: ' + movec, width * 0.5, height * 0.35 + 2);
    text('double: ' + doublec + " or " + doublec2, width * 0.5, height * 0.65 + 2);
    text('end: ' + endclicks, width * 0.5, height * 0.8 + 2);

  }

  fill(200, 60, 90);
  // Display the JSON data as text
  textAlign(LEFT);
  textSize(14);
  //fill(0); // Set text color to black
  // text(JSON.stringify(countriesData, null, 2), 10, 20);
  var selectedValue = cc[selected_flag];
  text(getCountry(selectedValue, select_language), width / 2, 140);

  text(getCapital(selectedValue, select_language), width / 2, 180);

}

// TOUCH ------------------------------------------------------------
// full screen: https://editor.p5js.org/slow_izzm/sketches/lgzf4tJk6
function touchStarted() {
  let fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
  value = 0;
  if (ptimer == timerValue) {
    // double
    doublec = doublec + 1; //# // within selected time 0.1sec
  } else {
    clicks = clicks + 1;

    

  }
  // https://stackoverflow.com/questions/51144762/p5-js-mousepressed-works-but-doublepressed-doesnot
  ptimer = timerValue;
  if (!clicked) { //# https://stackoverflow.com/questions/51144762/p5-js-mousepressed-works-but-doublepressed-doesnot
    clicked = true;
    setTimeout(function () {
      if (clicked) {
        console.log("single click");
        clicked = false;
        //single ClickStuff
        clicks2 = clicks2 + 1;
      }
    }, clickTimeout);
  } else {
    clicked = false;
    console.log("double click");
    //double click Stuff
    doublec2 = doublec2 + 1;


    // cancel;
    selected_flag = (selected_flag + 1) % 10;


  }
}

function touchEnded() {
  value = 50;
  // Clean code and post answer here: https://github.com/processing/p5.js/issues/1815

  // without this double clicks:
  if (event.type != 'mouseup') { // nicolasbaez commented 20 days ago at https://github.com/processing/p5.js/issues/1815
    //your code :)

    endclicks = endclicks + 1;
  }


}
// TOUCH MOVED ------------------------------------------------------
function touchMoved() {
  movec = movec + 1;

  vx = vx + (mouseX - pmouseX) / 10;
  vy = vy + (mouseY - pmouseY) / 10;


}

// this function fires with any double click anywhere
//function doubleClicked() {
//	doublec = doublec + 1;
//}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function timeIt() {

  timerValue++;

}
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};

function resetDrag() {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}


// Function to select n random elements from an array
function selectRandom(arr, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let randomIndex = floor(random(arr.length));
    result.push(arr.splice(randomIndex, 1)[0]);
  }
  return result;
}