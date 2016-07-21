'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = require('inferno');

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = require('inferno-component');

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bp0 = _inferno2.default.createBlueprint({
  tag: 'div',
  key: {
    arg: 0
  },
  className: {
    arg: 1
  },
  events: {
    arg: 2
  },
  children: {
    arg: 3
  }
});

var bp1 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  children: {
    arg: 1
  }
});

var bp2 = _inferno2.default.createBlueprint({
  tag: 'div',
  key: {
    arg: 0
  },
  className: {
    arg: 1
  },
  children: {
    arg: 2
  }
});

var bp3 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  children: {
    arg: 1
  }
});

var bp4 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  children: {
    arg: 1
  }
});

var bp5 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  children: {
    arg: 1
  }
});

var bp8 = _inferno2.default.createBlueprint({
  tag: 'span',
  className: {
    arg: 0
  }
});

var bp7 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  events: {
    arg: 1
  },
  children: {
    arg: 2
  }
});

var bp6 = _inferno2.default.createBlueprint({
  tag: 'div',
  className: {
    arg: 0
  },
  children: {
    arg: 1
  }
});

class Dropdown extends _infernoComponent2.default {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || {
        label: props.placeholder || 'Select...',
        value: ''
      },
      isOpen: false
    };
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.fireChangeEvent = this.fireChangeEvent.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({ selected: newProps.value });
    } else if (!newProps.value && newProps.placeholder) {
      this.setState({ selected: { label: newProps.placeholder, value: '' } });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleMouseDown(event) {
    if (event.type === 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setValue(value, label) {
    let newState = {
      selected: {
        value,
        label
      },
      isOpen: false
    };
    this.fireChangeEvent(newState);
    this.setState(newState);
  }

  fireChangeEvent(newState) {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  renderOption(option) {
    let optionClass = (0, _classnames2.default)({
      [`${ this.props.baseClassName }-option`]: true,
      'is-selected': option === this.state.selected
    });

    let value = option.value || option.label || option;
    let label = option.label || option.value || option;

    return bp0(value, optionClass, {
      onmousedown: this.setValue.bind(this, value, label),
      onclick: this.setValue.bind(this, value, label)
    }, label);
  }

  buildMenu() {
    let { options, baseClassName } = this.props;
    let ops = options.map(option => {
      if (option.type === 'group') {
        let groupTitle = bp1(`${ baseClassName }-title`, option.name);
        let _options = option.items.map(item => this.renderOption(item));

        return bp2(option.name, `${ baseClassName }-group`, [groupTitle, _options]);
      } else {
        return this.renderOption(option);
      }
    });

    return ops.length ? ops : bp3(`${ baseClassName }-noresults`, 'No options found');
  }

  handleDocumentClick(event) {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  }

  render() {
    const { baseClassName } = this.props;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    let value = bp4(`${ baseClassName }-placeholder`, placeHolderValue);
    let menu = this.state.isOpen ? bp5(`${ baseClassName }-menu`, this.buildMenu()) : null;

    let dropdownClass = (0, _classnames2.default)({
      [`${ baseClassName }-root`]: true,
      'is-open': this.state.isOpen
    });

    return bp6(dropdownClass, [bp7(`${ baseClassName }-control`, {
      onmousedown: this.handleMouseDown.bind(this),
      ontouchend: this.handleMouseDown.bind(this)
    }, [value, bp8(`${ baseClassName }-arrow`)]), menu]);
  }

}

Dropdown.defaultProps = { baseClassName: 'Dropdown' };
exports.default = Dropdown;
module.exports = exports['default'];