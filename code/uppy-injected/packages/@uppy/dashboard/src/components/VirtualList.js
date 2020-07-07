const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const STYLE_INNER = {
  position: 'relative',
  width: '100%',
  minHeight: '100%'
};
const STYLE_CONTENT = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  overflow: 'visible'
};
class VirtualList extends Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    super(props);
    this.focusElement = null;
    this.state = {
      offset: 0,
      height: 0
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  resize() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resize","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    if (this.state.height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"resize"},');

  }
  handleResize = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    this.resize();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }
  handleScroll = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

    this.setState({
      offset: this.base.scrollTop
    });
    if (this.props.sync) {
      this.forceUpdate();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }
  componentWillUpdate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUpdate","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUpdate"},');

  }
  componentDidUpdate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidUpdate","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    this.resize();
    window.addEventListener('resize', this.handleResize);
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    window.removeEventListener('resize', this.handleResize);
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  render({data, rowHeight, renderRow, overscanCount = 10, sync, ...props}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"VirtualList","superClass":"Component"}},`);

    const {offset, height} = this.state;
    let start = Math.floor(offset / rowHeight);
    let visibleRowCount = Math.floor(height / rowHeight);
    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }
    const end = start + visibleRowCount + 4;
    const selection = data.slice(start, end);
    const styleInner = {
      ...STYLE_INNER,
      height: data.length * rowHeight
    };
    const styleContent = {
      ...STYLE_CONTENT,
      top: start * rowHeight
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div onScroll={this.handleScroll}  {...props}>
        <div role="presentation" style={styleInner}>
          <div role="presentation" style={styleContent}>
            {selection.map(renderRow)}
          </div>
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = VirtualList;
