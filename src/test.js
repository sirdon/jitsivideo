// import math 
// def isFeasible(mid, cord, n, m):
//     pos = cord[0]
//     elements = 1
//     for i in range(1, n, 1):
//         if (cord[i] - pos >= mid):
//             pos = cord[i]
//             elements += 1
 
//             if (elements == m):
//                 return True
//     return 0
// def keepDistance(n, m, cord):

//     cord.sort(reverse=False)
//     res = -1
//     left = cord[0]
//     right = cord[n - 1]

//     while (left < right):
//         mid = (left + right) / 2
//         if (isFeasible(mid, cord, n, m)):
//             res = max(res, mid)
//             left = mid + 1
//         else:
//             right = mid
//     return res


// def main():
//     n, m = map(int, input().strip().split(' '))
//     cord = list(map(int, input().strip().split(' ')))

//     distance = math.ceil(keepDistance(n, m, cord))
//     print(distance)


// if __name__ == "__main__":
//     main()


let user = {
    name:"john",
    address:{
        city:"skdjf",
        pincode:19
    }
}

let clone = Object.assign({},user)
console.log(user.address===clone.address)
user.address.pincode++;
console.log(clone.address.pincode)


var data =[]
for(var k=0;k<3;k++){
    data[k]=function(){
        console.log(k)
    };
}
data[0]();
data[1]();
data[2]();

function add(){
    let a=0;
    for(let num of arguments){
        a+=num
    }
    return a;
}
console.log(add(1,2))

console.log("a")
setTimeout(()=>{
    console.log("b")
})
console.log("c")

