import { useEffect, useState } from "react"
import { AmountInput, LengthInput, PercentInput } from "./input.tsx"
import "../assets/styling/components.scss"

export const FormCo = (_props: any) => {

    const [data, setData] = useState({
        initalInvestment: 0,
        contribution: 0,
        interestRate: 0,
        taxRate: 0,
        length: ''
    });

    useEffect(()=>{
        console.log(`
        initalInvestment: ${data.initalInvestment},
        contribution: ${data.contribution},
        interestRate: ${data.interestRate},
        taxRate: ${data.taxRate},
        length: ${data.length}
        `);
    }, [data]);

    return <>
        <div className="FormCo box">
            <AmountInput lable="Inital investment" valueSet={v => setData({...data, initalInvestment: v})}/>
            <AmountInput lable="Contribution" valueSet={v => setData({...data, contribution: v})}/>
            <PercentInput lable="Interest rate" valueSet={v => setData({...data, interestRate: v})}/>
            <PercentInput lable="Tax rate" valueSet={v => setData({...data, taxRate: v})}/>
            <LengthInput lable="Length" valueSet={v => setData({...data, length: v})}/>
            <button className="sec">Reset</button>
            <button className="pri" onClick={()=>{
        console.log(`
        initalInvestment: ${data.initalInvestment},
        contribution: ${data.contribution},
        interestRate: ${data.interestRate},
        taxRate: ${data.taxRate},
        length: ${data.length}
        `);
    }}>Calculate</button>
        </div>
    </>;
}
/*


$
0
$
0

Tax rate
0
%
0
%
Length
0
Monthly  / Annual
Use [ / ] to add years
Clear
Calculate
*/