import logo from "./logo.svg";
import { Card, Button } from "antd";
import { ScissorOutlined, BulbOutlined } from "@ant-design/icons";

function DisplayList(props) {
  const { list } = props;
  return (
    <div className="display-container">
      {list.map((item, index) => {
        return (
          <div key={index} className="card-box" style={{ width: "40%" }}>
            <Card
              hoverable
              cover={<img alt="example" src={item.img} />}
              actions={[
                <Button type="primary" onClick={() => props.addGoods(item)}>
                  Add to Cart
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
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayList;
