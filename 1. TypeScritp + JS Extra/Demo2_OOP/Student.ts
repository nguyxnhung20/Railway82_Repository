import { Person } from "./Person";

export class Student extends Person {
  // Thuộc tính mở rộng
  private classVti_old: string;
  private testScore_JavaAdvanced: string;

  // Xây dựng constructor
  constructor(
    id: number,
    name: string,
    address: string,
    classVti_old: string,
    testScore_JavaAdvanced: string
  ) {
    super(id, name, address);
    this.classVti_old = classVti_old;
    this.testScore_JavaAdvanced = testScore_JavaAdvanced;
  }

  // Khai báo get, set cho các thuộc tính mở rộng
  public getClassVti_old(): string {
    return this.classVti_old;
  }

  public getTestScore_JavaAdvanced(): string {
    return this.testScore_JavaAdvanced;
  }

  public setClassVti_old(value: string) {
    this.classVti_old = value;
  }

  public setTestScore_JavaAdvanced(value: string) {
    this.testScore_JavaAdvanced = value;
  }

  // Khai báo phương thức cho Student
  public showStudentInfo(): void {
    console.log(
      `Thông tin student là , ID: ${this.getId()}, Name: ${this.getName()}, Địa chỉ: ${this.getAddress()}, Lớp VTI cũ: ${
        this.classVti_old
      }, Điểm Java Advanced: ${this.testScore_JavaAdvanced}`
    );
  }
}
