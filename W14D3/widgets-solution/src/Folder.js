import React from 'react';

const Headers = ({titles, currentTab, selectTab }) => {
  // We can use the above object destructuring for props where we define parameters.
  // Or we can use the below object destructuring and just have (props) as a parameter.
  // const { titles, currentTab, selectTab } = props;

  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });

  // Uncomment the below debugger for the debugger waterfall
  // debugger;
  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    // Uncomment the below debugger for the debugger waterfall
    // debugger;
  }

  selectTab = (num) => {
    // Uncomment the below debugger for the debugger waterfall
    // debugger;
    this.setState({ currentTab: num });
  }

  render() {
    const folder = this.props.folders[this.state.currentTab];
    const titles = this.props.folders.map(folder => folder.title);
    // Uncomment the below debugger for the debugger waterfall
    // debugger;

    return (
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers
            titles={titles}
            currentTab={this.state.currentTab}
            selectTab={this.selectTab}
          />
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </div>
    );
  }
}

export default Folder;