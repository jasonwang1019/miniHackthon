class LearnApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "quizMode",
      currentDirIndex: 1,
      showAns: 0 ,
      dir: [
        {dirIdx:0, dirName:"physics", questions:[{hint:"E^2=", ans:"m^2c^4+p^2c^2", your_ans:""}, {hint:"F=", ans:"ma", your_ans:""}, {hint:"Gravity g=", ans:"9.8m/s", your_ans:""} ]},
        {dirIdx:1, dirName:"math", questions:[{hint:"e=", ans:"2.71828", your_ans:""}, {hint:"pi=", ans:"3.14", your_ans:""}]},
        {dirIdx:2, dirName:"english", questions:[{hint:"I have?", ans:"an apple", your_ans:""}, {hint:"ntuee is?", ans:"good", your_ans:""}]}
        ]
    };
  }

  handleDirChange(event,idx){
    this.setState({currentDirIndex: idx});
    console.log(idx);
  }

  aboutAnswer(event,type){  //type=1 : show ans, type=2 : add hint/ans
    console.log("type=");
    if(type==1){
      this.setState({showAns: 1});
    }
    else{
      
    }
  }

  modeClicked(e){
    this.setState({mode:e.target.innerHTML});
    console.log(e.target.innerHTML);
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
            <DirectoryList states={this.state} onClick={this.handleDirChange.bind(this)}/>
          </div>
        </div>
        <div className="learning-app_right">
          <div className="mode-row">
            <ModeButton className="mode-button" onClick={this.modeClicked.bind(this)}>addMode</ModeButton>
            <ModeButton className="mode-button" onClick={this.modeClicked.bind(this)}>viewMode</ModeButton>
            <ModeButton className="mode-button" onClick={this.modeClicked.bind(this)}>quizMode</ModeButton>
          </div>
          <Mode states={this.state} onClick={this.aboutAnswer.bind(this)}/>
        </div>
      </div>
    );
  }
}
class Mode extends React.Component {
  
  
  render() {
    if(this.props.states.mode=="quizMode"){
      return (
        <QuizList states={this.props.states} onClick={() => this.props.onClick(this)} />
      );
    }
    else if(this.props.states.mode=="addMode"){
      return (
        <AddMode states={this.props.states} />
      );
    }
    else{
      return (
        <ViewList states={this.props.states} />
      );
    }
  }
}

class ModeButton extends React.Component {
  render() {
    const { className, children, onClick } = this.props;
    
    return (
      <div
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

class DirectoryList extends React.Component {
  renderDirectoryItem(item, i) {
    return (
      <div 
        onClick={() => this.props.onClick(this,item.dirIdx)}>
        <DirectoryItem
          dirIndex={item.dirIdx}
          dirName={item.dirName}   />
      </div>
    );
  }

  render() {
    return (
      <ul className="directorylist">{this.props.states.dir.map(this.renderDirectoryItem, this)}</ul>
    );
  }
}

class DirectoryItem extends React.Component {
  render() {
    return (
      <li className="dir-item">
        <div className="clearfix">
          <div className="dir-item_left">
          </div>
          <div className="dir-item_right">
              {this.props.dirName}
          </div>
        </div>
      </li>
    );
  }
}

class QuizList extends React.Component {
  renderQuestionItem(item, i) {
    return (
      <QuestionItem
        hint={item.hint}
        ans={item.ans}  
        yourans={item.your_ans}
        showAns={this.props.states.showAns} />
    );
  }

  render() {
    return (
      <div> 
        <div className="heading">
          <div className="current-directory">{this.props.states.dir[this.props.states.currentDirIndex].dirName}</div>
        </div>
        <ul className="questionlist">{this.props.states.dir[this.props.states.currentDirIndex].questions.map(this.renderQuestionItem, this)}</ul>
        <button onClick={() => this.props.onClick(this,1)}>show answer</button>
      </div>
    );
  }
}

class QuestionItem extends React.Component {
  handleNewAnswerChange(event){
    this.props.yourans=event.target.value
  }

  showingAns(){
    if(this.props.showAns==0){
      return "";
    }
    return this.props.ans;
  }
 
  render() {
    return (
      // html -> jsx
      <li>
        <div className="question-item">
          <span>{this.props.hint}</span>
          <input 
          className="your_ans" 
          value={this.props.yourans}
          onChange={this.handleNewAnswerChange.bind(this)}  />
          <div className="real_ans">{this.showingAns()}</div>
        </div>
      </li>
    );
  }
}

class ViewList extends React.Component {
  renderQuestionItem(item, i) {
    return (
      <div>
        <div className="viewlist-hint">{item.hint}</div>
        <div className="viewlist-ans">{item.ans}</div>
      </div>
    );
  }

  render() {
    return (
      <div> 
        <div className="heading">
          <div className="current-directory">{this.props.states.dir[this.props.states.currentDirIndex].dirName}</div>
        </div>
        <div>
          <div className="viewlist-hint">hint</div>
          <div className="viewlist-ans">ans</div>
        </div>
        <ul className="questionlist">{this.props.states.dir[this.props.states.currentDirIndex].questions.map(this.renderQuestionItem, this)}</ul>
      </div>
    );
  }
}

class AddMode extends React.Component {
  render() {
    return (
      <div> 
        <div className="heading">
          <div className="current-directory">{this.props.states.dir[this.props.states.currentDirIndex].dirName}</div>
        </div>
        <div>
        <label >hint:</label>
        <input></input>
        <label>ans:</label>
        <input></input>
        </div>
        <button>add</button>
      </div>
    );
  }
}


ReactDOM.render(<LearnApp />, document.getElementById('root'));
