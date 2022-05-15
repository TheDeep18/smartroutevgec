function removeFromArray(arr, elt) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1)
    }
  }
}

function heuristic(a, b) {
  var d = dist(a.i, a.j, b.i, b.j);
  // var d = abs(a.i - b.i) + abs(a.j - b.j)
  return d;
}


function getStartBlockCordinate(selectedObject) {
  start = getBlockCordinate(selectedObject.value)
  // alert(start.i) 
}

function getEndBlockCordinate(selectedObject) {
  end = getBlockCordinate(selectedObject.value)
  // alert(end.i)

}

//Get the button:
mybutton = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
  } else {
    // mybutton.style.display = "none";
  }
}

function showDirectionClick() {
  // alert("inside")
  openSet = []
  closedSet = []
  exitDraw = false
  openSet.push(start)

  while (!exitDraw) {
    draw()
  }
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;

}






function getBlockCordinate(selectedBlock) {
  switch (selectedBlock) {
    case '1':
      return grid[34][58] ; // block A done
      break;
    case '2':
      return grid[18][58]; // block B done
      break;
    case '3':
      return grid[18][47]; // Block C done
      break;
    case '4':
      return grid[4][47]// Block D done
      break;
    case '5':
      alert("You can go to E block via F block or D block");
      return;                       // Block E
      break;
    case '6':
      return grid[18][33]  // Block F done
      break;
    case '7':
      return grid[18][21]   // Block G done
      break;
    case '8':
      return grid[32][22]   // Block H done
      break;
    case '9':
      return grid[32][33]  // Block I done
      break;
    case '10':
      return grid[45][33] // Block J done
      break;
    case '11':
      return grid[45][47] // Block K done
      break;
    case '12':
      return grid[33][47] // Block L done
      break;
    case '13':
      return grid[33][11] // Block M done
      break;
    case '14':
      return grid[33][11] // Block N done
      break;
    case '15':
      return grid[4][8] // Block BH1 done
      break; 
    case '16':
      return grid[7][7] // Block BH2 done
      break;
    case '17':
      return grid[54][47] // Block GH1 DONE
      break;
    case '18':
      return grid[51][27] // Block LIB done
      break;
    case '19':
      return grid[48][22] // Block WORKSHOP done
      break;

    default:
      break;
  }
}


var cols = 60;
var rows = 60;
var grid = new Array(cols);

var openSet = []
var closedSet = []
var start;
var end;
var w, h
var path = [];
var exitDraw = false;
// var canvas = document.getElementById('responsiveCanvas');
// var heightRatio = 1.5;
// canvas.height = canvas.width * heightRatio;


function Spot(i, j) {
  this.i = i
  this.j = j
  this.f = 0
  this.g = 0
  this.h = 0
  this.neighbors = []
  this.previous = undefined;
  this.wall = false;
  this.block = false

  // if (random(1) < 0.2) {
  //   this.wall = true
  // }

  this.show = function (col) {
    fill(col);
    if (this.wall) {
      // fill(204, 204, 32)
      // fill(151, 118, 27)
      // fill(0)
      fill(255)
    }
    // if (this.block) {
    //   // fill(0, 0, 0)
    //   // fill(0)
    //   fill(204, 204, 32)
    // }
    noStroke();
    rect(this.i * w, this.j * h, w - 1, h - 1)

  }

  this.addNeighbors = function (grid) {
    var i = this.i
    var j = this.j
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j])
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j])
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1])
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1])
    }
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1])
    }
    if (i < cols - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][j - 1])
    }
    if (i > 0 && j > rows - 1) {
      this.neighbors.push(grid[i - 1][j + 1])
    }
    if (i < cols - 1 && j < rows - 1) {
      this.neighbors.push(grid[i + 1][j + 1])
    }
  }
}


