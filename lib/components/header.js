const Component = require('./component');

class Header extends Component {
  render() {
    // Replace {DATE_HERE} with the actual date
    const currentDate = new Date().toLocaleDateString();
    return `<header class="header"><h1>Todo Today</h1><p>${currentDate}</p></header>`;
  }
}

module.exports = Header;
