class LearnApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "quizMode",
      dir: [
        {dirIdx:0, dirName:"physics", questions:[{hint:"E^2=(m?c?)", ans:"m^2c^4+p^2c^2"}, {hint:"F=(m?a?)", ans:"ma"}, {hint:"Gravity g=", ans:"9.8m/s"} ]},
        {dirIdx:0, dirName:"math", questions:[{hint:"e=?", ans:"2.71828"}, {hint:"pi=?", ans:"3.14"}]},
        {dirIdx:0, dirName:"eng", questions:[{hint:"I have?", ans:"30cm"}, {hint:"ntuee", ans:"good"}]}
        ]
    };
  }

  render() {
    return (
      // html -> jsx
      <div className="learning-app ">
        <div className="learning-app_left">
          <div className="heading">
            <h3 className="learning-title">Learning Library</h3>
          </div>
          <div>
          </div>
        </div>
        <div className="chat-app_right">
          <div className="mode-row">
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<LearnApp />, document.getElementById('root'));