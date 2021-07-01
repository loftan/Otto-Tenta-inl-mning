const arr = [
    615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556
    ];

arr.forEach(element => console.log(element)); // Console.loggar ut värde

const arr = [ 615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556];
for (const number of arr.reverse()) {
console.log(number);
} // console loggar ut baklänges

const arr = [
    615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556
    ];
arr.sort((a, b) => a - b);
const reversed = arr.reverse();
console.log(arr); // Console loggar störst till minst
