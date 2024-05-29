class Department {
  // Khai báo thuộc tính
  private DepartmentID: Number;
  private DepartmentName: String;

  // Khai bái get, set

  /**
   * Getter DepartmentID
   * @return {Number}
   */
  public getDepartmentID(): Number {
    return this.DepartmentID;
  }

  /**
   * Getter DepartmentName
   * @return {String}
   */
  public getDepartmentName(): String {
    return this.DepartmentName;
  }

  /**
   * Setter DepartmentID
   * @param {Number} value
   */
  public setDepartmentID(value: Number) {
    this.DepartmentID = value;
  }

  /**
   * Setter DepartmentName
   * @param {String} value
   */
  public setDepartmentName(value: String) {
    this.DepartmentName = value;
  }

  // Khai báo contructor
  constructor(DepartmentID: Number, DepartmentName: string) {
    this.DepartmentID = DepartmentID;
    this.DepartmentName = DepartmentName;
  }
  showDepartment(): void {
    // Khai báo phương thức
    console.log(
      `Thông tin phòng ban là: ID ${this.DepartmentID}, Name ${this.DepartmentName}`
    );
  }
}

export default Department;
