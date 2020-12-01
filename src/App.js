import React, { Component } from "react";
import { Card, Button } from "antd";

import FilteredList from "./FilteredList";
import DisplayList from "./DisplayList";
import ShopList from "./ShopList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          name: "Ferocactus Latispinus Devil's Tongue",
          price: 122.99,
          size: "Desktop",
          light: "Bright Light",
          img: "/images/Agave Americana Medio Picta Alba.5efa5ef5.jpg",
        },
        {
          id: 1,
          name: "Philodendron Pink Congo",
          price: 69.99,
          size: "Desktop",
          light: "Medium Light",
          img: "/images/philodendron_pink_congo_for_sell_1557561823_58968eee_progressive.jpg",
        },
        {
          id: 2,
          name: "Aglaonema Plant",
          price: 12.99,
          size: "Desktop",
          light: "Medium Light",
          img: "/images/bloomscape_spring-snow-aglaonema_detail_600x600.jpg",
        },
        {
          id: 3,
          name: "Privet Hedge Plant",
          price: 46.99,
          size: "Desktop",
          light: "Bright Light",
          img: "/images/privet-hedge-plants-p22-6627_image.jpg",
        },
        {
          id: 4,
          name: "Pistils Nursery Plant",
          price: 9.99,
          size: "Medium",
          light: "Medium Light",
          img: "/images/Maranta_leuconeura_plants_1200x1200.jpg",
        },
        {
          id: 5,
          name: "Red Anthurium Plant",
          price: 19.99,
          size: "Medium",
          light: "Bright Light",
          img: "/images/biaxkijyvddm5zzrf9iq.jpg",
        },
        {
          id: 6,
          name: "Areca Palm Plant",
          price: 29.99,
          size: "Medium",
          light: "Bright Light",
          img: "/images/pg-areca-palm-800x800.jpg",
        },
        {
          id: 7,
          name: "Pothos Plant",
          price: 32.99,
          size: "Medium",
          light: "Low Light",
          img: "/images/images.jpeg",
        },
        {
          id: 8,
          name: "Cheese Plant",
          price: 28.99,
          size: "Large",
          light: "Medium Light",
          img: "/images/cheese-plant-1.jpg",
        },
        {
          id: 9,
          name: "Sainsbury's Kalanchoe Plant",
          price: 49.99,
          size: "Large",
          light: "Low Light",
          img: "/images/640x640.jpg",
        },
        {
          id: 10,
          name: "Bird of Paradise Plant",
          price: 36.99,
          size: "Large",
          light: "Low Light",
          img: "/images/Wythe-40-2970.040-WH_Bird-of-Paradise-14.jpg",
        },
        {
          id: 11,
          name: "Chinese Money Plant",
          price: 56.99,
          size: "Large",
          light: "Low Light",
          img: "/images/eit2v7azbpvl7075b4pt.jpg",
        },
      ],
      sizeSelect: "All Size",
      lightSelect: "All Light",
      sortBySelect: "Lowest to Highest",
      shopList: [],
    };
  }

  handleSelect = (item, type) => {
    const { key } = item;
    this.setState({
      [type]: key,
    });
  };

  matchesFilterSize = (item) => {
    const { sizeSelect, lightSelect, sortBySelect } = this.state;
    if (sizeSelect == "All Size" && lightSelect == "All Light") {
      return true;
    } else if (sizeSelect == "All Size") {
      return item.light == lightSelect;
    } else if (lightSelect == "All Light") {
      return item.size == sizeSelect;
    } else {
      return item.size == sizeSelect && item.light == lightSelect;
    }
  };

  sortFilter = (a, b) => {
    const { sortBySelect } = this.state;
    if (sortBySelect === "Lowest to Highest") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };

  addGoods = (item) => {
    const { shopList } = this.state;
    let _item = shopList.find((e) => e.id == item.id);

    if (_item) {
      _item.count++;
    } else {
      shopList.push({ ...item, count: 1 });
    }
    this.setState({
      shopList,
    });
  };

  onChangeCount = (value, item) => {
    const { shopList } = this.state;
    let _item = shopList.find((e) => e.id == item.id);
    _item.count = value;
    this.setState({
      shopList,
    });
  };

  onRemoveGoods = (item) => {
    const { shopList } = this.state;
    let index = shopList.findIndex((e) => e.id == item.id);
    shopList.splice(index, 1);
    this.setState({
      shopList,
    });
  };

  render() {
    const {
      list,
      sizeSelect,
      lightSelect,
      sortBySelect,
      shopList,
    } = this.state;
    return (
      <div className="App">
        <h1>CS1300 Plant Shop</h1>
        <div className="wrapper">
          <Card
            title={
              <FilteredList
                sizeSelect={sizeSelect}
                lightSelect={lightSelect}
                sortBySelect={sortBySelect}
                handleSelect={this.handleSelect}
              />
            }
            bordered={false}
            style={{ width: "50%", backgroundColor: "unset" }}
          >
            <DisplayList
              list={list.filter(this.matchesFilterSize).sort(this.sortFilter)}
              addGoods={this.addGoods}
            />
          </Card>

          <ShopList
            shopList={shopList}
            onChangeCount={this.onChangeCount}
            onRemoveGoods={this.onRemoveGoods}
          />
        </div>
      </div>
    );
  }
}

export default App;
