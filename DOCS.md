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
    * [.isValueValidator](#module_Validators.isValueValidator) ⇒ <code>boolean</code>
    * [.isNotNullValidator](#module_Validators.isNotNullValidator) ⇒ <code>boolean</code>
    * [.isNotUndefinedValidator](#module_Validators.isNotUndefinedValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyUnlessValidator](#module_Validators.isNotEmptyUnlessValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyStringValidator](#module_Validators.isNotEmptyStringValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyTrimmedStringValidator](#module_Validators.isNotEmptyTrimmedStringValidator) ⇒ <code>boolean</code>
    * [.isSelectedValidator](#module_Validators.isSelectedValidator) ⇒ <code>boolean</code>
    * [.isValidBankTitleValidator](#module_Validators.isValidBankTitleValidator) ⇒ <code>boolean</code>
    * [.isNipValidator](#module_Validators.isNipValidator) ⇒ <code>boolean</code>
    * [.isPostalCodeValidator](#module_Validators.isPostalCodeValidator) ⇒ <code>boolean</code>
    * [.isPasswordValidator](#module_Validators.isPasswordValidator) ⇒ <code>boolean</code>
    * [.isNotSmallerValidator](#module_Validators.isNotSmallerValidator) ⇒ <code>boolean</code>
    * [.isNotSmallerOrEqualValidator](#module_Validators.isNotSmallerOrEqualValidator) ⇒ <code>boolean</code>
    * [.isNotHigherValidator](#module_Validators.isNotHigherValidator) ⇒ <code>boolean</code>
    * [.isNotHigherOrEqualValidator](#module_Validators.isNotHigherOrEqualValidator) ⇒ <code>boolean</code>
    * [.isEmailValidator](#module_Validators.isEmailValidator) ⇒ <code>boolean</code>
    * [.isMinLengthValidator](#module_Validators.isMinLengthValidator) ⇒ <code>boolean</code>
    * [.isMaxLengthValidator](#module_Validators.isMaxLengthValidator) ⇒ <code>boolean</code>
    * [.isPhoneValidator](#module_Validators.isPhoneValidator) ⇒ <code>boolean</code>
    * [.isMobilePhoneValidator](#module_Validators.isMobilePhoneValidator) ⇒ <code>boolean</code>
    * [.isSameAsValidator](#module_Validators.isSameAsValidator) ⇒ <code>boolean</code>
    * [.isOtherThanValidator](#module_Validators.isOtherThanValidator) ⇒ <code>boolean</code>
    * [.isIbanValidator](#module_Validators.isIbanValidator) ⇒ <code>boolean</code>
    * [.isLanNumberValidator](#module_Validators.isLanNumberValidator) ⇒ <code>boolean</code>
    * [.isSwiftValidator](#module_Validators.isSwiftValidator) ⇒ <code>boolean</code>
    * [.isSwiftCountryValidator](#module_Validators.isSwiftCountryValidator) ⇒ <code>boolean</code>
    * [.isPeselValidator](#module_Validators.isPeselValidator) ⇒ <code>boolean</code>
    * [.isPeselNotUnder18Validator](#module_Validators.isPeselNotUnder18Validator) ⇒ <code>boolean</code>
    * [.isDateValidator](#module_Validators.isDateValidator) ⇒ <code>boolean</code>
    * [.isDateNotUnder18Validator](#module_Validators.isDateNotUnder18Validator) ⇒ <code>boolean</code>
    * [.isExpiryDateValidator](#module_Validators.isExpiryDateValidator) ⇒ <code>boolean</code>
    * [.isReleaseDateValidator](#module_Validators.isReleaseDateValidator) ⇒ <code>boolean</code>
    * [.isIdNumberValidator](#module_Validators.isIdNumberValidator) ⇒ <code>boolean</code>
    * [.isPassportValidator](#module_Validators.isPassportValidator) ⇒ <code>boolean</code>
    * [.isBirthDateValidator](#module_Validators.isBirthDateValidator) ⇒ <code>boolean</code>
    * [.isAfterTodayValidator](#module_Validators.isAfterTodayValidator) ⇒ <code>boolean</code>
    * [.isBeforeTodayValidator](#module_Validators.isBeforeTodayValidator) ⇒ <code>boolean</code>
    * [.isPropValidator](#module_Validators.isPropValidator) ⇒ <code>boolean</code>
    * [.isAllKeysValidator](#module_Validators.isAllKeysValidator) ⇒ <code>boolean</code>
    * [.isLatinValidator](#module_Validators.isLatinValidator) ⇒ <code>boolean</code>

<a name="module_Validators.isValueValidator"></a>

### Validators.isValueValidator ⇒ <code>boolean</code>
<p>Check if any proper value was given</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotNullValidator"></a>

### Validators.isNotNullValidator ⇒ <code>boolean</code>
<p>Check if value is not null</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotUndefinedValidator"></a>

### Validators.isNotUndefinedValidator ⇒ <code>boolean</code>
<p>Check if value is not undefined</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotEmptyUnlessValidator"></a>

### Validators.isNotEmptyUnlessValidator ⇒ <code>boolean</code>
<p>Check if value was given.</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| canBeEmpty | <code>boolean</code> | <p>if true validation is ignored</p> |

<a name="module_Validators.isNotEmptyStringValidator"></a>

### Validators.isNotEmptyStringValidator ⇒ <code>boolean</code>
<p>Check if value is not empty string</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_Validators.isNotEmptyTrimmedStringValidator"></a>

### Validators.isNotEmptyTrimmedStringValidator ⇒ <code>boolean</code>
<p>Check if value is not empty string after trim</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSelectedValidator"></a>

### Validators.isSelectedValidator ⇒ <code>boolean</code>
<p>Check if any option was chosen. Created for select2 library</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>boolean</code> | <p>value to check.</p> |

<a name="module_Validators.isValidBankTitleValidator"></a>

### Validators.isValidBankTitleValidator ⇒ <code>boolean</code>
<p>Check if value is valid bank title</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isNipValidator"></a>

### Validators.isNipValidator ⇒ <code>boolean</code>
<p>Check if value is valid nip number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPostalCodeValidator"></a>

### Validators.isPostalCodeValidator ⇒ <code>boolean</code>
<p>Check if value is valid polish or chinese postal code</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| country | <code>string</code> | <p>country of postal code.</p> |

<a name="module_Validators.isPasswordValidator"></a>

### Validators.isPasswordValidator ⇒ <code>boolean</code>
<p>Check if value is valid password with 8 signs</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isNotSmallerValidator"></a>

### Validators.isNotSmallerValidator ⇒ <code>boolean</code>
<p>Check if value is smaller than given minimal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_Validators.isNotSmallerOrEqualValidator"></a>

### Validators.isNotSmallerOrEqualValidator ⇒ <code>boolean</code>
<p>Check if value is smaller or equal than given minimal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_Validators.isNotHigherValidator"></a>

### Validators.isNotHigherValidator ⇒ <code>boolean</code>
<p>Check if value is higher than given maximal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_Validators.isNotHigherOrEqualValidator"></a>

### Validators.isNotHigherOrEqualValidator ⇒ <code>boolean</code>
<p>Check if value is higher or equal than given maximal value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_Validators.isEmailValidator"></a>

### Validators.isEmailValidator ⇒ <code>boolean</code>
<p>Check if value is valid email. Based on w3.org</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isMinLengthValidator"></a>

### Validators.isMinLengthValidator ⇒ <code>boolean</code>
<p>Check if value has smaller or equal length than given minimal length</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minLength | <code>string</code> | <p>minimal length.</p> |

<a name="module_Validators.isMaxLengthValidator"></a>

### Validators.isMaxLengthValidator ⇒ <code>boolean</code>
<p>Check if value has bigger or equal length than given maximal length</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxLength | <code>string</code> | <p>maximal length.</p> |

<a name="module_Validators.isPhoneValidator"></a>

### Validators.isPhoneValidator ⇒ <code>boolean</code>
<p>Check if value is valid phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isMobilePhoneValidator"></a>

### Validators.isMobilePhoneValidator ⇒ <code>boolean</code>
<p>Check if value is valid mobile phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isSameAsValidator"></a>

### Validators.isSameAsValidator ⇒ <code>boolean</code>
<p>Check if value is equal to other value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_Validators.isOtherThanValidator"></a>

### Validators.isOtherThanValidator ⇒ <code>boolean</code>
<p>Check if value is not equal to other value</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_Validators.isIbanValidator"></a>

### Validators.isIbanValidator ⇒ <code>boolean</code>
<p>Check if value is valid iban number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Validators.isLanNumberValidator"></a>

### Validators.isLanNumberValidator ⇒ <code>boolean</code>
<p>Check if value is valid non-iban account number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSwiftValidator"></a>

### Validators.isSwiftValidator ⇒ <code>boolean</code>
<p>Check if value is valid swift number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isSwiftCountryValidator"></a>

### Validators.isSwiftCountryValidator ⇒ <code>boolean</code>
<p>Check if given country is equal to country taken from swift</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| swift | <code>string</code> | <p>swift to check.</p> |
| country | <code>string</code> | <p>country to compare.</p> |

<a name="module_Validators.isPeselValidator"></a>

### Validators.isPeselValidator ⇒ <code>boolean</code>
<p>Check if value is valid pesel number. Also accepts *********** as anonymized pesel</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPeselNotUnder18Validator"></a>

### Validators.isPeselNotUnder18Validator ⇒ <code>boolean</code>
<p>Check if person with given pesel is above 18 years</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isDateValidator"></a>

### Validators.isDateValidator ⇒ <code>boolean</code>
<p>Check if value is valid date in format YYYY-MM-DD. Validates also correct number of days per month</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isDateNotUnder18Validator"></a>

### Validators.isDateNotUnder18Validator ⇒ <code>boolean</code>
<p>Check if person with given birthday is above 18 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isExpiryDateValidator"></a>

### Validators.isExpiryDateValidator ⇒ <code>boolean</code>
<p>Check if given expiration date of id card is valid. Checks if given date is later or equal to today and
if given date is smaller than current date plus 100 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isReleaseDateValidator"></a>

### Validators.isReleaseDateValidator ⇒ <code>boolean</code>
<p>Check if given release date of id card is valid. Checks if given date is earlier or equal to today and
if given date is bigger than current date minus 100 years. You can also pass expiration date and if it's given
then it is checked if expiration date is later than release date. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |
| expiryDate | <code>string</code> | <p>acc.</p> |

<a name="module_Validators.isIdNumberValidator"></a>

### Validators.isIdNumberValidator ⇒ <code>boolean</code>
<p>Check if value is valid polish id number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPassportValidator"></a>

### Validators.isPassportValidator ⇒ <code>boolean</code>
<p>Check if value is valid polish passport number</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isBirthDateValidator"></a>

### Validators.isBirthDateValidator ⇒ <code>boolean</code>
<p>Check if value is valid birth date. Assumes that human cannot be older than 150 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isAfterTodayValidator"></a>

### Validators.isAfterTodayValidator ⇒ <code>boolean</code>
<p>Check if given date is after today. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isBeforeTodayValidator"></a>

### Validators.isBeforeTodayValidator ⇒ <code>boolean</code>
<p>Check if given date is before today. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Validators.isPropValidator"></a>

### Validators.isPropValidator ⇒ <code>boolean</code>
<p>Check if given object has property valid and if it is equal to true</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | <p>value to check.</p> |

<a name="module_Validators.isAllKeysValidator"></a>

### Validators.isAllKeysValidator ⇒ <code>boolean</code>
<p>Check if given object has all keys</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | <p>value to check.</p> |
| expectedKeys | <code>Array.&lt;string&gt;</code> | <p>array of expected keys.</p> |

<a name="module_Validators.isLatinValidator"></a>

### Validators.isLatinValidator ⇒ <code>boolean</code>
<p>Check if value has not any cyrillic letters</p>

**Kind**: static property of [<code>Validators</code>](#module_Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

