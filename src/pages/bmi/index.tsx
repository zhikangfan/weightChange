import {InputNumber, Button} from "antd";
import {useState} from "react";
import styles from './index.less'
export default function DMIPage() {

    let [height, setHeight] = useState<number>(0)
    let [weight, setWeight] = useState<number>(0)
    let [bmi, setBMI] = useState<number>(0)
    let [checkIndex, setCheckIndex] = useState(0)
    function computedBMI() {
        let bmi = (weight / 2) / (height / 100) ** 2;
        bmi = Number.isNaN(bmi) ? 0 : bmi;
        setBMI(+bmi.toFixed(2))
    }
    return (
        <div className={styles.bmiContainer}>
            <div className={styles.inputWrapper}>
                <div className={styles.inputBox}>
                    <InputNumber addonAfter={'cm'} onChange={(v) => {
                        typeof v === 'object' || typeof v ==='string' ? setHeight(0) : setHeight(v);
                    }}/>

                </div>
                <div className={styles.inputBox}>
                    <InputNumber addonAfter={'斤'} onChange={(v) => {
                        typeof v === 'object' || typeof v ==='string' ? setWeight(0) : setWeight(v)
                    }}/>
                </div>
                <Button type='primary' onClick={computedBMI}>计算</Button>
            </div>
            <div>
                <div style={{margin: '15px 0', color: 'rgba(0,0,0,.8)'}}>
                    您的BMI：{bmi}
                </div>
                <ul className={styles.bmiList}>
                    <li style={checkIndex === 0 ? {backgroundColor: '#39ec68', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &lt; 18.5: 低于正常体重</li>
                    <li style={checkIndex === 0 ? {backgroundColor: '#2ec054', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &gt;= 18.5 以及 &lt; 25: 正常体重</li>
                    <li style={checkIndex === 0 ? {backgroundColor: '#efa12c', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &gt;= 25 以及 &lt; 30: 超重</li>
                    <li style={checkIndex === 0 ? {backgroundColor: '#ef662c', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &gt;= 30 以及 &lt; 35: 一类肥胖</li>
                    <li style={checkIndex === 0 ? {backgroundColor: '#ef492c', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &gt;= 35 以及 &lt; 40: 二类肥胖</li>
                    <li style={checkIndex === 0 ? {backgroundColor: '#e00b0b', color: '#fff'} : {backgroundColor: 'transparent', color: 'rgba(0,0,0,.8)'}}>身体质量指数(BMI) &gt;= 40: 三类肥胖</li>
                </ul>
            </div>
        </div>
    )
}