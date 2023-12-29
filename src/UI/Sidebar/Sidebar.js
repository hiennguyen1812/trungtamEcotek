import React, { useState } from "react";
import "./Sidebar.css"
import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// const customTheme = createTheme({
//   '@text-color': '#333333'
// });



const items = [
  getItem("Tổng quan", "1", <MailOutlined />),
  getItem("Navigation", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Hệ thống", "sub2", <SettingOutlined />, [
    getItem("Danh sách tài khoản", "7"),
    getItem("Thêm mới tài khoản", "8"),
    getItem("Đổi mật khẩu", "9"),

  ]),
];
const Sidebar = () => {
  
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  return (
    <div className="side_bar">
      <br />
      <br />
      <br />
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
        items={items}
      />
    </div>
  );
};
export default Sidebar;
