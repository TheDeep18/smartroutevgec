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
      return grid[32][41]; // block A
      break;
    case '2':
      return grid[15][40]; // block B
      break;
    case '3':
      return grid[17][28]; // Block C
      break;
    case '4':
      return grid[7][28] // Block D
      break;
    case '5':
      alert("You can go to E block via F block or D block");
      return;                       // Block E
      break;
    case '6':
      return grid[17][17]  // Block F
      break;
    case '7':
      return grid[15][5]   // Block G
      break;
    case '8':
      return grid[32][5]   // Block H
      break;
    case '9':
      return grid[30][15]  // Block I
      break;
    case '10':
      return grid[40][14] // Block J
      break;
    case '11':
      return grid[42][28] // Block K
      break;
    case '12':
      return grid[31][30] // Block L
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
      fill(204, 204, 32)
      // fill(151, 118, 27)
      // fill(0)
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
  start = grid[0][0]
  end = grid[0][0]
  start.wall = false
  end.wall = false



  // //My added work



//Routes
  routes = [
    grid[46][33],
    grid[46][34],
    grid[46][35],
    grid[46][36],
    grid[46][37],
    grid[46][38],
    grid[46][39],
    grid[46][40],
    grid[46][41],
    grid[46][42],
  ]
  for (let index = 0; index < routes.length; index++) {
    const element = routes[index]
    element.block = true

  }

  //Block A
  blocka = [ 

  ]
  for (let index = 0; index < blocka.length; index++) {
    const element = blocka[index]
    element.wall = true

  }

  // Block B
  blockb = [
    
  ]
  for (let index = 0; index < blockb.length; index++) {
    const element = blockb[index]
    element.wall = true

  }

  // Block C 
  blockc = [

    


  ]

  for (let index = 0; index < blockc.length; index++) {
    const element = blockc[index]
    element.wall = true

  }

  // Block D
  blockd = [
    

  ]
  for (let index = 0; index < blockd.length; index++) {
    const element = blockd[index]
    element.wall = true

  }

  // Block E
  blocke = [
    
  ]
  for (let index = 0; index < blocke.length; index++) {
    const element = blocke[index]
    element.wall = true

  }

  // Block F
  blockf = [
    
  ]


  for (let index = 0; index < blockf.length; index++) {
    const element = blockf[index]
    element.wall = true

  }

  // Block G
  blockg = [

    
  ]
  for (let index = 0; index < blockg.length; index++) {
    const element = blockg[index]
    element.wall = true

  }

  // Block H
  blockh = [
  
  ]

  for (let index = 0; index < blockh.length; index++) {
    const element = blockh[index]
    element.wall = true

  }


  // Block I
  blocki = [
  // //  grid[45][45],
  //  grid[45][35],
  //  grid[45][34],
  //  grid[45][33],
  //  grid[45][32],
  //  grid[45][36],
  //  grid[45][37],
  //  grid[45][38],
  //  grid[45][39],
  //  grid[45][40],
  //  grid[45][41],
  //  grid[45][42],
  //  grid[45][43],

  //  grid[46][32],

  //  grid[47][35],
  //  grid[47][34],
  //  grid[47][33],
  //  grid[47][32],
  //  grid[47][36],
  //  grid[47][37],
  //  grid[47][38],
  //  grid[47][39],
  //  grid[47][40],
  //  grid[47][41],
  //  grid[47][42],
  //  grid[47][43],

  //  grid[46][43],
  ]

  for (let index = 0; index < blocki.length; index++) {
    const element = blocki[index]
    element.wall = true

  }





  // Block J
  blockj = [
    
  ]
  for (let index = 0; index < blockj.length; index++) {
    const element = blockj[index]
    element.wall = true

  }

  // Block K
  blockk = [
   
  ]

  for (let index = 0; index < blockk.length; index++) {
    const element = blockk[index]
    element.wall = true

  }


  // Block L
  blockl = [
    


  ]

  for (let index = 0; index < blockl.length; index++) {
    const element = blockl[index]
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


  background(0)
  // background(255)


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