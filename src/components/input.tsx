import React, { FC, useState, useRef } from "react";

interface input {
    lable?: string | "";
    placeholder?: string | "";
    dropList?: Array<string> | [];
    amount?: string;
    valueSet?: (value: any) => {} | void;
};
export const
    RegularInput: FC<input> = (props) => {
        return <div className="regularInput">
            <input placeholder={props.placeholder}
                onKeyUp={E => {
                    props.valueSet ? props.valueSet(E.target) : null;
                }} />

        </div>
    }, DropDownInput: FC<input> = (props) => {

        const
            DDInput = useRef<any>(),
            [DDI, sDDI] = useState({
                select: "Income",
                inputValue: "Income",
                value: "Income",
                menu: {
                    isOn: false,
                    list: ["Income", "Exepense", "Saving", "Dept"]
                },
                dropDown: React.createRef<HTMLDivElement>()
            });

        return <div className="dropDownInput">

            <input
                ref={DDInput} type="text" placeholder={props.placeholder}
                onFocus={() => sDDI({ ...DDI, menu: { ...DDI.menu, isOn: true } })}
                onBlur={() => { }}
                onKeyUp={event => sDDI({
                    ...DDI, inputValue: (event.target as HTMLInputElement).value
                })} />

            {DDI.menu.isOn ?
                <div className="dropDown">

                    {props.dropList?.filter(key => {
                        return key.toLocaleLowerCase().includes(DDInput.current.value?.toLowerCase());
                    }).map(type =>

                        <span
                            key={type} aria-selected={(DDI.select === type)}
                            onClick={() => {
                                DDInput.current.value = type;
                                sDDI({ ...DDI, select: type, menu: { ...DDI.menu, isOn: false } })
                                props.valueSet ? props.valueSet(DDInput.current.value) : null;
                            }}>
                            {type}
                        </span>

                    )}

                </div>
                : null}

        </div>;
    }, AmountInput: FC<input> = (props) => {

        const amountInput = useRef<any>();

        return <>
            <div className="validation amount">
                <span className="lable bb12px">{props.lable}</span>
                <div className="Input">
                    <span className="br14px">$</span>
                    <input className="br14px"
                        ref={amountInput} type="text" placeholder="0"
                        onKeyUp={() => {
                            const nid = amountInput.current.value.replace(',', '').replace('.', '');
                            const amount: number = Number(nid);
                            !(nid === "NaN") ? amountInput.current.value = amount.toLocaleString('en-US') : null;
                            props.valueSet ? props.valueSet(amountInput.current.value) : null;

                        }}
                        onKeyDown={(event) => {
                            const stringy = amountInput.current.value.replace(',', '').replace('.', '').toString();
                            if ((stringy.length) <= 6) {
                                if (
                                    event.code.includes('Digit') ||
                                    event.code === 'Backspace' ||
                                    event.code === 'Comma' ||
                                    event.code === 'Tab' ||
                                    event.code === 'ArrowRight' ||
                                    event.code === 'ArrowLeft' ||
                                    event.code === 'Period' ||
                                    amountInput.current.value == "0"
                                ) { } else {
                                    event.preventDefault()
                                    amountInput.current.value == "0" ? amountInput.current.value = "" : null;
                                }
                            } else {
                                event.preventDefault();
                                amountInput.current.value = stringy.slice(0, -1);
                                amountInput.current.value == "0" ? amountInput.current.value = "" : null;
                            }
                        }}/>
                </div>
            </div></>
    }, PercentInput: FC<input> = (props) => {

        const percentInput = useRef<any>();

        return <>
            <div className="validation percent">
                <span className="lable bb12px">{props.lable}</span>
                <div className="Input">
                    <input className="br14px"
                        ref={percentInput} type="text" placeholder="0"
                        onKeyUp={() => {
                            props.valueSet ? props.valueSet(percentInput.current.value) : null;
                        }}
                        onKeyDown={(event) => {
                            const stringy = percentInput.current.value.replace(',', '').replace('.', '').toString();
                            if ((stringy.length) <= 6) {
                                if (
                                    event.code.includes('Digit') ||
                                    event.code === 'Backspace' ||
                                    event.code === 'Tab' ||
                                    event.code === 'ArrowRight' ||
                                    event.code === 'ArrowLeft' ||
                                    event.code === 'Period' ||
                                    percentInput.current.value == "0"
                                ) { } else {
                                    event.preventDefault()
                                    percentInput.current.value == "0" ? percentInput.current.value = "" : null;
                                }
                            } else {
                                event.preventDefault();
                                percentInput.current.value = stringy.slice(0, -1);
                            }
                        }} />
                    <span className="br14px">%</span>
                </div>
            </div></>
    }, LengthInput: FC<input> = (props) => {

        const lengthInput = useRef<any>();

        return <>
            <div className="validation length">
                <span className="lable bb12px">{props.lable}</span>
                <div className="Input">
                    <input className="br14px"
                        ref={lengthInput} type="text" placeholder="0"
                        onKeyUp={() => {
                            props.valueSet ? props.valueSet(lengthInput.current.value) : null;
                        }}
                        onKeyDown={(_event) => {
                            const cursorPosition = lengthInput.current.selectionStart - 1;
                            const hasInvalidCharacters = lengthInput.current.value.match(/[^0-9/]/);

                            if (!hasInvalidCharacters) return;

                            // Replace all non-digits:
                            lengthInput.current.value = lengthInput.current.value.replace(/[^0-9/]/g, '');

                            // Keep cursor position:
                            lengthInput.current.setSelectionRange(cursorPosition, cursorPosition);
                        }} />
                    <span className="br14px">Months / Years</span>
                </div>
                <span className="br14px info">Use [ / ] to add years</span>
            </div></>
    }