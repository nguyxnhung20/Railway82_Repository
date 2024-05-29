// Khai báo class Person
class Person {
  // Khai báo thuộc tính
  private id: number;
  private name: string;
  private address: string;

  // Khai báo contructor
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  // Khai báo get, set
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public setId(value: number) {
    this.id = value;
  }

  public setName(value: string) {
    this.name = value;
  }

  public setAddress(value: string) {
    this.address = value;
  }

  // Khai báo phương thức
  go(): void {
    console.log("I can go!!");
  }

  showInfo(): void {
    console.log(
      `Thông tin person1 là , ID: ${this.id}, Name: ${this.name}, Địa chỉ: ${this.address}`
    );
  }
}

// export var v_vti = "VTI Academy";
var v_vti = "VTI Academy";
var v_myAge = 20;

export { Person, v_vti };

// export default v_myAge;

// // Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "Hưng";
// person1.address = "HN";

// var person2 = new Person();
// person2.id = 2;
// person2.name = "Hưng";
// person2.address = "QN";

// console.log(
//   `Thông tin person1 là , ID: ${person1.id}, Name: ${person1.name}, Địa chỉ: ${person1.address}`
// );
