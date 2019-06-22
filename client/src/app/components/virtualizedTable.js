import React from 'react'

const colStyles = {
  margin: 5
}

const Row = ({ id, title, textData, height }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height, borderBottom: '1px solid gray' }}>
    <div style={{display: 'flex'}}>
      <h3 style={{margin: 5}}>{id} - {title}</h3>

    </div>

    <div style={colStyles}>{textData}</div>
  </div>
)

export default class extends React.Component {
  constructor(props) {
    super(props)

    const initialStartIndex = 0
    const initialEndIndex = props.data.length - 1 > 15 ? 15 : props.data.length

    this.state = {
      dataToRender: props.data ? props.data.slice(initialStartIndex, initialEndIndex) : [],
    }

    this.containerDiv = null;
  }

  componentDidMount() {
    window.requestAnimationFrame(this.updateVisibilityData);
  }

  setContainerRef = (div) => { this.containerDiv = div; };

  updateVisibilityData = () => {
    const {
      data,
      rowHeight,
      fetchMore,
    } = this.props;
    
    const {
      scrollTop: prevScrollTop,
    } = this.state;

    if (!this.containerDiv) return {};

    const {
      offsetHeight,
      scrollTop,
    } = this.containerDiv;
    const virtualListHeight = rowHeight * data.length;
    
    if (scrollTop / virtualListHeight > .7) {
      fetchMore()
      return window.requestAnimationFrame(this.updateVisibilityData)
    }
    if (prevScrollTop === scrollTop) {
      return window.requestAnimationFrame(this.updateVisibilityData)
    }

    const {
      dataToRender,
      topOffsetHeight,
    } = this.calculateVisibilityData(data, scrollTop, offsetHeight, rowHeight);

    return this.setState({
      dataToRender,
      topOffsetHeight,
    }, () => window.requestAnimationFrame(this.updateVisibilityData));
  };

  calculateVisibilityData = (data, scrollTop, offsetHeight, rowHeight) => {
    const rowsAboveView = Math.ceil(scrollTop / rowHeight);

    const rowsInView = Math.floor(offsetHeight / rowHeight);

    const topRowInViewIndex = Math.floor(rowsAboveView + 1);

    const firstRowToRenderIndex = Math.max(topRowInViewIndex - 10, 0);

    const lastRowToRenderIndex = Math.min(topRowInViewIndex + rowsInView + 10, data.length);

    const bufferHeight = firstRowToRenderIndex * rowHeight;

    const dataToRender = data.slice(firstRowToRenderIndex, lastRowToRenderIndex);
    console.log(dataToRender)
    return {
      dataToRender,
      topOffsetHeight: bufferHeight,
    };
  };

  render() {
    const { rowHeight, data } = this.props
    const { dataToRender, topOffsetHeight, } = this.state
    
    return (
      <div ref={this.setContainerRef} style={{width: 400, height: 200, overflow: 'scroll', border: '1px solid black', padding: '0px 10'}}>
        <div style={{ height: data.length * rowHeight }}>
          <div style={{ height: topOffsetHeight }} />
          {
            dataToRender.map(d => <Row key={d.id} {...d} height={rowHeight} />)
          }
        </div>
      </div>
    )
  }
}