const fruits = [
    {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
    },
    {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 3,    
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
    },
    {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
    },
    {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
    },
    {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
    }
]
const nomor1 = document.getElementById("nomor1");
const nomor2 = document.getElementById("nomor2");
const nomor3 = document.getElementById("nomor3");
const nomor4 = document.getElementById("nomor4");
const nomor5 = document.getElementById("nomor5");

// --------------------------------------------NOMOR 1-----------------------------------------
const fruitName = [];

for (var i = 0; i< fruits.length; i++){
    fruitName.push(fruits[i]['fruitName']);
}

console.log(fruitName);

nomor1.innerHTML = fruitName;

// --------------------------------------------NOMOR 2-----------------------------------------
const fruitType = [];
const wadah = [];

// masukin fruit type dynamically
for (var i = 0; i< fruits.length; i++){
    if(fruitType.length != 0){
        var cek = false;
        for (var j = 0; j< fruitType.length; j++){
            if(fruitType[j] === fruits[i]['fruitType']){
                cek = true;
                break;
            }else{
                cek = false;
            }
        }
        if(cek == false){
            fruitType.push(fruits[i]['fruitType'])
        }
    }else if(fruitType.length == 0){
        fruitType.push(fruits[i]['fruitType']);
    }
}

for (var j = 0; j<fruitType.length; j++){
    const temp = [];
    for (var i = 0; i< fruits.length; i++){
        if(fruitType[j] == fruits[i]['fruitType']){
            temp.push(fruits[i]);
        }
    }
    wadah.push(temp);
}

nomor2.innerHTML = `Banyak wadah: ${wadah.length}`
for (var i = 0; i<wadah.length; i++){
    const temp = [];
    for(var j = 0; j<wadah[i].length ; j++){
        temp.push(wadah[i][j]['fruitName']);
    }
    var newcontent = document.createElement('p');
    newcontent.innerHTML = `wadah ${fruitType[i]}:${temp}`;
    nomor2.appendChild(newcontent);
}

// --------------------------------------------NOMOR 3-----------------------------------------
for (var i = 0; i<wadah.length; i++){
    var sum = 0;
    for(var j = 0; j<wadah[i].length ; j++){
        sum = sum + wadah[i][j]['stock'];
    }
    var newcontent = document.createElement('p');
    newcontent.innerHTML = `wadah ${fruitType[i]}:${sum}`;
    nomor3.appendChild(newcontent);
}

// --------------------------------------------NOMOR 4-----------------------------------------

nomor4.innerHTML ="Pada kasus diatas terdapat beberapa hal yang janggal yaitu terdapat buat apel dengan ID yang berbeda dan terdapat 3 buah dengan id yang sama."

// --------------------------------------------NOMOR 5-----------------------------------------

const comments = 
[
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                    commentId: 111,
                    commentContent: 'Haai juga hai jugaa'
                    },
                    {
                    commentId: 112,
                    commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                    commentId: 121,
                    commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

function depthOf (object, arrayComment) {
    var level = 1;
    for(var key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            if(object[key].length == undefined){
                arrayComment.push(object[key]);
            }
            var depth = depthOf(object[key], arrayComment) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

const hasil = [];
const totalKomen = depthOf(comments, hasil);
console.log(hasil);

nomor5.innerHTML = `Total komentar adalah ${totalKomen+1}`;
for (var i = 0; i<hasil.length; i++){
    var newcontent = document.createElement('p');
    newcontent.innerHTML = `Berikut adalah komentar id ${hasil[i]['commentId']} :${hasil[i]['commentContent']}`;
    nomor5.appendChild(newcontent);
}