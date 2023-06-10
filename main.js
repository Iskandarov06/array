let array = [ ]
while (true) {
    let a = prompt("Ismingizni kiriting")
    let massiv = a.split(', ')
    
    if (massiv[0] == 'add') {
        array.push(massiv[1])
    }else if (massiv[0] == 'del') {
        for (let i = 0; i < array.length; i++) {
           if (massiv[1] == array[i]) {
            array.splice(i,1)
           }
        }
    }else if (a == 'stop') {
        break
    }
    console.log(array);
}