// Ngoài việc khác nhau về mặt cú pháp thì for thường và forEach còn có sự khác nhau gì nữa?
// Code minh họa

// ACCESS VÀO ELEMENT
const arr1 = ['a', 'b', 'c'];

// for cho phép chúng ta access vào index của mảng chứ không phải là element, thế nên chúng ta cần dùng array[i] để lấy giá trị

for (let i = 0; i < arr1.length; ++i) {
    console.log(arr1[i]);
  }

// forEach cho phép chúng ta access trực tiếp vào element và cả index 
arr1.forEach((element, i) => console.log(element));

// BỎ QUA ELEMENT RỖNG

const arr2 = ['a',, 'c']; 

// for sẽ không bỏ qua mà in ra phần tử rỗng này là undefinded
for (let i = 0; i < arr2.length; ++i) {
    console.log(arr2[i]);
  }

// forEach thì sẽ in ra "a, c"
arr2.forEach(v => console.log(v));

// FUNCTION CONTEXT
// Scope của this bên trong FOR chính là scope bên ngoài của FOR
// {} /n {} /n {} 
for (let i = 0; i < arr1.length; ++i) {
    console.log(this);
}
// FOREACH thì không như vậy trừ khi sử dụng Arrow Function
// Như này sẽ in ra undefined
arr1.forEach(function() {
    console.log(this);
  });
// Như này sẽ in ra scope bên ngoài của FOREACH
arr1.forEach(() => {
    console.log(this);
  });
  

// // ASYNC/AWAIT
// // FOREACH không hoạt động tốt với async/await. Nếu FOREACH callback là đồng bộ thì chạy được, còn nếu dùng await 
// // bên trong FOREACH CALLBACK thì không
// // Cái này sẽ lỗi
// async function run() {
//     const arr = ['a', 'b', 'c'];
//     arr.forEach(el => {
//       // SyntaxError
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log(el);
//     });
//   }



  