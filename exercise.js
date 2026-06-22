const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};


function makeList(arr) {
    var resultDisplayArray = [];
    for(const element of arr){
        resultDisplayArray.push(`<li class = "text-warning">${element}</li>`);
    }
    return resultDisplayArray;
}

console.log(makeList(result.skipped));