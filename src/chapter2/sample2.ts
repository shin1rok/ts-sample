// 型
// boolean
// number
// string(ダブルコート, シングルコート, バックコート)
// array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
// tuple
let x: [string, number]
x = ['hello', 10]
// x = [10, 'hello']
console.log(x[0].substr(1))
// console.log(x[1].substr(1))
// x[3] = "world"
// console.log(x[5].toString())
// x[6] = true

// enum
enum Color {Red, Green, Blue}

let c: Color = Color.Green;
console.log(c)
console.log(Color.Red) // 0
console.log(Color.Green) // 1

enum Color2 {Red = 1, Green, Blue}

let c2: Color2 = Color2.Green;
console.log(Color2.Red) // 1
console.log(Color2.Green) // 2
console.log(Color2.Blue) // 3

console.log(Color[0])
console.log(Color[1])
console.log(Color[2])

// never
// どんな時もエラーを返す or 無限ループのときに使う
// 戻り値がないけど、無限ループしないで関数として終了まで動くときはvoid型


// object
function create(o: object | null): void {
    console.log(o)
};
// declareするとコンパイルはできるけど、create functionが作成されなくて動かない。なぜ？
// declare function create(o: object | null): void;

create({prop: 0}); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
