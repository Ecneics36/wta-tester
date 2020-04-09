import React, { Component, useState } from 'react';

function isValidCard(number) {
  if (isAllNums(number) === true) {
    return getSum(number);
  }
  if (getSum(number) === true) {
    return (
      isVisa(number) ||
      isAmex(number) ||
      isMasterCard(number) ||
      isDiscover(number) ||
      isDiners(number)
    );
  } else {
    return false;
  }
}

function getSum(number) {
  // var test = [];
  var doubledNum = 0;
  var sumOfDoubles = 0;
  var sumOfSingles = 0;
  var numStr = number ? number.split('') : '';
  for (
    var i = numStr.length - 2, j = numStr.length - 1;
    i >= 0;
    i -= 2, j -= 2
  ) {
    doubledNum = +numStr[i] * 2;
    if (doubledNum >= 10) {
      doubledNum = doubledNum - 9;
    }
    sumOfDoubles += doubledNum; //7, 16, 18, 25, 27, 28,
    // test.push(doubledNum);
    sumOfSingles += +numStr[j]; //7, 12, 19, 22, 27, 28,
    // test.push(sumOfSingles);
  }
  return (sumOfSingles + sumOfDoubles) % 10 === 0;
}

function isAllNums(number) {
  var nums = '0123456789';
  if (!number) {
    return;
  }
  for (var i = 0; i < number.length; i++) {
    if (!nums.includes(number[i])) {
      return false;
    }
  }
  return true;
}

function isVisa(number) {
  if (!number) {
    return;
  }
  if (number[0] === '4' && (number.length === 13 || number.length === 16)) {
    return true;
  }
  return false;
}

function isAmex(number) {
  if (!number) {
    return;
  }
  if (
    number.length === 15 &&
    (number.slice(0, 2) === '37' || number.slice(0, 2) === '34')
  ) {
    return true;
  }
  return false;
}

function isMasterCard(number) {
  if (!number) {
    return;
  }
  if (
    number.length === 16 &&
    number.slice(0, 2) >= '51' &&
    number.slice(0, 2) <= '55'
  ) {
    return true;
  }
  return false;
}

function isDiscover(number) {
  if (!number) {
    return;
  }
  if (number.length === 16 && number.slice(0, 4) === '6011') {
    return true;
  }
  return false;
}

function isDiners(number) {
  if (!number) {
    return;
  }
  if (
    (number.length === 14 &&
      (number.slice(0, 2) === '38' || number.slice(0, 2) === '36')) ||
    (number.slice(0, 3) >= '300' && number.slice(0, 3) <= '305')
  ) {
    return true;
  }
  return false;
}

function TesterComponent() {
  const [testValue, setTestValue] = useState('0');

  const handleTestValue = (event) => setTestValue(event.target.value);

  console.log('testValue: ', testValue);
  return (
    <div>
      <form onSubmit={handleTestValue}>
        <input value={testValue} onChange={handleTestValue} />
        {isValidCard(testValue) ? 'true' : 'false'}
      </form>
    </div>
  );
}

export default TesterComponent;