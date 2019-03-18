import React, { Component } from "react";

export default class BigList extends Component {
    list = [];
    loadData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let { list } = this;
                for (let i = 0; i < 10; i++) {
                    list.push({
                        name: `name[${i}]`,
                        value: i
                    });
                }
                resolve();
            }, 1000);
        });
    }
    async waitData() {
        await this.loadData();
        this.forceUpdate();
    }
    componentWillMount() {
        this.waitData();
    }
    render() {
        console.log("render");
        let { list } = this;
        let items = list.map((item, index) => (
            <div key={index.toString()}>
                <input
                    defaultValue={item.value}
                    onChange={evt => {
                        item.value = evt.target.value;
                    }}
                />
                <button
                    onClick={() => {
                        alert(JSON.stringify(item));
                    }}
                >
                    显示单行
                </button>
                <button
                    onClick={() => {
                        item.value = new Date();
                    }}
                >
                    设置单行
                </button>
                <button
                    onClick={() => {
                        this.forceUpdate();
                    }}
                >
                    强制更新界面
                </button>
            </div>
        ));
        return (
            <div>
                <div>{items}</div>
                <div>
                    <button
                        onClick={() => {
                            console.log(list);
                        }}
                    >
                        显示全部数据
                    </button>
                    <button
                        onClick={() => {
                            Object.keys(this.refs).forEach(key =>
                                console.log(key)
                            );
                        }}
                    >
                        显示引用
                    </button>
                </div>
            </div>
        );
    }
}
