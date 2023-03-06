import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 text-uppercase pt-5
              mx-auto text-center text-title">
            <h1 className="display-3">
              404
            </h1>
            <h2>
              page not found
            </h2>
            <h3 className='mt-5'>the requested URL was not found
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
