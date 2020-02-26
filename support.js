'use strict'
function getGridTop(i, j) {
    return gridSpace + i * (gridSpace + gridHeight)
}

function getGridLeft(i, j) {
    return gridSpace + j * (gridSpace + gridWidth)
}

function layoutInit() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            var grid = $(`#grid-${i}-${j}`)
            grid.css('top', getGridTop(i, j))
            grid.css('left', getGridLeft(i, j))
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            var discard = $(`#discard-${i}-${j}`)
            discard.css('top', getGridTop(i, j))
            discard.css('left', getGridLeft(i, j))
        }
    }
}

function cardInit(card) {
    var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    var cardRank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    var cardColor = ['C', 'D', 'H', 'S']
    for (let i = 0; i < cardColor.length; i++) {
        for (let j = 0; j < cardRank.length; j++) {
            var cardObj = {}
            cardObj.rank = cardValue[j] + cardColor[i]
            cardObj.value = cardValue[j]
            card.push(cardObj)
        }
    }
}

function tableInit(){
    for(let i=0; i<4; i++){
        table[i]=[]
        for(let j=0; j<5; j++){
            table[i].push({value:0, vacant:true})
        }
    }
    table[2][0].vacant=false
    table[3][0].vacant=false
    table[2][4].vacant=false
    table[3][4].vacant=false
}

function discardInit() {
    for(let i=0;i<2;i++){
        discard[i]=[]
        for (let j = 0; j < 2; j++) {
            discard[i].push({value:0, vacant:true})
        }
    }
}

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[random]] = [arr[random], arr[i]]
    }
    return arr
}

function isGameover(){
    if(step==0){
        setTimeout(()=>{alert('game over')},250)
    }
}