function setup() {

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  windowResized()
  // alert("setup")
  createCanvas(330, 330);
  pixelDensity(1)
  console.log("A*");


  w = width / cols
  h = height / rows


  //Making a 2D array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j)
    }
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }



  // start = grid[0][0]
  // end = grid[cols - 1][rows - 1]
  start = grid[34][58]
  end = grid[34][58]
  start.wall = false
  end.wall = false



  // //My added work


  routes = [ 
    //Route A-L
    grid[33][46],
    grid[33][48],
    grid[33][49],
    grid[33][50],
    grid[33][51],
    grid[33][52],
    grid[33][53],
    grid[33][54],
    grid[33][55],
    grid[33][56],
    grid[33][57],
    grid[33][58],
    grid[33][59],

    grid[34][59],

    // grid[35][48],
    grid[35][49],
    grid[35][50],
    grid[35][51],
    grid[35][52],
    grid[35][53],
    grid[35][54],
    grid[35][55],
    grid[35][56],
    grid[35][57],
    // grid[35][58],
    grid[35][59],
    grid[36][50],
    grid[36][51],
    grid[37][51],
    grid[37][52],
    grid[38][52],
    grid[38][53],
    grid[39][53],
    grid[39][54],
    grid[40][54],
    grid[40][55],
    // grid[40][53],
    // grid[40][54],

    //Route L-K

    grid[34][46],
    grid[35][46],
    grid[36][46],
    grid[37][46],
    grid[38][46],
    grid[39][46],
    grid[40][46],
    grid[41][46],
    grid[42][46],
    grid[43][46],
    grid[44][46],
    grid[45][46],
    grid[46][46],

    grid[46][47],

    // grid[35][48],
    grid[36][48],
    grid[37][48],
    grid[38][48],
    grid[39][48],
    grid[40][48],
    grid[41][48],
    grid[42][48],
    grid[43][48],
    grid[44][48],
    grid[45][48],
    grid[46][48],

    //Route L-C
    grid[19][46],
    grid[20][46],
    grid[21][46],
    grid[22][46],
    grid[23][46],
    grid[24][46],
    grid[25][46],
    grid[26][46],
    grid[27][46],
    grid[28][46],
    grid[29][46],
    grid[30][46],
    grid[31][46],

    grid[19][48],
    grid[20][48],
    grid[21][48],
    grid[22][48],
    grid[23][48],
    grid[24][48],
    grid[25][48],
    grid[26][48],
    grid[27][48],
    grid[28][48],
    grid[29][48],
    grid[30][48],
    grid[31][48],
    grid[32][48],

    //Route C-D
    grid[3][46],
    grid[4][46],
    grid[5][46],
    grid[6][46],
    grid[7][46],
    grid[8][46],
    grid[9][46],
    grid[10][46],
    grid[11][46],
    grid[12][46],
    grid[13][46],
    grid[14][46],
    grid[15][46],
    grid[16][46],
    grid[17][46],

    grid[3][47],

    grid[3][48],
    grid[4][48],
    grid[5][48],
    grid[6][48],
    grid[7][48],
    grid[8][48],
    grid[9][48],
    grid[10][48],
    grid[11][48],
    grid[12][48],
    grid[13][48],
    grid[14][48],
    grid[15][48],
    grid[16][48],
    grid[17][48],

    //Route B-C
    grid[17][49],
    grid[17][50],
    grid[17][51],
    grid[17][52],
    grid[17][53],
    grid[17][54],
    grid[17][55],
    grid[17][56],
    grid[17][57],
    grid[17][58],
    grid[17][59],

    grid[18][59],

    grid[19][49],
    grid[19][50],
    grid[19][51],
    grid[19][52],
    grid[19][53],
    grid[19][54],
    grid[19][55],
    grid[19][56],
    grid[19][57],
    grid[19][58],
    grid[19][59],

    //Route C-F
    grid[17][34],
    grid[17][35],
    grid[17][36],
    grid[17][37],
    grid[17][38],
    grid[17][39],
    grid[17][40],
    grid[17][41],
    grid[17][42],
    grid[17][43],
    grid[17][44],
    grid[17][45],

    grid[19][34],
    grid[19][35],
    grid[19][36],
    grid[19][37],
    grid[19][38],
    grid[19][39],
    grid[19][40],
    grid[19][41],
    grid[19][42],
    grid[19][43],
    grid[19][44],
    grid[19][45],

    //Route F-G
    grid[17][20],
    grid[17][21],
    grid[17][22],
    grid[17][23],
    grid[17][24],
    grid[17][25],
    grid[17][26],
    grid[17][27],
    grid[17][28],
    grid[17][29],
    grid[17][30],
    // grid[17][31],
    grid[17][32],
    grid[17][33],

    grid[18][20],

    grid[19][20],
    grid[19][21],
    grid[19][22],
    grid[19][23],
    grid[19][24],
    grid[19][25],
    grid[19][26],
    grid[19][27],
    grid[19][28],
    grid[19][29],
    grid[19][30],
    grid[19][31],
    grid[19][32],

    //Route F-I
    grid[20][32],
    grid[21][32],
    grid[22][32],
    grid[23][32],
    grid[24][32],
    grid[25][32],
    grid[26][32],
    grid[27][32],
    grid[28][32],
    grid[29][32],
    grid[30][32],
    grid[31][32],

    grid[20][34],
    grid[21][34],
    grid[22][34],
    grid[23][34],
    grid[24][34],
    grid[25][34],
    grid[26][34],
    grid[27][34],
    grid[28][34],
    grid[29][34],
    grid[30][34],
    grid[31][34],

    //Route I-J
    // grid[33][32],
    grid[34][32],
    grid[35][32],
    grid[36][32],
    grid[37][32],
    grid[38][32],
    grid[39][32],
    grid[40][32],
    grid[41][32],
    grid[42][32],
    grid[43][32],
    grid[44][32],
    grid[45][32],
    grid[46][32],

    grid[46][33],
    
    grid[33][34],
    grid[34][34],
    grid[35][34],
    grid[36][34],
    grid[37][34],
    grid[38][34],
    grid[39][34],
    grid[40][34],
    grid[41][34],
    grid[42][34],
    grid[43][34],
    grid[44][34],
    grid[45][34],
    grid[46][34],

    //Route I-H
    grid[31][21],
    grid[31][22],
    grid[31][23],
    grid[31][24],
    grid[31][25],
    grid[31][26],
    grid[31][27],
    grid[31][27],
    grid[31][28],
    grid[31][29],
    grid[31][30],
    grid[31][31],

    grid[32][21],

    grid[33][21],
    grid[33][22],
    grid[33][23],
    grid[33][24],
    grid[33][25],
    grid[33][26],
    grid[33][27],
    grid[33][27],
    grid[33][28],
    grid[33][29],
    grid[33][30],
    grid[33][31],

    //Route I-L
    grid[31][35],
    grid[31][36],
    grid[31][37],
    grid[31][38],
    grid[31][39],
    grid[31][40],
    grid[31][41],
    grid[31][42],
    grid[31][43],
    grid[31][44],
    grid[31][45],

    grid[33][35],
    grid[33][36],
    grid[33][37],
    grid[33][38],
    grid[33][39],
    grid[33][40],
    grid[33][41],
    grid[33][42],
    grid[33][43],
    grid[33][44],
    grid[33][45],

    //Route F-BH1
    // grid[12][13],
    grid[12][14],
    grid[12][15],
    grid[12][16],
    grid[12][17],
    grid[12][18],
    grid[12][19],
    grid[12][20],
    grid[12][21],
    grid[12][22],
    grid[12][23],
    grid[12][24],
    grid[12][25],
    grid[12][26],
    grid[13][26],
    grid[13][27],
    grid[14][27],
    grid[14][28],
    grid[15][28],
    grid[15][29],
    grid[16][29],
    grid[16][30],
    // grid[12][27],
    // grid[12][28],
    // grid[12][29],
    // grid[13][29],
    // grid[14][29],
    // grid[15][29],
    // grid[16][29],

    // grid[10][13],
    // grid[10][14],
    grid[10][15],
    grid[10][16],
    grid[10][17],
    grid[10][18],
    grid[10][19],
    grid[10][20],
    grid[10][21],
    grid[10][22],
    grid[10][23],
    grid[10][24],
    grid[10][25],
    grid[10][26],
    grid[10][27],
    grid[11][27],
    grid[11][28],
    grid[12][28],
    grid[12][29],
    grid[13][29],
    grid[13][30],
    grid[14][30],
    grid[14][31],
    grid[15][31],
    grid[15][32],
    grid[16][32],



    grid[4][6],
    grid[5][6],
    grid[6][6],
    grid[4][7],
    // grid[5][7],
    // grid[5][8],
    grid[6][8],
    grid[6][9],
    grid[7][9],
    grid[7][10],
    grid[8][10],
    grid[8][11],
    grid[9][11],
    grid[9][12],
    grid[10][12],
    grid[10][13],
    grid[11][13],
    grid[11][14],

    grid[3][7],
    grid[3][8],
    grid[3][9],
    grid[4][9],
    grid[4][10],
    grid[5][10],
    grid[5][11],
    grid[6][12],
    grid[6][11],
    grid[7][12],
    grid[7][13],
    grid[8][13],
    grid[8][14],
    grid[9][15],
    grid[9][14],

    //Route L-N/M and W/Lib
    grid[34][29],
    grid[34][30],
    grid[35][29],
    grid[35][28],
    grid[36][28],
    grid[36][27],
    grid[37][27],
    grid[37][26],
    grid[38][26],
    grid[38][25],
    grid[39][25],
    grid[39][24],
    grid[39][22],
    grid[39][21],
    grid[38][21],
    grid[38][20],
    grid[37][20],
    grid[37][19],
    grid[36][19],
    grid[36][18],
    grid[35][18],
    grid[35][17],
    grid[34][17],
    grid[34][16],
    grid[33][16],
    grid[33][15],
    grid[32][15],
    grid[32][14],
    grid[32][13],
    grid[32][12],
    // grid[32][11],
    grid[32][10],

    grid[33][10],

    grid[40][24],
    grid[40][23],
    grid[40][22],
    grid[41][23],
    // grid[41][22],
    // grid[40][22],
    // grid[42][22],
    // grid[42][21],
    // grid[43][21],
    // grid[43][20],

    grid[35][31],
    grid[36][31],
    grid[36][30],
    grid[37][30],
    grid[37][29],
    grid[38][29],
    grid[38][28],
    grid[39][28],
    grid[39][27],
    grid[40][27],
    grid[40][26],
    grid[41][26],
    grid[41][25],
    grid[42][25],
    grid[42][24],
    grid[43][25],
    grid[43][24],
    grid[43][23],
    // grid[43][22],
    grid[43][21],
    grid[43][20],
    grid[43][19],
    grid[43][18],
    grid[43][17],
    grid[43][16],
    grid[43][15],
    grid[43][14],
    grid[43][13],
    grid[43][12],
    grid[43][11],
    grid[42][11],
    grid[41][11],
    // grid[41][25],
    // grid[41][24],
    // grid[41][23],
    // grid[41][22],
    grid[41][21],
    grid[41][20],
    grid[41][19],
    grid[41][18],
    grid[41][17],
    grid[41][16],
    grid[41][15],
    grid[41][14],
    grid[41][13],
    grid[41][12],
    grid[40][20],
    grid[40][19],
    grid[39][19],
    grid[39][18],
    grid[38][18],
    grid[38][17],
    grid[37][17],
    grid[37][16],
    grid[36][16],
    grid[36][15],
    grid[35][15],
    grid[35][14],
    grid[34][14],
    grid[34][13],
    grid[34][12],
    grid[34][11],
    grid[34][10],
    // grid[35][13],
    // grid[35][12],

    //Route N - Bh2
    grid[31][10],
    grid[30][10],
    grid[29][10],
    grid[28][10],
    grid[27][10],
    grid[26][10],
    grid[25][10],
    grid[24][10],
    grid[23][10],
    grid[23][9],
    grid[23][9],
    grid[22][9],
    grid[21][9],
    grid[20][9],
    grid[19][9],
    grid[18][9],
    grid[17][9],
    grid[17][8],
    grid[16][8],
    grid[15][8],
    grid[14][8],
    grid[14][7],
    grid[13][7],
    grid[12][7],
    grid[11][7],
    grid[10][7],
    grid[10][6],
    grid[9][6],
    grid[9][5],
    grid[8][5],
    grid[7][5],
    grid[7][6],
    // grid[7][7],
    // grid[6][7],
    // grid[7][7],

    grid[31][12],
    grid[30][12],
    grid[29][12],
    grid[28][12],
    grid[27][12],
    grid[26][12],
    grid[25][12],
    grid[24][12],
    grid[23][12],
    grid[22][12],
    grid[22][11],
    grid[21][11],
    grid[20][11],
    grid[19][11],
    grid[18][11],
    grid[17][11],
    grid[16][11],
    grid[16][10],
    grid[15][10],
    grid[14][10],
    grid[13][10],
    grid[13][9],
    grid[12][9],
    grid[11][9],
    grid[10][9],
    grid[9][9],
    // grid[9][8],
    grid[7][8],
    grid[8][8],
    grid[8][9],
    // grid[8][7],

    // Route A-L-Gh1
    grid[36][57],
    grid[37][57],
    grid[38][57],
    grid[39][57],
    grid[39][56],
    grid[40][56],
    grid[40][55],
    // grid[41][55],
    // grid[41][54],
    grid[37][49],
    grid[38][49],
    grid[38][50],
    grid[39][50],
    grid[39][51],
    grid[40][51],
    grid[40][52],
    grid[41][52],
    grid[41][53],
    grid[42][53],
    grid[42][54],
    grid[43][54],
    grid[44][54],
    grid[45][54],
    grid[46][54],
    grid[46][53],
    grid[47][53],
    grid[47][52],
    grid[48][52],
    grid[48][51],
    grid[49][51],
    grid[49][50],
    grid[50][50],
    grid[50][49],
    grid[50][48],
    grid[50][47],
    grid[50][46],
    grid[50][45],
    grid[50][44],
    grid[50][43],
    grid[50][42],
    grid[50][41],
    grid[50][40],
    grid[50][39],
    grid[50][38],
    grid[50][37],
    grid[50][36],
    grid[50][35],
    grid[50][34],
    grid[50][33],
    grid[50][32],
    grid[50][31],
    grid[50][30],
    grid[50][29],
    grid[49][29],
    grid[48][29],
    grid[47][29],
    // grid[50][28],
    grid[50][27],
    grid[49][27],
    grid[47][23],
    // grid[47][22],
    grid[44][21],
    grid[45][21],
    grid[46][21],
    grid[44][23],
    grid[45][23],
    grid[46][23],
    grid[47][21],
    grid[48][21],
    grid[49][21],
    grid[49][22],
    grid[49][23],
    grid[49][24],
    grid[49][25],
    grid[49][26],
    grid[49][26],
    grid[47][24],
    grid[47][25],
    grid[47][26],
    grid[47][27],
    grid[47][28],
    grid[50][26],
    grid[51][26],
    grid[52][26],
    // grid[51][49],
    // grid[51][48],
    grid[52][45],
    grid[52][46],
    // grid[52][48],
    // grid[52][47],
    grid[52][46],
    grid[52][45],
    grid[52][44],
    grid[52][43],
    grid[52][42],
    grid[52][41],
    grid[52][40],
    grid[52][39],
    grid[52][38],
    grid[52][37],
    grid[52][36],
    grid[52][35],
    grid[52][34],
    grid[52][33],
    grid[52][32],
    grid[52][31],
    grid[52][30],
    grid[52][29],
    grid[52][28],
    grid[52][27],
    grid[52][26],
    // grid[53][47],
    grid[53][46],
    grid[54][46],
    grid[55][46],
    grid[55][47],
    grid[55][48],
    grid[54][48],

    grid[36][59],
    grid[37][59],
    grid[38][59],
    grid[39][59],
    grid[40][59],
    grid[40][58],
    grid[41][58],
    grid[41][57],
    grid[42][57],
    grid[42][56],
    grid[43][56],
    grid[44][56],
    grid[45][56],
    grid[46][56],
    grid[47][56],
    grid[47][55],
    grid[48][55],
    grid[48][54],
    grid[49][54],
    grid[49][53],
    grid[50][53],
    grid[50][52],
    grid[51][52],
    grid[51][51],
    grid[52][51],
    grid[52][50],
    grid[53][50],
    grid[53][49],
    grid[54][49],
    grid[54][48],







  ]
  for (let index = 0; index < routes.length; index++) {
    const element = routes[index]
    element.wall = true

  }






  







  openSet.push(start);


  console.log(grid);


}

function draw() {
  // alert("draw")

  if (openSet.length > 0) {

    var winner = 0
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }

    var current = openSet[winner]

    if (current === end) {

      noLoop()
      exitDraw = true
      console.log("Done")
    }

    removeFromArray(openSet, current)

    closedSet.push(current)

    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];

      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        var tempG = current.g + 1;

        var newPath = false
        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true
          }
        } else {
          neighbor.g = tempG;
          newPath = true
          openSet.push(neighbor);
        }

        if (newPath) {
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h
          neighbor.previous = current;
        }



      }
      // neighbor.g = current.g+1
    }


    //We can keep going
  } else {
    console.log("No solution");
    // alert("No solution")
    noLoop()
    return;
    //no solution
  }


  // background(0)
  background(255)


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++)
      grid[i][j].show(color(255, 255, 255))
  }


  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 255, 255))
  }

  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(color(255, 255, 255))
  }



  //Find the path
  path = []
  var temp = current;
  path.push(temp)
  while (temp.previous) {
    path.push(temp.previous)
    temp = temp.previous;
  }


  for (var i = 0; i < path.length; i++) {
    path[i].show(color(0, 255, 0))
  }
}