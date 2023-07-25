/*
* 尽量避免很油的东西
* 7.1-7.5 不忌口，但量以刚好吃饱为止（不吃早餐，中餐，晚餐正常）减脂慢。。
* 7.6-7.8 去掉晚餐，不忌口，吃早餐，午餐 （量以刚好吃饱为止）
* 7.9-7.10 一天只吃1顿早餐
*
* */
import {useEffect, useState} from "react";

import * as echarts from 'echarts';
export default function HomePage() {

    const d = [{
        month: 7,
        day: 31
    }, {
        month: 8,
        day: 31
    },{
        month: 9,
        day: 30
    }]
    let xAxis: Array<string> = []
    d.forEach((item) => {
        for (let i = 1; i <= item.day; i++) {
            xAxis.push(`${item.month}.${i < 10 ? '0' + i : i}`)
        }
    })
    const firstCycle = [151, 150, 150, 148.7, 148, 148.1, 146.9, 146.7, 146.9, 145.8];
    const secondCycle = [144.9, 143.8, 144.9, 146, 147.2, 148.4, 149.7, 149.4, 146.7, 148.4];
    const thirdCycle = [147.8, 147.4, 146.3, 145.9, 144.3]

    let [weight, setWeight] = useState<Array<number>>([
      ...firstCycle,
      ...secondCycle,
      ...thirdCycle
    ])
    useEffect(() => {
        let chartDom = document.getElementById('main') as HTMLElement;
        let myChart = echarts.init(chartDom, 'dark');
        let option;

        option = {
            title: {
                left: 'center',
                text: '体重表'
            },
            xAxis: {
                name: '日期',
                type: 'category',
                data: xAxis,
                splitNumber: 50,
                axisPointer: {
                    show: true,
                    snap: true
                }
            },
            yAxis: {
                name: '体重（斤）',
                type: 'value',
                min: 90,
                max: 160,
                splitNumber: 45,
                axisPointer: {
                    show: true,
                    snap: true
                }
            },
            series: [
                {
                    data: weight,
                    type: 'line'
                }
            ]
        };

        option && myChart.setOption(option);
    },[])
  return (
    <div>
        <h1 id={'title'}></h1>
        <div id={'main'} style={{width: '100%', height: '100vh'}}></div>
    </div>

  );
}
