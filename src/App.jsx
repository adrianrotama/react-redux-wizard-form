import React from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="main-app">
                    <header className="main-header">
                        <div className="top-bar adaptive-content">
                            <Link to="/">SampleApp</Link>
                        </div>
                    </header>
                    <main className="main-content">
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
