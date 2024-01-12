// Khai báo mảng class1
const class1 = [
  {
    mssv: "PS0000",
    name: "Nguyen Van A",
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: "pass",
  },
  {
    mssv: "PS0001",
    name: "Nguyen Van B",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "pass",
  },
];

// Khai báo mảng class2
const class2 = [
  {
    mssv: "PS0002",
    name: "Nguyen Van C",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "failed",
  },
  {
    mssv: "PS0003",
    name: "Nguyen Van D",
    avgPoint: 10,
    avgTraningPoint: 10,
    status: "pass",
  },
  {
    mssv: "PS0004",
    name: "Nguyen Van E",
    avgPoint: 10,
    avgTraningPoint: 2,
    status: "pass",
  },
];
//-------------------------------------

// Sắp xếp danh sách sinh viên theo avgPoint từ cao xuống thấp
const sortedByAvgPoint = [...class1, ...class2].sort(
  (a, b) => b.avgPoint - a.avgPoint
);
console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp: ");
console.log(sortedByAvgPoint);

// Sắp xếp danh sách sinh viên theo avgTraningPoint từ cao xuống thấp
const sortedByAvgTraningPoint = [...class1, ...class2].sort(
  (a, b) => b.avgTraningPoint,
  a.avgTraningPoint
);
console.log("Danh sách sinh viên theo avgTraning Point từ cao xuống thấp: ");
console.log(sortedByAvgTraningPoint);

// Tìm sinh viên có avgPoint và avgTraningPoint cao nhất
const allStudents = [...class1, ...class2];

const maxAvgPointStudent = allStudents.reduce((max, student) =>
  student.avgPoint > max.avgPoint ? student : max
);
const maxAvgTraningPointStudent = allStudents.reduce((max, student) =>
  student.avgTraningPoint > max.avgTraningPoint ? student : max
);

console.log("Thông tin sinh viên có avgPoint cao nhất:");
console.log(maxAvgPointStudent);

console.log("Thông tin sinh viên có avgTraningPoint cao nhất: ");
console.log(maxAvgTraningPointStudent);
//--------------------------------------
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = fetch("https://api.example.com/data");
      if (data) {
        resolve(data);
      } else {
        reject("Lỗi khi tải dữ liệu");
      }
    }, 2000);
  });
}

fetchData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
//-----------------------------------------------
// Yêu cầu thứ nhất: Dừng các promise khác nếu một promise thất bại và log ra lỗi của promise đó.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Lỗi promise 1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hoàn thành promise 2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hoàn thành promise 3");
    resolve("Hoàn thành promise 3");
  }, 4000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("Tất cả các promise đã hoàn thành thành công");
  })
  .catch((error) => {
    console.log("Promise thất bại:", error);
  });
//----------------------------------------------------------
// Yêu cầu thứ hai: Luôn chạy bất kể tất cả các promise hoàn thành hay thất bại, và log ra thông báo thành công.
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Lỗi promise 1");
  }, 2000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hoàn thành promise 2");
  }, 3000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hoàn thành promise 3");
    resolve("Hoàn thành promise 3");
  }, 4000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    for (const promise of results) {
      if (promise.status === "rejected") {
        console.log("Promise thất bại:", promise.reason);
        return;
      }
    }

    console.log("Tất cả các promise đã hoàn thành thành công");
  })
  .catch((error) => {
    console.log("Lỗi khi thực hiện các promise:", error);
  });
