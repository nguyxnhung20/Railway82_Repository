import Department from "./Department";
import Position from "./Position";

class Account {
  // Khai báo thuộc tính
  private AccountID: number;
  private Email: string;
  private Username: string;
  private FullName: string;
  private Department: Department;
  private Position: Position;

  // Khai báo constructor
  constructor(
    AccountID: number,
    Email: string,
    Username: string,
    FullName: string,
    Department: Department,
    Position: Position
  ) {
    this.AccountID = AccountID;
    this.Email = Email;
    this.Username = Username;
    this.FullName = FullName;
    this.Department = Department;
    this.Position = Position;
  }

  // Các phương thức get và set

  public getAccountID(): number {
    return this.AccountID;
  }

  public setAccountID(value: number) {
    this.AccountID = value;
  }

  public getEmail(): string {
    return this.Email;
  }

  public setEmail(value: string) {
    this.Email = value;
  }

  public getUsername(): string {
    return this.Username;
  }

  public setUsername(value: string) {
    this.Username = value;
  }

  public getFullName(): string {
    return this.FullName;
  }

  public setFullName(value: string) {
    this.FullName = value;
  }

  public getDepartment(): Department {
    return this.Department;
  }

  public setDepartment(value: Department) {
    this.Department = value;
  }

  public getPosition(): Position {
    return this.Position;
  }

  public setPosition(value: Position) {
    this.Position = value;
  }

  // Phương thức để hiển thị thông tin của Account
  showAccount(): void {
    console.log(
      `Thông tin Account: ID ${this.AccountID}, Email ${this.Email}, Username ${this.Username}, FullName ${this.FullName}`
    );
    this.Department.showDepartment();
    this.Position.showPosition();
  }
}

export default Account;
