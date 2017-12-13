import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';


//Make a call to GDAX

var crypto = require('crypto');


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest !== "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}


function makeCorsRequest(url) {
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    throw new Error('CORS not supported');
    return;
  } 


  xhr.onload = function() {
    var text = xhr.responseText;
    console.log('Response from CORS request to ' + url + 'is : ' + text);
  }

  xhr.onerror = function() {
    alert('Error making the request');
  }


  xhr.send()
}

export default class TokenList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object : []
      // MarketCurrency : [],
      // BaseCurrency : [],
      // MarketCurrencyLong : [],
      // BaseCurrencyLong : [],
      // MinTradeSize: [],
      // isActive : [],
      // LogoUrl : []
    };
  }

  componentDidMount() {
    this.TokenList();
  }
  
//getcurrencies - transaction costs
//getmarkets - current liquidity

  TokenList() {
    
    // Neither method currently working...

    // Method 1
    $.ajax({
      type: 'GET',
      url: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: false
      },
      
      success: function() {
        console.log('Access Granted!');
      },

      headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:3000'
      },

      error: function() {
        alert('Error making the request');
      }

    })
    


    // Method 2
    // $.getJSON(makeCorsRequest('https://bittrex.com/api/v1.1/public/getmarketsummaries'))
    //  .then(({  results  }) => this.setState({ object: results }));
  }


render() {
  const object = this.state.object.map((item, i) => (
    <div>
      <h1>{ item }</h1>
    </div>
    ));

  return(
    <div className="TokenList">
      { object }
    </div>
    );
  }

}





