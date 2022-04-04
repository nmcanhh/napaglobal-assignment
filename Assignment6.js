// Liệt kê các phương pháp clone object (càng nhiều càng tốt), phân biệt shallow clone và deep clone? 
// Có phải trường hợp nào cũng nên sử dụng deep clone hay không? Vì sao?
// Các cách clone object
const obj = {
    username: "nmcanhh",
    email: "canh.nguyen@napaglobal.com",
    info: {
        address: "Đà Nẵng"
      }
};

// 1. Spread (Shallow Clone) - Không Deep clone được
const obj_1 = {
    ...obj
};

console.log("obj_1", obj_1); // { username: 'nmcanhh', email: 'canh.nguyen@napaglobal.com' }

// 2. Object.assign() (Shallow Clone) - Không Deep clone được

const obj_2 = Object.assign({}, obj);

console.log("obj_2", obj_2); // { username: 'nmcanhh', email: 'canh.nguyen@napaglobal.com' }


// 3. JSON Method (Deep Clone)

const obj_3 = JSON.parse(JSON.stringify(obj));
obj_3.age = 24;
obj_3.info.address = "Hà Nội";

console.log("obj_3", obj_3); // { username: 'nmcanhh', email: 'canh.nguyen@napaglobal.com', info: { 'Hà Nội' } }

// 4. Sử dụng Lodash

const lodash = require("lodash");

const obj_4 = lodash.cloneDeep(obj);
const obj_5 = lodash.clone(obj);

obj_4.age = 25;
obj_5.info.address = "Hà Nội";

console.log("obj_4", obj_4); // { username: 'nmcanhh', email: 'canh.nguyen@napaglobal.com', info: { 'Đà Nẵng' }, age: 25 }
console.log("obj_5", obj_5); // { username: 'nmcanhh', email: 'canh.nguyen@napaglobal.com', info: { 'Hà Nội' } }

