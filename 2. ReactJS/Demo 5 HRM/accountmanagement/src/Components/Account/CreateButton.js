import React from "react";
// import { Container, Button } from "reactstrap";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider } from "antd";

const colors1 = ["#6253E1", "#04BEFE"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function CreateButton(props) {
  // Gọi lại các props từ bên trên truyền xuống
  const { onHandleCreateButtuon } = props;
  // Hàm xử lý khi click vào nút CreateNewAccount
  const handleCreateNewAccount = () => {
    onHandleCreateButtuon();
  };
  //
  return (
    <>
      <br />
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button type="primary" size="large" onClick={handleCreateNewAccount}>
          Add New Account
        </Button>
      </ConfigProvider>
    </>
  );
}

export default CreateButton;
