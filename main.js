'use strict'

var gridWidth = 96
var gridHeight = 133.5
var gridSpace = 25

var cardDeck=[]
var cardShuffled=[]
var cardDiscard=[]
var table=[]
var discard=[]
var step=16
var cardToPlace
var score=0


$(document).ready(function () {
    layoutInit()
    tableInit()
    discardInit()
    cardInit(cardDeck)
    cardShuffled=shuffle(cardDeck)
    showDeck()
    
    $('.grid').on('click', function(elem){
        palceCard(elem)
    })

    $('.discard').on('click', function(elem){
        discardCard(elem)
    })
    // $('.grid').on('click',function(elem){
    //     $(`#${$(this).attr('id')}`).html(`${$(this).attr('id')}`)
    // })
    
    //$('.deck').on('click',showDeck)
})

function showDeck(){
    cardToPlace = cardShuffled.shift()
    $('.deck').html(cardToPlace.rank)
}

function palceCard(elem) {
    var row = parseInt(elem.target.id.slice(-3,-2))
    var col = parseInt(elem.target.id.slice(-1))
    
    if(table[row][col].vacant){
        
        $(`#grid-${row}-${col}`).html(cardToPlace.rank+' '+cardToPlace.value)
        $(`#grid-${row}-${col}`).css("background-color","rgba(255,255,255,0.8)")
        $(`#grid-${row}-${col}`).css("border","solid")

        table[row][col].value=cardToPlace.value
        table[row][col].vacant=false
        showDeck()
        step--
        console.log(row+','+col+'='+table[row][col].value)
        console.log('step: '+step)
        //didnt take ace into account
        //score=calcScore(calcPointRow())+calcScore(calcPointCol())
        score=calcScore(calcPointRowAce())+calcScore(calcPointColAce())
        console.log('score: '+score)
        $('#score').text(score)
        isGameover()
    }
}

function discardCard(elem){
    var row = parseInt(elem.target.id.slice(-3,-2))
    var col = parseInt(elem.target.id.slice(-1))
    
    if(discard[row][col].vacant){
        
        $(`#discard-${row}-${col}`).html(cardToPlace.rank+' '+cardToPlace.value)
        $(`#discard-${row}-${col}`).css("background-color","rgba(255,255,255,0.8)")
        $(`#discard-${row}-${col}`).css("border","solid")

        discard[row][col].value=cardToPlace.value
        discard[row][col].vacant=false
        showDeck()
    }
}

function calcPointCol(){
    
    var pointCol=[0,0,0,0,0]
    for(let j=0;j<5;j++){
        for (let i = 0; i < 4; i++) {
            if(table[i][j].vacant){
                pointCol[j] = -1 //-1 means not a vaild row or colum
                break
            }
            pointCol[j]+=table[i][j].value
        }
    }
    console.log('pointCol: '+pointCol)
    return pointCol
}

function calcPointRow(){

    var pointRow=[0,0,0,0]
    for(let i=0;i<4;i++){
        for (let j = 0; j < 5; j++) {
            if(table[i][j].vacant){
                pointRow[i] = -1 //-1 means not a vaild row or colum
                break
            }
            pointRow[i]+=table[i][j].value
        }
    }
    console.log('pointRow: '+pointRow)
    return pointRow
}


function calcScore(arr) {
    
    score=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=='ace'){
            score+=10
        }else if(arr[i]==-1 || arr[i]>21){
            score+=0
        }else if(arr[i]<17){
            score+=1
        }else{
            switch (arr[i]) {
            case 21: score+= 7 
                continue
            case 20: score+= 5 
                continue
            case 19: score+= 4 
                continue
            case 18: score+= 3
                continue
            case 17: score+= 2 
                continue
            }
        }  
    }   
    return score
}