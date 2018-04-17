//基础类型
function TSType(): void {
    //数组
    let list: number[] = [1, 2, 3];
    let listArray: Array<number> = [1, 2, 3];
    console.log(list[0]);
    console.log(listArray[1]);
    //元组
    let x: [string, number, number];
    x = ['a', 1, 2];
    console.log(x[0]);
    console.log(x[8]);//undefied
    //枚举
    enum Color { Red, Green, Blue };
    let color: Color;
    color = 1;
    console.log(color);
    color = Color.Blue;
    console.log(color);

    enum Color2 { Red = 3, Green, Blue };
    let color2: Color2;
    console.log(' Color2[4]:'+Color2[4]);
    color2 = Color2.Blue;
    console.log(color2);

    //any
    let notSure: any = 4;
    notSure = false;
    notSure = { 'a': 1 };

    let listNotSure: any[] = [1, true, "free"];
    listNotSure[1] = 100;

    //类型断言
    //尖括号
    let somevalue: any = "this is a string.";
    let strLength: number = (<string>somevalue).length;
    strLength = (somevalue as string).length;
}
TSType();
//声明
function Declare(): void {
    //结构
    let [first, second] = [1, 2];
    console.log(first);
    [first, second] = [second, first];
    console.log(first);

    let [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log(rest);
    function f([a, b]: [number, string]): void {
        console.log(a);
        console.log(b);
    }
    f([12, 'abc']);

    //解构对象
    let oPerson = {
        name: 'TOM',
        sex: '男',
        age: 20
    };
    let { name, sex } = oPerson;
    console.log({ name, sex }.name);

    //展开，与结构相反
    let first1 = [1, 2];
    let second1 = [3, 4];
    let both = ['a', ...first1, ...second1, false];
    console.log(both);
}
Declare();