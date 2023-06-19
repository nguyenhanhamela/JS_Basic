//Bài 1: viết hàm kiểm tra một số có phải số nguyên tố hay không? hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải 
function Prime(a) {
    if (a < 0) {
        return false
    } else if (a === 1) {
        return false
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                console.log("da vao day");
                return false
            }
        } 
        return true
    }
}

console.log("so nguyen to: " + Prime(3));





/*Bài 4: (khó) viết hàm kiểm tra một chuỗi có chứa chuỗi con hay không, 
hàm này nhận tham số là 1 chuỗi cha và 1 chuỗi con, 
trả lại true nếu chuỗi con có xuất hiện trong chuỗi cha, 
nếu ngược lại thì trả lại false. (không được dùng các hàm include của string) 
ví dụ: chuỗi cha là "abcdef" , chuỗi con là "bcd" => thì có nghĩa là chuỗi cha có chứa chuỗi con */

function CheckStringInString(parent, child) {
    let length_P = parent.length
    let length_C = child.length
    for (let i = 0; i <= (length_P - length_C); i++) {
        let text = parent.slice(i, i + length_C)
        if (text === child) {
            return true
        }
    }
    return false
}

console.log(CheckStringInString("abchgjfhfgefbcd", "bcd"));

/* Bài 5: viết hàm tính ước chung lớn nhất của 2 số, hàm nhận đầu vào là 2 số tự nhiên dương, 
trả lại ước chung lớn nhất của 2 số đó. 
x là ước chung của a và b nếu a và b đều chia hết cho x  
bài này yêu cầu tìm số lớn nhất trong các ước chung */

function Compare(num_1, num_2) {
    let max = num_1;
    let min = num_2;
    if (num_1 >= num_2) {
        max = max
        min = min
    } else {
        max = num_2
        mim = num_1
    }
    return min;
}

function Divisor(a, b) {
    let d = Compare(a, b)
    let DivisorMax;
    for (let i = d; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return DivisorMax = i;
        }
    }
}
console.log(Divisor(14, 42));

/*
Bài 6: viết chương trình in ra 1 số dưới dạng tích của các số nguyên tố. ví dụ: 20 = 2 x 2 x 5  
bài này cần kết quả bài 1 và cách sử dụng vòng lặp thích hợp  
*/
// function TimUoc(number) {
//     let uoc_of_mumber = []
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0 && Prime(i)) {
//             uoc_of_mumber.push(i)
//         }
//     } return uoc_of_mumber;
// }

// function multiplication(a) {
//     var prime = Prime(a)
//     var tich = "";
//     if (prime === true) {
//        return tich = a;
//     } else {
//         let uoc_a = TimUoc(a)
//         //console.log(uoc_a);
//         const lenght = uoc_a.length;
//         for(let i = lenght - 1; i >= 0; i--){
//             let arr = timN(a, uoc_a[i], tich);
//         }
        
//     }
// }


// function timN(x, nguyento, tich) {
//     tich = tich + "*" + nguyento;
//     const n = x/ nguyento;
//     if(n % nguyento === 0 && n !== 1) {
//         timN(n, nguyento, tich);
//     } else {
//         return [tich, n];
//     }
// }



// console.log(multiplication(20));