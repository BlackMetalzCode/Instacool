import React, { Component } from 'react';
const style = (center : boolean):React.CSSProperties => ({
    alignItems: center ? 'center' : undefined,
    backgroundColor: '#eee',
    display: 'flex',
    height: ' calc(100vh - 20px)',
    justifyContent:center ? 'center' : undefined,
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
    flexDirection: 'column',
})

interface IContainerProps{
    center?: boolean
}

class Container extends Component<IContainerProps> {
public render() {
    const { children, center = false } = this.props
        return (
            <div style={style(center)}>
                {children}
            </div>
        );
    }
}

export default Container;