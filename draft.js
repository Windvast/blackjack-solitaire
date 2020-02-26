function calcPointRowAce(){
    debugger
    let ace=0
    var pointRow=[0,0,0,0]
    for(let i=0;i<4;i++){
        ace=0

        for (let j = 0; j < 5; j++) {
            if(table[i][j].vacant){
                pointRow[i] = -1 //-1 means not a vaild row or colum
                break
            }
            if(table[i][j].value==1){
                ace ++
            }
            pointRow[i]+=table[i][j].value
        }

        if(pointRow[i]!==-1&&ace>0){
            if(pointRow[i]==11){
                pointRow[i]='ace'
            }else if(pointRow[i]<11){
                pointRow[i]+=10
            }
        }
    }
    console.log('pointRow: '+pointRow)
    return pointRow
}

function calcPointColAce(){
    debugger
    let ace=0
    var pointCol=[0,0,0,0,0]
    for(let j=0;j<5;j++){
        ace=0
        for (let i = 0; i < 4; i++) {
            if(table[i][j].vacant){
                pointCol[j] = -1 //-1 means not a vaild row or colum
                break
            }
            if(table[i][j].value==1){
                ace++
            }
            pointCol[j]+=table[i][j].value
        }

        if(pointCol[j]!==-1&&ace>0){
            if(pointCol[j]==11){
                pointCol[j]='ace'
            }
            else if(pointCol[i]<11){
                pointCol[j]+=10
            }
        }
    }
    console.log('pointCol: '+pointCol)
    return pointCol
}