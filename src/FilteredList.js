import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function FilteredList(props) {
  const SizeSelects = ["All Size", "Desktop", "Medium", "Large"];
  const LightingSelects = [
    "All Light",
    "Low Light",
    "Medium Light",
    "Bright Light",
  ];
  const sortBySelects = ["Lowest to Highest", "Highest to Lowest"];
  const { sizeSelect, lightSelect, sortBySelect } = props;
  return (
    <div className="navbar">
      <Dropdown
        style={{ width: 200 }}
        overlay={
          <Menu onClick={(e) => props.handleSelect(e, "sizeSelect")}>
            {SizeSelects.map((e) => (
              <Menu.Item key={e}>
                <a>{e}</a>
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button>
          {sizeSelect}
          <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown
        style={{ width: 200 }}
        value={lightSelect}
        overlay={
          <Menu onClick={(e) => props.handleSelect(e, "lightSelect")}>
            {LightingSelects.map((e) => (
              <Menu.Item key={e}>
                <a>{e}</a>
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button>
          {lightSelect}
          <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown
        style={{ width: 200 }}
        value={sortBySelect}
        overlay={
          <Menu onClick={(e) => props.handleSelect(e, "sortBySelect")}>
            {sortBySelects.map((e) => (
              <Menu.Item key={e}>
                <a>{e}</a>
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button>
          {sortBySelect}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default FilteredList;
