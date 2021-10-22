import React, { Component } from "react";
import styles from "./Invoice.module.scss";
import Pdf from "react-to-pdf";
import LineItems from "./LineItems";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import uuidv4 from "uuid/v4";
import img_icon from "../../images/imgIcon.svg";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import table_icon from "../../images/table.svg";
const refe = React.createRef();
class Invoice extends Component {
  locale = "en-US";
  currency = "USD";
  constructor(props) {
    super(props);
    // this.myRef = React.createRef(),
    this.state = {
      taxRate: 0.0,
      lineItems: [
        {
          id: "initial",
          name: "",
          description: "",
          quantity: 0,
          price: 0.0,
        },
      ],
    };
  }
  componentDidUpdate() {
    console.log(this.state.LineItems);
  }

  handleInvoiceChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item;
      return { ...item, [event.target.name]: event.target.value };
    });
    this.setState({ lineItems });
  };

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        { id: uuidv4(), name: "", description: "", quantity: 0, price: 0.0 },
      ]),
    });
  };

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i;
      }),
    });
  };

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    });
  };

  handleFocusSelect = (event) => {
    event.target.select();
  };

  handlePayButtonClick = () => {
    alert("Not implemented");
  };

  formatCurrency = (amount) => {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100);
  };

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price,
      0
    );
  };

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100);
  };

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
  };

  render = () => {
    return (
      <div
        ref={(el) => (this.componentRef = el)}
        refe={refe}
        className={styles.invoice}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="brand w-20 p-2 rounded-sm" onClick={() => alert("a")}>
            <img alt="Logo" className="logo" src={img_icon} />
            {this.state.currentDate}
          </div>
          <Button className="list-link-btn">
            <img src={table_icon}/>
          <Link to={this.props.listLink}>{"Liste de " + this.props.title}</Link>
          </Button>
          
        </div>
        <div className={styles.addresses}>
          <div className={styles.from}>
            <strong>Société :</strong> {this.props.companyName}
            <br />
            <strong>Adresse : </strong>
            {this.props.companyAdress}
            <br />
            <strong>Code postal : </strong>
            {this.props.companyCode}&nbsp;{this.props.companyVille}
            <br />
            <strong>Numéro Téléphone : </strong>
            {this.props.companyTel}
          </div>
          <div>
            <div className={`${styles.valueTable} ${styles.to}`}>
              <div className={styles.row}>
                <div className={styles.label}>
                  Client : {this.props.clientName}
                </div>
                <div className={styles.value}></div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Devis #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Date</div>
                <div className={`${styles.value} ${styles.date}`}>
                  {this.props.currentDate}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Devis</h2>

        <LineItems
          items={this.state.lineItems}
          currencyFormatter={this.formatCurrency}
          addHandler={this.handleAddLineItem}
          changeHandler={this.handleLineItemChange}
          focusHandler={this.handleFocusSelect}
          deleteHandler={this.handleRemoveLineItem}
          reorderHandler={this.handleReorderLineItems}
        />

        <div className={styles.totalContainer}>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Tax Rate (%)</div>
                <div className={styles.value}>
                  <input
                    name="taxRate"
                    type="number"
                    step="0.01"
                    value={this.state.taxRate}
                    onChange={this.handleInvoiceChange}
                    onFocus={this.handleFocusSelect}
                  />
                </div>
              </div>
            </div>
          </form>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Subtotal</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcLineItemsTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Tax ({this.state.taxRate}%)</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcTaxTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Total Due</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcGrandTotal())}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.pay}>
          <ReactToPrint content={() => this.componentRef}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <button className={styles.payNow} onClick={handlePrint}>
                  Imprimer
                </button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          <Pdf targetRef={refe} filename="invoice.pdf">
            {({ toPdf }) => (
              <button className={styles.payNow} onClick={toPdf}>
                Enregistrer
              </button>
            )}
          </Pdf>
        </div>
      </div>
    );
  };
}

export default Invoice;
