class Position {
  // Khai báo thuộc tính
  private PositionID: number;
  private PositionName: "Dev" | "Test" | "Scrum_Master" | "PM";

  // Các phương thức get và set

  /**
   * Getter PositionID
   * @return {number}
   */
  public getPositionID(): number {
    return this.PositionID;
  }

  /**
   * Getter PositionName
   * @return {'Dev' | 'Test' | 'Scrum_Master' | 'PM'}
   */
  public getPositionName(): "Dev" | "Test" | "Scrum_Master" | "PM" {
    return this.PositionName;
  }

  /**
   * Setter PositionID
   * @param {number} value
   */
  public setPositionID(value: number) {
    this.PositionID = value;
  }

  /**
   * Setter PositionName
   * @param {'Dev' | 'Test' | 'Scrum_Master' | 'PM'} value
   */
  public setPositionName(value: "Dev" | "Test" | "Scrum_Master" | "PM") {
    this.PositionName = value;
  }

  // Khai báo constructor
  constructor(
    PositionID: number,
    PositionName: "Dev" | "Test" | "Scrum_Master" | "PM"
  ) {
    this.PositionID = PositionID;
    this.PositionName = PositionName;
  }

  // Phương thức để hiển thị thông tin vị trí
  showPosition(): void {
    console.log(
      `Thông tin vị trí là: ID ${this.PositionID}, Name ${this.PositionName}`
    );
  }
}

export default Position;
