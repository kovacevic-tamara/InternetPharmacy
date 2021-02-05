import React from "react";
import DatePicker from "react-datepicker";
import {Alert, Button, Modal} from "react-bootstrap";
import axios from "axios";


export default class CreateNewOffer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalClose:false,
            medicationOffer:   {
                cost : 1,
                shippingDate : '',
            },
            errors: {
                medicationOffer: {
                    cost: 'Enter cost',
                    shippingDate: 'Choose shipping date',
                }
            },
            boolMessage:false,
            boolButton:true,
            medicationList:[],
            boolMedications:true,
        }
    }



    handleInputChange = (event) => {

        const { name, value } = event.target;
        const medicationOffer = this.state.medicationOffer;
        medicationOffer[name] = value;

        this.setState({ medicationOffer });
        this.validationErrorMessage(event);
    }

    changeDatePicker = (date) => {
        let errors = this.state.errors;
        errors.medicationOffer.shippingDate = this.state.errors.medicationOffer.shippingDate.length < 1 ? 'Choose shipping date' : '';
        this.setState({ errors });

        this.setState({
                medicationOffer : {
                    ...this.state.medicationOffer,
                    shippingDate : date
                }
            }
        );
    }

    validationErrorMessage = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        errors.medicationOffer.cost = value.length < 1 ? 'Enter cost' : '';
        this.setState({ errors });
    }


    submitForm = async (event) => {
        this.setState({ submitted: true });
        const medicationOffer = this.state.medicationOffer;
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            console.info('Valid Form')
            console.log(this.state.medicationOffer.shippingDate)
            this.state.boolMessage=true;
            this.state.boolButton=false;
            this.sendParams();

        } else {
            console.log('Invalid Form')
        }
    }


    async sendParams() {
        let orderId=this.props.order.id;
        console.log("HEH")
        console.log(this.props.order)
        axios
            .post('http://localhost:8080/api/medicationOffer/new', {
                'id':'',
                'cost' : this.state.medicationOffer.cost,
                'shippingDate' : this.state.medicationOffer.shippingDate,
                'status' : 0,
                'medicationOrderId' : this.props.order.id,
                'supplierId': 1
            })
            .then(res => {

            });

    }

    validateForm = (errors) => {
        let valid = true;
        Object.entries(errors.medicationOffer).forEach(item => {
            console.log(item)
            item && item[1].length > 0 && (valid = false)
        })
        return valid;
    }


    render() {

        return (
            <div className="jumbotron jumbotron-fluid"  style={{ background: 'silver', color: 'rgb(0, 92, 230)'}}>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <h5 className="card-header">
                                        Order
                                    </h5>
                                    <div className="card-body">
                                        <p className="card-text">
                                            Kreirao : {this.props.order.pharmacyAdmin.firstName + " " + this.props.order.pharmacyAdmin.lastName}
                                            <br/>
                                            Status : {this.props.order.status}
                                            <br/>
                                            Rok isporuke : {this.props.order.deadline.split("T")[0]}
                                            <br/>
                                            <br/>
                                            Lekovi
                                            <ul>
                                                {this.props.order.medicationQuantity.map((e, key) => {
                                                    return <option key={key}
                                                                   value={e.medication}>{e.medication.name} : {e.quantity}</option>

                                                })
                                                }
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                { this.state.boolMedications ?
                <div className="card" style={{ background: '#ABB8C3', color: 'rgb(0, 92, 230)', marginTop:'5rem', marginBottom:'3rem'}}>
                    {
                        this.state.boolMessage &&
                        <Alert variant='success' show={true}  style={({textAlignVertical: "center", textAlign: "center"})}>
                            Thank you. You have successfully created your offer.
                        </Alert>
                    }

                    <h2 style={{marginTop: '1rem', marginLeft:'12rem'}}>Offer</h2>
                    <div>
                        <div className="row"style={{marginTop: '1rem'}}>
                            <label  className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-6 mb-2">
                                <input type="number" min="0" name="cost" className="form-control" id="cost" placeholder="Enter cost" onChange={(e) => { this.handleInputChange(e)} } className="form-control"/>
                                { this.state.submitted && this.state.errors.medicationOffer.cost.length > 0 &&  <span className="text-danger">{this.state.errors.medicationOffer.cost}</span>}

                            </div>
                            <div className="col-sm-4">
                            </div>
                        </div>
                        <div className="row"style={{marginTop: '1rem'}}>
                            <label  className="col-sm-4 col-form-label">Shipping date</label>
                            <div className="col-sm-6 mb-2">
                                <DatePicker  selected={this.state.medicationOffer.shippingDate} minDate={new Date()} onChange={date => this.changeDatePicker(date)} />
                                { this.state.submitted && this.state.errors.medicationOffer.shippingDate.length > 0 &&  <span className="text-danger">{this.state.errors.medicationOffer.shippingDate}</span>}

                            </div>
                            <div className="col-sm-4">
                            </div>
                        </div>

                        <div className="row" style={{marginTop: '1rem'}}>
                            <div className="col-sm-5 mb-2">
                            </div>

                            <div className="row">
                                {
                                    this.state.boolButton &&
                                    <Button style={{marginLeft: '7rem'}} variant="primary"
                                            onClick={this.submitForm}>Submit</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                    :
                    <div>
                        Ne moze
                    </div>
                }
            </div>

        );
    }

}
