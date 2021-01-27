import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import IndexPage from "./pages/IndexPage";
import PatientProfilePage from "./pages/patient/PatientProfilePage";
import PharmacyPage from "./pages/PharmacyPage";
import ReviewedClients from "./pages/ReviewedClients";
import VacationRequest from "./pages/VacationRequest";
import PatientHomePage from "./pages/patient/PatientHomePage";
import DermatologistHomePage from "./pages/Dermatologist/DermatologistHomePage";
import PharmacistProfilePage from "./pages/Pharmacist/PharmacistProfilePage";
import PharmacistHomePage from "./pages/Pharmacist/PharmacistHomePage";
import PharmacistWorkingHours from "./pages/Pharmacist/PharmacistWorkingHours";
import Registration from "./pages/Registration";
import {ISAdminHomePage} from "./pages/ISAdminHomePage";
import PharmacyAdminProfilePage from "./pages/PharmacyAdminProfilePage";
import PatientCounselScheduling from "./pages/patient/PatientCounselScheduling";


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      userRole : "",
      username : "",
      Id : ""
    }
  };

  render() {
    const role = "Admin";
    const Id = this.state.Id;
    document.title = "Internet Pharmacy"
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/"  render={(props) => <IndexPage {...props} role={role} /> } />
            <Route path="/patient-profile" render={(props) => <PatientProfilePage {...props} role={role} /> } />
            <Route path="/pharmacy-admin-profile" render={(props) => <PharmacyAdminProfilePage {...props} role={role} /> } />
            <Route path="/pharmacy"  component={PharmacyPage} role={role}/>
            <Route path="/reviewClients"  render={(props) => <ReviewedClients {...props} role={role} Id={Id}/> } />
            <Route path="/vacationRequest" render={(props) => <VacationRequest {...props} role={role} Id={Id}/> } />
            <Route path='/patient-home' render={(props) => <PatientHomePage {...props} role={role} Id={Id}/> }/>
            <Route path="/dermatologistHomePage"  render={(props) => <DermatologistHomePage {...props} role={role} Id={Id}/> } />
            <Route path="/pharmacistHomePage"  render={(props) => <PharmacistHomePage {...props} role={role} Id={Id}/> } />
            <Route path="/patient-counsel-schedule"  render={(props) => <PatientCounselScheduling {...props} role={role} Id={Id}/> } />
            <Route path="/registration"  component={Registration} role={role}/>
            <Route path="/pharmacyAdmin"  component={ISAdminHomePage} role={role}/>

          </Switch>
        </BrowserRouter>
    );
  }

  updateUserData = (role, username) => {
    this.setState({
      userRole : role,
      username : username
    })
  }

}
