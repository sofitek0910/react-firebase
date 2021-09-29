import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import EditProject from './components/projects/EditProject'
import CreateTask from './components/tasks/CreateTask'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        {/* Ensures only 1 route is loaded at a time */}
        <Switch>
          {/*
            - Dsiplays defined components depending on the route defined
            - "exact" will load the exact path that has been defined
          */}

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route path="/project/:id/edit" component={EditProject} />
          <Route path="/create" component={CreateProject} />
          <Route path="/task/create" component={CreateTask} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
