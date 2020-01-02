## Modules

<dl>
<dt><a href="#module_Patterns">Patterns</a></dt>
<dd></dd>
<dt><a href="#module_Validators">Validators</a></dt>
<dd></dd>
</dl>

<a name="module_Patterns"></a>

## Patterns

* [Patterns](#module_Patterns)
    * [.accountNumberPattern](#module_Patterns.accountNumberPattern) ⇒ <code>boolean</code>
    * [.accountTypeOtherPattern](#module_Patterns.accountTypeOtherPattern) ⇒ <code>boolean</code>
    * [.alphaNumericPattern](#module_Patterns.alphaNumericPattern) ⇒ <code>boolean</code>
    * [.cityPattern](#module_Patterns.cityPattern) ⇒ <code>boolean</code>
    * [.genericTextPattern](#module_Patterns.genericTextPattern) ⇒ <code>boolean</code>
    * [.lastNamePattern](#module_Patterns.lastNamePattern) ⇒ <code>boolean</code>
    * [.namePattern](#module_Patterns.namePattern) ⇒ <code>boolean</code>
    * [.nipPattern](#module_Patterns.nipPattern) ⇒ <code>boolean</code>
    * [.numericPattern](#module_Patterns.numericPattern) ⇒ <code>boolean</code>
    * [.passwordPattern](#module_Patterns.passwordPattern) ⇒ <code>boolean</code>
    * [.bankAccountNamePattern](#module_Patterns.bankAccountNamePattern) ⇒ <code>boolean</code>
    * [.charsCompanyPattern](#module_Patterns.charsCompanyPattern) ⇒ <code>boolean</code>
    * [.postalCodePattern](#module_Patterns.postalCodePattern) ⇒ <code>boolean</code>
    * [.streetPattern](#module_Patterns.streetPattern) ⇒ <code>boolean</code>

<a name="module_Patterns.accountNumberPattern"></a>

### Patterns.accountNumberPattern ⇒ <code>boolean</code>
<p>Check if value match account number pattern</p>
<pre> /^[a-zA-Z0-9\\s]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.accountTypeOtherPattern"></a>

### Patterns.accountTypeOtherPattern ⇒ <code>boolean</code>
<p>Check if value match account type pattern</p>
<pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.alphaNumericPattern"></a>

### Patterns.alphaNumericPattern ⇒ <code>boolean</code>
<p>Check if value match alpha numeric pattern</p>
<pre> /^[a-zA-Z0-9]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.cityPattern"></a>

### Patterns.cityPattern ⇒ <code>boolean</code>
<p>Check if value match city pattern</p>
<pre> /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.genericTextPattern"></a>

### Patterns.genericTextPattern ⇒ <code>boolean</code>
<p>Check if value match generic text pattern</p>
<pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\,\.\-\+\(\)\!\?\:

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\n]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.lastNamePattern"></a>

### Patterns.lastNamePattern ⇒ <code>boolean</code>
<p>Check if value match last name pattern</p>
<pre> /^[a-zA-Z\u00C0-\u017F\-\s\']*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.namePattern"></a>

### Patterns.namePattern ⇒ <code>boolean</code>
<p>Check if value match name pattern</p>
<pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.nipPattern"></a>

### Patterns.nipPattern ⇒ <code>boolean</code>
<p>Check if value match nip pattern</p>
<pre> /^[a-zA-Z0-9\s\-]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.numericPattern"></a>

### Patterns.numericPattern ⇒ <code>boolean</code>
<p>Check if value match numeric pattern</p>
<pre> /^[0-9]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.passwordPattern"></a>

### Patterns.passwordPattern ⇒ <code>boolean</code>
<p>Check if value match password pattern</p>
<pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-\+\_\\!

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\#\$\%\^&amp;\*\|\&quot;\&#x27;\;\:\,\.\?\(\)\[\]\{\}]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.bankAccountNamePattern"></a>

### Patterns.bankAccountNamePattern ⇒ <code>boolean</code>
<p>Check if value match bank account name pattern</p>
<pre>
  /^[0-9a-zA-Z\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\'

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\-\s\&quot;,.\/\-\+\&amp;\(\)]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.charsCompanyPattern"></a>

### Patterns.charsCompanyPattern ⇒ <code>boolean</code>
<p>Check if value match company name pattern</p>
<pre>
  /^[a-zA-Z0-9\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\-\s\.\,\&amp;\&#x60;\&#x27;\:\(\)\!\*\&quot;\/\\\+]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.postalCodePattern"></a>

### Patterns.postalCodePattern ⇒ <code>boolean</code>
<p>Check if value match postal code pattern</p>
<pre> /^[a-zA-Z0-9 \-]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.streetPattern"></a>

### Patterns.streetPattern ⇒ <code>boolean</code>
<p>Check if value match street name pattern</p>
<pre> /^[0-9a-zA-Z\u00C0-\u017F\-\s\.,\/]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators"></a>

## Validators

* [Validators](#module_Validators)
    * [.isValue](#module_Validators.isValue) ⇒ <code>boolean</code>
    * [.isNotNull](#module_Validators.isNotNull) ⇒ <code>boolean</code>
    * [.isNotUndefined](#module_Validators.isNotUndefined) ⇒ <code>boolean</code>
    * [.isNotEmptyUnless](#module_Validators.isNotEmptyUnless) ⇒ <code>boolean</code>
    * [.isNotEmptyString](#module_Validators.isNotEmptyString) ⇒ <code>boolean</code>
    * [.isNotEmptyTrimmedString](#module_Validators.isNotEmptyTrimmedString) ⇒ <code>boolean</code>
    * [.isSelected](#module_Validators.isSelected) ⇒ <code>boolean</code>
    * [.isValidBankTitle](#module_Validators.isValidBankTitle) ⇒ <code>boolean</code>
    * [.isNip](#module_Validators.isNip) ⇒ <code>boolean</code>
    * [.isPostalCode](#module_Validators.isPostalCode) ⇒ <code>boolean</code>
    * [.isValidPassword](#module_Validators.isValidPassword) ⇒ <code>boolean</code>
    * [.isNotSmaller](#module_Validators.isNotSmaller) ⇒ <code>boolean</code>
    * [.isNotSmallerOrEqual](#module_Validators.isNotSmallerOrEqual) ⇒ <code>boolean</code>
    * [.isNotHigher](#module_Validators.isNotHigher) ⇒ <code>boolean</code>
    * [.isNotHigherOrEqual](#module_Validators.isNotHigherOrEqual) ⇒ <code>boolean</code>
    * [.isEmail](#module_Validators.isEmail) ⇒ <code>boolean</code>
    * [.isMinLength](#module_Validators.isMinLength) ⇒ <code>boolean</code>
    * [.isMaxLength](#module_Validators.isMaxLength) ⇒ <code>boolean</code>
    * [.isPhone](#module_Validators.isPhone) ⇒ <code>boolean</code>
    * [.isMobilePhone](#module_Validators.isMobilePhone) ⇒ <code>boolean</code>
    * [.isSameAs](#module_Validators.isSameAs) ⇒ <code>boolean</code>
    * [.isOtherThan](#module_Validators.isOtherThan) ⇒ <code>boolean</code>
    * [.isIban](#module_Validators.isIban) ⇒ <code>boolean</code>
    * [.isLanNumber](#module_Validators.isLanNumber) ⇒ <code>boolean</code>
    * [.isSwift](#module_Validators.isSwift) ⇒ <code>boolean</code>
    * [.isSwiftCountry](#module_Validators.isSwiftCountry) ⇒ <code>boolean</code>
    * [.isPesel](#module_Validators.isPesel) ⇒ <code>boolean</code>
    * [.isPeselNotUnder18](#module_Validators.isPeselNotUnder18) ⇒ <code>boolean</code>
    * [.isValidDate](#module_Validators.isValidDate) ⇒ <code>boolean</code>
    * [.isDateNotUnder18](#module_Validators.isDateNotUnder18) ⇒ <code>boolean</code>
    * [.isExpiryDateValid](#module_Validators.isExpiryDateValid) ⇒ <code>boolean</code>
    * [.isReleaseDateValid](#module_Validators.isReleaseDateValid) ⇒ <code>boolean</code>
    * [.isBirthDateValid](#module_Validators.isBirthDateValid) ⇒ <code>boolean</code>
    * [.isAfterToday](#module_Validators.isAfterToday) ⇒ <code>boolean</code>
    * [.isBeforeToday](#module_Validators.isBeforeToday) ⇒ <code>boolean</code>
    * [.isPropValid](#module_Validators.isPropValid) ⇒ <code>boolean</code>
    * [.isAllKeys](#module_Validators.isAllKeys) ⇒ <code>boolean</code>
    * [.isLatin](#module_Validators.isLatin) ⇒ <code>boolean</code>

<a name="module_Validators.isValue"></a>

### Validators.isValue ⇒ <code>boolean</code>
<p>Check if any proper value was given</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotNull"></a>

### Validators.isNotNull ⇒ <code>boolean</code>
<p>Check if value is not null</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotUndefined"></a>

### Validators.isNotUndefined ⇒ <code>boolean</code>
<p>Check if value is not undefined</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotEmptyUnless"></a>

### Validators.isNotEmptyUnless ⇒ <code>boolean</code>
<p>Check if value was given.</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| canBeEmpty | <code>boolean</code> | <p>if true validation is ignored</p> |

<a name="module_Validators.isNotEmptyString"></a>

### Validators.isNotEmptyString ⇒ <code>boolean</code>
<p>Check if value is not empty string</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotEmptyTrimmedString"></a>

### Validators.isNotEmptyTrimmedString ⇒ <code>boolean</code>
<p>Check if value is not empty string after trim</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSelected"></a>

### Validators.isSelected ⇒ <code>boolean</code>
<p>Check if any option was chosen. Created for select2 library</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>boolean</code> | <p>value to check.</p> |

<a name="module_Validators.isValidBankTitle"></a>

### Validators.isValidBankTitle ⇒ <code>boolean</code>
<p>Check if value is valid bank title</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isNip"></a>

### Validators.isNip ⇒ <code>boolean</code>
<p>Check if value is valid nip number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPostalCode"></a>

### Validators.isPostalCode ⇒ <code>boolean</code>
<p>Check if value is valid polish or chinese postal code</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| country | <code>string</code> | <p>country of postal code.</p> |

<a name="module_Validators.isValidPassword"></a>

### Validators.isValidPassword ⇒ <code>boolean</code>
<p>Check if value is valid password with 8 signs</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isNotSmaller"></a>

### Validators.isNotSmaller ⇒ <code>boolean</code>
<p>Check if value is smaller than given minimal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_Validators.isNotSmallerOrEqual"></a>

### Validators.isNotSmallerOrEqual ⇒ <code>boolean</code>
<p>Check if value is smaller or equal than given minimal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_Validators.isNotHigher"></a>

### Validators.isNotHigher ⇒ <code>boolean</code>
<p>Check if value is higher than given maximal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_Validators.isNotHigherOrEqual"></a>

### Validators.isNotHigherOrEqual ⇒ <code>boolean</code>
<p>Check if value is higher or equal than given maximal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_Validators.isEmail"></a>

### Validators.isEmail ⇒ <code>boolean</code>
<p>Check if value is valid email. Based on w3.org</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isMinLength"></a>

### Validators.isMinLength ⇒ <code>boolean</code>
<p>Check if value has smaller or equal length than given minimal length</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minLength | <code>string</code> | <p>minimal length.</p> |

<a name="module_Validators.isMaxLength"></a>

### Validators.isMaxLength ⇒ <code>boolean</code>
<p>Check if value has bigger or equal length than given maximal length</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxLength | <code>string</code> | <p>maximal length.</p> |

<a name="module_Validators.isPhone"></a>

### Validators.isPhone ⇒ <code>boolean</code>
<p>Check if value is valid phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isMobilePhone"></a>

### Validators.isMobilePhone ⇒ <code>boolean</code>
<p>Check if value is valid mobile phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isSameAs"></a>

### Validators.isSameAs ⇒ <code>boolean</code>
<p>Check if value is equal to other value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_Validators.isOtherThan"></a>

### Validators.isOtherThan ⇒ <code>boolean</code>
<p>Check if value is not equal to other value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_Validators.isIban"></a>

### Validators.isIban ⇒ <code>boolean</code>
<p>Check if value is valid iban number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isLanNumber"></a>

### Validators.isLanNumber ⇒ <code>boolean</code>
<p>Check if value is valid non-iban account number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSwift"></a>

### Validators.isSwift ⇒ <code>boolean</code>
<p>Check if value is valid swift number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSwiftCountry"></a>

### Validators.isSwiftCountry ⇒ <code>boolean</code>
<p>Check if given country is equal to country taken from swift</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| swift | <code>string</code> | <p>swift to check.</p> |
| country | <code>string</code> | <p>country to compare.</p> |

<a name="module_Validators.isPesel"></a>

### Validators.isPesel ⇒ <code>boolean</code>
<p>Check if value is valid pesel number. Also accepts *********** as anonymized pesel</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPeselNotUnder18"></a>

### Validators.isPeselNotUnder18 ⇒ <code>boolean</code>
<p>Check if person with given pesel is above 18 years</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isValidDate"></a>

### Validators.isValidDate ⇒ <code>boolean</code>
<p>Check if value is valid date in format YYYY-MM-DD. Validates also correct number of days per month</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isDateNotUnder18"></a>

### Validators.isDateNotUnder18 ⇒ <code>boolean</code>
<p>Check if person with given birthday is above 18 years</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isExpiryDateValid"></a>

### Validators.isExpiryDateValid ⇒ <code>boolean</code>
<p>Check if given expiration date of id card is valid. Checks if given date is later or equal to today and
if given date is smaller than current date plus 100 years</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isReleaseDateValid"></a>

### Validators.isReleaseDateValid ⇒ <code>boolean</code>
<p>Check if given release date of id card is valid. Checks if given date is earlier or equal to today and
if given date is bigger than current date minus 100 years. You can also pass expiration date and if it's given
then it is checked if expiration date is later than release date</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |
| expiryDate | <code>string</code> | <p>acc.</p> |

<a name="module_Validators.isBirthDateValid"></a>

### Validators.isBirthDateValid ⇒ <code>boolean</code>
<p>Check if value is valid birth date. Assumes that human cannot be older than 150 years</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isAfterToday"></a>

### Validators.isAfterToday ⇒ <code>boolean</code>
<p>Check if given date is after today</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isBeforeToday"></a>

### Validators.isBeforeToday ⇒ <code>boolean</code>
<p>Check if given date is before today</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPropValid"></a>

### Validators.isPropValid ⇒ <code>boolean</code>
<p>Check if given object has property valid and if it is equal to true</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | <p>value to check.</p> |

<a name="module_Validators.isAllKeys"></a>

### Validators.isAllKeys ⇒ <code>boolean</code>
<p>Check if given object has all keys</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | <p>value to check.</p> |
| expectedKeys | <code>Array.&lt;string&gt;</code> | <p>array of expected keys.</p> |

<a name="module_Validators.isLatin"></a>

### Validators.isLatin ⇒ <code>boolean</code>
<p>Check if value has not any cyrillic letters</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

