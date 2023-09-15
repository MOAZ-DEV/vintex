
export const Chart = (_props: any) => {
    return <>
    <div className="chart box">

    <svg width="360" height="360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "relative"}}>
    <circle stroke="#FF4D00" stroke-width="65" cx="180" cy="180" r="145"  
    style={{position: "absolute", top: "50%", left: "50%"}} 
    strokeDasharray="924" strokeDashoffset={924 - (924 * .9)} ></circle>
    <circle stroke="#FFFFFF25" stroke-width="65" cx="180" cy="180" r="145"  
    style={{position: "absolute", top: "50%", left: "50%"}} 
    strokeDasharray="924" strokeDashoffset={-924 + (924 * .9)} ></circle>
    

    </svg>


    </div>
    </>
}