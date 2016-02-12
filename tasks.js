
var tasks=[
{ "id":1,
  "tasktitle":"Task 1",
  "description":"This is Task 1",
  "sprint":1,
  "estimate":2,
  "state":"Done",
  "piority":"Must Have",
  "flag":0
},
{ "id":2,
  "tasktitle":"Task 2",
  "description":"This is Task 2",
  "sprint":1,
  "estimate":1,
  "state":"Done",
  "piority":"Nice To Have",
  "flag":0
},
{ "id":3,
  "tasktitle":"Task 3",
  "description":"This is Task 3",
  "sprint":1,
  "estimate":2,
  "state":"Doing",
  "piority":"Must Have",
  "flag":1
},
{ "id":4,
  "tasktitle":"Task 4",
  "description":"This is Task 4",
  "sprint":1,
  "estimate":2,
  "state":"Doing",
  "piority":"Must Have",
  "flag":1
},
{ "id":5,
  "tasktitle":"Task 5",
  "description":"This is Task 5",
  "sprint":1,
  "estimate":2,
  "state":"Todo",
  "piority":"Must Have",
  "flag":0
},
{ "id":6,
  "tasktitle":"Task 6",
  "description":"This is Task 6",
  "sprint":1,
  "estimate":2,
  "state":"Todo",
  "piority":"Must Have",
  "flag":0
},
{ "id":7,
  "tasktitle":"Task 7",
  "description":"This is Task 7",
  "sprint":1,
  "estimate":2,
  "state":"Todo",
  "piority":"Must Have",
  "flag":0
}
];




exports.findAll = function() {
    return tasks;
};
 
/* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้เราจะวน loop หา users ที่มี id ตามที่ระบุแล้วส่งกลับไป */
exports.findById = function (id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) return tasks[i];
    }
};