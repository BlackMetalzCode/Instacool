import React, { Component } from 'react';
const style = {
    backGroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    borderRadius:'4px',
    width:'calc(100% - 30px)',
    marginBottom:'10px',
}

const spanStyle = {
    fontSize: '12px',
    color:'#777',
    textTransform: 'uppercase',
    fontWeight:900
} as React.CSSProperties

interface IInputsProps {
    placeholder?: string
    label: string
}

class Inputs extends Component<IInputsProps> {
public render() {
    const {label} = this.props
        return (
            <div>
                <span style ={spanStyle}>{label}</span>
                <input {...this.props} style={style} />
            </div>
        )
    }
}

export default Inputs;