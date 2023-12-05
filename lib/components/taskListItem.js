const TaskListItem = require('../../lib/components/taskListItem');


class TaskListItem extends Component {
  constructor(children = [], priority = false) {
    super(children);
    this.priority = priority;
  }

  render() {
    const priorityClass = this.priority ? ' tasks-item-priority' : '';
    return `<li class="tasks-item${priorityClass}">${this.renderInnerHTML()}</li>`;
  }
}

module.exports = TaskListItem;
