import logo from "./logo.svg";
import { Card, Button, InputNumber } from "antd";
import { ScissorOutlined, BulbOutlined } from "@ant-design/icons";

function ShopList(props) {
  const { shopList } = props;
  const total = shopList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.count * currentValue.price,
    0
  );
  return (
    <Card
      title={"Shopping Cart"}
      bordered={false}
      style={{ width: "40%", height: "inherit" }}
      actions={[
        <div key="setting">{`Total: $${total.toFixed(2)}`}</div>,
        <Button
          type="primary"
          onClick={() => alert(`Checkout Total: $${total.toFixed(2)}`)}
        >
          Checkout
        </Button>,
      ]}
    >
      <div className="display-container">
        {shopList.map((item, index) => (
          <div key={index} className="card-box" style={{ width: "45%" }}>
            <Card
              hoverable
              cover={<img alt="example" src={item.img} />}
              actions={[
                <Button
                  type="primary"
                  onClick={(e) => props.onRemoveGoods(item)}
                >
                  Remove
                </Button>,
              ]}
            >
              <p className="card-name">{item.name}</p>
              <p style={{ fontWeight: 800 }}>{`$${item.price}`}</p>
              <p>
                <ScissorOutlined style={{ padding: "0 5px" }} />
                {item.size}
              </p>
              <p>
                <BulbOutlined style={{ padding: "0 5px", color: "orange" }} />
                {item.light}
              </p>
              <InputNumber
                min={1}
                value={item.count}
                onChange={(e) => props.onChangeCount(e, item)}
              />
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ShopList;
