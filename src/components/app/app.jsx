
import React, { Component } from 'react'
import ComponentAdd from '../component-add/component-add'
import ComponentList from '../component-list/component-list'

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     comments: [
  //       { userName:'tom',content:'react挺好的'},
  //       { userName:'jerry',content:'react还不错'},
  //     ]
  //   }
  // }
  //给组件对象添加state属性
  state = {
    comments: [
      { userName:'tom',content:'react挺好的'},
      { userName:'jerry',content:'react还不错'},
    ]
  }
  render() {
    const {comments}=this.state
    return (
      <div>
          <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <ComponentAdd />
          <ComponentList comments={comments}/>
        </div>
      </div>
    )
  }
}

