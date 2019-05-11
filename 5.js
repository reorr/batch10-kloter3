var data = [
  ['a','c','b','e','d'],
  ['g','e','f']
];

var otherData = [
  ['g','h','x','j'],
  ['a','c','b','e','d'],
  ['q','w','a']
]

function sortArray(data) {
  var sorted = [[]];
  for (var i=0; i<data.length; i++) {
    var newData = data[i];
    var sortedArray = newData.sort();
    var highest = sortedArray[sortedArray.length - 1];
    sorted[0].push(highest);
  }
  return console.log(sorted);
}

sortArray(data);
sortArray(otherData);