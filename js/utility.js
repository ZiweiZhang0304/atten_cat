export function shuffle(array) { //export shuffle = function(arr, n)
  var currentIndex = array.length,  randomIndex;  // While there remain elements to shuffle...

  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

 export function getRandom(arr, n) { //export getRandom = function(arr, n)
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}



// original
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // Retrieve csv file from experiment
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // Retrieve File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = 'none';

    // Add link to the DOM
    document.body.appendChild(downloadLink);

    downloadLink.click();
}
