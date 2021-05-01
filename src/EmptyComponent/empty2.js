var obj = {
    a: {
        list: [
            { a: 0 }, { id: 1 }
        ]
    },
    b: {
        list: [
            { a: 0 }, { id: 2 }
        ]
    },
    c: {
        list: [
            { a: 0 }, { id: 3 }
        ]
    }
}

for (item in obj) {
    obj[item].list.filter((element) => {
        // проверить имеет ли element ключ id и вернуть массив из значений id 
    })
}