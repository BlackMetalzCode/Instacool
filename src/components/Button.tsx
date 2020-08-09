import React, { Component } from 'react';
const style = (block: boolean) => ({
    backgroundColor: '#40ed43',
    border: '0px',
    borderRadius:'4px',
    padding: '10px 15px',
    width:block ? '100%' : undefined,
    marginBottom:'10px'
})

interface IButtonProps{
    block?:boolean
}

class Button extends Component<IButtonProps> {
public render() {
    const { block = false } = this.props
        return (
            <button {...this.props} style={style(block)} />
        );
    }
}

export default Button;