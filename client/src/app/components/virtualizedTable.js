import React from 'react'

const colStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Row = ({ title, textData, height }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height, borderBottom: '1px solid gray' }}>
    <div style={colStyles}>{title}</div>
    <div style={colStyles}>{textData}</div>
  </div>
)

export default class extends React.Component {
  constructor(props) {
    super(props)

    const initialStartIndex = 0
    const initialEndIndex = props.data.length - 1 > 15 ? 15 : props.data.length

    this.state = {
      dataToRender: props.data.slice(initialStartIndex, initialEndIndex),
      bufferHeight: 0
    }

    this.tableContainer = React.createRef();
  }

  componentDidMount() {
    window.requestAnimationFrame(this.refreshScroll)
  }

  refreshScroll = () => {
    if (this.tableContainer) {
      const { data } = this.props

      const scrollTop = this.tableContainer.current.scrollTop
      const tableHeight = this.tableContainer.current.clientHeight

      const { indexesToRender, bufferHeight } = this.calculate(scrollTop, tableHeight)

      const dataToRender = data.slice(indexesToRender[0], indexesToRender[1])

      this.setState({ dataToRender, bufferHeight })
    }

    window.requestAnimationFrame(this.refreshScroll)
  }

  calculate = (scrollTop, tableHeight) => {
    const { data, rowHeight } = this.props
    
    const rowsAbove = scrollTop / rowHeight

    const rowsInView = tableHeight / rowHeight

    const topVisibleRow = rowsAbove + 1

    const firstRowToRender = Math.max(topVisibleRow - 10, 0)

    const lastRowToRender = Math.min(topVisibleRow + rowsInView + 10, data.length)

    const bufferHeight = firstRowToRender * rowHeight

    return {
      indexesToRender: [Math.floor(firstRowToRender), Math.floor(lastRowToRender)],
      bufferHeight
    }
  }


  render() {
    const { rowHeight, data } = this.props
    const { dataToRender, bufferHeight } = this.state

    return (
      <div ref={this.tableContainer} style={{width: 400, height: 200, overflow: 'scroll', border: '1px solid black', padding: '0px 10'}}>
        <div style={{ height: data.length * rowHeight }}>
          <div style={{ height: bufferHeight }} />
          {
            dataToRender.map(d => <Row key={d.id} {...d} height={rowHeight} />)
          }
        </div>
      </div>
    )
  }
}